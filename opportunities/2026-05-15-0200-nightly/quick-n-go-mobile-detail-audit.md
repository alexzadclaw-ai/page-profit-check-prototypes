# Quick N’ Go Mobile Detail LLC Page Profit Check Audit

## Quick take

Quick N’ Go already has the core ingredients a local mobile detail page needs: real photos, visible package pricing, phone/email contact info, service categories, and a memorable “Need A Quicky?” brand voice. The biggest opportunity is not a total redesign. It is making the detailing package page easier to understand in the first 10 seconds, then making the quote path feel obvious and low-friction.

## What is already working

- Real service photos give the page an authentic detailing feel.
- Premium, Deluxe, and VIP packages have starting prices and included services.
- The brand name, phone number, email, address, Google Places link, and Instagram link are present.
- The dark automotive palette feels appropriate for detailing, wraps, and paint protection film.
- The page already has a “Get A Quote” button and phone-based contact links.
- The Wix-built look is recognizable and consistent with the rest of the site.

## Biggest conversion issues

- The hero only says “Detailing Services” and does not immediately explain mobile service, location, or how to choose the right package.
- Package names and prices are visible, but there is no quick guidance such as “best for maintenance clean” or “best for deep interior reset.”
- “Contact Us” links are small text links rather than strong quote actions.
- The header contact area is useful but crowded, so the main quote path does not feel like the next step.
- Trust cues are thin. The page could surface proof such as real photos, clear starting prices, mobile service area, and quote-by-photo guidance.
- The page has no meta description in the inspected DOM.
- Some service copy could be tightened for clarity, including “Door Jambs” instead of “Door Jams.”

## Best Page Profit Check improvements

- Keep the dark Wix/automotive look and source photos, but clarify the first impression with a short value line and quote buttons in the hero.
- Add “best for” labels to Premium, Deluxe, and VIP so visitors can self-select faster.
- Convert small “Contact Us” text links into visible package-specific call/email actions.
- Add quote guidance that tells visitors to call or email photos if they are unsure which package fits.
- Add an add-ons panel for wraps, PPF, engine bay shine, extraction, and similar services without making the package list harder to scan.
- Keep the original section order and geometry: brand header, navigation, hero image, package rows, contact footer.

## SEO basics to tighten

- Add a meta description focused on mobile detailing, vinyl wraps, PPF, Willoughby, and nearby service areas.
- Make the H1 more descriptive or pair “Detailing Services” with supporting copy above the fold.
- Use package headings as real H2s with clean supporting text.
- Add alt text that describes actual photos and services.
- Include consistent local terms such as “Willoughby, OH mobile detailing” and “paint protection film.”
- Consider adding structured local business/service information later if the main site supports it.

## Realistic implementation angle

This is a surgical conversion pass, not a rebuild. In Wix, the likely work would be tightening the hero copy, adding package guidance text, making CTAs more prominent, adding a small trust/add-ons block, and checking mobile stacking. A rough hands-on implementation range would likely be $300 to $700 depending on mobile polish and how much copy/layout cleanup is included.

## Offer fit

This is a good fit for a $99 Page Profit Check because the site already has real assets and clear services. The audit can diagnose the highest-impact friction points and show a visual before/after direction. The $99 check should stay audit/diagnosis only. Any Wix implementation should be quoted separately.

## Direct links

- Live detailing packages page: https://quickngodetailer.wixsite.com/quickngomobiledetail/detailing-packages
- Home page: https://quickngodetailer.wixsite.com/quickngomobiledetail
- Vinyl Wraps page: https://quickngodetailer.wixsite.com/quickngomobiledetail/services-4
- Paint Protection Film page: https://quickngodetailer.wixsite.com/quickngomobiledetail/paint-protection-film
- Email: mailto:quickngodetailer@gmail.com
- Phone: tel:4406669211
- Google Places: https://maps.google.com/?cid=5332721462837078779
- Instagram: http://instagram.com/quickngodetailer/

## Audit-to-Prototype Coverage

- Hero clarification: added a short package-selection sentence and two clear quote actions over the existing hero photo.
- Package choice path: added “Good quick reset,” “Most balanced,” and “Deep interior reset” labels plus short “best for” guidance.
- Contact/quote path: replaced subtle package contact links with clearer “Choose” and “Request Quote” style actions.
- Proof/trust: emphasized real photos, starting prices, quote-by-photo guidance, and the mobile/detailing service mix.
- Add-ons: added a compact section for vinyl wraps, PPF, engine bay shine, and seat extraction.
- Similarity preservation: kept the header/nav/hero/package/footer order, dark palette, large left-side photos, serif headline feel, and source Wix imagery.

## Similarity check

Visual similarity gate passed after capturing the live target and prototype at 1365x1800.

```json
{
  "colorHistogramSimilarity": 0.6194,
  "pixelSimilarity": 0.8924,
  "edgeLayoutSimilarity": 0.817,
  "perceptualHashSimilarity": 0.8594,
  "weightedSimilarity": 0.8003
}
```

Required minimums were weightedSimilarity >= 0.25 and edgeLayoutSimilarity >= 0.45.

## Source assets reused

The prototype reused source-site assets only. Full asset notes are saved in `state/2026-05-15-0200-nightly/quick-n-go-mobile-detail-source-assets.md`.

Reused assets include:

- Header automotive gauge image from static.wixstatic.com
- Dark navigation strip image from static.wixstatic.com
- Google Places icon from static.wixstatic.com
- Instagram icon from static.wixstatic.com
- Hero polishing photo from static.wixstatic.com
- Premium package vehicle photo from static.wixstatic.com
- Deluxe package foam wash photo from static.wixstatic.com
- VIP package interior photo from static.wixstatic.com

## Final acceptance checklist

- [x] Worked only on slug `quick-n-go-mobile-detail`.
- [x] Inspected the live Wix page with Playwright before writing.
- [x] Captured the live target screenshot.
- [x] Extracted image/logo/photo URLs from the live DOM and checked computed CSS image URLs.
- [x] Wrote standalone prototype HTML directly, without using or recreating the old generator.
- [x] Reused source-site assets only.
- [x] Preserved recognizable header, navigation, hero geometry, dark palette, typography feel, image treatment, contact/footer, and Wix texture.
- [x] Captured prototype screenshot.
- [x] Ran visual similarity QA and passed required thresholds.
- [x] Wrote offer markdown with $99 audit/diagnosis positioning and separate implementation estimate.
