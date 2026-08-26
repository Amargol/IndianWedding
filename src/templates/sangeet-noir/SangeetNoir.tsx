import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { TemplateProps } from "../../types";
import "./sangeet-noir.css";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const shortDateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
});

function parseDate(value?: string) {
  if (!value) return null;
  const date = /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? new Date(`${value}T12:00:00`)
    : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(value?: string, short = false) {
  const date = parseDate(value);
  if (!date) return value || "Date to be announced";
  return (short ? shortDateFormatter : dateFormatter).format(date);
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

function textOrFallback(value: string | undefined, fallback: string) {
  return value?.trim() || fallback;
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

export default function SangeetNoir({ wedding }: TemplateProps) {
  const pageRef = useRef<HTMLElement>(null);
  const instanceId = useId().replace(/:/g, "");
  const [activeStory, setActiveStory] = useState(0);

  const images = useMemo(
    () => (wedding.images ?? []).filter((image) => image?.url),
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
  const featuredInformation = information.slice(0, 6);
  const remainingInformation = information.slice(6);

  const partnerOne = textOrFallback(wedding.couple?.partnerOne, "Together");
  const partnerTwo = textOrFallback(wedding.couple?.partnerTwo, "Forever");
  const weddingDate = formatDate(wedding.couple?.date);
  const location = textOrFallback(
    wedding.couple?.location,
    "Location to be announced",
  );
  const heroImage = images[0];
  const storyImage = images[1] ?? heroImage;
  const galleryImages = images.slice(1, 9);
  const firstEvent = events[0];
  const featureInfo = information[0];
  const dressInfo =
    information.find((item) => item.type === "dress-code") ?? information[1];
  const nameLength = Math.max(partnerOne.length, partnerTwo.length, 8);
  const heroViewportSize = Math.max(5.4, Math.min(11.5, 122 / nameLength));
  const heroMobileSize = Math.max(5.8, Math.min(17, 165 / nameLength));

  const imageForIds = (ids: string[] | undefined, fallbackIndex = 0) => {
    const matched = ids?.map((id) => imageById.get(id)).find(Boolean);
    return matched ?? images[fallbackIndex % Math.max(images.length, 1)];
  };

  useEffect(() => setActiveStory(0), [featuredInformation.length, wedding.id]);

  useGSAP(
    () => {
      const root = pageRef.current;
      if (!root || typeof window === "undefined") return;

      gsap.registerPlugin(ScrollTrigger);
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const context = gsap.context(() => {
        if (reducedMotion) {
          gsap.set(".sn-reveal, .sn-event__visual", {
            clearProps: "all",
            opacity: 1,
          });
          return;
        }

        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(".sn-nav", { y: -28, opacity: 0, duration: 0.8 })
          .from(
            ".sn-hero__eyebrow",
            { y: 24, opacity: 0, duration: 0.7 },
            "-=0.45",
          )
          .from(
            ".sn-hero__name-line",
            { yPercent: 120, rotate: 2, duration: 1.15, stagger: 0.12 },
            "-=0.45",
          )
          .from(
            ".sn-hero__details, .sn-hero__action",
            { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 },
            "-=0.6",
          )
          .from(
            ".sn-hero__media",
            { clipPath: "inset(100% 0 0 0)", duration: 1.3 },
            "-=1.15",
          );

        gsap.to(".sn-hero__media-inner", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: ".sn-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        });

        gsap.to(".sn-orbit--one", {
          rotation: 75,
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ".sn-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });

        gsap.utils.toArray<HTMLElement>(".sn-reveal").forEach((element) => {
          gsap.from(element, {
            y: 54,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          });
        });

        const schedule = root.querySelector<HTMLElement>(".sn-schedule");
        const scheduleIntro = root.querySelector<HTMLElement>(
          ".sn-schedule__intro",
        );
        if (
          schedule &&
          scheduleIntro &&
          window.innerWidth >= 900 &&
          events.length
        ) {
          ScrollTrigger.create({
            trigger: schedule,
            start: "top 12%",
            endTrigger: ".sn-schedule__list",
            end: "bottom 72%",
            pin: scheduleIntro,
            pinSpacing: false,
          });
        }

        gsap.utils
          .toArray<HTMLElement>(".sn-event__visual")
          .forEach((visual) => {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: visual,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.1,
                },
              })
              .fromTo(
                visual,
                { scale: 0.82, opacity: 0.35 },
                { scale: 1, opacity: 1, duration: 0.56, ease: "none" },
              )
              .to(visual, {
                scale: 1.04,
                opacity: 0.2,
                duration: 0.44,
                ease: "none",
              });
          });

        const eventCards = gsap.utils.toArray<HTMLElement>(".sn-event");
        eventCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 84, scale: 0.94 },
            {
              y: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "top 38%",
                scrub: 1,
              },
            },
          );

          const nextCard = eventCards[index + 1];
          if (nextCard) {
            gsap.to(card, {
              scale: 0.955,
              opacity: 0.42,
              filter: "brightness(0.52)",
              ease: "none",
              scrollTrigger: {
                trigger: nextCard,
                start: "top 86%",
                end: "top 30%",
                scrub: 1,
              },
            });
          }
        });

        gsap.utils
          .toArray<HTMLElement>(".sn-gallery__figure img")
          .forEach((image, index) => {
            gsap.fromTo(
              image,
              { yPercent: index % 2 ? -8 : 8 },
              {
                yPercent: index % 2 ? 8 : -8,
                ease: "none",
                scrollTrigger: {
                  trigger: image,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              },
            );
          });

        ScrollTrigger.refresh();
      }, pageRef);

      return () => context.revert();
    },
    {
      scope: pageRef,
      dependencies: [events.length, images.length, wedding.id],
      revertOnUpdate: true,
    },
  );

  const style = {
    "--sn-hero-size": `${heroViewportSize}vw`,
    "--sn-hero-mobile-size": `${heroMobileSize}vw`,
  } as CSSProperties;

  return (
    <main ref={pageRef} className="sn-shell" style={style}>
      <nav className="sn-nav" aria-label="Wedding navigation">
        <a
          className="sn-nav__monogram"
          href={`#sn-top-${instanceId}`}
          aria-label="Back to top"
        >
          <span>{partnerOne.charAt(0)}</span>
          <i aria-hidden="true" />
          <span>{partnerTwo.charAt(0)}</span>
        </a>
        <div className="sn-nav__links">
          <a href={`#sn-story-${instanceId}`}>The story</a>
          <a href={`#sn-schedule-${instanceId}`}>Celebrations</a>
          {images.length > 1 && (
            <a href={`#sn-gallery-${instanceId}`}>Gallery</a>
          )}
        </div>
        <a className="sn-nav__date" href={`#sn-schedule-${instanceId}`}>
          {formatDate(wedding.couple?.date, true)}
        </a>
      </nav>

      <header id={`sn-top-${instanceId}`} className="sn-hero">
        <div className="sn-orbit sn-orbit--one" aria-hidden="true" />
        <div className="sn-orbit sn-orbit--two" aria-hidden="true" />
        <div className="sn-hero__copy">
          <p className="sn-hero__eyebrow">
            Shaadi, sound and a very good night
          </p>
          <h1
            className="sn-hero__title"
            aria-label={`${partnerOne} and ${partnerTwo}`}
          >
            <span className="sn-hero__line-clip">
              <span className="sn-hero__name-line">{partnerOne}</span>
            </span>
            <span className="sn-hero__line-clip sn-hero__line-clip--second">
              <span className="sn-hero__name-line">
                <em>&amp;</em> {partnerTwo}
              </span>
            </span>
          </h1>
          <div className="sn-hero__details">
            <p>{weddingDate}</p>
            <span aria-hidden="true" />
            <p>{location}</p>
          </div>
          <a className="sn-hero__action" href={`#sn-schedule-${instanceId}`}>
            Enter the celebration
          </a>
        </div>

        <div className={`sn-hero__media${heroImage ? "" : " sn-image--empty"}`}>
          {heroImage ? (
            <img
              className="sn-hero__media-inner"
              src={heroImage.url}
              alt={heroImage.description || `${partnerOne} and ${partnerTwo}`}
            />
          ) : (
            <div
              className="sn-hero__media-inner sn-hero__fallback"
              aria-hidden="true"
            >
              <span>नाच</span>
            </div>
          )}
          <div className="sn-hero__media-wash" aria-hidden="true" />
        </div>
      </header>

      <div className="sn-marquee" aria-hidden="true">
        <div className="sn-marquee__track">
          {[0, 1, 2, 3].map((item) => (
            <span key={item}>
              Naach all night <i /> Dhol meets disco <i /> Milni meets midnight{" "}
              <i />
            </span>
          ))}
        </div>
      </div>

      <section id={`sn-story-${instanceId}`} className="sn-intro sn-section">
        <div className="sn-section__heading sn-reveal">
          <p>The rhythm before forever</p>
          <h2>
            A love story with
            {storyImage ? (
              <span
                className="sn-inline-image"
                style={{ backgroundImage: `url(${storyImage.url})` }}
                role="img"
                aria-label={storyImage.description || "A wedding memory"}
              />
            ) : (
              <span
                className="sn-inline-image sn-inline-image--empty"
                aria-hidden="true"
              />
            )}
            its own beat.
          </h2>
        </div>

        <div className="sn-bento sn-reveal">
          <article className="sn-bento__feature">
            {storyImage && (
              <img
                src={storyImage.url}
                alt={storyImage.description || "Wedding celebration"}
              />
            )}
            <div className="sn-bento__overlay" />
            <div className="sn-bento__content">
              <p>{featureInfo?.name || "The two of us"}</p>
              <h3>
                {featureInfo?.description ||
                  `A celebration of ${partnerOne} and ${partnerTwo}, surrounded by the people who made the story possible.`}
              </h3>
            </div>
          </article>
          <article className="sn-bento__card sn-bento__card--lime">
            <p>First on the floor</p>
            <h3>{firstEvent?.name || "The celebration"}</h3>
            <span>
              {formatDate(firstEvent?.date || wedding.couple?.date, true)}
            </span>
          </article>
          <article className="sn-bento__card sn-bento__card--magenta">
            <p>Dress for the night</p>
            <h3>
              {firstEvent?.dressCode ||
                dressInfo?.description ||
                "Festive Indian, made for dancing."}
            </h3>
          </article>
        </div>
      </section>

      {information.length > 0 && (
        <section
          className="sn-stories sn-section"
          aria-labelledby={`sn-stories-title-${instanceId}`}
        >
          <div className="sn-stories__top sn-reveal">
            <h2 id={`sn-stories-title-${instanceId}`}>
              Everything worth knowing.
            </h2>
            <p>
              Tap a chapter for the details. Keep the important bits close;
              leave room for surprise.
            </p>
          </div>
          <div className="sn-accordion sn-reveal">
            {featuredInformation.map((info, index) => {
              const panelImage = imageForIds(info.imageIds, index + 2);
              const isActive = index === activeStory;
              return (
                <article
                  key={info.id}
                  className={`sn-accordion__panel${isActive ? " is-active" : ""}`}
                >
                  {panelImage && (
                    <img
                      src={panelImage.url}
                      alt={panelImage.description || info.name}
                    />
                  )}
                  <div className="sn-accordion__wash" aria-hidden="true" />
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`sn-info-${instanceId}-${index}`}
                    onClick={() => setActiveStory(index)}
                    onFocus={() => setActiveStory(index)}
                    onMouseEnter={() => setActiveStory(index)}
                  >
                    <span>{info.name}</span>
                  </button>
                  <div
                    id={`sn-info-${instanceId}-${index}`}
                    className="sn-accordion__content"
                    aria-hidden={!isActive}
                  >
                    <p>
                      {info.description ||
                        "More details from the families will be shared here soon."}
                    </p>
                    {(info.items ?? []).length > 0 && (
                      <ul>
                        {(info.items ?? []).map((item) => (
                          <li key={item.id}>
                            {safeExternalUrl(item.url) ? (
                              <a
                                href={safeExternalUrl(item.url)}
                                target="_blank"
                                rel="noreferrer"
                                tabIndex={isActive ? 0 : -1}
                              >
                                {item.name}
                              </a>
                            ) : (
                              <strong>{item.name}</strong>
                            )}
                            {item.description && (
                              <span>{item.description}</span>
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
          {remainingInformation.length > 0 && (
            <div className="sn-notes" aria-label="More wedding information">
              {remainingInformation.map((info, index) => {
                const noteImage = imageForIds(info.imageIds, index + 8);
                return (
                  <article
                    className={`sn-notes__item sn-reveal${noteImage ? "" : " sn-notes__item--text"}`}
                    key={info.id}
                  >
                    {noteImage && (
                      <div className="sn-notes__media">
                        <img
                          src={noteImage.url}
                          alt={noteImage.description || info.name}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="sn-notes__body">
                      <p>{info.type.replaceAll("-", " ")}</p>
                      <h3>{info.name}</h3>
                      {info.description && <div>{info.description}</div>}
                      {(info.items ?? []).length > 0 && (
                        <ul>
                          {(info.items ?? []).map((item) => {
                            const itemUrl = safeExternalUrl(item.url);
                            return (
                              <li key={item.id}>
                                {itemUrl ? (
                                  <a
                                    href={itemUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {item.name}
                                  </a>
                                ) : (
                                  <strong>{item.name}</strong>
                                )}
                                {item.description && (
                                  <span>{item.description}</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      )}

      <section
        id={`sn-schedule-${instanceId}`}
        className="sn-schedule sn-section"
      >
        <div className="sn-schedule__intro">
          <p className="sn-kicker">
            Come for the rituals. Stay for the encore.
          </p>
          <h2>One celebration, many moods.</h2>
          <p className="sn-schedule__note">
            {location}. Times, dress notes and directions are gathered here for
            an easy arrival.
          </p>
        </div>

        <div className="sn-schedule__list">
          {events.length > 0 ? (
            events.map((event, index) => {
              const eventImage = imageForIds(event.imageIds, index);
              const time = [
                formatTime(event.startTime),
                formatTime(event.endTime),
              ]
                .filter(Boolean)
                .join(" — ");
              return (
                <article
                  className="sn-event"
                  key={event.id}
                  style={{ "--sn-event-index": index } as CSSProperties}
                >
                  <div
                    className={`sn-event__visual${eventImage ? "" : " sn-image--empty"}`}
                  >
                    {eventImage ? (
                      <img
                        src={eventImage.url}
                        alt={eventImage.description || event.name}
                      />
                    ) : (
                      <span aria-hidden="true">नाच</span>
                    )}
                  </div>
                  <div className="sn-event__body">
                    <p className="sn-event__cue">
                      {event.type.replaceAll("-", " ")} / live programme
                    </p>
                    <div className="sn-event__date">
                      <span>{formatDate(event.date, true)}</span>
                      {time && <span>{time}</span>}
                    </div>
                    <h3>{event.name}</h3>
                    {event.description && <p>{event.description}</p>}
                    <dl>
                      {event.venue?.name && (
                        <div>
                          <dt>Venue</dt>
                          <dd>
                            {safeExternalUrl(event.venue.mapUrl) ? (
                              <a
                                href={safeExternalUrl(event.venue.mapUrl)}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {event.venue.name}
                              </a>
                            ) : (
                              event.venue.name
                            )}
                            {event.venue.address && (
                              <small>{event.venue.address}</small>
                            )}
                          </dd>
                        </div>
                      )}
                      {event.dressCode && (
                        <div>
                          <dt>Dress</dt>
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
                  </div>
                </article>
              );
            })
          ) : (
            <div className="sn-schedule__empty sn-reveal">
              <p>The full celebration schedule is being tuned.</p>
              <strong>{weddingDate}</strong>
            </div>
          )}
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section
          id={`sn-gallery-${instanceId}`}
          className="sn-gallery sn-section"
        >
          <div className="sn-gallery__heading sn-reveal">
            <p>Frames from the story</p>
            <h2>Still moments. Full volume.</h2>
          </div>
          <div className="sn-gallery__grid">
            {galleryImages.map((image, index) => (
              <figure className="sn-gallery__figure sn-reveal" key={image.id}>
                <img
                  src={image.url}
                  alt={image.description || `Wedding memory ${index + 1}`}
                  loading="lazy"
                />
                <figcaption>
                  {image.description || `${partnerOne} & ${partnerTwo}`}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="sn-finale">
        <div className="sn-finale__ring" aria-hidden="true" />
        <p className="sn-reveal">Save the date. Bring your best moves.</p>
        <h2 className="sn-reveal">
          Meet us
          <span>after dark.</span>
        </h2>
        <a
          className="sn-finale__cta sn-reveal"
          href={`#sn-schedule-${instanceId}`}
        >
          Plan your celebration
        </a>
      </section>

      <footer className="sn-footer">
        <p>
          {partnerOne} &amp; {partnerTwo}
        </p>
        <p>{weddingDate}</p>
        <a href={`#sn-top-${instanceId}`}>Back to the beginning</a>
      </footer>
    </main>
  );
}
