import { mkdir } from "node:fs/promises";
import { chromium, webkit } from "playwright";

const baseUrl = process.env.WEDDING_STUDIO_URL ?? "http://127.0.0.1:5173";
const pageNames = ["home", "story", "events", "details", "gallery"];
const captureScreenshots = process.env.WEDDING_AUDIT_SCREENSHOTS !== "0";
const outputDirectory = "/tmp/indian-wedding-visual-audit";
await mkdir(outputDirectory, { recursive: true });

const browserType = process.env.WEDDING_AUDIT_ENGINE === "webkit" ? webkit : chromium;
const browser = await browserType.launch({ headless: true });
const errors = [];

function watch(page, label) {
  page.on("pageerror", (error) => errors.push(`${label}: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("Failed to load resource")) {
      errors.push(`${label}: ${message.text()}`);
    }
  });
}

async function metrics(page) {
  return page.evaluate(() => {
    const heading = document.querySelector("h1");
    const style = heading ? getComputedStyle(heading) : null;
    const lineHeight = style ? Number.parseFloat(style.lineHeight) : 0;
    const headingHeight = heading?.getBoundingClientRect().height ?? 0;
    return {
      title: document.title,
      heading: heading?.textContent?.replace(/\s+/g, " ").trim() ?? "",
      estimatedHeadingLines: lineHeight ? Math.round(headingHeight / lineHeight) : null,
      horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      pageHeight: document.documentElement.scrollHeight,
      hasMain: Boolean(document.querySelector("main")),
    };
  });
}

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
watch(desktop, "desktop");
await desktop.goto(baseUrl, { waitUntil: "domcontentloaded" });
await desktop.waitForSelector(".template-row");
if (captureScreenshots) {
  await desktop.waitForTimeout(1800);
  await desktop.screenshot({ path: `${outputDirectory}/landing-desktop.png` });
}

const landing = await desktop.evaluate(() => {
  const links = Array.from(document.querySelectorAll('a[href^="/templates/"]'));
  const featuredRoutes = Array.from(document.querySelectorAll(".template-row")).map(
    (row) => row.querySelector('a[href^="/templates/"]')?.getAttribute("href"),
  );
  return {
    templateCount: document.querySelectorAll(".template-row").length,
    schemaLinkCount: links.length,
    routes: [...new Set(links.map((link) => link.getAttribute("href")).filter(Boolean))],
    featuredRoutes: featuredRoutes.filter(Boolean),
  };
});

await desktop.locator(".template-row").first().scrollIntoViewIfNeeded();
if (captureScreenshots) {
  await desktop.waitForTimeout(600);
  await desktop.screenshot({ path: `${outputDirectory}/landing-collection.png` });
}

const desktopReports = [];
const multipageLinkCounts = [];
for (const [index, route] of landing.featuredRoutes.entries()) {
  await desktop.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
  await desktop.waitForSelector("main");
  await desktop.waitForTimeout(captureScreenshots ? 1800 : 80);
  desktopReports.push({ route, ...(await metrics(desktop)) });
  multipageLinkCounts.push({
    route,
    links: await desktop.locator('nav a[href^="/templates/"]').evaluateAll((links) =>
      new Set(links.map((link) => link.getAttribute("href"))).size,
    ),
  });
  if (captureScreenshots) {
    await desktop.screenshot({ path: `${outputDirectory}/template-${index + 1}-desktop.png` });
    await desktop.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight * 0.48));
    await desktop.waitForTimeout(800);
    await desktop.screenshot({ path: `${outputDirectory}/template-${index + 1}-mid.png` });
  }
}

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
watch(mobile, "mobile");
const mobileReports = [];
for (const [index, route] of landing.featuredRoutes.entries()) {
  await mobile.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
  await mobile.waitForSelector("main");
  await mobile.waitForTimeout(captureScreenshots ? 1400 : 80);
  mobileReports.push({ route, ...(await metrics(mobile)) });
  if (captureScreenshots) {
    await mobile.screenshot({ path: `${outputDirectory}/template-${index + 1}-mobile.png` });
  }
}

const sweep = await browser.newPage({ viewport: { width: 1024, height: 768 } });
watch(sweep, "schema-sweep");
await sweep.route("**/*", (route) =>
  route.request().url().startsWith(baseUrl) ? route.continue() : route.abort(),
);
const failedRoutes = [];
const multipageRoutes = landing.routes.flatMap((route) => {
  const base = route.replace(/\/home$/, "");
  return pageNames.map((page) => `${base}/${page}`);
});
await sweep.goto(baseUrl, { waitUntil: "domcontentloaded" });
for (const route of multipageRoutes) {
  await sweep.evaluate((pathname) => {
    window.history.pushState({}, "", pathname);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }, route);
  await sweep.waitForTimeout(20);
  const state = await sweep.evaluate(() => ({
    hasMain: Boolean(document.querySelector("main")),
    textLength: document.body.innerText.trim().length,
  }));
  if (!state.hasMain || state.textLength < 80) failedRoutes.push(route);
}

await browser.close();

const report = {
  outputDirectory,
  landing,
  multipageLinkCounts,
  desktop: desktopReports,
  mobile: mobileReports,
  failedRoutes,
  errors: [...new Set(errors)],
};

console.log(JSON.stringify(report, null, 2));
if (
  landing.templateCount !== 3 ||
  landing.routes.length !== 60 ||
  multipageRoutes.length !== 300 ||
  multipageLinkCounts.some((entry) => entry.links < 5) ||
  failedRoutes.length ||
  report.errors.length ||
  [...desktopReports, ...mobileReports].some((entry) => entry.horizontalOverflow > 1 || !entry.hasMain)
) {
  process.exitCode = 1;
}
