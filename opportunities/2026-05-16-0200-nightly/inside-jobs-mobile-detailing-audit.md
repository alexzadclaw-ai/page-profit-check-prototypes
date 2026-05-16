# Inside Jobs Mobile Details Page Profit Check Audit

## Quick take

Inside Jobs Mobile Details already has a strong foundation: clear interior-detailing packages, starting prices, a real owner story, testimonials, gallery proof, phone/email contact, FAQs, and a mobile-service convenience angle.

The biggest opportunity is not a redesign. It is making the first screen and package-selection path easier to understand while preserving the dark Wix look, elegant serif type, car-interior imagery, centered copy, service grid, and mobile detailing personality.

## What is already working

- The page clearly explains that this is mobile interior detailing from the customer’s home.
- Phone, email, quote form, and a call CTA are already present.
- Package content is much more complete than many local-service sites, including Basic, Deep Clean, Boat Interior, Monthly, stain/spill, fleet, premium, steam, and engine-bay add-ons.
- Starting prices and durations help visitors self-select before reaching out.
- The gallery and before/after section show real detail work.
- The FAQ answers practical buying questions around water, exterior services, travel radius, and gift cards.
- The dark palette, Playfair-style serif typography, full-width interior photo, and two-column Wix service blocks create a recognizable luxury/detailing feel.

## Biggest conversion issues

- The first screen says the business name, but it does not quickly surface the service radius, best package path, or whether visitors should call, email photos, or submit the form.
- The main CTA is only “Contact Ayden,” which is friendly but less specific than “Call Ayden” or “Email Photos for a Quote.”
- Package information is useful but long, making the buyer do too much reading before deciding between Basic, Deep Clean, Monthly, or a stain/spill package.
- Pricing is present but formatting varies by package, which makes comparison harder.
- The quote form is late on a very long page, with limited guidance on what details to send.
- Some trust cues are buried lower on the page instead of being visible near the hero.
- The Wix/free-site banner and generic Wix social links can slightly reduce trust for shoppers comparing local providers.

## Best Page Profit Check improvements

- Keep the same black, white, and dark-blue Wix visual direction, but make the hero explain the mobile convenience and next step faster.
- Add two direct hero actions: call Ayden and email/send photos for a quote.
- Add a first-screen service-area trust line: Lake George, Queensbury, Saratoga Springs, Glens Falls, Malta, and Wilton.
- Preserve the package order but make every service block more scannable with cleaned-up pricing, duration, and one action per package.
- Keep the logo and why-choose section, but add small trust chips such as Mobile service, Interior focused, and Package pricing.
- Make the quote section tell visitors exactly what to send: vehicle type, photos, town, and package interest.
- Remove or replace leftover Wix/template social links if the site is updated.

## SEO basics to tighten

- Use a local title tag such as “Inside Jobs Mobile Details | Mobile Auto Detailing in Queensbury NY.”
- Add a meta description that mentions mobile interior detailing, car, truck, SUV, boat interior, pet hair, stains, shampooing, and the service radius.
- Make the visible H1 include a local service term, for example “Mobile Interior Detailing in the Lake George and Queensbury Area.”
- Add descriptive alt text to the logo, package photos, owner portrait, and before/after gallery images.
- Add LocalBusiness or AutoDetailing schema with phone, email, service area, and services.
- Add a Google Business Profile link if available and point “See More Reviews” to the cleanest review URL.
- Update copyright and remove generic Wix social links that do not belong to Inside Jobs.

## Realistic implementation angle

This is a surgical Wix improvement, not a rebuild. The highest-impact sequence would likely be:

1. Hero copy and CTA cleanup.
2. Add local service-area and trust cues above the fold.
3. Standardize package names, durations, and starting prices.
4. Add package-specific quote prompts.
5. Clean up footer/social/template leftovers and SEO basics.

A realistic ROM for hands-on Wix implementation would likely be around $300 to $700 depending on how many sections and mobile breakpoints are edited.

## Offer fit

Priority: A.

This is a strong fit for a Page Profit Check because the site already has enough raw material to show a believable before/after direction quickly. The $99 offer should stay framed as audit/diagnosis only: review the page, identify the highest-impact fixes, and show visual before/after direction. Actual Wix changes should be separate.

## Direct links

- Live site: https://aydenvanderwarker.wixsite.com/insidejobsmobiledeta
- Prototype HTML: `prototypes/2026-05-16-0200-nightly/inside-jobs-mobile-detailing/index.html`
- Before screenshot: `screenshots/2026-05-16-0200-nightly/inside-jobs-mobile-detailing-target.png`
- After screenshot: `screenshots/2026-05-16-0200-nightly/inside-jobs-mobile-detailing-prototype.png`
- Source asset notes: `state/2026-05-16-0200-nightly/inside-jobs-mobile-detailing-source-assets.md`
- Offer draft: `offers/2026-05-16-0200-nightly/inside-jobs-mobile-detailing-offer.md`

## Audit-to-Prototype Coverage

- First-screen clarity: prototype keeps the original hero structure but adds “Call Ayden,” “Email Photos for a Quote,” and a service-radius trust line.
- Visual continuity: prototype preserves the Wix top banner, black header, centered hero, serif typography, full-width car-interior image band, logo panel, and dark service-grid structure.
- Package selection: prototype keeps the package order while making prices, durations, and best next actions easier to scan.
- Trust cues: prototype adds small trust chips near the why-choose copy and keeps Ayden’s owner story, gallery, FAQ, testimonials, phone, and email.
- Quote path: prototype gives visitors specific quote instructions and keeps both phone and email actions visible.
- Cleanup angle: prototype removes generic-feeling social/footer emphasis and makes the conversion actions more relevant to detailing buyers.

## Similarity check

Command run from `page-profit-check-prototypes`:

```bash
python3 scripts/visual_similarity_gate.py screenshots/2026-05-16-0200-nightly/inside-jobs-mobile-detailing-target.png screenshots/2026-05-16-0200-nightly/inside-jobs-mobile-detailing-prototype.png
```

Metrics:

- colorHistogramSimilarity: 0.3985
- pixelSimilarity: 0.813
- edgeLayoutSimilarity: 0.7667
- perceptualHashSimilarity: 0.6719
- weightedSimilarity: 0.6766

Result: passed required thresholds of weightedSimilarity >= 0.25 and edgeLayoutSimilarity >= 0.45.

## Source assets reused

Reused original Wix/source-site assets include the hero car interior image, Inside Jobs logo, eight service/detailing photos, owner portrait, and three before/after gallery images. Full URL list and usage notes are documented in:

`state/2026-05-16-0200-nightly/inside-jobs-mobile-detailing-source-assets.md`

## Final acceptance checklist

- [x] Confirmed runtime model requirement: openai-codex/gpt-5.5 with xhigh thinking.
- [x] Inspected live site with Playwright/Chromium.
- [x] Captured before screenshot.
- [x] Extracted image/logo/photo URLs from live DOM and checked computed CSS backgrounds.
- [x] Built standalone static prototype by hand.
- [x] Preserved recognizable Wix/header/hero/why-choose/services/testimonials/gallery/FAQ/quote/footer structure.
- [x] Reused original source-site imagery only.
- [x] Captured after screenshot from a local file URL using Chromium.
- [x] Screenshots are larger than 20KB.
- [x] Visual similarity gate passed.
- [x] Wrote source asset notes.
- [x] Wrote direct offer draft with $99 audit/diagnosis positioning.
