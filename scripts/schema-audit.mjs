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
  const templateModules = await Promise.all([
    vite.ssrLoadModule("/src/templates/mehndi-garden/MehndiGarden.tsx"),
    vite.ssrLoadModule("/src/templates/sangeet-noir/SangeetNoir.tsx"),
    vite.ssrLoadModule("/src/templates/palace-ledger/PalaceLedger.tsx"),
    vite.ssrLoadModule("/src/templates/coastal-mandap/CoastalMandap.tsx"),
    vite.ssrLoadModule("/src/templates/silk-and-sacred/SilkAndSacred.tsx"),
  ]);

  const templates = templateModules.map((module) => module.default);
  const failures = [];
  let combinations = 0;

  for (const Template of templates) {
    for (const wedding of weddingExamples) {
      try {
        const html = renderToStaticMarkup(React.createElement(Template, { wedding }));
        combinations += 1;
        if (html.length < 500 || !html.includes(wedding.couple.partnerOne)) {
          failures.push(`${Template.name}/${wedding.id}: incomplete render`);
        }
      } catch (error) {
        failures.push(`${Template.name}/${wedding.id}: ${error.message}`);
      }
    }
  }

  console.log(
    JSON.stringify(
      {
        templates: templates.length,
        schemas: weddingExamples.length,
        combinations,
        failures,
      },
      null,
      2,
    ),
  );

  if (templates.length !== 5 || weddingExamples.length !== 20 || combinations !== 100 || failures.length) {
    process.exitCode = 1;
  }
} finally {
  await vite.close();
}
