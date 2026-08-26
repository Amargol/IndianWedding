import { useId, useMemo, useRef } from "react";
import type { CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { TemplateProps } from "../../types";
import "./palace-ledger.css";

const clean = (value?: string) => value?.trim() ?? "";

function parseDate(value?: string) {
  if (!value) return null;
  const parsed = new Date(value.includes("T") ? value : `${value}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDate(value?: string, compact = false) {
  const parsed = parseDate(value);
  if (!parsed) return clean(value) || "Date to be announced";
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
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? value
      : undefined;
  } catch {
    return undefined;
  }
}

function PalacePlaceholder({ label }: { label: string }) {
  return (
    <div className="pl-placeholder" role="img" aria-label={label}>
      <span className="pl-placeholder__sun" />
      <span className="pl-placeholder__arch pl-placeholder__arch--left" />
      <span className="pl-placeholder__arch pl-placeholder__arch--centre" />
      <span className="pl-placeholder__arch pl-placeholder__arch--right" />
    </div>
  );
}

export default function PalaceLedger({ wedding }: TemplateProps) {
  const root = useRef<HTMLElement>(null);
  const instanceId = useId().replace(/:/g, "");

  const partnerOne = clean(wedding.couple?.partnerOne) || "Together";
  const partnerTwo = clean(wedding.couple?.partnerTwo) || "Forever";
  const coupleName = `${partnerOne} & ${partnerTwo}`;
  const location = clean(wedding.couple?.location) || "A place close to our hearts";
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

  const heroImage = imageForIds(
    information.find((item) => item.type === "our-story")?.imageIds,
  );
  const ledgerEntries = information.length
    ? information
    : [
        {
          id: "welcome-ledger",
          type: "our-story" as const,
          name: "An invitation from our families",
          description: `${coupleName} invite you to share in a celebration of love, kinship and new beginnings in ${location}.`,
          items: [],
          order: 1,
        },
      ];
  const displayedEvents = events.length
    ? events
    : [
        {
          id: "celebration-to-come",
          type: "ceremony" as const,
          name: "The Wedding Celebration",
          description:
            "The details of our gathering will be shared with our guests soon.",
          date: wedding.couple?.date ?? "",
          order: 1,
        },
      ];
  const galleryImages = images.length
    ? images
    : [{ id: "palace-placeholder", url: "", description: title }];
  const firstMapUrl = events
    .map((event) => safeExternalUrl(event.venue?.mapUrl))
    .find(Boolean);
  const firstInfoUrl = information
    .flatMap((section) => section.items ?? [])
    .map((item) => safeExternalUrl(item.url))
    .find(Boolean);
  const actionUrl = firstMapUrl ?? firstInfoUrl;
  const heroStyle = {
    "--pl-name-size": `${Math.max(3.6, Math.min(7.9, 96 / Math.max(partnerOne.length, partnerTwo.length, 9)))}vw`,
  } as CSSProperties;

  useGSAP(
    () => {
      if (!root.current || typeof window === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reducedMotion) {
        gsap.set(".pl-reveal, .pl-event__media, .pl-ledger__entry", {
          clearProps: "all",
          opacity: 1,
        });
        return;
      }

      const mm = gsap.matchMedia();

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".pl-nav", { y: -26, opacity: 0, duration: 0.8 })
        .from(
          ".pl-hero__kicker, .pl-hero__name, .pl-hero__ampersand",
          { y: 54, opacity: 0, duration: 1, stagger: 0.1 },
          "-=0.35",
        )
        .from(
          ".pl-hero__date, .pl-hero__actions",
          { y: 28, opacity: 0, duration: 0.72, stagger: 0.1 },
          "-=0.55",
        )
        .from(
          ".pl-hero__visual",
          { clipPath: "inset(0 0 100% 0)", duration: 1.35 },
          "-=1.1",
        );

      gsap.to(".pl-hero__visual-inner", {
        yPercent: 11,
        scale: 1.045,
        ease: "none",
        scrollTrigger: {
          trigger: ".pl-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".pl-event__media").forEach((media) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: media,
              start: "top 94%",
              end: "bottom 8%",
              scrub: 1,
            },
          })
          .fromTo(
            media,
            { scale: 0.82, opacity: 0.28 },
            { scale: 1, opacity: 1, duration: 0.58, ease: "none" },
          )
          .to(media, {
            scale: 1.025,
            opacity: 0.2,
            duration: 0.42,
            ease: "none",
          });
      });

      gsap.utils.toArray<HTMLElement>(".pl-reveal").forEach((element) => {
        gsap.from(element, {
          y: 44,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".pl-ledger__entry").forEach((entry) => {
        gsap.from(entry, {
          x: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: entry, start: "top 84%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-pl-parallax]").forEach((image, index) => {
        gsap.fromTo(
          image,
          { yPercent: index % 2 ? -8 : 8 },
          {
            yPercent: index % 2 ? 8 : -8,
            ease: "none",
            scrollTrigger: {
              trigger: image.closest(".pl-gallery__panel") ?? image,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.15,
            },
          },
        );
      });

      mm.add("(min-width: 960px)", () => {
        const ledger = root.current?.querySelector<HTMLElement>(".pl-ledger");
        const heading = root.current?.querySelector<HTMLElement>(
          ".pl-ledger__heading",
        );
        if (!ledger || !heading) return;
        ScrollTrigger.create({
          trigger: ledger,
          start: "top top+=96",
          end: "bottom bottom-=120",
          pin: heading,
          pinSpacing: false,
        });
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [wedding.id], revertOnUpdate: true },
  );

  return (
    <main className="palace-ledger" ref={root} style={heroStyle}>
      <nav className="pl-nav" aria-label={`${coupleName} wedding navigation`}>
        <a className="pl-nav__mark" href={`#pl-home-${instanceId}`}>
          <span>{partnerOne.charAt(0)}</span>
          <i aria-hidden="true" />
          <span>{partnerTwo.charAt(0)}</span>
        </a>
        <div className="pl-nav__links">
          <a href={`#pl-celebrations-${instanceId}`}>Celebrations</a>
          <a href={`#pl-ledger-${instanceId}`}>Our ledger</a>
        </div>
        <a className="pl-nav__date" href={`#pl-celebrations-${instanceId}`}>
          {formatDate(wedding.couple?.date, true)}
        </a>
      </nav>

      <header className="pl-hero" id={`pl-home-${instanceId}`}>
        <div className="pl-hero__copy">
          <p className="pl-hero__kicker">
            With the blessings of our families, you are invited
          </p>
          <h1 className="pl-hero__title" aria-label={coupleName}>
            <span className="pl-hero__name">{partnerOne}</span>
            <span className="pl-hero__second-line">
              <em className="pl-hero__ampersand">and</em>
              <span className="pl-hero__name">{partnerTwo}</span>
            </span>
          </h1>
          <div className="pl-hero__date">
            <time dateTime={wedding.couple?.date}>
              {formatDate(wedding.couple?.date)}
            </time>
            <span aria-hidden="true" />
            <p>{location}</p>
          </div>
          <div className="pl-hero__actions">
            <a className="pl-button pl-button--dark" href={`#pl-celebrations-${instanceId}`}>
              Open the invitation
            </a>
            <a className="pl-button pl-button--line" href={`#pl-ledger-${instanceId}`}>
              Read our story
            </a>
          </div>
        </div>

        <figure className="pl-hero__visual">
          <div className="pl-hero__visual-inner">
            {heroImage ? (
              <img
                src={heroImage.url}
                alt={heroImage.description || coupleName}
              />
            ) : (
              <PalacePlaceholder label={`Palace illustration for ${coupleName}`} />
            )}
          </div>
          <figcaption>
            <span>{location}</span>
            <i aria-hidden="true" />
            <span>A new chapter</span>
          </figcaption>
        </figure>
        <div className="pl-hero__folio" aria-hidden="true">Invitation folio</div>
      </header>

      <div className="pl-marquee" aria-hidden="true">
        <div>
          <span>Love in full measure</span><i />
          <span>Family in every detail</span><i />
          <span>Ritual, music, celebration</span><i />
          <span>Love in full measure</span><i />
          <span>Family in every detail</span><i />
          <span>Ritual, music, celebration</span><i />
        </div>
      </div>

      <section className="pl-intro">
        <p className="pl-intro__ornament" aria-hidden="true">अथ शुभम्</p>
        <h2 className="pl-reveal">
          A celebration written across generations, gathered into one
          unforgettable<span className="pl-inline-image">
            {heroImage ? <img src={heroImage.url} alt="" /> : <i />}
          </span>weekend.
        </h2>
        <p className="pl-reveal">
          Come for the traditions held dear, stay for the stories we will tell
          long after the last song.
        </p>
      </section>

      <section className="pl-folio" id={`pl-celebrations-${instanceId}`}>
        <header className="pl-folio__header pl-reveal">
          <div>
            <p>The invitation folio</p>
            <h2>Our celebrations</h2>
          </div>
          <p>
            Each gathering has its own rhythm. Join us for every chapter that
            feels like yours.
          </p>
        </header>

        <div className="pl-events">
          {displayedEvents.map((event, index) => {
            const image = imageForIds(event.imageIds, index + 1);
            const mapUrl = safeExternalUrl(event.venue?.mapUrl);
            const time = [formatTime(event.startTime), formatTime(event.endTime)]
              .filter(Boolean)
              .join(" — ");
            return (
              <article className="pl-event" key={event.id}>
                <div className="pl-event__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="pl-event__body pl-reveal">
                  <p className="pl-event__date">{formatDate(event.date)}</p>
                  <h3>{clean(event.name) || "A wedding celebration"}</h3>
                  {clean(event.description) && <p>{event.description}</p>}
                  <dl>
                    {time && <><dt>Time</dt><dd>{time}</dd></>}
                    {clean(event.venue?.name) && <><dt>Venue</dt><dd>{event.venue?.name}</dd></>}
                    {clean(event.venue?.address) && <><dt>Address</dt><dd>{event.venue?.address}</dd></>}
                    {clean(event.dressCode) && <><dt>Attire</dt><dd>{event.dressCode}</dd></>}
                    {clean(event.transportation) && <><dt>Travel</dt><dd>{event.transportation}</dd></>}
                  </dl>
                  {mapUrl && (
                    <a href={mapUrl} target="_blank" rel="noreferrer">
                      View directions <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
                <div className="pl-event__media">
                  {image ? (
                    <img src={image.url} alt={image.description || event.name} />
                  ) : (
                    <PalacePlaceholder label={`Illustration for ${event.name}`} />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pl-ledger" id={`pl-ledger-${instanceId}`}>
        <header className="pl-ledger__heading">
          <p>Kept close, shared gladly</p>
          <h2>The family ledger</h2>
          <span>
            Stories, people and thoughtful details for the days ahead.
          </span>
        </header>
        <div className="pl-ledger__pages">
          {ledgerEntries.map((section, index) => {
            const image = imageForIds(section.imageIds, index + 2);
            return (
              <article className="pl-ledger__entry" key={section.id}>
                <div className="pl-ledger__index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="pl-ledger__content">
                  <h3>{clean(section.name) || "A note from us"}</h3>
                  {clean(section.description) && <p>{section.description}</p>}
                  {(section.items ?? []).length > 0 && (
                    <ul>
                      {(section.items ?? []).map((item) => (
                        <li key={item.id}>
                          <div>
                            <h4>{clean(item.name) || "Wedding detail"}</h4>
                            {clean(item.description) && <p>{item.description}</p>}
                          </div>
                          {safeExternalUrl(item.url) && (
                            <a href={safeExternalUrl(item.url)} target="_blank" rel="noreferrer" aria-label={`Open ${item.name}`}>
                              ↗
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {image && (
                  <figure>
                    <img src={image.url} alt={image.description || section.name} />
                  </figure>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="pl-gallery" aria-label="Wedding gallery">
        <header className="pl-gallery__header pl-reveal">
          <p>A changing view</p>
          <h2>Scenes from our world</h2>
        </header>
        <div className="pl-gallery__panels">
          {galleryImages.map((image, index) => (
            <figure
              className="pl-gallery__panel"
              key={image.id}
              tabIndex={0}
            >
              {image.url ? (
                <img
                  data-pl-parallax
                  src={image.url}
                  alt={image.description || `${coupleName}, photograph ${index + 1}`}
                />
              ) : (
                <PalacePlaceholder label={`${coupleName} gallery illustration`} />
              )}
              <figcaption>{image.description || title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="pl-footer">
        <p>With love, and with the blessings of those who came before us</p>
        <h2>
          Meet us beneath<br />the palace lights.
        </h2>
        <p>{formatDate(wedding.couple?.date)} · {location}</p>
        <a
          className="pl-button pl-button--gold"
          href={actionUrl ?? `#pl-celebrations-${instanceId}`}
          target={actionUrl ? "_blank" : undefined}
          rel={actionUrl ? "noreferrer" : undefined}
        >
          {actionUrl ? "Plan your arrival" : "Review the celebrations"}
        </a>
        <div className="pl-footer__base">
          <span>{partnerOne}</span>
          <i aria-hidden="true" />
          <span>{partnerTwo}</span>
        </div>
      </footer>
    </main>
  );
}
