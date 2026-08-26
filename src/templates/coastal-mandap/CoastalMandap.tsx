import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { WeddingEvent, WeddingInformation, WeddingImage } from "../../../types/WeddingSchema";
import type { TemplateProps } from "../../types";
import "./coastal-mandap.css";

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_IMAGES = [
  "https://picsum.photos/seed/konkan-wedding-sea/1920/1280",
  "https://picsum.photos/seed/indian-ocean-ceremony/1920/1280",
  "https://picsum.photos/seed/coastal-mandap-textile/1920/1280",
  "https://picsum.photos/seed/goa-wedding-evening/1920/1280",
  "https://picsum.photos/seed/arabian-sea-palm/1920/1280",
];

const EVENT_FALLBACK: WeddingEvent = {
  id: "gathering-soon",
  type: "other",
  name: "The weekend is taking shape",
  description: "The celebrations, timings and places will be shared here as the tide draws closer.",
  date: "",
};

const INFO_FALLBACKS: WeddingInformation[] = [
  {
    id: "story-soon",
    type: "our-story",
    name: "A story carried by the tide",
    description: "Come back soon for the story behind this celebration by the water.",
  },
  {
    id: "travel-soon",
    type: "travel",
    name: "Finding your way",
    description: "Travel notes and arrival details will be shared with guests shortly.",
  },
  {
    id: "stay-soon",
    type: "accommodations",
    name: "Stay close to the celebration",
    description: "A considered edit of places to stay is on its way.",
  },
];

function safeDate(value?: string) {
  if (!value) return "Date to be announced";
  const parsed = new Date(`${value}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

function shortDate(value?: string) {
  if (!value) return "Soon";
  const parsed = new Date(`${value}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).format(parsed);
}

function timeRange(event: WeddingEvent) {
  if (event.startTime && event.endTime) return `${event.startTime} — ${event.endTime}`;
  return event.startTime || "Timing to follow";
}

function titleCase(value: string) {
  return value.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function resolveReferencedImage(
  imageIds: string[] | undefined,
  imageMap: Map<string, WeddingImage>,
  fallbackIndex: number,
) {
  const referenced = imageIds?.map((id) => imageMap.get(id)).find((image) => image?.url?.trim());
  return referenced?.url || FALLBACK_IMAGES[fallbackIndex % FALLBACK_IMAGES.length];
}

function CoastalMandap({ wedding }: TemplateProps) {
  const root = useRef<HTMLElement>(null);
  const eventSection = useRef<HTMLElement>(null);
  const eventTrack = useRef<HTMLDivElement>(null);

  const imageMap = useMemo(
    () => new Map(wedding.images.filter((image) => image.url?.trim()).map((image) => [image.id, image])),
    [wedding.images],
  );

  const images = wedding.images.filter((image) => image.url?.trim());
  const imageAt = (index: number) => images[index % Math.max(images.length, 1)]?.url || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
  const imageDescription = (index: number) => images[index % Math.max(images.length, 1)]?.description || "A moment from the wedding celebration";

  const events = useMemo(() => {
    if (!wedding.events.length) return [EVENT_FALLBACK];
    return [...wedding.events].sort((a, b) => {
      const orderDifference = (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER);
      return orderDifference || a.date.localeCompare(b.date);
    });
  }, [wedding.events]);

  const information = useMemo(() => {
    if (!wedding.information.length) return INFO_FALLBACKS;
    return [...wedding.information].sort(
      (a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER),
    );
  }, [wedding.information]);

  const featureInformation = information.slice(0, 3);
  const postcards = [...featureInformation];
  for (let index = postcards.length; index < 3; index += 1) postcards.push(INFO_FALLBACKS[index]);

  const location = wedding.couple.location?.trim() || "By the Arabian Sea";
  const primaryMapUrl = events.find((event) => event.venue?.mapUrl)?.venue?.mapUrl;
  const names = `${wedding.couple.partnerOne} & ${wedding.couple.partnerTwo}`;
  const galleryImages: WeddingImage[] = images.length
    ? images
    : FALLBACK_IMAGES.map((url, index) => ({
        id: `coast-${index}`,
        url,
        description: "Coastal celebration",
      }));
  const marqueeEvents = Array.from(
    { length: Math.max(8, events.length * 2) },
    (_, index) => events[index % events.length],
  );

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".cm-nav", { y: -28, opacity: 0, duration: 0.8 })
        .from(".cm-hero__eyebrow", { y: 20, opacity: 0, duration: 0.65 }, "-=0.4")
        .from(".cm-hero__name-line", { yPercent: 110, duration: 1.15, stagger: 0.1 }, "-=0.35")
        .from(".cm-hero__details, .cm-hero__actions", { y: 24, opacity: 0, duration: 0.75, stagger: 0.12 }, "-=0.65");

      gsap.to(".cm-hero__image", {
        yPercent: 15,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".cm-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.utils.toArray<HTMLElement>(".cm-reveal").forEach((element) => {
        gsap.from(element, {
          y: 64,
          opacity: 0,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 83%", once: true },
        });
      });

      const media = gsap.matchMedia();
      media.add("(min-width: 901px)", () => {
        const section = eventSection.current;
        const track = eventTrack.current;
        if (!section || !track) return;

        const travel = () => Math.max(0, track.scrollWidth - window.innerWidth + window.innerWidth * 0.08);
        if (travel() < 20) return;

        gsap.to(track, {
          x: () => -travel(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${travel() + window.innerHeight * 0.65}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".cm-tide__panel").forEach((panel) => {
        const mediaElement = panel.querySelector("img");
        gsap.fromTo(
          mediaElement,
          { scale: 0.84, opacity: 0.3 },
          {
            keyframes: [
              { scale: 1, opacity: 1, duration: 0.48 },
              { scale: 1.055, opacity: 0.28, duration: 0.52 },
            ],
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <main className="coastal-mandap" ref={root}>
      <nav className="cm-nav" aria-label="Wedding navigation">
        <a className="cm-nav__monogram" href="#beginning" aria-label={`${names}, return to the beginning`}>
          <span>{wedding.couple.partnerOne.charAt(0) || "W"}</span>
          <i />
          <span>{wedding.couple.partnerTwo.charAt(0) || "W"}</span>
        </a>
        <p>{location}</p>
        <div className="cm-nav__links">
          <a href="#weekend">The weekend</a>
          <a href="#notes">Guest notes</a>
          <a href="#gallery">Gallery</a>
        </div>
      </nav>

      <header className="cm-hero" id="beginning">
        <div className="cm-hero__media" aria-hidden="true">
          <img className="cm-hero__image" src={imageAt(0)} alt="" />
        </div>
        <div className="cm-hero__wash" />
        <div className="cm-hero__geometry" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div className="cm-hero__content">
          <p className="cm-hero__eyebrow">Together, with the sea as witness</p>
          <h1 aria-label={names}>
            <span className="cm-hero__name-mask"><i className="cm-hero__name-line">{wedding.couple.partnerOne}</i></span>
            <span className="cm-hero__ampersand" aria-hidden="true">&</span>
            <span className="cm-hero__name-mask"><i className="cm-hero__name-line">{wedding.couple.partnerTwo}</i></span>
          </h1>
          <div className="cm-hero__details">
            <span>{safeDate(wedding.couple.date)}</span>
            <i aria-hidden="true" />
            <span>{location}</span>
          </div>
          <div className="cm-hero__actions">
            <a className="cm-button cm-button--light" href="#weekend">Enter the weekend</a>
            <a className="cm-button cm-button--line" href="#gallery">See the photographs</a>
          </div>
        </div>
        <a className="cm-hero__scroll" href="#invitation">Scroll with the tide <span aria-hidden="true">↓</span></a>
      </header>

      <section className="cm-invitation" id="invitation" aria-labelledby="cm-invitation-title">
        <p className="cm-invitation__kicker cm-reveal">An invitation from our families</p>
        <h2 className="cm-reveal" id="cm-invitation-title">
          Meet us where the palms lean toward the sea
          <span
            className="cm-inline-image"
            style={{ backgroundImage: `url(${imageAt(1)})` }}
            role="img"
            aria-label={imageDescription(1)}
          />
          and every horizon feels like a beginning.
        </h2>
        <div className="cm-invitation__aside cm-reveal">
          <span className="cm-sun-mark" aria-hidden="true" />
          <p>
            Join {wedding.couple.partnerOne} and {wedding.couple.partnerTwo} for a celebration shaped by ritual,
            salt air and the people we love most.
          </p>
        </div>
      </section>

      <section className="cm-events" id="weekend" ref={eventSection} aria-labelledby="cm-events-title">
        <div className="cm-events__heading">
          <p>From first welcome to last dance</p>
          <h2 id="cm-events-title">The celebration unfolds along the shore.</h2>
          <span>Drag your gaze across the weekend</span>
        </div>
        <div className="cm-events__track" ref={eventTrack}>
          {events.map((event, index) => {
            const eventImage = resolveReferencedImage(event.imageIds, imageMap, index + 2);
            return (
              <article className={`cm-event cm-event--${index % 3}`} key={event.id}>
                <div className="cm-event__image-wrap">
                  <img src={eventImage} alt="" loading="lazy" />
                  <span>{shortDate(event.date)}</span>
                </div>
                <div className="cm-event__body">
                  <p>{titleCase(event.type)}</p>
                  <h3>{event.name}</h3>
                  <div className="cm-event__meta">
                    <span>{timeRange(event)}</span>
                    <span>{event.venue?.name || "Venue to be announced"}</span>
                  </div>
                  {event.description && <p className="cm-event__description">{event.description}</p>}
                  <div className="cm-event__footer">
                    <span>{event.dressCode || "Come celebration-ready"}</span>
                    {event.venue?.mapUrl ? (
                      <a href={event.venue.mapUrl} target="_blank" rel="noreferrer">View location</a>
                    ) : (
                      <span>Details to follow</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
          <div className="cm-events__closing" aria-hidden="true">
            <span className="cm-sun-mark" />
            <p>Come for the rituals.<br />Stay for the sea.</p>
          </div>
        </div>
      </section>

      <section className="cm-postcards" id="notes" aria-labelledby="cm-postcards-title">
        <div className="cm-postcards__intro cm-reveal">
          <p>A few notes before you pack</p>
          <h2 id="cm-postcards-title">Consider this your postcard from the coast.</h2>
        </div>
        <div className="cm-postcards__grid">
          {postcards.map((section, index) => (
            <article className={`cm-postcard cm-postcard--${index + 1} cm-reveal`} key={`${section.id}-${index}`}>
              {index === 0 && (
                <div className="cm-postcard__image">
                  <img
                    src={resolveReferencedImage(section.imageIds, imageMap, 3)}
                    alt=""
                    loading="lazy"
                  />
                </div>
              )}
              <div className="cm-postcard__copy">
                <span>{titleCase(section.type)}</span>
                <h3>{section.name}</h3>
                {section.description && <p>{section.description}</p>}
                {section.items?.length ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.id}>
                        {item.url ? <a href={item.url}>{item.name}</a> : <strong>{item.name}</strong>}
                        {item.description && <small>{item.description}</small>}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {information.length > 3 && (
          <div className="cm-accordions" aria-label="More guest information">
            {information.slice(3).map((section, index) => (
              <article
                className="cm-accordion"
                key={section.id}
                style={{ backgroundImage: `url(${resolveReferencedImage(section.imageIds, imageMap, index + 1)})` }}
                tabIndex={0}
              >
                <div className="cm-accordion__shade" />
                <span>{titleCase(section.type)}</span>
                <div className="cm-accordion__content">
                  <h3>{section.name}</h3>
                  {section.description && <p>{section.description}</p>}
                  {section.items?.map((item) => (
                    <a href={item.url || `#${section.id}`} key={item.id}>{item.name}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <div className="cm-marquee" aria-hidden="true">
        <div className="cm-marquee__track">
          {marqueeEvents.map((event, index) => (
            <span key={`${event.id}-${index}`}>{event.name}<i /></span>
          ))}
        </div>
      </div>

      <section className="cm-tide" id="gallery" aria-labelledby="cm-gallery-title">
        <div className="cm-tide__heading">
          <p>Memories in motion</p>
          <h2 id="cm-gallery-title">The tide keeps every beautiful thing.</h2>
        </div>
        <div className="cm-tide__panels">
          {galleryImages.map((image, index) => (
              <figure className={`cm-tide__panel cm-tide__panel--${index % 3}`} key={image.id}>
                <img src={image.url} alt={image.description || "Wedding celebration"} loading="lazy" />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{image.description || `${names}, held in light and salt air`}</p>
                </figcaption>
              </figure>
            ))}
        </div>
      </section>

      <section className="cm-action" aria-labelledby="cm-action-title">
        <div className="cm-action__geometry" aria-hidden="true"><span /><span /><span /></div>
        <p>With love, and with both families</p>
        <h2 id="cm-action-title">We cannot wait to meet you by the water.</h2>
        <div className="cm-action__buttons">
          <a className="cm-button cm-button--ivory" href={primaryMapUrl || "#weekend"} target={primaryMapUrl ? "_blank" : undefined} rel={primaryMapUrl ? "noreferrer" : undefined}>
            {primaryMapUrl ? "Find the celebration" : "Revisit the weekend"}
          </a>
          <a className="cm-button cm-button--terracotta" href="#notes">Read guest notes</a>
        </div>
      </section>

      <footer className="cm-footer">
        <p>{wedding.couple.partnerOne} <i>&</i> {wedding.couple.partnerTwo}</p>
        <span>{safeDate(wedding.couple.date)} · {location}</span>
        <a href="#beginning">Back to the horizon</a>
      </footer>
    </main>
  );
}

export default CoastalMandap;
