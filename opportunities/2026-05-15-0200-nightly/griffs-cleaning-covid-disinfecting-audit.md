# Griff's Cleaning and Covid Disinfecting Services LLC audit

## Quick take

Griff's already has a lot of trust material on the page: real job photos, a memorable Griff's Juice cleaning-product story, email, phone, quote path, pricing starters, and broad service coverage across home, commercial, carpet, floor, upholstery, disinfecting, and exterior cleaning. The biggest opportunity is not a full redesign. It is to make the same authentic Wix page easier to scan, easier to trust quickly, and easier to contact for a quote.

## What is already working

- Strong authenticity: the site directly says the photos are real and cleaned with Griff's Juice Multi Purpose Cleaner.
- Clear service breadth: carpet, upholstery, homes, commercial properties, tile, grout, floors, siding, sidewalks, sanitizing, disinfecting, and more are all mentioned.
- Direct contact basics are present: `griffscleaning@gmail.com`, `773.896.3321`, mail links, phone links, and a contact form.
- The black background, white copy, large real photos, and Wix-built texture give the site a recognizable local-business identity.
- Starting rates are visible for major services, which helps qualify visitors before they call.

## Biggest conversion issues

- The first impression asks visitors to read a lot before understanding the fastest next step.
- The homepage repeats similar contact prompts, which makes the quote path feel less focused even though the contact information is available.
- Services are valuable but scattered across long alternating sections and a large gallery, so visitors must scroll heavily to find the right service.
- The site has both sales intent and review/rating intent on the same long homepage. That can distract a new visitor who just wants a cleaning quote.
- The hero headline repeats the full business name instead of pairing the name with a more useful promise, service area, and quote action.

## Best Page Profit Check improvements

- Keep the authentic real-photo identity, dark palette, centered Wix layout, and broad service coverage.
- Add a clearer quote-focused path above the fold: call, email, or start a quote.
- Group the services into a simpler decision flow while preserving the original service list and starting rates.
- Keep the Griff's Juice story, but trim and position it as proof instead of making it compete with contact details.
- Reduce repetition by using one strong quote CTA after the service section and one clear contact form.
- Keep recent work photos, but label them as actual work and avoid making the gallery the main conversion path.

## SEO basics to tighten

- Keep the title focused on service plus location, for example carpet cleaning, disinfecting, and floor cleaning in Lansing and Chicagoland.
- Use one strong H1 that includes the business name and primary service area.
- Add descriptive H2/H3 service headings for carpet cleaning, upholstery cleaning, floor cleaning, tile and grout, home cleaning, commercial cleaning, and disinfecting.
- Add alt text that describes the real cleaning photos rather than generic `Untitled` labels.
- Make NAP details consistent: Griff's Cleaning and Covid Disinfecting Services LLC, Lansing, IL, `773.896.3321`, and `griffscleaning@gmail.com`.
- Consider adding a short service-area line for Lansing, South Suburbs, and Chicagoland if that matches actual operations.

## Realistic implementation angle

The right implementation angle is a focused Wix homepage improvement, not a new template. Keep the existing dark background, Playfair-style headings, centered image blocks, real job photos, footer, and contact details. Then reorganize the page into a cleaner path:

1. Header with logo/photo, short trust statement, and quick quote contact.
2. Hero with the existing main photo, business name, short service-area pitch, and call/email/start quote links.
3. Real photos section using source-site assets.
4. Services grouped with the same alternating image/text rhythm.
5. One quote CTA and one contact form.
6. Review/rating section moved after the contact path.

## Offer fit

This is a good Page Profit Check fit because the business has enough real material to work with, but the current page needs diagnosis and visual direction. The $99 audit can show where trust, contact path, and first impression can be tightened without promising Wix edits or implementation. A separate implementation could be estimated after Griff's decides how much of the cleanup direction they want built in Wix.

## Direct links

- Live site: https://griffscleaning.wixsite.com/griffscleaningandcov
- Get a Quote page: https://griffscleaning.wixsite.com/griffscleaningandcov/get-a-quote
- Features page: https://griffscleaning.wixsite.com/griffscleaningandcov/features
- Email: mailto:griffscleaning@gmail.com
- Phone: tel:7738963321
- Facebook: https://www.facebook.com/griffscleaningllc
- Target screenshot: `screenshots/2026-05-15-0200-nightly/griffs-cleaning-covid-disinfecting-target.png`
- Prototype screenshot: `screenshots/2026-05-15-0200-nightly/griffs-cleaning-covid-disinfecting-prototype.png`
- Prototype HTML: `prototypes/2026-05-15-0200-nightly/griffs-cleaning-covid-disinfecting/index.html`

## Audit-to-Prototype Coverage

- Preserved the live site's dark Wix-style visual direction, white text, centered hero photo, large business-name headline, real-photo emphasis, service order, contact form, rating section, and footer.
- Added a quote-focused contact card in the header while keeping the original top header geometry.
- Converted the hero contact path into three simple actions: email, call, and start a quote.
- Reframed the photo gallery as actual work proof instead of a heavy scroll barrier.
- Clarified service copy while keeping original categories and starting rates.
- Consolidated the quote prompt before the contact form so visitors do not need to parse repeated `Get in Touch` links.

## Similarity check

Visual similarity gate was run against the captured live target screenshot and prototype screenshot.

```json
{
  "colorHistogramSimilarity": 0.9416,
  "pixelSimilarity": 0.8971,
  "edgeLayoutSimilarity": 0.7919,
  "perceptualHashSimilarity": 0.875,
  "weightedSimilarity": 0.8786
}
```

The prototype passes the required thresholds: weightedSimilarity is above 0.25 and edgeLayoutSimilarity is above 0.45.

## Source assets reused

The prototype reused only Wix-hosted assets extracted from the live source site: the main hero/logo photo, Facebook icon, recent work photos, home cleaning collage, floor cleaning photo, sanitizing/disinfecting photo, upholstery photo, carpet photo, contact background photo, and rating image. Full URL list is documented in `state/2026-05-15-0200-nightly/griffs-cleaning-covid-disinfecting-source-assets.md`.

## Final acceptance checklist

- [x] Model is openai-codex/gpt-5.5 per runtime context.
- [x] Worked on exactly one slug: `griffs-cleaning-covid-disinfecting`.
- [x] Inspected the live site with Playwright before writing.
- [x] Captured current target screenshot from the live URL.
- [x] Extracted source image/icon URLs from live DOM, CSS/computed styles, and network evidence.
- [x] Reused only source-site assets, with no stock or placeholder imagery.
- [x] Wrote standalone prototype HTML directly by hand, with no old scripted prototype generator.
- [x] Preserved recognizable visual identity while improving quote focus and service organization.
- [x] Created required audit, offer, prototype, screenshot, and source-assets files.
- [x] Prototype screenshot and target screenshot are both above 20KB.
- [x] Visual similarity gate passes.
