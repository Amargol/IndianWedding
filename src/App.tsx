import { useEffect, useMemo, useState } from "react";
import { weddingExamples } from "../index";
import type { WeddingWebsite } from "../types/WeddingSchema";
import type { TemplateDefinition, WeddingPage } from "./types";
import SaanjhEditorial from "./templates/saanjh-editorial/SaanjhEditorial";
import { styleForWedding } from "./templates/saanjh-editorial/style-presets";
import { appPath, routePath, templatePath } from "./routes";
import "./styles/browser.css";

const templates: TemplateDefinition[] = [
  {
    slug: "saanjh-editorial",
    name: "Saanjh Editorial",
    description:
      "A refined, image-led Indian wedding experience that turns every event, story, and guest detail into one cohesive editorial celebration.",
    component: SaanjhEditorial,
  },
];

const weddingPages: WeddingPage[] = ["home", "story", "events", "details", "gallery"];

type Route =
  | { type: "browser" }
  | { type: "template"; templateSlug: string; weddingId: string; page: WeddingPage }
  | { type: "not-found" };

function parseRoute(pathname: string): Route {
  const segments = routePath(pathname).split("/").filter(Boolean).map(decodeURIComponent);
  if (!segments.length) return { type: "browser" };
  if (segments[0] === "templates" && (segments.length === 3 || segments.length === 4)) {
    const page = segments[3] ?? "home";
    if (weddingPages.includes(page as WeddingPage)) {
      return {
        type: "template",
        templateSlug: segments[1],
        weddingId: segments[2],
        page: page as WeddingPage,
      };
    }
  }
  return { type: "not-found" };
}

function coupleLabel(wedding: WeddingWebsite) {
  return `${wedding.couple.partnerOne} & ${wedding.couple.partnerTwo}`;
}

function BrowserPage() {
  const template = templates[0];
  return (
    <main className="template-browser" id="top">
      <header className="browser-header">
        <a className="browser-brand" href="#top" aria-label="Vivaah home">
          <span>V</span> Vivaah
        </a>

        <div className="browser-heading">
          <p className="browser-eyebrow">One considered foundation</p>
          <h1>One exceptional template.<br />Every wedding becomes its own.</h1>
          <p>Saanjh Editorial is built directly from the wedding schema, adapting its five pages to each couple’s events, imagery, story, and guest information.</p>
        </div>

        <dl className="browser-facts" aria-label="Collection summary">
          <div>
            <dt>Template</dt>
            <dd>01</dd>
          </div>
          <div>
            <dt>Weddings</dt>
            <dd>{weddingExamples.length}</dd>
          </div>
          <div>
            <dt>Live pages</dt>
            <dd>{templates.length * weddingExamples.length * weddingPages.length}</dd>
          </div>
        </dl>
      </header>

      <section className="template-showcase" aria-label="Saanjh Editorial examples">
        <div className="template-summary">
          <p>THE TEMPLATE · 01</p>
          <h2>{template.name}</h2>
          <p>{template.description}</p>
          <a href={templatePath(template.slug, weddingExamples[0].id, "home")}>Open featured wedding <span>↗</span></a>
        </div>

        <div className="template-examples">
          <div className="template-examples__heading">
            <h3>Choose a wedding</h3>
            <span>{weddingExamples.length} schema-driven examples</span>
          </div>
          <div className="template-examples__grid">
            {weddingExamples.map((wedding, index) => (
              <a
                href={templatePath(template.slug, wedding.id, "home")}
                key={wedding.id}
                style={{
                  "--example-primary": styleForWedding(wedding).primary,
                  "--example-accent": styleForWedding(wedding).accent,
                } as React.CSSProperties}
              >
                <span className="example-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="example-couple">{coupleLabel(wedding)}</span>
                <small>{wedding.couple.location ?? "Wedding celebration"}</small>
                <span className="example-style"><i /><i />{styleForWedding(wedding).name}</span>
                <b>↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function TemplatePage({
  template,
  wedding,
  page,
}: {
  template: TemplateDefinition;
  wedding: WeddingWebsite;
  page: WeddingPage;
}) {
  const Template = template.component;

  useEffect(() => {
    document.title = `${coupleLabel(wedding)} - ${template.name} - ${page}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = "Vivaah - Indian Wedding Template Studio";
    };
  }, [page, template.name, wedding]);

  return (
    <>
      <a className="studio-return" href={appPath()} aria-label="Return to all wedding examples">
        <span aria-hidden="true">←</span> All weddings
      </a>
      <Template wedding={wedding} page={page} />
    </>
  );
}

function NotFound() {
  return (
    <main className="browser-not-found">
      <p>This invitation could not be found.</p>
      <h1>The celebration is elsewhere.</h1>
      <a href={appPath()}>Return to all templates</a>
    </main>
  );
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const route = useMemo(() => parseRoute(pathname), [pathname]);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  if (route.type === "browser") return <BrowserPage />;
  if (route.type === "template") {
    const template = templates.find((item) => item.slug === route.templateSlug);
    const wedding = weddingExamples.find((item) => item.id === route.weddingId);
    if (template && wedding) {
      return <TemplatePage template={template} wedding={wedding} page={route.page} />;
    }
  }
  return <NotFound />;
}
