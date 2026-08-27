import { useEffect, useMemo, useState } from "react";
import { weddingExamples } from "../index";
import type { WeddingWebsite } from "../types/WeddingSchema";
import type { TemplateDefinition, WeddingPage } from "./types";
import MoonlitCinema from "./templates/moonlit-cinema/MoonlitCinema";
import GulalStudio from "./templates/gulal-studio/GulalStudio";
import VowLedger from "./templates/vow-ledger/VowLedger";
import { appPath, routePath, templatePath } from "./routes";
import "./styles/browser.css";

const templates: TemplateDefinition[] = [
  {
    slug: "moonlit-cinema",
    name: "Moonlit Cinema",
    description:
      "Best for evening weddings, formal receptions, and couples who want a dramatic, cinematic invitation.",
    component: MoonlitCinema,
  },
  {
    slug: "gulal-studio",
    name: "Gulal Studio",
    description:
      "Best for colourful Indian wedding celebrations shaped by marigolds, mehndi tones, layered portraiture, and joyful ritual.",
    component: GulalStudio,
  },
  {
    slug: "vow-ledger",
    name: "Vow Ledger",
    description:
      "Best for classic ceremonies and destination weekends that need a calm, editorial guide to every detail.",
    component: VowLedger,
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
  return (
    <main className="template-browser" id="top">
      <header className="browser-header">
        <a className="browser-brand" href="#top" aria-label="Vivaah home">
          Vivaah
        </a>

        <div className="browser-heading">
          <h1>Wedding website templates</h1>
          <p>Compare each design, then open it with any couple to preview the complete five-page website.</p>
        </div>

        <dl className="browser-facts" aria-label="Collection summary">
          <div>
            <dt>Templates</dt>
            <dd>{templates.length}</dd>
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

      <section className="template-list" aria-label="Template collection">
        {templates.map((template) => (
          <article className="template-row" key={template.slug}>
            <div className="template-summary">
              <h2>{template.name}</h2>
              <p>{template.description}</p>
            </div>

            <div className="template-examples">
              <div className="template-examples__heading">
                <h3>Preview with a couple</h3>
                <span>{weddingExamples.length} examples, scroll horizontally</span>
              </div>
              <div
                className="template-examples__scroller"
                role="region"
                aria-label={`Wedding examples for ${template.name}`}
                tabIndex={0}
              >
                <div className="template-examples__grid">
                  {weddingExamples.map((wedding) => (
                    <a href={templatePath(template.slug, wedding.id, "home")} key={wedding.id}>
                      <span>{coupleLabel(wedding)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
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
      <a className="studio-return" href={appPath()} aria-label="Return to all templates">
        <span aria-hidden="true">←</span> All templates
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
