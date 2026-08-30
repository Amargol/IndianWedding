import { useState } from "react";
import type {
  WeddingEvent,
  WeddingImage,
  WeddingInformation,
  WeddingWebsite,
} from "../../../types/WeddingSchema";
import type { TemplateProps, WeddingPage } from "../../types";
import { templatePath } from "../../routes";
import { styleForWedding } from "./style-presets";
import "./saanjh-editorial.css";

const pages: Array<{ id: WeddingPage; label: string }> = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our story" },
  { id: "events", label: "Celebrations" },
  { id: "details", label: "Guest guide" },
  { id: "gallery", label: "Gallery" },
];

function imageMap(wedding: WeddingWebsite) {
  return new Map(wedding.images.map((image) => [image.id, image]));
}

function imagesFor(
  information: WeddingInformation | undefined,
  images: Map<string, WeddingImage>,
) {
  return (information?.imageIds ?? [])
    .map((id) => images.get(id))
    .filter((image): image is WeddingImage => Boolean(image));
}

function formatDate(value: string, detail = false) {
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: detail ? "long" : "short",
    day: "numeric",
    year: detail ? "numeric" : undefined,
  }).format(date);
}

function formatTime(value?: string) {
  if (!value) return "Time to be announced";
  const [hour, minute] = value.split(":").map(Number);
  if (Number.isNaN(hour)) return value;
  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: minute ? "2-digit" : undefined,
  }).format(new Date(2026, 0, 1, hour, minute || 0));
}

function firstName(value: string) {
  return value.trim().split(/\s+/)[0] || value;
}

function sortByOrder<T extends { order?: number }>(items: T[]) {
  return [...items].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

function monogram(wedding: WeddingWebsite) {
  return `${wedding.couple.partnerOne.trim()[0] ?? ""}${wedding.couple.partnerTwo.trim()[0] ?? ""}`;
}

function SmartImage({ image, alt, fallback, className }: { image?: WeddingImage; alt: string; fallback: string; className?: string }) {
  const [failed, setFailed] = useState(!image);
  if (failed || !image) {
    return <div className={`saanjh-media-fallback ${className ?? ""}`} role="img" aria-label={alt}><span>{fallback}</span><small>✦</small></div>;
  }
  return <img className={className} src={image.url} alt={alt} onError={() => setFailed(true)} />;
}

function SiteNav({ wedding, page }: { wedding: WeddingWebsite; page: WeddingPage }) {
  return (
    <header className="saanjh-nav">
      <a className="saanjh-monogram" href={templatePath("saanjh-editorial", wedding.id, "home")}>
        {monogram(wedding)}
      </a>
      <nav aria-label="Wedding website pages">
        {pages.map((item) => (
          <a
            className={page === item.id ? "is-active" : ""}
            href={templatePath("saanjh-editorial", wedding.id, item.id)}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="saanjh-nav-date" href={templatePath("saanjh-editorial", wedding.id, "events")}>
        {formatDate(wedding.couple.date)}
      </a>
    </header>
  );
}

function HomePage({ wedding }: { wedding: WeddingWebsite }) {
  const images = imageMap(wedding);
  const story = wedding.information.find((item) => item.type === "our-story");
  const welcome =
    wedding.information.find((item) => /welcome|invitation|married/i.test(item.name)) ??
    wedding.information.find((item) => item.type === "custom") ??
    story;
  const hero =
    imagesFor(welcome, images)[0] ??
    imagesFor(story, images)[0] ??
    wedding.images[0];
  const orderedEvents = sortByOrder(wedding.events).slice(0, 4);
  const partnerOne = firstName(wedding.couple.partnerOne);
  const partnerTwo = firstName(wedding.couple.partnerTwo);

  return (
    <>
      <section className={`saanjh-hero ${hero ? "has-image" : "is-type-only"}`}>
        <div className="saanjh-hero-image">
          <SmartImage image={hero} alt={hero?.description ?? `${partnerOne} and ${partnerTwo}`} fallback={monogram(wedding)} />
        </div>
        <div className="saanjh-hero-copy">
          <p className="saanjh-kicker">Together with our families</p>
          <div className="saanjh-sun" aria-hidden="true"><span>✦</span></div>
          <h1><span>{partnerOne}</span><em>&</em><span>{partnerTwo}</span></h1>
          <div className="saanjh-hero-meta">
            <p>{formatDate(wedding.couple.date, true)}</p>
            {wedding.couple.location && <p>{wedding.couple.location}</p>}
          </div>
          <a className="saanjh-button" href={templatePath("saanjh-editorial", wedding.id, "events")}>
            Explore the celebration <span>↗</span>
          </a>
        </div>
        <div className="saanjh-hero-rail" aria-hidden="true">
          <span>A union of families</span><i /> <span>A weekend of joy</span>
        </div>
      </section>

      <section className="saanjh-welcome">
        <p className="saanjh-section-index">01 · A note from us</p>
        <div>
          <h2>{welcome?.name ?? "Join us in celebration"}</h2>
          <p>{welcome?.description ?? `We cannot wait to gather with the people we love most as ${partnerOne} and ${partnerTwo} begin their next chapter.`}</p>
          <span className="saanjh-signature">{partnerOne} & {partnerTwo}</span>
        </div>
      </section>

      <section className="saanjh-event-preview">
        <header>
          <p className="saanjh-section-index">02 · The festivities</p>
          <h2>One love.<br />Many celebrations.</h2>
        </header>
        <div className="saanjh-event-preview-list">
          {orderedEvents.map((event, index) => (
            <article key={event.id}>
              <span>0{index + 1}</span>
              <div><p>{formatDate(event.date)}</p><h3>{event.name}</h3></div>
              <p>{event.venue?.name ?? formatTime(event.startTime)}</p>
              <b>↗</b>
            </article>
          ))}
          <a href={templatePath("saanjh-editorial", wedding.id, "events")}>View the full weekend <span>→</span></a>
        </div>
      </section>
    </>
  );
}

function StoryPage({ wedding }: { wedding: WeddingWebsite }) {
  const images = imageMap(wedding);
  const story =
    wedding.information.find((item) => item.type === "our-story") ??
    wedding.information.find((item) => /story|journey|love/i.test(item.name));
  const storyImages = imagesFor(story, images);
  const primaryImage = storyImages[0] ?? wedding.images[1] ?? wedding.images[0];
  const secondaryImage = storyImages[1] ?? wedding.images[2];
  const chapters = story?.items?.length
    ? story.items
    : [{ id: "story", name: story?.name ?? "Our story", description: story?.description ?? "Our favorite chapter begins here." }];

  return (
    <section className="saanjh-page saanjh-story">
      <PageHeader eyebrow="How it all began" title={story?.name ?? "Written in the stars"} intro={story?.description} />
      <div className="saanjh-story-layout">
        <div className="saanjh-story-images">
          <SmartImage image={primaryImage} alt={primaryImage?.description ?? story?.name ?? "The couple"} fallback={monogram(wedding)} />
          {secondaryImage && <SmartImage image={secondaryImage} alt={secondaryImage.description ?? "A favorite memory"} fallback={monogram(wedding)} />}
        </div>
        <div className="saanjh-story-chapters">
          {chapters.map((chapter, index) => (
            <article key={chapter.id}>
              <span>CHAPTER {String(index + 1).padStart(2, "0")}</span>
              <h2>{chapter.name}</h2>
              {chapter.description && chapter.description.split("\n").filter(Boolean).map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function eventGlyph(type: WeddingEvent["type"]) {
  const glyphs: Partial<Record<WeddingEvent["type"], string>> = {
    mehndi: "✿", haldi: "☀", sangeet: "♪", garba: "✦", baraat: "♞",
    ceremony: "❈", reception: "◇", brunch: "☕", "after-party": "☾", "welcome-party": "◉",
  };
  return glyphs[type] ?? "✧";
}

function EventsPage({ wedding }: { wedding: WeddingWebsite }) {
  return (
    <section className="saanjh-page saanjh-events">
      <PageHeader eyebrow="Save the dates" title="The celebrations" intro={`${wedding.events.length} gatherings, one unforgettable beginning.`} />
      <div className="saanjh-events-list">
        {sortByOrder(wedding.events).map((event, index) => (
          <article key={event.id}>
            <div className="saanjh-event-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="saanjh-event-symbol">{eventGlyph(event.type)}</div>
            <div className="saanjh-event-title">
              <p>{formatDate(event.date, true)}</p>
              <h2>{event.name}</h2>
              {event.description && <p>{event.description}</p>}
            </div>
            <div className="saanjh-event-facts">
              <dl><dt>Time</dt><dd>{formatTime(event.startTime)}{event.endTime ? ` — ${formatTime(event.endTime)}` : ""}</dd></dl>
              <dl><dt>Venue</dt><dd>{event.venue?.name ?? "To be announced"}</dd>{event.venue?.address && <dd>{event.venue.address}</dd>}</dl>
              {event.dressCode && <dl><dt>Attire</dt><dd>{event.dressCode}</dd></dl>}
              {event.transportation && <dl><dt>Getting there</dt><dd>{event.transportation}</dd></dl>}
              {event.venue?.mapUrl && <a href={event.venue.mapUrl}>Open map ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DetailsPage({ wedding }: { wedding: WeddingWebsite }) {
  const images = imageMap(wedding);
  const details = sortByOrder(wedding.information).filter((item) => item.type !== "our-story" && item.type !== "gallery");
  return (
    <section className="saanjh-page saanjh-details">
      <PageHeader eyebrow="Plan your stay" title="The guest guide" intro="Everything you need to arrive, settle in, dress up, and celebrate with ease." />
      <div className="saanjh-details-list">
        {details.map((section, index) => {
          const sectionImages = imagesFor(section, images);
          return (
            <article className={sectionImages[0] ? "has-media" : ""} key={section.id}>
              <header><span>{String(index + 1).padStart(2, "0")}</span><p>{section.type.replaceAll("-", " ")}</p><h2>{section.name}</h2></header>
              <div className="saanjh-detail-body">
                {section.description && section.description.split("\n").filter(Boolean).map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                {section.items && <div className="saanjh-detail-items">{section.items.map((item) => <section key={item.id}><h3>{item.name}</h3>{item.description && <p>{item.description}</p>}{item.url && <a href={item.url}>Learn more ↗</a>}</section>)}</div>}
              </div>
              {sectionImages[0] && <SmartImage image={sectionImages[0]} alt={sectionImages[0].description ?? section.name} fallback={monogram(wedding)} />}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function GalleryPage({ wedding }: { wedding: WeddingWebsite }) {
  const galleryInfo = wedding.information.find((item) => item.type === "gallery");
  const images = imageMap(wedding);
  const requestedIds = [
    ...(galleryInfo?.imageIds ?? []),
    ...(galleryInfo?.items?.flatMap((item) => item.imageIds ?? []) ?? []),
  ];
  const galleryImages = (requestedIds.length ? requestedIds.map((id) => images.get(id)).filter(Boolean) : wedding.images) as WeddingImage[];
  const uniqueImages = galleryImages.filter((image, index, all) => all.findIndex((item) => item.id === image.id) === index);

  return (
    <section className="saanjh-page saanjh-gallery">
      <PageHeader eyebrow="A few favorite moments" title={galleryInfo?.name ?? "Scenes from our story"} intro={galleryInfo?.description ?? "The people, places, and memories that brought us here."} />
      {uniqueImages.length ? (
        <div className="saanjh-gallery-grid">
          {uniqueImages.map((image, index) => (
            <figure key={image.id}><SmartImage image={image} alt={image.description ?? `Wedding memory ${index + 1}`} fallback={monogram(wedding)} /><figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.description ?? "A favorite moment"}</figcaption></figure>
          ))}
        </div>
      ) : (
        <div className="saanjh-empty-gallery"><span>{monogram(wedding)}</span><p>More memories are coming soon.</p></div>
      )}
    </section>
  );
}

function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="saanjh-page-header">
      <p className="saanjh-kicker">{eyebrow}</p>
      <span aria-hidden="true">✦</span>
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </header>
  );
}

function SiteFooter({ wedding }: { wedding: WeddingWebsite }) {
  return (
    <footer className="saanjh-footer">
      <div><span>{monogram(wedding)}</span><p>{wedding.couple.partnerOne} & {wedding.couple.partnerTwo}</p></div>
      <p>{formatDate(wedding.couple.date, true)}{wedding.couple.location ? ` · ${wedding.couple.location}` : ""}</p>
      <a href={templatePath("saanjh-editorial", wedding.id, "home")}>Back to the beginning ↑</a>
    </footer>
  );
}

function Atmosphere({ effect }: { effect: ReturnType<typeof styleForWedding>["effect"] }) {
  if (effect === "none") return null;
  return (
    <div className={`saanjh-atmosphere saanjh-atmosphere-${effect}`} aria-hidden="true">
      {Array.from({ length: 14 }, (_, index) => <i key={index} />)}
    </div>
  );
}

export default function SaanjhEditorial({ wedding, page }: TemplateProps) {
  const preset = styleForWedding(wedding);
  const style = {
    "--saanjh-primary": preset.primary,
    "--saanjh-accent": preset.accent,
    "--saanjh-paper": preset.paper,
    "--saanjh-ink": preset.ink,
  } as React.CSSProperties;

  return (
    <main
      className={`saanjh saanjh-page-${page} saanjh-type-${preset.typography} saanjh-surface-${preset.surface} saanjh-images-${preset.imageTreatment}`}
      data-style-preset={preset.id}
      style={style}
    >
      <Atmosphere effect={preset.effect} />
      <SiteNav wedding={wedding} page={page} />
      {page === "home" && <HomePage wedding={wedding} />}
      {page === "story" && <StoryPage wedding={wedding} />}
      {page === "events" && <EventsPage wedding={wedding} />}
      {page === "details" && <DetailsPage wedding={wedding} />}
      {page === "gallery" && <GalleryPage wedding={wedding} />}
      <SiteFooter wedding={wedding} />
    </main>
  );
}
