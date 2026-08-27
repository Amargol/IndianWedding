import { useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WeddingImage, WeddingInformation } from "../../../types/WeddingSchema";
import type { TemplateProps, WeddingPage } from "../../types";
import "./moonlit-cinema.css";

const pages: { key: WeddingPage; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "story", label: "Our story" },
  { key: "events", label: "Celebrations" },
  { key: "details", label: "Guest details" },
  { key: "gallery", label: "Gallery" },
];

const fullDateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const compactDateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
});

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
  const parsed = /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? new Date(`${value}T12:00:00`)
    : new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDate(value?: string, compact = false) {
  const date = parseDate(value);
  if (!date) return value?.trim() || "Date to be announced";
  return (compact ? compactDateFormatter : fullDateFormatter).format(date);
}

function formatTime(value?: string) {
  if (!value) return "";
  const [hours, minutes] = value.split(":").map(Number);
  if (
    !Number.isInteger(hours) ||
    !Number.isInteger(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return value;
  }
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2000, 0, 1, hours, minutes));
}

function text(value: string | undefined, fallback: string) {
  return value?.trim() || fallback;
}

function joinTime(start?: string, end?: string) {
  const startLabel = formatTime(start);
  const endLabel = formatTime(end);
  if (startLabel && endLabel) return `${startLabel} – ${endLabel}`;
  return startLabel || endLabel || "Time to be announced";
}

function fallbackImage(seed: string) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/1920/1280`;
}

function WordReveal({ children }: { children: string }) {
  return (
    <p className="mc-scrub-copy" aria-label={children}>
      {children.split(/\s+/).map((word, index) => (
        <span className="mc-word" aria-hidden="true" key={`${word}-${index}`}>
          {word}{" "}
        </span>
      ))}
    </p>
  );
}

function ImageFrame({
  image,
  fallback,
  className = "",
  loading = "lazy",
}: {
  image?: WeddingImage;
  fallback: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  const src = safeUrl(image?.url) ?? fallbackImage(fallback);
  return (
    <div className={`mc-image-frame ${className}`}>
      <img
        src={src}
        alt={image?.description?.trim() || "Wedding celebration"}
        loading={loading}
      />
      <span className="mc-image-frame__wash" aria-hidden="true" />
    </div>
  );
}

function EditorialCarousel({
  notes,
  active,
  onChange,
}: {
  notes: { title: string; body: string }[];
  active: number;
  onChange: (index: number) => void;
}) {
  const current = notes[active] ?? notes[0];
  if (!current) return null;
  const previous = () => onChange((active - 1 + notes.length) % notes.length);
  const next = () => onChange((active + 1) % notes.length);

  return (
    <section className="mc-editorial" aria-label="Wedding notes">
      <div className="mc-editorial__count" aria-hidden="true">
        <span>{String(active + 1).padStart(2, "0")}</span>
        <i />
        <span>{String(notes.length).padStart(2, "0")}</span>
      </div>
      <blockquote aria-live="polite">
        <p>“{current.body}”</p>
        <cite>{current.title}</cite>
      </blockquote>
      <div className="mc-editorial__controls">
        <button type="button" onClick={previous} aria-label="Previous note">
          ←
        </button>
        <button type="button" onClick={next} aria-label="Next note">
          →
        </button>
      </div>
    </section>
  );
}

function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mc-page-head">
      <p className="mc-page-head__eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="mc-page-head__description">{description}</p>
    </header>
  );
}

export default function MoonlitCinema({ wedding, page }: TemplateProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [activeNote, setActiveNote] = useState(0);

  const partnerOne = text(wedding.couple?.partnerOne, "Together");
  const partnerTwo = text(wedding.couple?.partnerTwo, "Always");
  const firstOne = partnerOne.split(/\s+/)[0];
  const firstTwo = partnerTwo.split(/\s+/)[0];
  const location = text(wedding.couple?.location, "A place close to our hearts");
  const currentPage = pages.some((item) => item.key === page) ? page : "home";
  const routeFor = (target: WeddingPage) =>
    `/templates/moonlit-cinema/${encodeURIComponent(wedding.id)}/${target}`;

  const images = useMemo(
    () =>
      (wedding.images ?? [])
        .filter((image) => Boolean(safeUrl(image?.url)))
        .map((image) => ({ ...image, url: safeUrl(image.url) as string })),
    [wedding.images],
  );
  const imageById = useMemo(
    () => new Map(images.map((image) => [image.id, image])),
    [images],
  );
  const events = useMemo(
    () =>
      [...(wedding.events ?? [])].sort(
        (a, b) =>
          (a.order ?? Number.MAX_SAFE_INTEGER) -
            (b.order ?? Number.MAX_SAFE_INTEGER) ||
          (a.date || "").localeCompare(b.date || ""),
      ),
    [wedding.events],
  );
  const information = useMemo(
    () =>
      [...(wedding.information ?? [])].sort(
        (a, b) =>
          (a.order ?? Number.MAX_SAFE_INTEGER) -
          (b.order ?? Number.MAX_SAFE_INTEGER),
      ),
    [wedding.information],
  );
  const story =
    information.find((item) => item.type === "our-story") ??
    information.find((item) => item.description);
  const detailInformation = information.filter(
    (item) => item.id !== story?.id && item.type !== "gallery",
  );
  const heroImage = images[0];
  const imageFor = (ids?: string[], fallbackIndex = 0) =>
    ids?.map((id) => imageById.get(id)).find(Boolean) ??
    images[fallbackIndex % Math.max(images.length, 1)];

  const notes = useMemo(() => {
    const candidates: { title: string; body: string }[] = [];
    information.forEach((item) => {
      if (item.description?.trim()) {
        candidates.push({ title: item.name, body: item.description.trim() });
      }
      item.items?.forEach((entry) => {
        if (entry.description?.trim()) {
          candidates.push({ title: entry.name, body: entry.description.trim() });
        }
      });
    });
    if (!candidates.length) {
      candidates.push({
        title: `${firstOne} & ${firstTwo}`,
        body: `We cannot wait to gather with the people we love in ${location}.`,
      });
    }
    return candidates.slice(0, 6);
  }, [firstOne, firstTwo, information, location]);

  useEffect(() => setActiveNote(0), [wedding.id, currentPage, notes.length]);

  useGSAP(
    () => {
      if (!rootRef.current || typeof window === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(".mc-word, .mc-scroll-image, .mc-reveal", {
          clearProps: "all",
          opacity: 1,
        });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".mc-nav", { y: -24, opacity: 0, duration: 0.7 })
        .from(
          ".mc-hero__eyebrow, .mc-page-head__eyebrow",
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.25",
        )
        .from(
          ".mc-hero__title-line, .mc-page-head h1",
          { yPercent: 105, opacity: 0, duration: 1, stagger: 0.1 },
          "-=0.3",
        )
        .from(
          ".mc-hero__meta, .mc-hero__actions, .mc-page-head__description",
          { y: 22, opacity: 0, duration: 0.65, stagger: 0.08 },
          "-=0.55",
        );

      if (rootRef.current.querySelector(".mc-hero__media img")) {
        gsap.fromTo(
          ".mc-hero__media img",
          { scale: 1.08 },
          {
            scale: 1.22,
            ease: "none",
            scrollTrigger: {
              trigger: ".mc-hero",
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      }

      gsap.utils.toArray<HTMLElement>(".mc-reveal").forEach((element) => {
        gsap.from(element, {
          y: 54,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils
        .toArray<HTMLElement>(".mc-scrub-copy")
        .forEach((paragraph) => {
          const words = paragraph.querySelectorAll(".mc-word");
          gsap.fromTo(
            words,
            { opacity: 0.12 },
            {
              opacity: 1,
              stagger: 0.08,
              ease: "none",
              scrollTrigger: {
                trigger: paragraph,
                start: "top 82%",
                end: "bottom 46%",
                scrub: 1,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".mc-scroll-image")
        .forEach((frame) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: frame,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.1,
              },
            })
            .fromTo(
              frame,
              { scale: 0.82, opacity: 0.25 },
              { scale: 1, opacity: 1, duration: 0.58, ease: "none" },
            )
            .to(frame, {
              scale: 1.035,
              opacity: 0.2,
              filter: "brightness(0.55)",
              duration: 0.42,
              ease: "none",
            });
        });

      ScrollTrigger.refresh();
    },
    {
      scope: rootRef,
      dependencies: [currentPage, wedding.id, images.length, events.length],
      revertOnUpdate: true,
    },
  );

  const renderHome = () => (
    <>
      <header className="mc-hero">
        <div className="mc-hero__media" aria-hidden="true">
          <img
            src={safeUrl(heroImage?.url) ?? fallbackImage(`${wedding.id}-midnight`)}
            alt=""
            loading="eager"
          />
        </div>
        <div className="mc-hero__veil" aria-hidden="true" />
        <div className="mc-hero__content">
          <p className="mc-hero__eyebrow">An invitation beneath the evening sky</p>
          <h1 aria-label={`${partnerOne} and ${partnerTwo}`}>
            <span className="mc-hero__title-clip">
              <span className="mc-hero__title-line">{firstOne}</span>
            </span>
            <span className="mc-hero__ampersand">&</span>
            <span className="mc-hero__title-clip">
              <span className="mc-hero__title-line">{firstTwo}</span>
            </span>
          </h1>
          <p className="mc-hero__meta">
            {formatDate(wedding.couple?.date)} <i aria-hidden="true" /> {location}
          </p>
          <div className="mc-hero__actions">
            <a className="mc-button mc-button--gold" href={routeFor("events")}>
              View celebrations
            </a>
            <a className="mc-button mc-button--ghost" href={routeFor("story")}>
              Read our story
            </a>
          </div>
        </div>
        <div className="mc-hero__scroll" aria-hidden="true">
          <span>Scroll into the evening</span><i />
        </div>
      </header>

      <section className="mc-marquee" aria-label="Wedding celebration">
        <div className="mc-marquee__track">
          {[0, 1].map((copy) => (
            <div className="mc-marquee__group" aria-hidden={copy === 1} key={copy}>
              <span>{formatDate(wedding.couple?.date, true)}</span>
              <i aria-hidden="true" />
              <span>{location}</span>
              <i aria-hidden="true" />
              <span>{firstOne} & {firstTwo}</span>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section className="mc-home-intro mc-reveal">
        <p className="mc-kicker">A night written in gold</p>
        <WordReveal>
          {text(
            story?.description,
            `${firstOne} and ${firstTwo} invite you into a celebration shaped by family, laughter, and the promise of a beautiful life together.`,
          )}
        </WordReveal>
        <a className="mc-text-link" href={routeFor("story")}>Discover the full story <span>→</span></a>
      </section>

      <section className="mc-home-frame mc-reveal">
        <ImageFrame
          image={images[1] ?? heroImage}
          fallback={`${wedding.id}-candlelight`}
          className="mc-scroll-image"
        />
        <div className="mc-home-frame__caption">
          <span>{events.length ? `${events.length} celebrations` : "One unforgettable gathering"}</span>
          <p>Come for the vows. Stay for every luminous moment around them.</p>
          <a href={routeFor("events")}>Explore the celebration</a>
        </div>
      </section>

      <EditorialCarousel notes={notes} active={activeNote} onChange={setActiveNote} />
    </>
  );

  const renderStory = () => {
    const storySections: WeddingInformation[] = story
      ? [story, ...information.filter((item) => item.id !== story.id).slice(0, 2)]
      : information.slice(0, 3);
    return (
      <>
        <PageHeader
          eyebrow="The two of us"
          title="A story held in moonlight."
          description={`Before the celebration in ${location}, there was a first chapter, and then another.`}
        />

        <section className="mc-story-lead">
          <h2>
            We found a life
            <span className="mc-inline-image">
              <img
                src={safeUrl((images[1] ?? heroImage)?.url) ?? fallbackImage(`${wedding.id}-story`)}
                alt=""
              />
            </span>
            worth celebrating.
          </h2>
          <WordReveal>
            {text(
              story?.description,
              `${firstOne} and ${firstTwo} built their story in the small moments: long conversations, shared adventures, familiar laughter, and the quiet certainty of choosing one another.`,
            )}
          </WordReveal>
        </section>

        <section className="mc-story-chapters">
          {(storySections.length
            ? storySections
            : [
                {
                  id: "story-fallback",
                  type: "our-story" as const,
                  name: "The beginning",
                  description: `Every love story has its own rhythm. ${firstOne} and ${firstTwo}'s led them here.`,
                },
              ]
          ).map((section, index) => (
            <article className="mc-story-chapter mc-reveal" key={section.id}>
              <div className="mc-story-chapter__media">
                <ImageFrame
                  image={imageFor(section.imageIds, index + 2)}
                  fallback={`${wedding.id}-chapter-${index}`}
                  className="mc-scroll-image"
                />
              </div>
              <div className="mc-story-chapter__copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{section.name}</h3>
                <p>{text(section.description, "A chapter best remembered together.")}</p>
              </div>
            </article>
          ))}
        </section>

        <EditorialCarousel notes={notes} active={activeNote} onChange={setActiveNote} />
      </>
    );
  };

  const renderEvents = () => (
    <>
      <PageHeader
        eyebrow={formatDate(wedding.couple?.date)}
        title="The celebrations, after dark."
        description={`The places, times, and details for every gathering in ${location}.`}
      />

      <section className="mc-event-list" aria-label="Wedding events">
        {events.length ? (
          events.map((event, index) => {
            const mapUrl = safeUrl(event.venue?.mapUrl);
            return (
              <article className="mc-event mc-reveal" key={event.id}>
                <div className="mc-event__media">
                  <ImageFrame
                    image={imageFor(event.imageIds, index + 1)}
                    fallback={`${wedding.id}-${event.type}-${index}`}
                    className="mc-scroll-image"
                  />
                  <span>{formatDate(event.date, true)}</span>
                </div>
                <div className="mc-event__copy">
                  <p>{formatDate(event.date)} · {joinTime(event.startTime, event.endTime)}</p>
                  <h2>{event.name}</h2>
                  {event.description && <p className="mc-event__description">{event.description}</p>}
                  <dl>
                    <div>
                      <dt>Venue</dt>
                      <dd>{text(event.venue?.name, "Venue to be announced")}</dd>
                    </div>
                    {event.venue?.address && (
                      <div>
                        <dt>Address</dt>
                        <dd>{event.venue.address}</dd>
                      </div>
                    )}
                    {event.dressCode && (
                      <div>
                        <dt>Attire</dt>
                        <dd>{event.dressCode}</dd>
                      </div>
                    )}
                    {event.transportation && (
                      <div>
                        <dt>Getting there</dt>
                        <dd>{event.transportation}</dd>
                      </div>
                    )}
                  </dl>
                  {mapUrl && (
                    <a className="mc-text-link" href={mapUrl} target="_blank" rel="noreferrer">
                      Open map <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })
        ) : (
          <div className="mc-empty-state mc-reveal">
            <p>The evening is taking shape.</p>
            <h2>Celebration details will be shared here soon.</h2>
          </div>
        )}
      </section>

      {events.length > 1 && (
        <section className="mc-marquee mc-marquee--events" aria-label="Event names">
          <div className="mc-marquee__track">
            {[0, 1].map((copy) => (
              <div className="mc-marquee__group" aria-hidden={copy === 1} key={copy}>
                {events.map((event) => (
                  <span className="mc-marquee__event" key={`${copy}-${event.id}`}>
                    {event.name}<i aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );

  const renderDetails = () => (
    <>
      <PageHeader
        eyebrow="For our guests"
        title="Everything for a beautiful arrival."
        description="Travel notes, wardrobe guidance, local favourites, and the practical details in one place."
      />

      <section className="mc-details-layout">
        <aside className="mc-details-aside mc-reveal">
          <p className="mc-kicker">At a glance</p>
          <h2>{location}</h2>
          <p>{formatDate(wedding.couple?.date)}</p>
          {events[0]?.venue?.name && <span>First gathering at {events[0].venue.name}</span>}
        </aside>

        <div className="mc-details-list">
          {(detailInformation.length
            ? detailInformation
            : [
                {
                  id: "details-fallback",
                  type: "custom" as const,
                  name: "A note for our guests",
                  description:
                    "More travel, accommodation, and celebration guidance will be shared as the date approaches.",
                },
              ]
          ).map((section) => (
            <article className="mc-detail mc-reveal" key={section.id}>
              <div className="mc-detail__heading">
                <h2>{section.name}</h2>
                <span aria-hidden="true">+</span>
              </div>
              {section.description && <p className="mc-detail__lead">{section.description}</p>}
              {section.items?.length ? (
                <div className="mc-detail__items">
                  {section.items.map((item) => {
                    const itemUrl = safeUrl(item.url);
                    return (
                      <div className="mc-detail__item" key={item.id}>
                        <h3>{item.name}</h3>
                        {item.description && <p>{item.description}</p>}
                        {itemUrl && (
                          <a href={itemUrl} target="_blank" rel="noreferrer">
                            Visit resource <span>↗</span>
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );

  const renderGallery = () => {
    const galleryImages = images.length
      ? images
      : Array.from({ length: 6 }, (_, index) => ({
          id: `fallback-${index}`,
          url: fallbackImage(`${wedding.id}-gallery-${index}`),
          description: "A moment from the celebration",
        }));
    return (
      <>
        <PageHeader
          eyebrow="A few favourite frames"
          title="The moments between the moments."
          description="A living collection of laughter, stillness, movement, and all the people who make this story whole."
        />

        <section className="mc-gallery" aria-label="Wedding photo gallery">
          {galleryImages.map((image, index) => (
            <figure className={`mc-gallery__item mc-gallery__item--${(index % 5) + 1} mc-reveal`} key={image.id}>
              <ImageFrame
                image={image}
                fallback={`${wedding.id}-gallery-${index}`}
                className="mc-scroll-image"
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {image.description?.trim() || `${firstOne} & ${firstTwo}`}
              </figcaption>
            </figure>
          ))}
        </section>
      </>
    );
  };

  const content = {
    home: renderHome,
    story: renderStory,
    events: renderEvents,
    details: renderDetails,
    gallery: renderGallery,
  }[currentPage]();

  return (
    <main className={`mc-shell mc-page--${currentPage}`} ref={rootRef}>
      <nav className="mc-nav" aria-label="Wedding navigation">
        <a className="mc-nav__mark" href={routeFor("home")} aria-label={`${partnerOne} and ${partnerTwo} home`}>
          <span>{firstOne.charAt(0)}</span><i /><span>{firstTwo.charAt(0)}</span>
        </a>
        <div className="mc-nav__links">
          {pages.map((item) => (
            <a
              href={routeFor(item.key)}
              aria-current={currentPage === item.key ? "page" : undefined}
              key={item.key}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a className="mc-nav__date" href={routeFor("events")}>
          {formatDate(wedding.couple?.date, true)}
        </a>
      </nav>

      {content}

      <footer className="mc-footer">
        <div className="mc-footer__lead">
          <p>Meet us beneath the evening sky.</p>
          <h2>{firstOne} <em>&</em> {firstTwo}</h2>
          <a className="mc-button mc-button--gold" href={routeFor("events")}>Plan your celebration</a>
        </div>
        <div className="mc-footer__base">
          <span>{formatDate(wedding.couple?.date)} · {location}</span>
          <div>
            {pages.map((item) => (
              <a href={routeFor(item.key)} key={item.key}>{item.label}</a>
            ))}
          </div>
          <span>Made with intention</span>
        </div>
      </footer>
    </main>
  );
}
