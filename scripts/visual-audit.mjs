import { mkdir } from "node:fs/promises";
import { chromium, webkit } from "playwright";

const baseUrl = process.env.WEDDING_STUDIO_URL ?? "http://127.0.0.1:5173";
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
await desktop.waitForTimeout(1800);
await desktop.screenshot({ path: `${outputDirectory}/landing-desktop.png` });

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
await desktop.waitForTimeout(600);
await desktop.screenshot({ path: `${outputDirectory}/landing-collection.png` });

const desktopReports = [];
for (const [index, route] of landing.featuredRoutes.entries()) {
  await desktop.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
  await desktop.waitForSelector("main");
  await desktop.waitForTimeout(1800);
  desktopReports.push({ route, ...(await metrics(desktop)) });
  await desktop.screenshot({ path: `${outputDirectory}/template-${index + 1}-desktop.png` });
  await desktop.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight * 0.48));
  await desktop.waitForTimeout(800);
  await desktop.screenshot({ path: `${outputDirectory}/template-${index + 1}-mid.png` });
}

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
watch(mobile, "mobile");
const mobileReports = [];
for (const [index, route] of landing.featuredRoutes.entries()) {
  await mobile.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
  await mobile.waitForSelector("main");
  await mobile.waitForTimeout(1400);
  mobileReports.push({ route, ...(await metrics(mobile)) });
  await mobile.screenshot({ path: `${outputDirectory}/template-${index + 1}-mobile.png` });
}

const sweep = await browser.newPage({ viewport: { width: 1024, height: 768 } });
watch(sweep, "schema-sweep");
await sweep.route(/\.(?:avif|gif|jpe?g|png|webp)(?:\?.*)?$/i, (route) => route.abort());
const failedRoutes = [];
for (const route of landing.routes) {
  const response = await sweep.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
  await sweep.waitForTimeout(35);
  const state = await sweep.evaluate(() => ({
    hasMain: Boolean(document.querySelector("main")),
    textLength: document.body.innerText.trim().length,
  }));
  if (!response?.ok() || !state.hasMain || state.textLength < 80) failedRoutes.push(route);
}

await browser.close();

const report = {
  outputDirectory,
  landing,
  desktop: desktopReports,
  mobile: mobileReports,
  failedRoutes,
  errors: [...new Set(errors)],
};

console.log(JSON.stringify(report, null, 2));
if (
  landing.templateCount !== 5 ||
  landing.routes.length !== 100 ||
  failedRoutes.length ||
  report.errors.length ||
  [...desktopReports, ...mobileReports].some((entry) => entry.horizontalOverflow > 1 || !entry.hasMain)
) {
  process.exitCode = 1;
}
