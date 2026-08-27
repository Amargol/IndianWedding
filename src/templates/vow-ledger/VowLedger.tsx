import { useMemo, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type {
  WeddingEvent,
  WeddingImage,
  WeddingInformation,
} from "../../../types/WeddingSchema";
import type { TemplateProps, WeddingPage } from "../../types";
import "./vow-ledger.css";

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_IMAGES = [
  "https://picsum.photos/seed/editorial-indian-wedding/1800/2200",
  "https://picsum.photos/seed/heirloom-wedding-portrait/1800/2200",
  "https://picsum.photos/seed/indian-wedding-textile/1800/2200",
  "https://picsum.photos/seed/wedding-dinner-candlelight/1800/2200",
  "https://picsum.photos/seed/heritage-wedding-architecture/1800/2200",
  "https://picsum.photos/seed/wedding-flowers-film/1800/2200",
];

const PAGE_LABELS: Array<{ page: WeddingPage; label: string }> = [
  { page: "home", label: "Front page" },
  { page: "story", label: "Our story" },
  { page: "events", label: "The itinerary" },
  { page: "details", label: "Guest desk" },
  { page: "gallery", label: "Photo folio" },
];

const FALLBACK_EVENT: WeddingEvent = {
  id: "celebration-forthcoming",
  type: "ceremony",
  name: "The wedding celebration",
  description:
    "The final time and place will be printed here as soon as every detail is set.",
  date: "",
};

const FALLBACK_STORY: WeddingInformation = {
  id: "a-story-in-progress",
  type: "our-story",
  name: "A story still being written",
  description:
    "Two lives, many chapters, and one very good reason to gather. More of our story will appear here soon.",
};

const FALLBACK_DETAILS: WeddingInformation[] = [
  {
    id: "travel-note",
    type: "travel",
    name: "Making the journey",
    description: "Travel recommendations and arrival notes will be shared here.",
  },
  {
    id: "stay-note",
    type: "accommodations",
    name: "Where to stay",
    description: "Our preferred hotels and booking information are coming soon.",
  },
  {
    id: "wardrobe-note",
    type: "dress-code",
    name: "What to wear",
    description: "Dress notes for each celebration will be published with the itinerary.",
  },
];

function clean(value?: string) {
  return value?.trim() ?? "";
}

function safeUrl(value?: string) {
  if (!value) return undefined;
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:"
      ? parsed.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

function parseDate(value?: string) {
  if (!value) return null;
  const parsed = new Date(value.includes("T") ? value : `${value}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function longDate(value?: string) {
  const parsed = parseDate(value);
  if (!parsed) return clean(value) || "Date to be announced";
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

function shortDate(value?: string) {
  const parsed = parseDate(value);
  if (!parsed) return clean(value) || "To be dated";
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
  }).format(parsed);
}

function formatTime(value?: string) {
  if (!value) return "Time to follow";
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return value;
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2000, 0, 1, hours, minutes));
}

function titleCase(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function indexLabel(index: number) {
  return String(index + 1).padStart(2, "0");
}

function VowMedia({
  image,
  fallbackIndex,
  alt,
  eager = false,
}: {
  image?: WeddingImage;
  fallbackIndex: number;
  alt: string;
  eager?: boolean;
}) {
  const source = safeUrl(image?.url) ?? FALLBACK_IMAGES[fallbackIndex % FALLBACK_IMAGES.length];
  return (
    <img
      src={source}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
    />
  );
}

function RevealLine({ children }: { children: string }) {
  return (
    <span className="vl-word-line" aria-label={children}>
      {children.split(/\s+/).map((word, index) => (
        <span className="vl-word" aria-hidden="true" key={`${word}-${index}`}>
          {word}{" "}
        </span>
      ))}
    </span>
  );
}

function PageIntro({
  eyebrow,
  title,
  summary,
  issue,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  issue: string;
}) {
  return (
    <header className="vl-page-intro">
      <div className="vl-page-intro__folio vl-reveal">
        <span>{eyebrow}</span>
        <span>{issue}</span>
      </div>
      <h1 className="vl-reveal">{title}</h1>
      <p className="vl-page-intro__summary vl-reveal">{summary}</p>
    </header>
  );
}

function ItemLink({ url, children }: { url?: string; children: ReactNode }) {
  const href = safeUrl(url);
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <span>{children}</span>
  );
}

export default function VowLedger({ wedding, page }: TemplateProps) {
  const root = useRef<HTMLElement>(null);
  const partnerOne = clean(wedding.couple?.partnerOne) || "One";
  const partnerTwo = clean(wedding.couple?.partnerTwo) || "Another";
  const coupleName = `${partnerOne} & ${partnerTwo}`;
  const weddingId = encodeURIComponent(clean(wedding.id) || "celebration");
  const basePath = `/templates/vow-ledger/${weddingId}`;
  const location = clean(wedding.couple?.location) || "A place close to our hearts";
  const siteTitle = clean(wedding.settings?.title) || coupleName;

  const images = useMemo(
    () =>
      (wedding.images ?? []).filter(
        (image): image is WeddingImage => Boolean(image && safeUrl(image.url)),
      ),
    [wedding.images],
  );
  const imageMap = useMemo(
    () => new Map(images.map((image) => [image.id, image])),
    [images],
  );
  const events = useMemo(() => {
    const sorted = [...(wedding.events ?? [])].sort(
      (a, b) =>
        (a.order ?? Number.MAX_SAFE_INTEGER) -
          (b.order ?? Number.MAX_SAFE_INTEGER) ||
        clean(a.date).localeCompare(clean(b.date)),
    );
    return sorted.length ? sorted : [FALLBACK_EVENT];
  }, [wedding.events]);
  const information = useMemo(
    () =>
      [...(wedding.information ?? [])].sort(
        (a, b) =>
          (a.order ?? Number.MAX_SAFE_INTEGER) -
          (b.order ?? Number.MAX_SAFE_INTEGER),
      ),
    [wedding.information],
  );

  const imageFor = (ids?: string[], fallbackIndex = 0) =>
    ids?.map((id) => imageMap.get(id)).find(Boolean) ??
    images[fallbackIndex % Math.max(images.length, 1)];

  const storySections = information.filter((section) =>
    ["our-story", "families", "wedding-party", "traditions"].includes(
      section.type,
    ),
  );
  const stories = storySections.length ? storySections : [FALLBACK_STORY];
  const detailSections = information.filter(
    (section) =>
      !["our-story", "families", "wedding-party", "traditions", "gallery"].includes(
        section.type,
      ),
  );
  const details = detailSections.length ? detailSections : FALLBACK_DETAILS;
  const gallery = images.length
    ? images
    : FALLBACK_IMAGES.map((url, index) => ({
        id: `vow-ledger-fallback-${index}`,
        url,
        description: "A celebration remembered in photographs",
      }));
  const heroImage =
    imageFor(stories.find((story) => story.type === "our-story")?.imageIds, 0) ??
    gallery[0];
  const mapUrl = events.map((event) => safeUrl(event.venue?.mapUrl)).find(Boolean);
  const nameLength = Math.max(partnerOne.length, partnerTwo.length);
  const rootStyle = {
    "--vl-hero-size": `${Math.max(3.25, Math.min(6.8, 91 / Math.max(nameLength, 10)))}rem`,
  } as CSSProperties;

  useGSAP(
    () => {
      if (!root.current || typeof window === "undefined") return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) {
        gsap.set(".vl-reveal, .vl-word, .vl-motion-image", {
          clearProps: "all",
          opacity: 1,
          scale: 1,
        });
        return;
      }

      const media = gsap.matchMedia();
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".vl-nav", { y: -22, opacity: 0, duration: 0.72 })
        .from(
          ".vl-hero__edition, .vl-hero__title-line, .vl-hero__dek, .vl-hero__actions",
          { y: 42, opacity: 0, duration: 0.88, stagger: 0.08 },
          "-=0.35",
        )
        .from(
          ".vl-hero__media",
          { clipPath: "inset(0 0 100% 0)", duration: 1.2 },
          "-=0.9",
        );

      gsap.utils.toArray<HTMLElement>(".vl-reveal").forEach((element) => {
        gsap.from(element, {
          y: 42,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".vl-word-line").forEach((line) => {
        const words = line.querySelectorAll(".vl-word");
        gsap.fromTo(
          words,
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.045,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 82%",
              end: "bottom 42%",
              scrub: 1,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".vl-motion-image").forEach((frame) => {
        gsap.fromTo(
          frame,
          { scale: 0.86, opacity: 0.38 },
          {
            keyframes: [
              { scale: 1, opacity: 1, duration: 0.56 },
              { scale: 1.025, opacity: 0.3, duration: 0.44 },
            ],
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top 94%",
              end: "bottom 5%",
              scrub: 1,
            },
          },
        );
      });

      media.add("(min-width: 960px)", () => {
        const indexSection = root.current?.querySelector<HTMLElement>(
          ".vl-index-layout",
        );
        const indexRail = root.current?.querySelector<HTMLElement>(
          ".vl-index-layout__rail",
        );
        if (!indexSection || !indexRail) return;
        ScrollTrigger.create({
          trigger: indexSection,
          start: "top top+=110",
          end: "bottom bottom-=130",
          pin: indexRail,
          pinSpacing: false,
        });
      });

      return () => media.revert();
    },
    { scope: root, dependencies: [page, wedding.id], revertOnUpdate: true },
  );

  const renderHome = () => (
    <>
      <header className="vl-hero">
        <div className="vl-hero__copy">
          <div className="vl-hero__edition">
            <span>The wedding edition</span>
            <time dateTime={clean(wedding.couple?.date)}>{longDate(wedding.couple?.date)}</time>
          </div>
          <h1 aria-label={coupleName}>
            <span className="vl-hero__title-line">{partnerOne}</span>
            <span className="vl-hero__joining">and</span>
            <span className="vl-hero__title-line vl-hero__title-line--accent">{partnerTwo}</span>
          </h1>
          <p className="vl-hero__dek">
            An invitation to witness a new chapter, celebrated with our favourite
            people in {location}.
          </p>
          <div className="vl-hero__actions">
            <a className="vl-button vl-button--ink" href={`${basePath}/events`}>
              Read the itinerary
            </a>
            <a className="vl-text-link" href={`${basePath}/story`}>
              Begin with our story <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <figure className="vl-hero__media">
          <div className="vl-hero__image vl-motion-image">
            <VowMedia image={heroImage} fallbackIndex={0} alt={heroImage?.description || coupleName} eager />
          </div>
          <figcaption>
            <span>Portrait for the wedding edition</span>
            <span>{location}</span>
          </figcaption>
        </figure>
      </header>

      <section className="vl-home-note" aria-labelledby="vl-home-note-title">
        <p className="vl-home-note__aside vl-reveal">A note from us</p>
        <h2 id="vl-home-note-title">
          <RevealLine children={`The best stories are kept by the people who lived them with us.`} />
        </h2>
        <p className="vl-home-note__copy vl-reveal">
          Join us for a gathering shaped by family, ritual, long tables and an
          evening we hope none of us will forget.
        </p>
      </section>

      <section className="vl-index-layout vl-home-index" aria-labelledby="vl-home-index-title">
        <aside className="vl-index-layout__rail">
          <p>Inside this edition</p>
          <h2 id="vl-home-index-title">The weekend, in brief.</h2>
          <a href={`${basePath}/events`}>Open the full itinerary</a>
        </aside>
        <div className="vl-home-index__entries">
          {events.slice(0, 3).map((event, index) => (
            <a className="vl-home-entry vl-reveal" href={`${basePath}/events`} key={event.id}>
              <span className="vl-home-entry__number">{indexLabel(index)}</span>
              <div>
                <p>{shortDate(event.date)} · {formatTime(event.startTime)}</p>
                <h3>{clean(event.name) || titleCase(event.type)}</h3>
                <span>{clean(event.venue?.name) || "Venue to be announced"}</span>
              </div>
              <span className="vl-home-entry__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="vl-home-folio">
        <div className="vl-home-folio__image vl-motion-image">
          <VowMedia image={gallery[1]} fallbackIndex={1} alt={gallery[1]?.description || "Wedding detail"} />
        </div>
        <div className="vl-home-folio__copy vl-reveal">
          <p>Collected for our guests</p>
          <h2>Everything worth knowing, thoughtfully edited.</h2>
          <p>
            What to wear, where to stay and how to arrive—kept together in one
            practical guest edition.
          </p>
          <a className="vl-button vl-button--oxblood" href={`${basePath}/details`}>
            Visit the guest desk
          </a>
        </div>
      </section>
    </>
  );

  const renderStory = () => (
    <>
      <PageIntro
        eyebrow="The long read"
        issue="Love, in chapters"
        title="Every beginning leaves a paper trail."
        summary={`The people, places and small decisions that brought ${partnerOne} and ${partnerTwo} to this day.`}
      />
      <section className="vl-index-layout vl-story" aria-label="Our story chapters">
        <aside className="vl-index-layout__rail">
          <p>In this feature</p>
          <ol>
            {stories.map((story, index) => (
              <li key={story.id}>
                <a href={`#vl-story-${index}`}>{indexLabel(index)} {clean(story.name) || titleCase(story.type)}</a>
              </li>
            ))}
          </ol>
        </aside>
        <div className="vl-story__chapters">
          {stories.map((story, index) => {
            const storyImage = imageFor(story.imageIds, index + 1);
            return (
              <article className="vl-story-chapter" id={`vl-story-${index}`} key={story.id}>
                <header className="vl-reveal">
                  <span>{indexLabel(index)}</span>
                  <p>{titleCase(story.type)}</p>
                </header>
                <h2 className="vl-reveal">{clean(story.name) || titleCase(story.type)}</h2>
                <p className="vl-story-chapter__lead vl-reveal">
                  {clean(story.description) || FALLBACK_STORY.description}
                </p>
                <figure className="vl-story-chapter__media vl-motion-image">
                  <VowMedia image={storyImage} fallbackIndex={index + 1} alt={storyImage?.description || story.name} />
                  <figcaption>A moment from the archive</figcaption>
                </figure>
                {story.items?.length ? (
                  <div className="vl-story-chapter__notes">
                    {story.items.map((item) => (
                      <div className="vl-reveal" key={item.id}>
                        <h3>{item.name}</h3>
                        {item.description && <p>{item.description}</p>}
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>
      <blockquote className="vl-pullquote">
        <RevealLine children="Somewhere between the first hello and the forever after, we found home in one another." />
      </blockquote>
      <section className="vl-archive-rail" aria-label="Wedding image archive">
        {gallery.slice(0, 5).map((image, index) => (
          <figure key={image.id}>
            <VowMedia image={image} fallbackIndex={index} alt={image.description || "Wedding archive"} />
            <figcaption>{image.description || `Archive photograph ${indexLabel(index)}`}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );

  const renderEvents = () => (
    <>
      <PageIntro
        eyebrow="The itinerary"
        issue={longDate(wedding.couple?.date)}
        title="Plans for a very good gathering."
        summary={`The complete running order for our celebration in ${location}, from the first welcome to the final farewell.`}
      />
      <section className="vl-event-ledger" aria-label="Wedding event itinerary">
        <div className="vl-event-ledger__head" aria-hidden="true">
          <span>Date</span><span>Celebration</span><span>Place and notes</span>
        </div>
        {events.map((event, index) => {
          const eventImage = imageFor(event.imageIds, index);
          const eventMap = safeUrl(event.venue?.mapUrl);
          return (
            <article className="vl-event-row vl-reveal" key={event.id}>
              <div className="vl-event-row__date">
                <span>{indexLabel(index)}</span>
                <time dateTime={clean(event.date)}>{shortDate(event.date)}</time>
                <p>{formatTime(event.startTime)}{event.endTime ? ` — ${formatTime(event.endTime)}` : ""}</p>
              </div>
              <div className="vl-event-row__title">
                <p>{titleCase(event.type)}</p>
                <h2>{clean(event.name) || "Wedding celebration"}</h2>
                {event.description && <p>{event.description}</p>}
              </div>
              <div className="vl-event-row__place">
                <div className="vl-event-row__thumb">
                  <VowMedia image={eventImage} fallbackIndex={index} alt="" />
                </div>
                <strong>{clean(event.venue?.name) || "Venue to be announced"}</strong>
                {event.venue?.address && <address>{event.venue.address}</address>}
                {event.dressCode && <p>Dress: {event.dressCode}</p>}
                {event.transportation && <p>{event.transportation}</p>}
                {eventMap && <a href={eventMap} target="_blank" rel="noreferrer">Open map <span aria-hidden="true">↗</span></a>}
              </div>
            </article>
          );
        })}
      </section>
      <section className="vl-event-cta">
        <div className="vl-event-cta__media vl-motion-image">
          <VowMedia image={gallery[3]} fallbackIndex={3} alt={gallery[3]?.description || "Wedding table set for guests"} />
        </div>
        <div className="vl-event-cta__copy vl-reveal">
          <p>Keep this page close</p>
          <h2>Times may shift. The reason for gathering will not.</h2>
          {mapUrl ? (
            <a className="vl-button vl-button--paper" href={mapUrl} target="_blank" rel="noreferrer">Open the first venue map</a>
          ) : (
            <a className="vl-button vl-button--paper" href={`${basePath}/details`}>Read the guest notes</a>
          )}
        </div>
      </section>
    </>
  );

  const renderDetails = () => (
    <>
      <PageIntro
        eyebrow="The guest desk"
        issue="Practical notes"
        title="Arrive informed. Leave delighted."
        summary="A concise edit of travel, stays, wardrobe and the questions worth answering before the celebrations begin."
      />
      <section className="vl-details-layout">
        <aside className="vl-details-layout__intro vl-reveal">
          <p>Filed for reference</p>
          <h2>Everything in its proper place.</h2>
          <span>Updated as plans are confirmed.</span>
        </aside>
        <div className="vl-accordion">
          {details.map((section, index) => (
            <details className="vl-accordion__item vl-reveal" key={section.id} open={index === 0}>
              <summary>
                <span>{indexLabel(index)}</span>
                <strong>{clean(section.name) || titleCase(section.type)}</strong>
                <i aria-hidden="true" />
              </summary>
              <div className="vl-accordion__body">
                <p>{clean(section.description) || "Further details will be shared with our guests soon."}</p>
                {section.items?.length ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <ItemLink url={item.url}>{item.name}</ItemLink>
                        {item.description && <p>{item.description}</p>}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="vl-details-stamp">
        <div className="vl-details-stamp__copy vl-reveal">
          <p>At a glance</p>
          <h2>{location}</h2>
          <time dateTime={clean(wedding.couple?.date)}>{longDate(wedding.couple?.date)}</time>
        </div>
        <div className="vl-details-stamp__image vl-motion-image">
          <VowMedia image={gallery[4]} fallbackIndex={4} alt={gallery[4]?.description || location} />
        </div>
      </section>
    </>
  );

  const renderGallery = () => (
    <>
      <PageIntro
        eyebrow="The photo folio"
        issue={`${gallery.length} frames preserved`}
        title="Proof that the best moments refuse a script."
        summary="Portraits, rituals and everything that happened at the edges—a visual record of the people who made the day ours."
      />
      <section className="vl-gallery-grid" aria-label="Wedding photograph collection">
        {gallery.map((image, index) => (
          <figure className={`vl-gallery-frame vl-gallery-frame--${index % 6} vl-motion-image`} key={image.id}>
            <VowMedia image={image} fallbackIndex={index} alt={image.description || `Wedding photograph ${index + 1}`} />
            <figcaption>
              <span>{indexLabel(index)}</span>
              <span>{image.description || "From the wedding archive"}</span>
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="vl-gallery-carousel" aria-labelledby="vl-gallery-carousel-title">
        <div className="vl-gallery-carousel__head">
          <h2 id="vl-gallery-carousel-title">Contact sheets</h2>
          <p>Scroll sideways to browse the edit.</p>
        </div>
        <div className="vl-gallery-carousel__track" tabIndex={0}>
          {[...gallery, ...gallery].slice(0, Math.max(6, gallery.length)).map((image, index) => (
            <figure key={`${image.id}-contact-${index}`}>
              <VowMedia image={image} fallbackIndex={index} alt={image.description || "Wedding contact sheet"} />
              <figcaption>{indexLabel(index)}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );

  const pageContent: Record<WeddingPage, () => ReactNode> = {
    home: renderHome,
    story: renderStory,
    events: renderEvents,
    details: renderDetails,
    gallery: renderGallery,
  };

  return (
    <main className={`vow-ledger vow-ledger--${page}`} ref={root} style={rootStyle}>
      <nav className="vl-nav" aria-label={`${coupleName} wedding navigation`}>
        <a className="vl-nav__brand" href={`${basePath}/home`} aria-label={`${siteTitle}, front page`}>
          <span>{partnerOne.charAt(0)}</span>
          <i aria-hidden="true" />
          <span>{partnerTwo.charAt(0)}</span>
        </a>
        <div className="vl-nav__links">
          {PAGE_LABELS.map((item) => (
            <a
              href={`${basePath}/${item.page}`}
              aria-current={page === item.page ? "page" : undefined}
              key={item.page}
            >
              {item.label}
            </a>
          ))}
        </div>
        <p className="vl-nav__place">{location}</p>
      </nav>

      {pageContent[page]?.() ?? renderHome()}

      <footer className="vl-footer">
        <div className="vl-footer__masthead">
          <p>With love, from</p>
          <h2>{partnerOne} <span>&</span> {partnerTwo}</h2>
        </div>
        <div className="vl-footer__links">
          {PAGE_LABELS.map((item) => (
            <a href={`${basePath}/${item.page}`} key={item.page}>{item.label}</a>
          ))}
        </div>
        <div className="vl-footer__colophon">
          <span>{longDate(wedding.couple?.date)}</span>
          <span>{location}</span>
          <span>Printed for the people we love</span>
        </div>
      </footer>
    </main>
  );
}
