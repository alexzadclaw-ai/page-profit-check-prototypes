# Sparks' Pressure Washing Page Profit Check Audit

## Quick take

Sparks' Pressure Washing already has more useful conversion material than many young local-service sites: a real owner story, real phone and email, local area context, pricing, service categories, testimonials, and before/after proof.

The biggest opportunity is not a total redesign. It is a sharper first screen and quote path while preserving the dark Wix look, blue pressure-washing palette, owner-led story, and existing work photos.

## What is already working

- The site has a real local identity: Nolan Sparks, Nacogdoches, and SFASU context.
- Phone and email are visible on the home page.
- Services and starting prices are already listed.
- Testimonials give trust cues around punctuality, attitude, accurate estimates, and equipment.
- Before/after images make the work tangible.
- The dark background, royal blue borders, and large pressure-washing imagery are recognizable and worth keeping.

## Biggest conversion issues

- The first screen says the business name, but it does not immediately say the service area, free estimate angle, or easiest next step.
- The hero text sits on a busy photo without enough contrast support.
- The header has both a nav "Get a Quote" and a pill "Get a Quote," but the path mostly behaves like a call link rather than a clear quote flow.
- Testimonial buttons say "Learn More," which does not match buyer intent as well as "Free Quote," "Recent Work," or "Send Photos."
- Service cards are visually strong but inconsistent: some have photos, some feel empty, and price formatting varies.
- The footer CTA is late in the page, so visitors may scroll a long way before seeing a large action button.
- The Wix banner/free-site texture can reduce trust for homeowners comparing local contractors.

## Best Page Profit Check improvements

- Keep the same hero photo and brand look, but add a subtle dark overlay so the business name and contact info read faster.
- Add direct hero CTAs: call for a free estimate and email/send photos.
- Add a first-screen trust line: Nacogdoches, TX and Stephen F. Austin State University area.
- Keep the about section shape, but make it easier to scan with small trust chips such as free estimate, owner operated, and local service.
- Replace generic testimonial buttons with conversion-specific actions.
- Standardize service names and prices: for example, "Patio & Porch" and "$0.20 / sqft."
- Keep blue-bordered service cards, but make every card include a photo and a short use-case cue.

## SEO basics to tighten

- Use a local title tag such as "Sparks' Pressure Washing | Nacogdoches TX Pressure Washing."
- Add a concise meta description mentioning houses, driveways, porches, pools, roofs, fences, and free estimates.
- Make the visible H1 include the business name and local service term.
- Add descriptive alt text to owner, before/after, and service photos.
- Add local business schema with phone, email, service area, and pressure washing services.
- Add a Google Business Profile link if one exists.
- Update the copyright year or remove the stale year cue.

## Realistic implementation angle

This can be handled as a surgical Wix edit rather than a rebuild. The highest-impact version is likely:

1. Hero copy and contrast update.
2. One clear quote action above the fold.
3. Service card copy/price cleanup.
4. Testimonials CTA cleanup.
5. Basic SEO title, meta description, headings, and alt text.

A practical ROM for hands-on Wix implementation would likely be in the $250 to $600 range depending on how many pages and mobile layouts are touched.

## Offer fit

Priority: A.

This is a strong fit for a Page Profit Check because the site already has enough raw material to show a believable before/after direction quickly. The offer should stay low-pressure and position the $99 work as audit/diagnosis only: review the page, identify the highest-impact fixes, and show a visual before/after direction. Any actual Wix implementation should be separate.

## Direct links

- Live site: https://nolansparkspressur.wixsite.com/website
- Prototype HTML: `prototypes/2026-05-16-0200-nightly/sparks-pressure-washing/index.html`
- Before screenshot: `screenshots/2026-05-16-0200-nightly/sparks-pressure-washing-target.png`
- After screenshot: `screenshots/2026-05-16-0200-nightly/sparks-pressure-washing-prototype.png`
- Source asset notes: `state/2026-05-16-0200-nightly/sparks-pressure-washing-source-assets.md`
- Offer draft: `offers/2026-05-16-0200-nightly/sparks-pressure-washing-offer.md`

## Audit-to-Prototype Coverage

- First-screen clarity: prototype adds "Call for a Free Estimate," "Email Photos," and the Nacogdoches/SFA service-area trust line.
- Hero readability: prototype keeps the original pressure-washing hero image and adds a subtle dark overlay/text shadow.
- Quote path: prototype makes phone and email actions clickable from the header and hero.
- Local trust: prototype keeps Nolan's story and adds small scan-friendly trust chips in the about card.
- Testimonials: prototype keeps the three testimonial names/quotes but replaces generic "Learn More" with action-oriented buttons.
- Services: prototype preserves the blue-bordered card grid while cleaning up service names, price formatting, and image consistency.
- Brand continuity: prototype retains the Wix-style top bar, dark header, blue section, original images, centered copy, blue borders, and late-page call CTA.

## Similarity check

Command run from `page-profit-check-prototypes`:

```bash
python3 scripts/visual_similarity_gate.py screenshots/2026-05-16-0200-nightly/sparks-pressure-washing-target.png screenshots/2026-05-16-0200-nightly/sparks-pressure-washing-prototype.png
```

Metrics:

- colorHistogramSimilarity: 0.9183
- pixelSimilarity: 0.8008
- edgeLayoutSimilarity: 0.6698
- perceptualHashSimilarity: 0.9375
- weightedSimilarity: 0.8179

Result: passed required thresholds of weightedSimilarity >= 0.25 and edgeLayoutSimilarity >= 0.45.

## Source assets reused

Reused original Wix/source-site assets include the header logo, Facebook icon, hero photo, Nolan portrait, two before/after gallery graphics, and seven service thumbnails. Full URL list and usage notes are documented in:

`state/2026-05-16-0200-nightly/sparks-pressure-washing-source-assets.md`

## Final acceptance checklist

- [x] Inspected live site with Playwright/Chromium.
- [x] Captured before screenshot.
- [x] Extracted image/logo/photo URLs from live DOM and checked computed CSS backgrounds.
- [x] Built standalone static prototype by hand.
- [x] Preserved recognizable Wix/header/hero/about/gallery/services/footer structure and blue pressure-washing palette.
- [x] Reused original source-site imagery only.
- [x] Captured after screenshot.
- [x] Screenshots are larger than 20KB.
- [x] Visual similarity gate passed.
- [x] Wrote source asset notes.
- [x] Wrote direct offer draft with $99 audit/diagnosis positioning.
