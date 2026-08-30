# Partiful UX research: one structure, many vibes

## What Partiful gets right

Partiful does not ask a host to become a web designer. Its creation flow first
collects the event's essential information, then exposes a small set of
high-impact visual controls. In Partiful's own flow, the host chooses a poster,
font, theme/background, and animated effect while the event page structure stays
recognizable. The official creation guide explicitly separates the poster
picker, Theme sidebar, and Effects sidebar from event settings and content.

Sources:

- [Creating your first Partiful event](https://help.partiful.com/en-us/articles/15525299-creating-your-first-partiful-event)
- [Choosing a custom theme color](https://help.partiful.com/en-us/articles/15525358-how-can-i-pick-a-custom-color-for-the-theme-of-my-event)
- [Partiful product page](https://partiful.com/)

That separation produces three useful UX properties:

1. **Fast first success.** A complete event exists before the host makes visual
   decisions.
2. **Safe customization.** Visual changes cannot break hierarchy, RSVP, date,
   location, or guest communication.
3. **High perceived variety.** A background, typeface, poster, and animation
   change the emotional read of a page even when its layout is unchanged.

## Applying the model to weddings

An Indian wedding has far more structured information than a typical party:
multiple events, different venues and dress codes, travel, accommodations,
family context, traditions, and a gallery. Swapping whole templates creates a
large QA surface and makes it easy for a design to omit or mishandle data.

This project therefore keeps one stable five-page layout and splits
customization into layers:

| Layer | Partiful analogue | Saanjh implementation |
| --- | --- | --- |
| Content | Event details and settings | `WeddingWebsite` schema |
| Hero media | Poster | Schema image selection and fallback monogram |
| Palette | Theme / custom background color | Primary, accent, paper, and ink tokens |
| Background | Theme | Silk, parchment, dusk, and gulal surfaces |
| Typography | Font picker | Editorial, romantic, and modern modes |
| Image mood | Poster treatment | Natural, soft, jewel, and monochrome filters |
| Motion | Effect | Petals, fireflies, sparkle, rangoli, or none |

The layout and information hierarchy do not change between presets. Every
couple still gets Home, Our Story, Celebrations, Guest Guide, and Gallery.
Reduced-motion preferences disable the ambient effects.

## Example strategy

The 20 files in `exampleSchemas/` remain the source of truth. Each wedding is
assigned a stable style preset from its ID, so examples demonstrate meaningful
variation without hand-maintained duplicate markup. Schema-level
`primaryColor` and `secondaryColor` values override preset colors when present.

The preset system lives in:

`src/templates/saanjh-editorial/style-presets.ts`

Adding a new visual direction means adding a preset, not another template.
