import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { TemplateProps } from "../../types";
import "./mehndi-garden.css";

const clean = (value?: string) => value?.trim() ?? "";

function formatDate(value: string, options?: Intl.DateTimeFormatOptions) {
  if (!value) return "Date to be shared";

  const parsed = new Date(value.includes("T") ? value : `${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
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

function BotanicalPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="mg-placeholder"
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    >
      <span className="mg-placeholder__stem" />
      <span className="mg-placeholder__leaf mg-placeholder__leaf--one" />
      <span className="mg-placeholder__leaf mg-placeholder__leaf--two" />
      <span className="mg-placeholder__leaf mg-placeholder__leaf--three" />
    </div>
  );
}

function ResilientImage({
  src,
  alt,
  loading,
  parallax = false,
}: {
  src?: string;
  alt: string;
  loading?: "eager" | "lazy";
  parallax?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => setFailed(false), [src]);

  const visual = !src || failed ? (
    <BotanicalPlaceholder label={alt} />
  ) : (
    <img src={src} alt={alt} loading={loading} onError={() => setFailed(true)} />
  );

  return parallax ? (
    <div className="mg-parallax-media" data-mg-parallax="">
      {visual}
    </div>
  ) : visual;
}

export default function MehndiGarden({ wedding }: TemplateProps) {
  const root = useRef<HTMLElement>(null);
  const instanceId = useId().replace(/:/g, "");
  const [storyIndex, setStoryIndex] = useState(0);

  const partnerOne = clean(wedding.couple?.partnerOne) || "Together";
  const partnerTwo = clean(wedding.couple?.partnerTwo) || "Forever";
  const coupleName = `${partnerOne} & ${partnerTwo}`;
  const location = clean(wedding.couple?.location);
  const title = clean(wedding.settings?.title) || coupleName;

  const events = useMemo(
    () =>
      [...(wedding.events ?? [])].sort(
        (a, b) =>
          (a.order ?? Number.MAX_SAFE_INTEGER) -
            (b.order ?? Number.MAX_SAFE_INTEGER) ||
          a.date.localeCompare(b.date),
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

  const usableImages = useMemo(
    () => (wedding.images ?? []).filter((image) => clean(image.url)),
    [wedding.images],
  );

  const imageById = useMemo(
    () => new Map(usableImages.map((image) => [image.id, image])),
    [usableImages],
  );

  const galleryImages = useMemo(() => {
    const referencedIds = [
      ...information.flatMap((section) => [
        ...(section.imageIds ?? []),
        ...(section.items ?? []).flatMap((item) => item.imageIds ?? []),
      ]),
      ...events.flatMap((event) => event.imageIds ?? []),
    ];
    const referenced = referencedIds
      .map((id) => imageById.get(id))
      .filter((image): image is NonNullable<typeof image> => Boolean(image));
    const unique = [...new Map([...referenced, ...usableImages].map((image) => [image.id, image])).values()];

    return unique.slice(0, 6);
  }, [events, imageById, information, usableImages]);

  const storyEntries = useMemo(() => {
    const entries = information.flatMap((section) => {
      const sectionEntry = clean(section.description)
        ? [{ id: section.id, name: section.name, description: section.description ?? "" }]
        : [];
      const itemEntries = (section.items ?? [])
        .filter((item) => clean(item.description))
        .map((item) => ({
          id: `${section.id}-${item.id}`,
          name: item.name,
          description: item.description ?? "",
        }));
      return [...sectionEntry, ...itemEntries];
    });

    return entries.length
      ? entries
      : [
          {
            id: "welcome",
            name: title,
            description: `${coupleName} invite you to celebrate with them${location ? ` in ${location}` : ""}.`,
          },
        ];
  }, [coupleName, information, location, title]);

  const activeStory = storyEntries[storyIndex % storyEntries.length];
  const heroImage = usableImages[0];
  const galleryForDisplay = galleryImages.length
    ? galleryImages
    : [{ id: "botanical-placeholder", url: "", description: `${coupleName} celebration` }];
  const featuredInformation = [0, 1, 2].map((index) => information[index]);
  const firstVenue = events.find((event) => event.venue?.mapUrl)?.venue;
  const linkedInformation = information
    .flatMap((section) => section.items ?? [])
    .find((item) => clean(item.url));
  const actionHref = clean(linkedInformation?.url) || clean(firstVenue?.mapUrl) || `#mg-events-${instanceId}`;
  const actionIsExternal = actionHref.startsWith("http");
  const nameClass = (name: string) => {
    if (name.length > 30) return "mg-hero__name-line--ultra-long";
    if (name.length > 22) return "mg-hero__name-line--extreme-long";
    if (name.length > 17) return "mg-hero__name-line--very-long";
    if (name.length > 11) return "mg-hero__name-line--long";
    return "";
  };

  useEffect(() => {
    setStoryIndex(0);
  }, [wedding.id]);

  useGSAP(
    () => {
      if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      gsap.from(".mg-hero__eyebrow, .mg-hero__name-line, .mg-hero__details, .mg-hero__actions", {
        y: 42,
        opacity: 0,
        duration: 1.1,
        stagger: 0.11,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>("[data-mg-parallax]").forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: -7, scale: 1.08 },
          {
            yPercent: 7,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element.closest(".mg-parallax-frame") ?? element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".mg-gallery__figure").forEach((figure) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: figure,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          })
          .fromTo(figure, { scale: 0.84, opacity: 0.25 }, { scale: 1, opacity: 1, duration: 0.52, ease: "none" })
          .to(figure, { scale: 0.94, opacity: 0.2, duration: 0.48, ease: "none" });
      });

      mm.add("(min-width: 960px)", () => {
        const gallery = root.current?.querySelector<HTMLElement>(".mg-gallery");
        const galleryIntro = root.current?.querySelector<HTMLElement>(".mg-gallery__intro");
        if (!gallery || !galleryIntro) return;

        ScrollTrigger.create({
          trigger: gallery,
          start: "top top+=96",
          end: "bottom bottom-=80",
          pin: galleryIntro,
          pinSpacing: false,
        });
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [wedding], revertOnUpdate: true },
  );

  const shiftStory = (direction: number) => {
    setStoryIndex((current) => (current + direction + storyEntries.length) % storyEntries.length);
  };

  return (
    <main className="mehndi-garden" ref={root}>
      <nav className="mg-nav" aria-label={`${coupleName} wedding navigation`}>
        <a className="mg-nav__monogram" href={`#mg-home-${instanceId}`} aria-label={`${coupleName}, home`}>
          <span>{partnerOne.charAt(0)}</span>
          <i aria-hidden="true" />
          <span>{partnerTwo.charAt(0)}</span>
        </a>
        <div className="mg-nav__links">
          <a href={`#mg-story-${instanceId}`}>Our world</a>
          <a href={`#mg-events-${instanceId}`}>Celebrations</a>
        </div>
        <a className="mg-nav__action" href={actionHref} target={actionIsExternal ? "_blank" : undefined} rel={actionIsExternal ? "noreferrer" : undefined}>
          Join us
        </a>
      </nav>

      <header className="mg-hero" id={`mg-home-${instanceId}`}>
        <div className="mg-hero__botanical mg-hero__botanical--left" aria-hidden="true" />
        <div className="mg-hero__botanical mg-hero__botanical--right" aria-hidden="true" />
        <div className="mg-hero__copy">
          <p className="mg-hero__eyebrow">With joyful hearts and the blessings of our families</p>
          <h1 className="mg-hero__title" aria-label={coupleName}>
            <span className={`mg-hero__name-line ${nameClass(partnerOne)}`}>{partnerOne}</span>
            <span className="mg-hero__joining" aria-hidden="true">
              <i />
              {heroImage ? (
                <span className="mg-hero__inline-image">
                  <ResilientImage src={heroImage.url} alt="" />
                </span>
              ) : (
                <span className="mg-hero__inline-mark" />
              )}
              <b>&amp;</b>
              <i />
            </span>
            <span className={`mg-hero__name-line mg-hero__name-line--second ${nameClass(partnerTwo)}`}>{partnerTwo}</span>
          </h1>
          <div className="mg-hero__details">
            <time dateTime={wedding.couple?.date}>{formatDate(wedding.couple?.date ?? "")}</time>
            {location && <span>{location}</span>}
          </div>
          <div className="mg-hero__actions">
            <a className="mg-button mg-button--solid" href={`#mg-events-${instanceId}`}>View celebrations</a>
            <a className="mg-button mg-button--quiet" href={`#mg-story-${instanceId}`}>Enter the garden</a>
          </div>
        </div>

        <div className="mg-hero__portrait mg-parallax-frame">
          <ResilientImage
            src={heroImage?.url}
            alt={heroImage?.description || `Botanical artwork for ${coupleName}`}
            loading="eager"
            parallax
          />
          <span className="mg-hero__portrait-line" aria-hidden="true" />
        </div>
        <p className="mg-hero__aside" aria-hidden="true">A celebration in full bloom</p>
      </header>

      <section className="mg-story" id={`mg-story-${instanceId}`}>
        <div className="mg-section-heading">
          <p>Rooted in love</p>
          <h2>Every detail carries a story.</h2>
        </div>

        <div className="mg-bento">
          <article className="mg-bento__item mg-bento__item--feature">
            <h3>{featuredInformation[0]?.name || title}</h3>
            <p>
              {featuredInformation[0]?.description ||
                `${coupleName} are gathering the people they love for a wedding shaped by family, ritual, and joy.`}
            </p>
            {featuredInformation[0]?.items?.length ? (
              <ul>
                {featuredInformation[0].items.slice(0, 3).map((item) => <li key={item.id}>{item.name}</li>)}
              </ul>
            ) : null}
          </article>

          {[featuredInformation[1], featuredInformation[2]].map((section, index) => (
            <article className="mg-bento__item mg-bento__item--note" key={section?.id ?? `fallback-${index}`}>
              <div>
                <h3>{section?.name || (index === 0 ? "The gathering" : "The blessings")}</h3>
                <p>
                  {section?.description ||
                    (index === 0
                      ? `${events.length || "Our"} celebrations, composed as one generous gathering.`
                      : `Held close by family and friends${location ? ` in ${location}` : ""}.`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mg-marquee" aria-label="Wedding celebrations">
        <div className="mg-marquee__track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="mg-marquee__set" key={copy}>
              {(events.length ? events : [{ id: "wedding", name: "Wedding celebration" }]).map((event) => (
                <span key={`${copy}-${event.id}`}>
                  {event.name}
                  <i />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="mg-gallery" aria-label="Wedding gallery">
        <div className="mg-gallery__intro">
          <p>Scenes we hold close</p>
          <h2>A garden of memories, still growing.</h2>
          <span>{String(galleryForDisplay.length).padStart(2, "0")} photographs</span>
        </div>
        <div className="mg-gallery__rail">
          {galleryForDisplay.map((image, index) => (
            <figure className="mg-gallery__figure mg-parallax-frame" key={image.id}>
              <ResilientImage
                src={image.url}
                alt={image.description || `${coupleName}, photograph ${index + 1}`}
                loading={index > 1 ? "lazy" : "eager"}
                parallax
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{image.description || coupleName}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mg-events" id={`mg-events-${instanceId}`}>
        <div className="mg-section-heading mg-section-heading--events">
          <p>Come celebrate</p>
          <h2>The days unfold, one beautiful ritual at a time.</h2>
        </div>

        <div
          className={`mg-accordions ${events.length === 1 ? "mg-accordions--single" : ""} ${events.length > 5 ? "mg-accordions--many" : ""}`}
        >
          {events.length ? (
            events.map((event, index) => {
              const image = (event.imageIds ?? []).map((id) => imageById.get(id)).find(Boolean) ?? usableImages[index % Math.max(usableImages.length, 1)];
              const times = [formatTime(event.startTime), formatTime(event.endTime)].filter(Boolean).join(" — ");
              return (
                <article className="mg-event" key={event.id} tabIndex={0} aria-label={`${event.name}, ${formatDate(event.date)}`}>
                  <div className="mg-event__image">
                    <ResilientImage src={image?.url} alt={image?.description || `${event.name} botanical artwork`} loading="lazy" />
                  </div>
                  <div className="mg-event__shade" />
                  <div className="mg-event__number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="mg-event__content">
                    <time dateTime={event.date}>{formatDate(event.date, { year: undefined })}</time>
                    <h3>{event.name}</h3>
                    <div className="mg-event__details">
                      {times && <p>{times}</p>}
                      {event.venue?.name && <p>{event.venue.name}</p>}
                      {event.dressCode && <p>Attire: {event.dressCode}</p>}
                      {event.description && <p className="mg-event__description">{event.description}</p>}
                      {event.venue?.mapUrl && (
                        <a href={event.venue.mapUrl} target="_blank" rel="noreferrer">Open directions</a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <article className="mg-event mg-event--empty">
              <BotanicalPlaceholder label="Celebration details coming soon" />
              <div className="mg-event__content">
                <h3>Celebrations to come</h3>
                <div className="mg-event__details"><p>We are tending to every detail. Please return for the full celebration schedule.</p></div>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="mg-stories" aria-live="polite">
        <div className="mg-stories__ornament" aria-hidden="true"><span /><i /><span /></div>
        <p className="mg-stories__quote" key={activeStory.id}>“{activeStory.description}”</p>
        <div className="mg-stories__footer">
          <p>{activeStory.name}</p>
          <div className="mg-stories__controls">
            <button type="button" onClick={() => shiftStory(-1)} aria-label="Previous story">←</button>
            <span>{String((storyIndex % storyEntries.length) + 1).padStart(2, "0")} / {String(storyEntries.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => shiftStory(1)} aria-label="Next story">→</button>
          </div>
        </div>
      </section>

      <footer className="mg-footer">
        <div className="mg-footer__leaf" aria-hidden="true" />
        <p>Save the date</p>
        <h2>{partnerOne} <span>&amp;</span> {partnerTwo}</h2>
        <time dateTime={wedding.couple?.date}>{formatDate(wedding.couple?.date ?? "")}</time>
        {location && <p className="mg-footer__location">{location}</p>}
        <a className="mg-footer__action" href={actionHref} target={actionIsExternal ? "_blank" : undefined} rel={actionIsExternal ? "noreferrer" : undefined}>
          {actionIsExternal ? "Plan your arrival" : "Explore the celebration"}
        </a>
        <div className="mg-footer__bottom">
          <span>{title}</span>
          <span>Made with care for the people we love</span>
        </div>
      </footer>
    </main>
  );
}
