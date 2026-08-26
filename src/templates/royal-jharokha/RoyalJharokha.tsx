import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WeddingWebsite } from "../../../types/WeddingSchema";
import type { WeddingEvent, WeddingImage } from "../../../types/WeddingSchema";
import type { TemplateProps } from "../../types";
import "./royal-jharokha.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RoyalJharokhaProps = TemplateProps & {
  onBack?: () => void;
  onChooseWedding?: () => void;
};

const firstName = (name?: string) => name?.trim().split(/\s+/)[0] ?? "";

const initials = (wedding: WeddingWebsite) =>
  `${firstName(wedding.couple?.partnerOne)[0] ?? ""}${firstName(wedding.couple?.partnerTwo)[0] ?? ""}`;

const formatWeddingDate = (date: string) =>
  new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));

const formatEventDate = (date: string) =>
  new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(`${date}T12:00:00`));

const formatTime = (time?: string) => {
  if (!time) return "Time to be shared";
  const [hours, minutes] = time.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return time;
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2026, 0, 1, hours, minutes));
};

const getImage = (
  wedding: WeddingWebsite,
  index = 0,
  fallbackKeyword = "indian-wedding",
): WeddingImage =>
  wedding.images[index % Math.max(wedding.images.length, 1)] ?? {
    id: `fallback-${index}`,
    url: `https://picsum.photos/seed/${encodeURIComponent(`${wedding.id || "wedding"}-${fallbackKeyword}-${index}`)}/1600/1200`,
    description: `${wedding.couple?.partnerOne || "The couple"} and ${wedding.couple?.partnerTwo || "their beloved"}'s celebration`,
  };

const sortedEvents = (wedding: WeddingWebsite) =>
  [...(wedding.events ?? [])].sort(
    (a, b) =>
      (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) ||
      (a.date || "").localeCompare(b.date || ""),
  );

const sortedInformation = (wedding: WeddingWebsite) =>
  [...(wedding.information ?? [])].sort(
    (a, b) =>
      (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER),
  );

const safelyFormat = (formatter: (value: string) => string, value: string, fallback: string) => {
  try {
    return formatter(value);
  } catch {
    return fallback;
  }
};

const eventImage = (
  event: WeddingEvent,
  images: WeddingImage[],
  fallback: WeddingImage,
) => {
  const matchingImage = event.imageIds
    ?.map((id) => images.find((image) => image.id === id))
    .find((image): image is WeddingImage => Boolean(image?.url?.trim()));

  return matchingImage ?? fallback;
};

export default function RoyalJharokha({
  wedding,
  onBack,
  onChooseWedding,
}: RoyalJharokhaProps) {
  const pageRef = useRef<HTMLElement>(null);
  const events = useMemo(() => sortedEvents(wedding), [wedding]);
  const information = useMemo(() => sortedInformation(wedding), [wedding]);
  const imageReadyWedding = useMemo(
    () => ({
      ...wedding,
      images: (wedding.images ?? []).filter((image) => image.url?.trim()),
    }),
    [wedding],
  );

  const imageAt = (index: number, keyword: string) =>
    getImage(imageReadyWedding, index, keyword);

  const partnerOne = firstName(wedding.couple?.partnerOne) || "Partner One";
  const partnerTwo = firstName(wedding.couple?.partnerTwo) || "Partner Two";
  const monogram = initials(wedding) || "S&V";
  const weddingDate = safelyFormat(
    formatWeddingDate,
    wedding.couple?.date || "",
    "Date to be announced",
  );
  const location = wedding.couple?.location?.trim() || "India";
  const handleBack =
    onBack ??
    (() => {
      if (window.history.length > 1) window.history.back();
      else window.location.assign("/");
    });
  const handleChooseWedding =
    onChooseWedding ?? (() => window.location.assign("/"));
  const heroImage = imageAt(0, "udaipur-palace-wedding");
  const galleryImages = Array.from({ length: 4 }, (_, index) =>
    imageAt(index + 1, "royal-indian-wedding"),
  );
  const marqueeWords = (
    events.length > 0
      ? events.map((event) => event.name)
      : ["Mehndi", "Sangeet", "Shaadi", "Reception"]
  ).filter(Boolean);
  const marqueeSequence = [...marqueeWords, ...marqueeWords];

  useGSAP(
    () => {
      if (!pageRef.current) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set("[data-reveal], .rj-gallery__frame", { clearProps: "all" });
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".rj-nav", { y: -30, opacity: 0, duration: 0.8 })
        .from(
          ".rj-hero__kicker, .rj-hero__title-line, .rj-hero__details, .rj-hero__actions",
          { y: 44, opacity: 0, duration: 1, stagger: 0.09 },
          "-=0.35",
        )
        .from(
          ".rj-hero__portrait",
          { xPercent: 12, scale: 0.92, opacity: 0, duration: 1.35 },
          "-=1.1",
        );

      gsap.to(".rj-hero__portrait img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".rj-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 70,
          opacity: 0,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".rj-event__media").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.84, opacity: 0.45 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "center 55%",
              scrub: 1,
            },
          },
        );
      });

      const desktopMotion = gsap.matchMedia();
      desktopMotion.add("(min-width: 900px)", () => {
        ScrollTrigger.create({
          trigger: ".rj-gallery",
          start: "top 12%",
          end: "bottom 78%",
          pin: ".rj-gallery__intro",
          pinSpacing: false,
        });

        gsap.utils.toArray<HTMLElement>(".rj-gallery__frame").forEach((frame) => {
          gsap.fromTo(
            frame,
            { scale: 0.8, opacity: 0.35 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: frame,
                start: "top 92%",
                end: "center 52%",
                scrub: 1,
              },
            },
          );

          gsap.to(frame, {
            opacity: 0.24,
            filter: "brightness(0.55)",
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "bottom 48%",
              end: "bottom 12%",
              scrub: 1,
            },
          });
        });
      });

      return () => desktopMotion.revert();
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef} className="rj-page">
      <nav className="rj-nav" aria-label="Wedding website navigation">
        <button className="rj-nav__back" type="button" onClick={handleBack}>
          <span className="rj-arrow rj-arrow--back" aria-hidden="true">←</span>
          <span>All templates</span>
        </button>

        <a className="rj-nav__monogram" href="#top" aria-label="Return to the invitation">
          {monogram}
        </a>

        <div className="rj-nav__links">
          <a href="#celebrations">Celebrations</a>
          <a href="#details">Details</a>
          <button type="button" onClick={handleChooseWedding}>
            Use this design
          </button>
        </div>
      </nav>

      <section className="rj-hero" id="top">
        <div className="rj-hero__geometry" aria-hidden="true" />
        <div className="rj-hero__copy">
          <p className="rj-hero__kicker">शुभ विवाह · {weddingDate}</p>
          <h1 className="rj-hero__title">
            <span className="rj-hero__title-line">{partnerOne}</span>
            <span className="rj-hero__title-line rj-hero__title-line--second">
              <i>&amp;</i> {partnerTwo}
            </span>
          </h1>
          <div className="rj-hero__details">
            <span>{weddingDate}</span>
            <span aria-hidden="true" className="rj-flower-mark">✦</span>
            <span>{location}</span>
          </div>
          <div className="rj-hero__actions">
            <a className="rj-button rj-button--primary" href="#celebrations">
              Enter the celebration
              <span className="rj-arrow" aria-hidden="true">↓</span>
            </a>
            <button className="rj-button rj-button--quiet" type="button" onClick={handleChooseWedding}>
              Make it yours
              <span className="rj-arrow" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        <div className="rj-hero__portrait" aria-label={heroImage.description || "Wedding portrait"}>
          <img src={heroImage.url} alt={heroImage.description || "Indian wedding celebration"} />
          <div className="rj-hero__arch" aria-hidden="true" />
        </div>

        <p className="rj-hero__invitation">
          Together with their families
          <span>request the pleasure of your company</span>
        </p>
      </section>

      <div className="rj-marquee" aria-label="Wedding celebrations">
        <div className="rj-marquee__track">
          {marqueeSequence.map((word, index) => (
            <span key={`${word}-${index}`}>
              {word}
              <b aria-hidden="true">◆</b>
            </span>
          ))}
        </div>
      </div>

      <section className="rj-events" id="celebrations">
        <header className="rj-section-heading" data-reveal>
          <p>Join us beneath the palace skies</p>
          <h2>A celebration in many acts.</h2>
          <span>
            Every gathering carries its own colour, rhythm and ritual. Here is where our
            story unfolds.
          </span>
        </header>

        {events.length > 0 ? (
          <div className="rj-events__grid">
            {events.map((event, index) => {
              const fallback = imageAt(index + 2, event.type || "indian-wedding-event");
              const image = eventImage(event, imageReadyWedding.images, fallback);
              const isFinalOdd = events.length % 2 === 1 && index === events.length - 1;

              return (
                <article
                  className={`rj-event ${isFinalOdd ? "rj-event--wide" : ""}`}
                  data-reveal
                  key={event.id || `${event.name}-${index}`}
                >
                  <div className="rj-event__media">
                    <img
                      src={image.url}
                      alt={image.description || `${event.name} celebration`}
                      loading="lazy"
                    />
                  </div>
                  <div className="rj-event__shade" aria-hidden="true" />
                  <div className="rj-event__content">
                    <p>{safelyFormat(formatEventDate, event.date, "Date to be announced")}</p>
                    <h3>{event.name || "Celebration"}</h3>
                    {event.description && <span>{event.description}</span>}
                    <dl>
                      <div>
                        <dt><span aria-hidden="true">Time</span></dt>
                        <dd>{safelyFormat(formatTime, event.startTime || "", "Time to be shared")}</dd>
                      </div>
                      <div>
                        <dt><span aria-hidden="true">Place</span></dt>
                        <dd>{event.venue?.name || "Venue to be shared"}</dd>
                      </div>
                    </dl>
                    {event.venue?.mapUrl && (
                      <a href={event.venue.mapUrl} target="_blank" rel="noreferrer">
                        View location <span className="rj-arrow" aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rj-empty-note" data-reveal>
            <span className="rj-empty-note__arch" aria-hidden="true" />
            <p>The celebration details will be unveiled here soon.</p>
          </div>
        )}
      </section>

      <section className="rj-gallery" aria-label="Wedding gallery">
        <div className="rj-gallery__intro">
          <p>Fragments of joy</p>
          <h2>
            Light
            <span className="rj-inline-image" aria-hidden="true">
              <img src={galleryImages[0].url} alt="" />
            </span>
            ritual, and love.
          </h2>
          <span>Scroll through the moments that make this celebration ours.</span>
        </div>
        <div className="rj-gallery__rail">
          {galleryImages.map((image, index) => (
            <figure className={`rj-gallery__frame rj-gallery__frame--${index + 1}`} key={`${image.id}-${index}`}>
              <img
                src={image.url}
                alt={image.description || `Wedding gallery moment ${index + 1}`}
                loading="lazy"
              />
              <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="rj-information" id="details">
        <header className="rj-information__heading" data-reveal>
          <p>The finer details</p>
          <h2>Everything you need, thoughtfully gathered.</h2>
        </header>

        {information.length > 0 ? (
          <div className="rj-accordions" data-reveal>
            {information.map((section, index) => {
              const image = section.imageIds
                ?.map((id) => imageReadyWedding.images.find((item) => item.id === id))
                .find((item): item is WeddingImage => Boolean(item)) ??
                imageAt(index + 5, section.type || "indian-wedding-detail");

              return (
                <article className="rj-accordion" key={section.id || `${section.name}-${index}`} tabIndex={0}>
                  <img src={image.url} alt="" loading="lazy" />
                  <div className="rj-accordion__veil" aria-hidden="true" />
                  <div className="rj-accordion__content">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{section.name || "Wedding information"}</h3>
                    {section.description && <p>{section.description}</p>}
                    {section.items && section.items.length > 0 && (
                      <ul>
                        {section.items.slice(0, 3).map((item, itemIndex) => (
                          <li key={item.id || `${item.name}-${itemIndex}`}>
                            {item.url ? (
                              <a href={item.url} target="_blank" rel="noreferrer">
                                {item.name || "More details"}
                                <span className="rj-arrow" aria-hidden="true">↗</span>
                              </a>
                            ) : (
                              item.name || item.description || "More details"
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rj-information__empty" data-reveal>
            Travel notes, attire guidance and local recommendations will appear here as
            they are confirmed.
          </div>
        )}
      </section>

      <section className="rj-cta">
        <div className="rj-cta__arch" aria-hidden="true" />
        <p data-reveal>With love, and the blessings of our families</p>
        <h2 data-reveal>
          Come celebrate
          <span>{partnerOne} &amp; {partnerTwo}</span>
        </h2>
        <button type="button" onClick={handleChooseWedding} data-reveal>
          Use this wedding design
          <span className="rj-arrow" aria-hidden="true">↗</span>
        </button>
      </section>

      <footer className="rj-footer">
        <button type="button" onClick={handleBack}>
          <span className="rj-arrow rj-arrow--back" aria-hidden="true">←</span> Back to templates
        </button>
        <p>{monogram} · {weddingDate}</p>
        <a href="#top">Return to top</a>
      </footer>
    </main>
  );
}
