import { useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { weddingExamples } from "../index";
import type { WeddingWebsite } from "../types/WeddingSchema";
import type { TemplateDefinition } from "./types";
import MehndiGarden from "./templates/mehndi-garden/MehndiGarden";
import SangeetNoir from "./templates/sangeet-noir/SangeetNoir";
import PalaceLedger from "./templates/palace-ledger/PalaceLedger";
import CoastalMandap from "./templates/coastal-mandap/CoastalMandap";
import SilkAndSacred from "./templates/silk-and-sacred/SilkAndSacred";
import "./styles/browser.css";

const templates: TemplateDefinition[] = [
  {
    slug: "mehndi-garden",
    name: "Mehndi Garden",
    subtitle: "A sunlit botanical celebration",
    description:
      "Henna greens, turmeric gold and an unfolding garden layout for joyous daytime celebrations.",
    palette: ["#123f2d", "#e1a62d", "#f4ebd8"],
    previewImage: weddingExamples[2]?.images[0]?.url ?? "",
    component: MehndiGarden,
  },
  {
    slug: "sangeet-noir",
    name: "Sangeet Noir",
    subtitle: "After-dark rhythm and revelry",
    description:
      "A kinetic, music-led invitation with cinematic type, saturated light and a stage-like event sequence.",
    palette: ["#09080b", "#ef2968", "#d9ff49"],
    previewImage: weddingExamples[8]?.images[0]?.url ?? "",
    component: SangeetNoir,
  },
  {
    slug: "palace-ledger",
    name: "Palace Ledger",
    subtitle: "An heirloom invitation reimagined",
    description:
      "Rajputana architecture, archival paper and restrained ornament arranged like a beautifully kept family folio.",
    palette: ["#f1e8d4", "#771f2d", "#22334b"],
    previewImage: weddingExamples[0]?.images[0]?.url ?? "",
    component: PalaceLedger,
  },
  {
    slug: "coastal-mandap",
    name: "Coastal Mandap",
    subtitle: "A modern destination weekend",
    description:
      "Salt air, washed cobalt and terracotta meet a panoramic itinerary designed for weddings by the water.",
    palette: ["#e8e5d8", "#155d68", "#d56445"],
    previewImage: weddingExamples[3]?.images[0]?.url ?? "",
    component: CoastalMandap,
  },
  {
    slug: "silk-and-sacred",
    name: "Silk & Sacred",
    subtitle: "Ceremony woven in colour",
    description:
      "A South Indian-inspired composition of temple geometry, silk borders and warm ceremonial light.",
    palette: ["#8c1931", "#efb84d", "#f7efe0"],
    previewImage: weddingExamples[12]?.images[0]?.url ?? "",
    component: SilkAndSacred,
  },
];

type Route =
  | { type: "browser" }
  | { type: "template"; templateSlug: string; weddingId: string }
  | { type: "not-found" };

function parseRoute(pathname: string): Route {
  const segments = pathname.split("/").filter(Boolean).map(decodeURIComponent);
  if (!segments.length) return { type: "browser" };
  if (segments[0] === "templates" && segments.length === 3) {
    return { type: "template", templateSlug: segments[1], weddingId: segments[2] };
  }
  return { type: "not-found" };
}

function formatDate(date: string) {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    year: "numeric",
  }).format(parsed);
}

function coupleLabel(wedding: WeddingWebsite) {
  return `${wedding.couple.partnerOne} & ${wedding.couple.partnerTwo}`;
}

function BrowserPage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".browser-nav", { y: -24, opacity: 0, duration: 0.7 })
        .from(".browser-hero__kicker", { y: 24, opacity: 0, duration: 0.65 }, "-=0.3")
        .from(".browser-hero__line", { yPercent: 110, duration: 1.1, stagger: 0.1 }, "-=0.3")
        .from(".browser-hero__note", { y: 24, opacity: 0, duration: 0.7 }, "-=0.65");

      gsap.utils.toArray<HTMLElement>(".template-row").forEach((row) => {
        const media = row.querySelector(".template-row__media");
        const content = row.querySelector(".template-row__content");
        gsap.from(media, {
          scale: 0.86,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: { trigger: row, start: "top 90%", end: "center 54%", scrub: 1 },
        });
        gsap.from(content, {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 72%", once: true },
        });
      });

      gsap.to(".browser-hero__orb--one", {
        yPercent: 45,
        rotation: 45,
        ease: "none",
        scrollTrigger: { trigger: ".browser-hero", start: "top top", end: "bottom top", scrub: 1.2 },
      });
    },
    { scope: root },
  );

  return (
    <main className="template-browser" ref={root}>
      <nav className="browser-nav" aria-label="Primary navigation">
        <a className="browser-nav__brand" href="#top" aria-label="Vivaah home">
          <span>V</span>
          <b>Vivaah</b>
        </a>
        <div className="browser-nav__center">Indian wedding template studio</div>
        <a className="browser-nav__browse" href="#collections">Browse five editions</a>
      </nav>

      <header className="browser-hero" id="top">
        <div className="browser-hero__orb browser-hero__orb--one" />
        <div className="browser-hero__orb browser-hero__orb--two" />
        <p className="browser-hero__kicker">Five distinct worlds, one meaningful beginning</p>
        <h1>
          <span><i className="browser-hero__line">Your wedding is not</i></span>
          <span><i className="browser-hero__line browser-hero__line--accent">a template-shaped story.</i></span>
        </h1>
        <div className="browser-hero__note">
          <p>
            Explore five art-directed digital invitations, each tested against every wedding schema in the collection.
          </p>
          <a href="#collections">Enter the collection <span aria-hidden="true">↓</span></a>
        </div>
      </header>

      <section className="browser-intro" aria-labelledby="browser-intro-title">
        <p>Designed for the many ways India celebrates</p>
        <h2 id="browser-intro-title">
          Not five colourways. Five entirely different ways to unfold a wedding.
        </h2>
        <div className="browser-intro__facts">
          <span><b>05</b> design systems</span>
          <span><b>{String(weddingExamples.length).padStart(2, "0")}</b> real schemas</span>
          <span><b>{String(templates.length * weddingExamples.length).padStart(3, "0")}</b> live combinations</span>
        </div>
      </section>

      <section className="browser-collection" id="collections" aria-label="Template collection">
        {templates.map((template, templateIndex) => {
          const primaryWedding = weddingExamples[templateIndex % weddingExamples.length];
          return (
            <article className={`template-row template-row--${templateIndex + 1}`} key={template.slug}>
              <div className="template-row__media">
                <img src={template.previewImage} alt="" loading="lazy" />
                <div className="template-row__media-shade" />
                <p>{template.subtitle}</p>
                <a href={`/templates/${template.slug}/${primaryWedding.id}`}>
                  Open featured preview <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="template-row__content">
                <div className="template-row__heading">
                  <span className="template-row__number">0{templateIndex + 1}</span>
                  <div>
                    <h2>{template.name}</h2>
                    <p>{template.description}</p>
                  </div>
                </div>

                <div className="template-row__palette" aria-label={`${template.name} colour palette`}>
                  {template.palette.map((colour) => (
                    <span key={colour} style={{ backgroundColor: colour }} title={colour} />
                  ))}
                </div>

                <div className="schema-list">
                  <p className="schema-list__title">Preview with every couple</p>
                  <div className="schema-list__grid">
                    {weddingExamples.map((wedding) => (
                      <a href={`/templates/${template.slug}/${wedding.id}`} key={wedding.id}>
                        <span>{coupleLabel(wedding)}</span>
                        <small>{formatDate(wedding.couple.date)}</small>
                        <i aria-hidden="true">↗</i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <footer className="browser-footer">
        <p>Choose the world that feels like yours.</p>
        <a href="#collections">Explore all five</a>
        <div><span>Vivaah Template Studio</span><span>Built for celebrations everywhere</span></div>
      </footer>
    </main>
  );
}

function TemplatePage({ template, wedding }: { template: TemplateDefinition; wedding: WeddingWebsite }) {
  const Template = template.component;

  useEffect(() => {
    document.title = `${coupleLabel(wedding)} — ${template.name}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = "Vivaah — Indian Wedding Template Studio";
    };
  }, [template.name, wedding]);

  return (
    <>
      <a className="studio-return" href="/" aria-label="Return to all templates">
        <span aria-hidden="true">←</span> All templates
      </a>
      <Template wedding={wedding} />
    </>
  );
}

function NotFound() {
  return (
    <main className="browser-not-found">
      <p>This invitation could not be found.</p>
      <h1>The celebration is elsewhere.</h1>
      <a href="/">Return to all templates</a>
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
    if (template && wedding) return <TemplatePage template={template} wedding={wedding} />;
  }
  return <NotFound />;
}
