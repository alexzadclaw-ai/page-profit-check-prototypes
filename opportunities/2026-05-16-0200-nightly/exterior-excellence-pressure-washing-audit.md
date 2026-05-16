# Exterior Excellence Page Profit Check Audit

## Quick take

Exterior Excellence already has the right core idea on the page: pressure washing, window washing, exterior cleaning, two phone numbers, an email address, a free-estimate CTA, and clear residential/commercial service language. The biggest opportunity is not a full redesign. It is a tighter Wix cleanup that removes template friction and makes the estimate request feel more trustworthy.

## What is already working

- The visitor can quickly understand the main services: pressure washing, window washing, and exterior cleaning.
- The free quote CTA is visible in the hero and again near the contact area.
- Both phone numbers are present and clickable.
- The email address is present and clickable.
- The brand has a recognizable circular logo and a consistent orange/black/white visual direction.
- The copy mentions useful commercial use cases like parking garages, drive-thrus, and parking lots.
- The page already has a natural section flow: hero, services, pictures, estimate request, footer.

## Biggest conversion issues

- The Wix promotional banner and Wix attribution make the page feel unfinished before a visitor decides to request an estimate.
- The Pictures section says “Coming Soon,” which removes proof at the exact point where a visitor expects before/after examples.
- The footer copyright says 2035, which looks like a template artifact or accidental future date.
- The hero headline is clear but could work harder by connecting the service to the Colorado Springs area and the free-estimate action.
- The service section has helpful content, but the long intro and three generic service blurbs do not quickly answer “what surfaces do you clean?”
- The contact section uses generic “questions, comments, or feedback” language instead of guiding the visitor through a simple estimate request.
- Image alt text appears empty, which weakens accessibility and SEO basics.

## Best Page Profit Check improvements

- Keep the same Wix look, orange palette, logo placement, and section order, but remove the obvious template leftovers.
- Make the hero CTA explicitly about a free estimate and connect it to email/phone actions.
- Add a lightweight trust strip: free estimates, residential plus commercial, Exterior Wash Experts LLC.
- Rewrite service cards with more concrete surfaces: driveways, sidewalks, siding, decks, fences, storefronts, drive-thrus, parking areas.
- Replace the “Coming Soon” gallery message with a proof-oriented Recent Work block that explains what photos should show.
- Turn the estimate section into a simple three-step flow: surface, location, optional photos.
- Update footer hierarchy so phone, email, and legal/business name are easier to scan.

## SEO basics to tighten

- Use a localized primary title such as “Pressure Washing & Window Washing in Colorado Springs | Exterior Excellence.”
- Add a meta description focused on free estimates, pressure washing, window washing, siding, decks, fences, driveways, parking garages, drive-thrus, and commercial exterior cleaning.
- Make the H1 include the main service and location intent.
- Add descriptive alt text to the logo, hero/poster image if used meaningfully, window washing photo, and estimate background if not decorative.
- Add LocalBusiness or HomeAndConstructionBusiness schema once the full NAP and service area details are confirmed.
- Keep one clear contact path with consistent phone number, email, and business name.

## Realistic implementation angle

This is a surgical Wix implementation, not a brand rebuild. The existing site can keep its current hero geometry, logo, orange CTA style, light gray services section, image treatment, and orange footer. The work would mainly be copy, section cleanup, CTA hierarchy, gallery proof, footer/date correction, and basic SEO metadata.

A separate implementation scope would likely be a small Wix editing project after the audit, with the final cost depending on whether new real project photos are available and whether the business wants only the home page adjusted or supporting pages updated too.

## Offer fit

This is a good fit for a $99 Page Profit Check because the site already has the right basics, but the highest-impact issues are specific and visible. The $99 offer should stay positioned as audit/diagnosis only: review the page, identify the biggest fixes, and show a visual before/after direction. Any Wix editing or live-site implementation should be scoped separately.

## Direct links

- Live site: https://exteriorwashexpert.wixsite.com/exterior-excellence
- Live contact email: mailto:exteriorwashexpertsllc@gmail.com
- Live phone 1: tel:719-694-4669
- Live phone 2: tel:719-641-3523
- Target screenshot: `screenshots/2026-05-16-0200-nightly/exterior-excellence-pressure-washing-target.png`
- Prototype screenshot: `screenshots/2026-05-16-0200-nightly/exterior-excellence-pressure-washing-prototype.png`
- Prototype HTML: `prototypes/2026-05-16-0200-nightly/exterior-excellence-pressure-washing/index.html`
- Source asset notes: `state/2026-05-16-0200-nightly/exterior-excellence-pressure-washing-source-assets.md`
- Offer draft: `offers/2026-05-16-0200-nightly/exterior-excellence-pressure-washing-offer.md`

## Audit-to-Prototype Coverage

| Audit issue | Prototype coverage |
| --- | --- |
| Wix/template friction | Removed Wix ad and Wix-powered footer language from the prototype direction. |
| Future-date footer | Footer uses 2026 and keeps the business/legal name clearer. |
| Thin hero conversion path | Hero retains the original image/logo geometry and routes CTA to a free-estimate email. |
| Generic service copy | Service cards now mention concrete surfaces and residential/commercial use cases. |
| Missing trust path | Added a small trust strip for free estimates, residential/commercial service, and Exterior Wash Experts LLC. |
| Coming-soon gallery | Replaced with Recent Work proof copy using the original window-washing photo treatment. |
| Generic contact copy | Estimate section now asks for surface, location, and optional photos, with call/email actions. |
| Contact hierarchy | Footer and estimate area keep phone/email visible and clickable. |

## Similarity check

Visual gate command run:

`python3 scripts/visual_similarity_gate.py screenshots/2026-05-16-0200-nightly/exterior-excellence-pressure-washing-target.png screenshots/2026-05-16-0200-nightly/exterior-excellence-pressure-washing-prototype.png`

Metrics:

- colorHistogramSimilarity: 0.8480
- pixelSimilarity: 0.7907
- edgeLayoutSimilarity: 0.7414
- perceptualHashSimilarity: 0.7500
- weightedSimilarity: 0.7866

Result: passed. Required thresholds were weightedSimilarity >= 0.25 and edgeLayoutSimilarity >= 0.45.

Screenshot sizes:

- Target screenshot: 1,872,451 bytes
- Prototype screenshot: 2,787,653 bytes

## Source assets reused

- Hero/video poster image from the live Wix page, reused as the hero background.
- Exterior Excellence circular logo from the live Wix page, reused in the hero and estimate area.
- Window-washing photo from the live Wix page, reused in the Pictures / Recent Work area.
- Estimate-area background photo from the live Wix page, reused behind the request-estimate section.

Full URL list and usage notes are in `state/2026-05-16-0200-nightly/exterior-excellence-pressure-washing-source-assets.md`.

## Final acceptance checklist

- [x] Live site inspected with Playwright/Chromium.
- [x] Current/before screenshot captured.
- [x] Prototype HTML written directly as a standalone page.
- [x] Original site assets reused where available.
- [x] Obvious template friction addressed in the prototype direction.
- [x] Prototype/after screenshot captured from a local file URL copy of the HTML.
- [x] Both screenshots are larger than 20KB.
- [x] Visual similarity gate passed.
- [x] Source asset notes written.
- [x] Direct offer written.
- [x] No Gmail draft created.
- [x] Old scripted prototype generator was not used or recreated.
