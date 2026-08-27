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
import "./gulal-studio.css";

const FALLBACK_IMAGES: WeddingImage[] = [
  {
    id: "gulal-fallback-one",
    url: "https://picsum.photos/seed/cobalt-gulal-wedding/1600/1200",
    description: "Colour and movement at a wedding celebration",
  },
  {
    id: "gulal-fallback-two",
    url: "https://picsum.photos/seed/marigold-indian-wedding/1600/1200",
    description: "Marigolds at an Indian wedding",
  },
  {
    id: "gulal-fallback-three",
    url: "https://picsum.photos/seed/coral-wedding-dance/1600/1200",
    description: "A joyful wedding dance",
  },
  {
    id: "gulal-fallback-four",
    url: "https://picsum.photos/seed/cream-wedding-textile/1600/1200",
    description: "Indian wedding textiles",
  },
  {
    id: "gulal-fallback-five",
    url: "https://picsum.photos/seed/blue-wedding-night/1600/1200",
    description: "An evening wedding celebration",
  },
  {
    id: "gulal-fallback-six",
    url: "https://picsum.photos/seed/flower-wedding-portrait/1600/1200",
    description: "A portrait framed by flowers",
  },
];

const PAGE_LINKS: { page: WeddingPage; label: string }[] = [
  { page: "home", label: "Home" },
  { page: "story", label: "Our story" },
  { page: "events", label: "Events" },
  { page: "details", label: "Guest notes" },
  { page: "gallery", label: "Gallery" },
];

const clean = (value?: string) => value?.trim() ?? "";

function safeUrl(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

function parseDate(value?: string) {
  if (!value) return null;
  const date = new Date(value.includes("T") ? value : `${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function longDate(value?: string) {
  const date = parseDate(value);
  if (!date) return clean(value) || "Date to be announced";
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function dayDate(value?: string) {
  const date = parseDate(value);
  if (!date) return clean(value) || "Soon";
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).format(date);
}

function clockTime(value?: string) {
  if (!value) return "Time to follow";
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return value;
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2000, 0, 1, hours, minutes));
}

function eventTime(event: WeddingEvent) {
  if (!event.startTime) return "Time to follow";
  const start = clockTime(event.startTime);
  return event.endTime ? `${start} – ${clockTime(event.endTime)}` : start;
}

function sentence(value?: string, fallback = "More details will be shared soon.") {
  return clean(value) || fallback;
}

function titleCase(value?: string) {
  return clean(value)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function pathFor(weddingId: string, page: WeddingPage) {
  return `/templates/gulal-studio/${encodeURIComponent(weddingId)}/${page}`;
}

type PreparedImage = WeddingImage & { url: string };

type PageContext = {
  partnerOne: string;
  partnerTwo: string;
  names: string;
  title: string;
  location: string;
  images: PreparedImage[];
  events: WeddingEvent[];
  information: WeddingInformation[];
  story: WeddingInformation;
  details: WeddingInformation[];
  imageAt: (index: number, ids?: string[]) => PreparedImage;
};

function SectionImage({
  image,
  className = "",
  eager = false,
}: {
  image: PreparedImage;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`gs-image-frame ${className}`.trim()}>
      <img
        className="gs-motion-image"
        src={image.url}
        alt={clean(image.description) || "A moment from the wedding celebration"}
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}

function Nav({
  id,
  page,
  names,
  initials,
}: {
  id: string;
  page: WeddingPage;
  names: string;
  initials: string;
}) {
  return (
    <nav className="gs-nav" aria-label={`${names} wedding navigation`}>
      <a className="gs-nav__mark" href={pathFor(id, "home")} aria-label={`${names}, home`}>
        <span>{initials}</span>
        <i aria-hidden="true" />
      </a>
      <div className="gs-nav__links">
        {PAGE_LINKS.map((link) => (
          <a
            href={pathFor(id, link.page)}
            aria-current={page === link.page ? "page" : undefined}
            key={link.page}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a className="gs-nav__cta" href={pathFor(id, "events")}>Plan the weekend</a>
    </nav>
  );
}

function Footer({ id, names, date }: { id: string; names: string; date?: string }) {
  return (
    <footer className="gs-footer">
      <div className="gs-footer__burst" aria-hidden="true" />
      <div className="gs-footer__message">
        <p>With the blessings of our families</p>
        <h2>Come celebrate every ritual, song and <em>joyful moment.</em></h2>
        <a href={pathFor(id, "events")}>See the whole weekend <span aria-hidden="true">↗</span></a>
      </div>
      <div className="gs-footer__base">
        <span>{names}</span>
        <time dateTime={date}>{longDate(date)}</time>
        <a href={pathFor(id, "home")}>Back to the beginning</a>
      </div>
    </footer>
  );
}

function PageIntro({
  eyebrow,
  title,
  description,
  image,
  variant,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: PreparedImage;
  variant: "story" | "events" | "details" | "gallery";
}) {
  return (
    <header className={`gs-page-intro gs-page-intro--${variant}`}>
      <div className="gs-page-intro__copy gs-paper">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <div className="gs-page-intro__line" aria-hidden="true" />
        <p className="gs-page-intro__description">{description}</p>
      </div>
      <div className="gs-page-intro__collage" aria-hidden="true">
        <SectionImage image={image} eager />
        <span className="gs-page-intro__shape gs-page-intro__shape--one" />
        <span className="gs-page-intro__shape gs-page-intro__shape--two" />
      </div>
    </header>
  );
}

function HomePage({ wedding, data }: { wedding: TemplateProps["wedding"]; data: PageContext }) {
  const featuredEvents = data.events.slice(0, 5);
  const featureNotes = data.information.slice(0, 3);

  return (
    <>
      <header className="gs-hero">
        <div className="gs-hero__copy">
          <p className="gs-hero__eyebrow">With the blessings of our families · {data.location}</p>
          <h1 aria-label={data.names}>
            <span>{data.partnerOne}</span>
            <i>&</i>
            <span>{data.partnerTwo}</span>
          </h1>
          <div className="gs-hero__meta">
            <time dateTime={wedding.couple?.date}>{longDate(wedding.couple?.date)}</time>
            <span>{data.location}</span>
          </div>
          <div className="gs-hero__actions">
            <a className="gs-button gs-button--dark" href={pathFor(wedding.id, "events")}>See the celebrations</a>
            <a className="gs-button gs-button--ink" href={pathFor(wedding.id, "story")}>Read our story</a>
          </div>
        </div>
        <div className="gs-hero__collage">
          <div className="gs-hero__image gs-hero__image--main">
            <SectionImage image={data.imageAt(0)} eager />
          </div>
          <div className="gs-hero__image gs-hero__image--small">
            <SectionImage image={data.imageAt(1)} eager />
          </div>
          <div className="gs-hero__coral" aria-hidden="true" />
          <p>{clean(wedding.settings?.title) || "Rang, rasam & revelry"}</p>
        </div>
        <div className="gs-hero__ticker" aria-hidden="true">
          <span>SHUBH VIVAAH</span><i />
          <span>TOGETHER WITH FAMILY</span><i />
          <span>A CELEBRATION IN FULL COLOUR</span>
        </div>
      </header>

      <section className="gs-manifesto" aria-labelledby="gs-manifesto-title">
        <p className="gs-manifesto__aside gs-paper">An invitation offered with love, gratitude and the blessings of both our families.</p>
        <h2 className="gs-paper" id="gs-manifesto-title">
          We are making it official
          <span
            className="gs-inline-image"
            style={{ backgroundImage: `url("${data.imageAt(2).url}")` }}
            role="img"
            aria-label={data.imageAt(2).description || "Wedding celebration"}
          />
          with music, marigolds and all our favourite people in one place.
        </h2>
      </section>

      <section className="gs-accordion-section" aria-labelledby="gs-weekend-title">
        <div className="gs-section-heading gs-paper">
          <p>Gather for every ritual, feast and song</p>
          <h2 id="gs-weekend-title">The celebrations, in full bloom.</h2>
          <a href={pathFor(wedding.id, "events")}>View full schedule <span aria-hidden="true">→</span></a>
        </div>
        <div className="gs-horizontal-accordion">
          {featuredEvents.map((event, index) => (
            <article className="gs-accordion-card" key={event.id} tabIndex={0}>
              <SectionImage image={data.imageAt(index + 1, event.imageIds)} />
              <div className="gs-accordion-card__shade" />
              <div className="gs-accordion-card__closed">
                <span>{dayDate(event.date)}</span>
                <h3>{event.name}</h3>
              </div>
              <div className="gs-accordion-card__open">
                <p>{titleCase(event.type)}</p>
                <h3>{event.name}</h3>
                <span>{eventTime(event)} · {clean(event.venue?.name) || "Venue to follow"}</span>
                <p>{sentence(event.description, "The exact details are being polished. Bring your best energy.")}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gs-stack" aria-labelledby="gs-home-notes-title">
        <div className="gs-stack__heading gs-paper">
          <p>A thoughtful guide for every guest</p>
          <h2 id="gs-home-notes-title">Everything you need for the days ahead.</h2>
        </div>
        <div className="gs-stack__cards">
          {featureNotes.map((note, index) => (
            <article
              className={`gs-stack-card gs-stack-card--${index % 3}`}
              style={{ "--gs-stack-index": index } as CSSProperties}
              key={note.id}
            >
              <div>
                <p>{titleCase(note.type)}</p>
                <h3>{note.name}</h3>
                <p>{sentence(note.description)}</p>
                <a href={pathFor(wedding.id, note.type === "our-story" ? "story" : "details")}>Open this note</a>
              </div>
              <SectionImage image={data.imageAt(index + 3, note.imageIds)} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function StoryPage({ wedding, data }: { wedding: TemplateProps["wedding"]; data: PageContext }) {
  const chapters = data.information.filter((item) =>
    ["our-story", "families", "wedding-party", "traditions", "custom"].includes(item.type),
  );
  const storyChapters = chapters.length ? chapters : [data.story];

  return (
    <>
      <PageIntro
        eyebrow="The story before the vows"
        title={<>Two lives, one <em>shared journey.</em></>}
        description={sentence(data.story.description, `${data.partnerOne} and ${data.partnerTwo} found a home in one another. Now they are inviting everyone they love into the next chapter.`)}
        image={data.imageAt(2, data.story.imageIds)}
        variant="story"
      />

      <section className="gs-story-lead" aria-labelledby="gs-story-title">
        <div className="gs-story-lead__number" aria-hidden="true">&</div>
        <div className="gs-story-lead__copy gs-paper">
          <p>How it became us</p>
          <h2 id="gs-story-title">{data.story.name}</h2>
          <p>{sentence(data.story.description, `${data.names} are writing their favourite chapter yet, surrounded by the people who shaped every page before it.`)}</p>
        </div>
        <SectionImage image={data.imageAt(3, data.story.imageIds)} className="gs-story-lead__image" />
      </section>

      <section className="gs-story-chapters" aria-label="Our chapters">
        {storyChapters.map((chapter, index) => (
          <article className="gs-story-chapter" key={chapter.id}>
            <div className="gs-story-chapter__copy gs-paper">
              <p>{titleCase(chapter.type)}</p>
              <h2>{chapter.name}</h2>
              <p>{sentence(chapter.description)}</p>
              {(chapter.items ?? []).length > 0 && (
                <ul>
                  {chapter.items?.slice(0, 4).map((item) => (
                    <li key={item.id}>
                      <strong>{item.name}</strong>
                      {item.description && <span>{item.description}</span>}
                      {safeUrl(item.url) && <a href={safeUrl(item.url)} target="_blank" rel="noreferrer">Visit link</a>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="gs-story-chapter__art">
              <SectionImage image={data.imageAt(index + 1, chapter.imageIds)} />
              <span aria-hidden="true">{String.fromCharCode(65 + (index % 26))}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="gs-promise">
        <SectionImage image={data.imageAt(5)} />
        <blockquote className="gs-paper">
          “The best part was never finding the perfect moment. It was finding the person who makes every moment feel like ours.”
          <cite>{data.partnerOne} & {data.partnerTwo}</cite>
        </blockquote>
      </section>
    </>
  );
}

function EventsPage({ wedding, data }: { wedding: TemplateProps["wedding"]; data: PageContext }) {
  return (
    <>
      <PageIntro
        eyebrow={`${longDate(wedding.couple?.date)} · ${data.location}`}
        title={<>Join us for <em>every celebration.</em></>}
        description="A celebration with several moods, excellent clothes, generous food and no expectation that you leave the dance floor early."
        image={data.imageAt(1, data.events[0]?.imageIds)}
        variant="events"
      />

      <section className="gs-event-list" aria-labelledby="gs-event-list-title">
        <div className="gs-event-list__intro gs-paper">
          <p>From the first blessing to the final song</p>
          <h2 id="gs-event-list-title">The wedding, day by day.</h2>
        </div>
        <div className="gs-event-list__items">
          {data.events.map((event, index) => {
            const mapUrl = safeUrl(event.venue?.mapUrl);
            return (
              <article className="gs-event-row" key={event.id}>
                <div className="gs-event-row__date">
                  <span>{titleCase(event.type)}</span>
                  <time dateTime={event.date}>{dayDate(event.date)}</time>
                </div>
                <div className="gs-event-row__media">
                  <SectionImage image={data.imageAt(index + 1, event.imageIds)} />
                </div>
                <div className="gs-event-row__copy">
                  <h3>{event.name}</h3>
                  <p>{sentence(event.description, "A gathering full of colour, ritual and very good company.")}</p>
                  <dl>
                    <div><dt>When</dt><dd>{eventTime(event)}</dd></div>
                    <div><dt>Where</dt><dd>{clean(event.venue?.name) || "Venue to be announced"}</dd></div>
                    {event.dressCode && <div><dt>Wear</dt><dd>{event.dressCode}</dd></div>}
                    {event.transportation && <div><dt>Getting there</dt><dd>{event.transportation}</dd></div>}
                  </dl>
                  {mapUrl && <a href={mapUrl} target="_blank" rel="noreferrer">Open location <span aria-hidden="true">↗</span></a>}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="gs-event-note gs-paper">
        <p>One request from us</p>
        <h2>Arrive curious. Dress joyfully. Leave room for dessert.</h2>
        <a className="gs-button gs-button--cream" href={pathFor(wedding.id, "details")}>Read the guest notes</a>
      </section>
    </>
  );
}

function DetailsPage({ wedding, data }: { wedding: TemplateProps["wedding"]; data: PageContext }) {
  return (
    <>
      <PageIntro
        eyebrow="For an effortless celebration"
        title={<>Guest details, gathered <em>with care.</em></>}
        description={`Travel, stays, wardrobes and the small things worth knowing before you join us in ${data.location}.`}
        image={data.imageAt(4, data.details[0]?.imageIds)}
        variant="details"
      />

      <section className="gs-details-board" aria-labelledby="gs-details-title">
        <div className="gs-details-board__heading gs-paper">
          <p>Keep this page close</p>
          <h2 id="gs-details-title">A warm welcome begins with thoughtful details.</h2>
        </div>
        <div className="gs-details-grid">
          {data.details.map((section, index) => (
            <article className={`gs-detail-card gs-detail-card--${index % 4}`} key={section.id}>
              <div className="gs-detail-card__top">
                <span>{titleCase(section.type)}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{section.name}</h3>
              <p>{sentence(section.description)}</p>
              {(section.items ?? []).length > 0 && (
                <div className="gs-detail-card__items">
                  {section.items?.map((item) => {
                    const url = safeUrl(item.url);
                    return (
                      <div key={item.id}>
                        <strong>{item.name}</strong>
                        {item.description && <p>{item.description}</p>}
                        {url && <a href={url} target="_blank" rel="noreferrer">Open resource <span aria-hidden="true">↗</span></a>}
                      </div>
                    );
                  })}
                </div>
              )}
              {index % 3 === 0 && <SectionImage image={data.imageAt(index + 2, section.imageIds)} />}
            </article>
          ))}
        </div>
      </section>

      <section className="gs-details-strip">
        <div>
          <p>Still deciding what to wear?</p>
          <h2>Colour is encouraged. Comfort is non-negotiable.</h2>
        </div>
        <a href={pathFor(wedding.id, "events")}>Match your outfit to each event</a>
      </section>
    </>
  );
}

function GalleryPage({ data }: { data: PageContext }) {
  const galleryImages = data.images.length >= 6
    ? data.images
    : Array.from({ length: 9 }, (_, index) => data.imageAt(index));

  return (
    <>
      <PageIntro
        eyebrow="Moments from the celebration"
        title={<>Joy, held in <em>every frame.</em></>}
        description="A collection of glances, rituals, laughter and colour that tells the story better than words ever could."
        image={data.imageAt(0)}
        variant="gallery"
      />

      <section className="gs-gallery-intro gs-paper" aria-labelledby="gs-gallery-title">
        <p>Small moments, kept large</p>
        <h2 id="gs-gallery-title">
          This is what
          <span
            className="gs-inline-image"
            style={{ backgroundImage: `url("${data.imageAt(3).url}")` }}
            role="img"
            aria-label={data.imageAt(3).description || "Wedding memory"}
          />
          forever looked like in the moment.
        </h2>
      </section>

      <section className="gs-gallery-grid" aria-label="Wedding photographs">
        {galleryImages.slice(0, 15).map((image, index) => (
          <figure className={`gs-gallery-item gs-gallery-item--${index % 7}`} key={`${image.id}-${index}`}>
            <SectionImage image={image} />
            <figcaption>
              <span>{clean(image.description) || `A moment with ${data.partnerOne} and ${data.partnerTwo}`}</span>
              <i>{String(index + 1).padStart(2, "0")}</i>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="gs-gallery-closing">
        <div className="gs-gallery-closing__mask">
          <SectionImage image={data.imageAt(galleryImages.length - 1)} />
        </div>
        <div className="gs-paper">
          <p>More memories are on their way</p>
          <h2>For now, this is the part we keep replaying.</h2>
        </div>
      </section>
    </>
  );
}

export default function GulalStudio({ wedding, page = "home" }: TemplateProps) {
  const root = useRef<HTMLElement>(null);

  const data = useMemo<PageContext>(() => {
    const partnerOne = clean(wedding.couple?.partnerOne) || "One heart";
    const partnerTwo = clean(wedding.couple?.partnerTwo) || "Another heart";
    const names = `${partnerOne} & ${partnerTwo}`;
    const title = clean(wedding.settings?.title) || names;
    const location = clean(wedding.couple?.location) || "A place close to our hearts";

    const suppliedImages: PreparedImage[] = (wedding.images ?? [])
      .map((image) => ({ ...image, url: safeUrl(image.url) ?? "" }))
      .filter((image): image is PreparedImage => Boolean(image.url));
    const fallbacks = FALLBACK_IMAGES as PreparedImage[];
    const images = suppliedImages.length ? suppliedImages : fallbacks;
    const imageMap = new Map(images.map((image) => [image.id, image]));
    const imageAt = (index: number, ids?: string[]) => {
      const referenced = ids?.map((id) => imageMap.get(id)).find(Boolean);
      return referenced ?? images[((index % images.length) + images.length) % images.length];
    };

    const sortedEvents = [...(wedding.events ?? [])].sort(
      (a, b) =>
        (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) ||
        clean(a.date).localeCompare(clean(b.date)),
    );
    const events: WeddingEvent[] = sortedEvents.length
      ? sortedEvents
      : [{
          id: "gulal-celebration",
          type: "ceremony",
          name: "The Wedding Celebration",
          description: "The plans are taking shape. Please check back for the full celebration schedule.",
          date: wedding.couple?.date ?? "",
        }];

    const information = [...(wedding.information ?? [])].sort(
      (a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER),
    );
    const story = information.find((item) => item.type === "our-story") ?? {
      id: "gulal-story",
      type: "our-story",
      name: "The beginning of always",
      description: `${partnerOne} and ${partnerTwo} are bringing their favourite people together for a celebration of love, family and everything still to come.`,
    };
    const detailTypes = new Set([
      "dress-code", "travel", "accommodations", "transportation", "things-to-do",
      "registry", "faq", "contact",
    ]);
    const filteredDetails = information.filter((item) => detailTypes.has(item.type));
    const details: WeddingInformation[] = filteredDetails.length
      ? filteredDetails
      : [{
          id: "gulal-guest-note",
          type: "travel",
          name: "Guest notes are on the way",
          description: `Travel, accommodation and arrival details for ${location} will be added here soon.`,
        }];

    return {
      partnerOne,
      partnerTwo,
      names,
      title,
      location,
      images,
      events,
      information: information.length ? information : [story],
      story,
      details,
      imageAt,
    };
  }, [wedding]);

  useGSAP(
    () => {
      if (!root.current || typeof window === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set(".gs-paper, .gs-motion-image, .gs-stack-card", { clearProps: "all" });
        return;
      }

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".gs-nav", { y: -30, opacity: 0, duration: 0.75 })
        .from(".gs-hero__eyebrow, .gs-page-intro__copy > *", { y: 32, opacity: 0, duration: 0.75, stagger: 0.08 }, "-=0.25")
        .from(".gs-hero h1 > *", { yPercent: 120, opacity: 0, duration: 1, stagger: 0.09 }, "-=0.6")
        .from(".gs-hero__collage, .gs-page-intro__collage", { x: 90, rotate: 3, opacity: 0, duration: 1.1 }, "-=0.9")
        .from(".gs-hero__meta, .gs-hero__actions", { y: 24, opacity: 0, duration: 0.65, stagger: 0.1 }, "-=0.6");

      gsap.utils.toArray<HTMLElement>(".gs-paper").forEach((element) => {
        if (element.closest(".gs-page-intro__copy")) return;
        gsap.from(element, {
          y: 54,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".gs-motion-image").forEach((image) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top 96%",
            end: "bottom 4%",
            scrub: 1,
          },
        })
          .fromTo(image, { scale: 0.82, opacity: 0.3 }, { scale: 1, opacity: 1, duration: 0.55, ease: "none" })
          .to(image, { scale: 1.04, opacity: 0.2, duration: 0.45, ease: "none" });
      });

      const media = gsap.matchMedia();
      media.add("(min-width: 900px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".gs-stack-card");
        cards.forEach((card, index) => {
          gsap.from(card, {
            y: 150,
            rotate: index % 2 ? 1.5 : -1.5,
            opacity: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 30%",
              scrub: 1,
            },
          });
          if (index < cards.length - 1) {
            gsap.to(card, {
              scale: 0.94,
              filter: "saturate(.72)",
              ease: "none",
              scrollTrigger: {
                trigger: cards[index + 1],
                start: "top 85%",
                end: "top 20%",
                scrub: 1,
              },
            });
          }
        });
      });

      return () => media.revert();
    },
    { scope: root, dependencies: [page, wedding.id], revertOnUpdate: true },
  );

  const initials = `${data.partnerOne.charAt(0)}${data.partnerTwo.charAt(0)}`.toUpperCase();
  const currentPage = PAGE_LINKS.some((link) => link.page === page) ? page : "home";

  return (
    <main className={`gulal-studio gulal-studio--${currentPage}`} ref={root}>
      <Nav id={wedding.id} page={currentPage} names={data.names} initials={initials} />
      {currentPage === "home" && <HomePage wedding={wedding} data={data} />}
      {currentPage === "story" && <StoryPage wedding={wedding} data={data} />}
      {currentPage === "events" && <EventsPage wedding={wedding} data={data} />}
      {currentPage === "details" && <DetailsPage wedding={wedding} data={data} />}
      {currentPage === "gallery" && <GalleryPage data={data} />}
      <Footer id={wedding.id} names={data.names} date={wedding.couple?.date} />
    </main>
  );
}
