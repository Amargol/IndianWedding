import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { TemplateProps } from "../../types";
import type {
  WeddingImage,
  WeddingInformation,
} from "../../../types/WeddingSchema";
import "./silk-and-sacred.css";

const clean = (value?: string) => value?.trim() ?? "";

function parseDate(value?: string) {
  if (!value) return null;
  const parsed = new Date(value.includes("T") ? value : `${value}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDate(value?: string, compact = false) {
  const parsed = parseDate(value);
  if (!parsed) return clean(value) || "Date to be shared";
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: compact ? "short" : "long",
    year: "numeric",
  }).format(parsed);
}

function formatTime(value?: string) {
  if (!value) return "";
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return value;
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2000, 0, 1, hours, minutes));
}

function safeExternalUrl(value?: string) {
  if (!value) return undefined;
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:"
      ? parsed.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

function TemplePlaceholder({ label }: { label: string }) {
  return (
    <div className="ss-placeholder" role="img" aria-label={label}>
      <span className="ss-placeholder__halo" />
      <span className="ss-placeholder__arch" />
      <span className="ss-placeholder__lamp" />
    </div>
  );
}

function ResilientImage({
  image,
  alt,
  eager = false,
  parallax = false,
}: {
  image?: WeddingImage;
  alt: string;
  eager?: boolean;
  parallax?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => setFailed(false), [image?.url]);

  const visual = !clean(image?.url) || failed ? (
    <TemplePlaceholder label={alt} />
  ) : (
    <img
      src={image?.url}
      alt={clean(image?.description) || alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );

  return parallax ? (
    <div className="ss-parallax" data-ss-parallax="">
      {visual}
    </div>
  ) : (
    visual
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M14 7l5 5-5 5" />
    </svg>
  );
}

function storyFallback(
  title: string,
  coupleName: string,
  location: string,
): WeddingInformation {
  return {
    id: "silk-welcome",
    type: "our-story",
    name: title,
    description: `${coupleName} invite you to join their families for a celebration of love and new beginnings${location ? ` in ${location}` : ""}.`,
    items: [],
    order: 1,
  };
}

export default function SilkAndSacred({ wedding }: TemplateProps) {
  const root = useRef<HTMLElement>(null);
  const instanceId = useId().replace(/:/g, "");

  const partnerOne = clean(wedding.couple?.partnerOne) || "Together";
  const partnerTwo = clean(wedding.couple?.partnerTwo) || "Forever";
  const coupleName = `${partnerOne} & ${partnerTwo}`;
  const location = clean(wedding.couple?.location);
  const title = clean(wedding.settings?.title) || coupleName;

  const images = useMemo(
    () => (wedding.images ?? []).filter((image) => clean(image?.url)),
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
          clean(a.date).localeCompare(clean(b.date)),
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

  const imageForIds = (ids?: string[], fallbackIndex = 0) => {
    const referenced = ids?.map((id) => imageById.get(id)).find(Boolean);
    return referenced ?? images[fallbackIndex % Math.max(images.length, 1)];
  };

  const storySection =
    information.find((section) => section.type === "our-story") ?? information[0];
  const heroImage = imageForIds(storySection?.imageIds, 0);
  const storyCards = information.length
    ? information
    : [storyFallback(title, coupleName, location)];
  const displayedEvents = events.length
    ? events
    : [
        {
          id: "silk-celebration",
          type: "ceremony" as const,
          name: "The Wedding Celebration",
          description:
            "The details of our gathering will be shared with our loved ones soon.",
          date: clean(wedding.couple?.date),
          order: 1,
        },
      ];
  const narrative =
    clean(storySection?.description) ||
    `${coupleName} begin a new chapter, surrounded by the people and traditions they hold close.`;
  const narrativeWords = narrative.split(/\s+/).filter(Boolean);
  const firstMap = events
    .map((event) => safeExternalUrl(event.venue?.mapUrl))
    .find(Boolean);
  const firstInfoLink = information
    .flatMap((section) => section.items ?? [])
    .map((item) => safeExternalUrl(item.url))
    .find(Boolean);
  const invitationHref = firstMap ?? firstInfoLink ?? `#ss-events-${instanceId}`;
  const invitationExternal = invitationHref.startsWith("http");

  const galleryImages = Array.from({ length: 6 }, (_, index) =>
    images.length ? images[index % images.length] : undefined,
  );

  useGSAP(
    () => {
      if (!root.current || typeof window === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reducedMotion) {
        gsap.set(
          ".ss-reveal, .ss-word, .ss-event, .ss-story-card, .ss-gallery__tile",
          { clearProps: "all", opacity: 1 },
        );
        return;
      }

      const mm = gsap.matchMedia();

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".ss-nav", { y: -30, opacity: 0, duration: 0.8 })
        .from(
          ".ss-hero__blessing, .ss-hero__name-line, .ss-hero__details, .ss-hero__actions",
          { y: 46, opacity: 0, duration: 1, stagger: 0.09 },
          "-=0.32",
        )
        .from(
          ".ss-hero__portrait",
          { scale: 0.82, opacity: 0, duration: 1.3 },
          "-=1.05",
        );

      gsap.to(".ss-hero__portrait-media", {
        yPercent: 12,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".ss-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.to(".ss-hero__rings", {
        rotate: 38,
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: ".ss-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      gsap.utils.toArray<HTMLElement>(".ss-event").forEach((event, index) => {
        gsap.from(event, {
          y: 110,
          x: index % 2 === 0 ? -34 : 34,
          opacity: 0,
          rotate: index % 2 === 0 ? -2 : 2,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: { trigger: event, start: "top 88%", once: true },
        });
      });

      const words = gsap.utils.toArray<HTMLElement>(".ss-word");
      gsap.fromTo(
        words,
        { opacity: 0.12, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.025,
          ease: "none",
          scrollTrigger: {
            trigger: ".ss-vow__text",
            start: "top 78%",
            end: "bottom 42%",
            scrub: 1,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-ss-parallax]").forEach((media) => {
        gsap.fromTo(
          media,
          { yPercent: -9, scale: 1.08 },
          {
            yPercent: 9,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: media.parentElement ?? media,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.05,
            },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>(".ss-gallery__tile")
        .forEach((tile) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: tile,
                start: "top 94%",
                end: "bottom 5%",
                scrub: 0.9,
              },
            })
            .fromTo(
              tile,
              { scale: 0.82, opacity: 0.24 },
              { scale: 1, opacity: 1, duration: 0.58, ease: "none" },
            )
            .to(tile, {
              scale: 0.97,
              opacity: 0.2,
              duration: 0.42,
              ease: "none",
            });
        });

      gsap.utils.toArray<HTMLElement>(".ss-reveal").forEach((element) => {
        gsap.from(element, {
          y: 52,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      mm.add("(min-width: 900px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".ss-story-card");
        cards.forEach((card, index) => {
          gsap.set(card, { zIndex: index + 1 });
          gsap.fromTo(
            card,
            { y: index === 0 ? 0 : 190, scale: 0.94, opacity: 0.5 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                end: "top 28%",
                scrub: 1,
              },
            },
          );

          if (index < cards.length - 1) {
            gsap.to(card, {
              scale: 0.965,
              filter: "brightness(0.78)",
              ease: "none",
              scrollTrigger: {
                trigger: cards[index + 1],
                start: "top 62%",
                end: "top 24%",
                scrub: 1,
              },
            });
          }
        });

        const storyHeading = root.current?.querySelector<HTMLElement>(
          ".ss-stories__heading",
        );
        const storySectionElement = root.current?.querySelector<HTMLElement>(
          ".ss-stories",
        );
        if (storyHeading && storySectionElement) {
          ScrollTrigger.create({
            trigger: storySectionElement,
            start: "top top+=110",
            end: "bottom bottom-=90",
            pin: storyHeading,
            pinSpacing: false,
          });
        }
      });

      const cleanups: Array<() => void> = [];
      gsap.utils.toArray<HTMLElement>(".ss-tilt").forEach((element) => {
        const move = (event: PointerEvent) => {
          const bounds = element.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          gsap.to(element, {
            rotateY: x * 5,
            rotateX: y * -5,
            y: -5,
            duration: 0.45,
            ease: "power2.out",
            transformPerspective: 900,
          });
        };
        const leave = () =>
          gsap.to(element, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.65,
            ease: "elastic.out(1, 0.55)",
          });
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
        });
      });

      ScrollTrigger.refresh();
      return () => {
        cleanups.forEach((cleanup) => cleanup());
        mm.revert();
      };
    },
    { scope: root, dependencies: [wedding], revertOnUpdate: true },
  );

  return (
    <main className="silk-and-sacred" ref={root}>
      <nav className="ss-nav" aria-label={`${coupleName} wedding navigation`}>
        <a className="ss-nav__mark" href={`#ss-home-${instanceId}`}>
          <span>{partnerOne.charAt(0)}</span>
          <i aria-hidden="true" />
          <span>{partnerTwo.charAt(0)}</span>
          <span className="ss-sr-only">{coupleName}, home</span>
        </a>
        <div className="ss-nav__center" aria-hidden="true">
          <span />
          <p>{formatDate(wedding.couple?.date, true)}</p>
          <span />
        </div>
        <div className="ss-nav__links">
          <a href={`#ss-events-${instanceId}`}>Celebrations</a>
          <a href={`#ss-story-${instanceId}`}>Our story</a>
        </div>
      </nav>

      <header className="ss-hero" id={`ss-home-${instanceId}`}>
        <div className="ss-hero__rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="ss-hero__silk ss-hero__silk--left" aria-hidden="true" />
        <div className="ss-hero__silk ss-hero__silk--right" aria-hidden="true" />
        <div className="ss-hero__portrait ss-tilt">
          <div className="ss-hero__portrait-media">
            <ResilientImage image={heroImage} alt={coupleName} eager />
          </div>
        </div>
        <div className="ss-hero__copy">
          <p className="ss-hero__blessing">
            With the blessings of our families
          </p>
          <h1 className="ss-hero__title" aria-label={coupleName}>
            <span className="ss-hero__name-line">{partnerOne}</span>
            <span className="ss-hero__joining">
              <i aria-hidden="true" />
              <em>&amp;</em>
              <i aria-hidden="true" />
            </span>
            <span className="ss-hero__name-line">{partnerTwo}</span>
          </h1>
          <div className="ss-hero__details">
            <span>{formatDate(wedding.couple?.date)}</span>
            {location && <span>{location}</span>}
          </div>
          <div className="ss-hero__actions">
            <a href={`#ss-events-${instanceId}`} className="ss-button ss-button--light">
              Enter the celebration <ArrowIcon />
            </a>
            <a
              href={invitationHref}
              className="ss-button ss-button--outline"
              target={invitationExternal ? "_blank" : undefined}
              rel={invitationExternal ? "noreferrer" : undefined}
            >
              Guest details
            </a>
          </div>
        </div>
        <p className="ss-hero__aside" aria-hidden="true">
          Silk, jasmine, light
        </p>
      </header>

      <section className="ss-procession" id={`ss-events-${instanceId}`}>
        <div className="ss-procession__intro ss-reveal">
          <p>The wedding procession</p>
          <h2>Joy moves in many forms.</h2>
          <span>
            Every gathering has its own rhythm. Follow the ceremonial path from
            welcome to vows and the revelry beyond.
          </span>
        </div>

        <div className="ss-procession__path">
          <div className="ss-procession__axis" aria-hidden="true">
            <i />
            <span />
          </div>
          {displayedEvents.map((event, index) => {
            const eventImage = imageForIds(event.imageIds, index + 1);
            const mapUrl = safeExternalUrl(event.venue?.mapUrl);
            const time = [formatTime(event.startTime), formatTime(event.endTime)]
              .filter(Boolean)
              .join(" – ");

            return (
              <article className="ss-event ss-tilt" key={event.id}>
                <div className="ss-event__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="ss-event__media">
                  <ResilientImage
                    image={eventImage}
                    alt={`${event.name} celebration`}
                    parallax
                  />
                </div>
                <div className="ss-event__copy">
                  <p className="ss-event__date">
                    {formatDate(event.date, true)}
                    {time && <span>{time}</span>}
                  </p>
                  <h3>{clean(event.name) || "A joyful gathering"}</h3>
                  {event.description && <p>{event.description}</p>}
                  <div className="ss-event__venue">
                    <strong>{clean(event.venue?.name) || location || "Venue to be shared"}</strong>
                    {event.venue?.address && <span>{event.venue.address}</span>}
                  </div>
                  {event.dressCode && (
                    <p className="ss-event__dress">
                      <b>Dress note</b> {event.dressCode}
                    </p>
                  )}
                  {event.transportation && (
                    <p className="ss-event__transport">{event.transportation}</p>
                  )}
                  {mapUrl && (
                    <a href={mapUrl} target="_blank" rel="noreferrer">
                      View location <ArrowIcon />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ss-vow" aria-label="Our story in words">
        <p className="ss-vow__ornament" aria-hidden="true">
          Love made sacred
        </p>
        <p className="ss-vow__text">
          {narrativeWords.map((word, index) => (
            <span className="ss-word" key={`${word}-${index}`}>
              {word}{" "}
            </span>
          ))}
        </p>
      </section>

      <section className="ss-stories" id={`ss-story-${instanceId}`}>
        <div className="ss-stories__heading">
          <p>Gathered with care</p>
          <h2>Everything for the days ahead.</h2>
          <span>
            Stories, people, customs and thoughtful notes for every guest.
          </span>
        </div>

        <div className="ss-stories__stack">
          {storyCards.map((section, index) => {
            const sectionImage = imageForIds(section.imageIds, index + 2);
            return (
              <article className="ss-story-card ss-tilt" key={section.id}>
                <div className="ss-story-card__topline">
                  <span>{clean(section.name) || "A note from us"}</span>
                  <i aria-hidden="true" />
                </div>
                <div className="ss-story-card__grid">
                  <div className="ss-story-card__copy">
                    <h3>{clean(section.name) || "A note from us"}</h3>
                    {section.description && <p>{section.description}</p>}
                    {(section.items ?? []).length > 0 && (
                      <div className="ss-story-card__items">
                        {(section.items ?? []).map((item) => {
                          const link = safeExternalUrl(item.url);
                          return (
                            <div className="ss-story-card__item" key={item.id}>
                              <h4>{clean(item.name) || "Guest information"}</h4>
                              {item.description && <p>{item.description}</p>}
                              {link && (
                                <a href={link} target="_blank" rel="noreferrer">
                                  Open details <ArrowIcon />
                                </a>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="ss-story-card__media">
                    <ResilientImage
                      image={sectionImage}
                      alt={clean(section.name) || coupleName}
                      parallax
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ss-gallery" aria-label={`${coupleName} gallery`}>
        <div className="ss-gallery__heading ss-reveal">
          <p>Woven memories</p>
          <h2>A celebration held in colour.</h2>
        </div>
        <div className="ss-gallery__mosaic">
          {galleryImages.map((image, index) => (
            <figure
              className={`ss-gallery__tile ss-gallery__tile--${index + 1} ss-tilt`}
              key={`${image?.id ?? "silk-placeholder"}-${index}`}
            >
              <ResilientImage
                image={image}
                alt={clean(image?.description) || `${coupleName}, memory ${index + 1}`}
                parallax
              />
              <figcaption>
                <span>{clean(image?.description) || title}</span>
                <i aria-hidden="true" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="ss-invitation">
        <div className="ss-invitation__geometry" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="ss-invitation__copy ss-reveal">
          <p>Come with your blessings</p>
          <h2>Meet us beneath the flowers.</h2>
          <span>
            Your presence is the warmth in our celebration and the memory we
            will carry forward.
          </span>
          <a
            className="ss-button ss-button--gold"
            href={invitationHref}
            target={invitationExternal ? "_blank" : undefined}
            rel={invitationExternal ? "noreferrer" : undefined}
          >
            Plan your arrival <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="ss-footer">
        <a className="ss-footer__mark" href={`#ss-home-${instanceId}`}>
          {partnerOne.charAt(0)} <i /> {partnerTwo.charAt(0)}
          <span className="ss-sr-only">Back to the beginning</span>
        </a>
        <p>{title}</p>
        <p>
          {formatDate(wedding.couple?.date, true)}
          {location ? ` · ${location}` : ""}
        </p>
      </footer>
    </main>
  );
}
