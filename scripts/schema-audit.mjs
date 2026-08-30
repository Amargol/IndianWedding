import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const vite = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const { weddingExamples } = await vite.ssrLoadModule("/index.ts");
  const templateSpecs = await Promise.all(
    [
      ["moonlit-cinema", "/src/templates/moonlit-cinema/MoonlitCinema.tsx"],
      ["gulal-studio", "/src/templates/gulal-studio/GulalStudio.tsx"],
      ["vow-ledger", "/src/templates/vow-ledger/VowLedger.tsx"],
    ].map(async ([slug, modulePath]) => ({
      slug,
      Template: (await vite.ssrLoadModule(modulePath)).default,
    })),
  );
  const pages = ["home", "story", "events", "details", "gallery"];
  const failures = [];
  let combinations = 0;

  for (const { slug, Template } of templateSpecs) {
    for (const wedding of weddingExamples) {
      const renderedPages = new Set();
      for (const page of pages) {
        try {
          const html = renderToStaticMarkup(React.createElement(Template, { wedding, page }));
          combinations += 1;
          renderedPages.add(html);
          if (html.length < 500 || !html.includes(wedding.couple.partnerOne)) {
            failures.push(`${Template.name}/${wedding.id}/${page}: incomplete render`);
          }
          for (const linkedPage of pages) {
            const expectedPath = `/templates/${slug}/${wedding.id}/${linkedPage}`;
            if (!html.includes(expectedPath)) {
              failures.push(`${Template.name}/${wedding.id}/${page}: missing link ${expectedPath}`);
            }
          }
        } catch (error) {
          failures.push(`${Template.name}/${wedding.id}/${page}: ${error.message}`);
        }
      }
      if (renderedPages.size !== pages.length) {
        failures.push(`${Template.name}/${wedding.id}: page renders are not distinct`);
      }
    }
  }

  console.log(
    JSON.stringify(
      {
        templates: templateSpecs.length,
        schemas: weddingExamples.length,
        pages: pages.length,
        combinations,
        failures,
      },
      null,
      2,
    ),
  );

  if (templateSpecs.length !== 3 || weddingExamples.length !== 20 || combinations !== 300 || failures.length) {
    process.exitCode = 1;
  }
} finally {
  await vite.close();
}
