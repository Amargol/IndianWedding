# PREFIX

- Phase 2 review of the wedding website schema against 20 real-world Indian wedding websites.
- The examples are split evenly between website-builder sites and standalone/custom-coded sites.
- Source content was checked on August 22, 2026. Unavailable or contradictory content is called out in the relevant example instead of being guessed.

# PROBLEMS

- `WeddingWebsite` has no source metadata. It cannot record the original URL, platform, verification date, live/expired status, or whether content came from an archive.
- `couple.date` only supports one date even though many weddings span several days or have a later reception in another country.
- An event requires a date even when an archived site names a ceremony but no longer exposes its individual date.
- Event time semantics are underspecified. Real sites use exact times, “onwards,” approximate times, all-day events, and overnight events. `endTime: "00:00"` cannot say whether midnight is on the same or following date.
- Composite events are common: Mehendi followed by Sangeet, Sangeet & Garba, Sangeet & Sagan, and multi-ritual wedding ceremonies. One `WeddingEventType` is necessarily lossy.
- The event-type union does not cover common ceremonies such as Grah Shanti, Mameru, Pithi, Vidhi, Varmala, Hast Milap, Anand Karaj, and meals. `other` works but loses useful meaning.
- A single website can span multiple timezones. Kosha and Marut, for example, have celebrations in India and New Jersey.
- Venue data cannot express phone numbers, coordinates, venue URLs, accessibility, parking, or accommodation relationships.
- `WeddingInformationItem` overloads `description` for addresses, phone numbers, roles, prices, ratings, form fields, and source caveats.
- Information sections are not discriminated. FAQs, people, hotels, travel routes, registry gifts, forms, and attractions all need different structured fields.
- RSVP forms, guestbooks, gift registries, calendar downloads, social links, and messaging links have no dedicated representation.
- Images do not record their role, caption separately from alt text, attribution, dimensions, focal point, or whether an asset is decorative, dormant, or externally hosted.
- The schema has no localization model even though one example renders English, Hindi, Bengali, and Odia.
- The schema cannot represent evidence quality or source conflicts. Several live sites disagree with themselves about times, date ranges, or room counts.
- IDs are plain strings with no stated uniqueness scope. Reusing an image ID as an information-item ID is currently possible.

# GOALS

- Preserve facts from the public website without inventing missing details.
- Keep the current compact authoring experience for simple weddings.
- Add structure only where the real-world examples show repeated demand.
- Make source status, time semantics, multi-day schedules, links, people, travel, and forms first-class.
- Keep unknown fields optional so archived and minimal custom sites remain representable.
- Support gradual migration from the current schema.

# NON GOALS

- Reproducing private RSVP guest lists or invitation-only data.
- Copying residential mailing addresses when a privacy-preserving description is sufficient.
- Treating commented-out code, unused translation strings, dormant images, or template placeholders as published wedding content.
- Building a CMS, RSVP backend, registry checkout, mapping service, or localization runtime in the schema package.
- Correcting source-site spelling or conflicting values without retaining what guests actually saw.

# TARGET STATE PROTECTED

- Existing `WeddingWebsite` objects remain valid.
- The simple `couple`, `images`, `events`, `information`, and `settings` layout remains recognizable.
- `WeddingEventType` retains `other` as an escape hatch.
- Dates and clock times remain ISO-like strings (`YYYY-MM-DD` and `HH:mm`).
- Optional fields remain optional; a minimal site can still use empty image and information arrays.

# TARGET STATE

## Recommended additions

```ts
type SourceMetadata = {
  url: string;
  platform?: "zola" | "the-knot" | "squarespace" | "custom" | "other";
  status?: "live" | "expired" | "not-found" | "archived";
  checkedAt?: string;
  notes?: string;
};

type WeddingDateRange = {
  primaryDate: string;
  startDate?: string;
  endDate?: string;
};

type EventTiming = {
  date?: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  qualifier?: "exact" | "onwards" | "approximate" | "all-day" | "unknown";
  timezone?: string;
};

type Venue = {
  name: string;
  address?: string;
  mapUrl?: string;
  website?: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
};

type ExternalLink = {
  label: string;
  url: string;
  kind?: "website" | "map" | "calendar" | "rsvp" | "registry" |
    "email" | "phone" | "whatsapp" | "social" | "media";
};
```

Add these capabilities to `WeddingWebsite` and `WeddingEvent`:

- `source?: SourceMetadata`
- `dates?: WeddingDateRange`, while retaining `couple.date` during migration
- Optional event `date`, plus `endDate`, `qualifier`, and event-level `timezone`
- `tags?: string[]` or `ceremonies?: string[]` for composite and culture-specific events while retaining the broad `type`
- `access?: "public" | "invite-only" | "private"`
- `venue?: Venue` and `links?: ExternalLink[]`
- `sourceNotes?: string[]` for material conflicts or inferences

## Information model

Replace the single catch-all information item over time with a discriminated union:

- `FaqItem` with `question` and `answer`
- `PersonItem` with `name`, `role`, `relationship`, and images
- `AccommodationItem` with address, phone, rate, booking code, booking deadline, check-in/out dates, and booking link
- `TravelItem` with mode, origin, destination, distance, duration, and link
- `AttractionItem` with address, phone, rating, map, website, and images
- `RegistryItem` with retailer, price, quantity, fund flag, and purchase link
- `FormItem` with form kind, deadline, fields, and submission URL
- `RichTextItem` or generic `CustomItem` as the escape hatch

## Media and localization

- Expand images with `alt`, `caption`, `role`, `credit`, `width`, and `height`.
- Add top-level `locales`, `defaultLocale`, and optional translated content maps.
- Define IDs as unique within the entire website, or explicitly document collection-local uniqueness.

# AGENT NOTES

- All 20 planned websites have a corresponding TypeScript example and are registered in `index.ts` in the source document's order.
- The 10 builder examples come first, followed by the 10 custom-coded examples.
- Kosha and Marut's Zola site returned 404, and Sushan and Sanah's Squarespace site had expired. Their examples use recoverable cached content and explicitly avoid inventing unavailable pages.
- Contradictory public values are preserved in descriptions or omitted from structured fields rather than silently normalized.
- Every example passes strict TypeScript validation against the current schema.
