# Ark Property Services Page Profit Check Audit

## Quick take

The live Property Services page has useful raw ingredients: Ark's name, phone, email, real work photos, and a simple estimate CTA. The main problem is template confusion. The browser title says "Bathrooms | M&B Remodeling," the footer still says "© 2035 by M&B Remodeling," and the strongest estimate path is buried below a photo gallery. The best improvement is not a full redesign. It is a surgical Wix cleanup that keeps the same page feel while making Ark's services, Michigan context, and estimate request path obvious near the top.

## What is already working

- The header clearly shows Ark Property Services, LLC, the phone number, and the email address.
- The service page has original project photos, which are much more credible than generic stock images.
- The service list is relevant and specific: roof/gutter cleaning, pressure washing, window washing, deck staining, and driveway drainage cleaning.
- The page has a simple structure visitors can understand: header, services intro, project photo grid, estimate CTA, footer.
- The existing neutral gray, black, and cream Wix look is recognizable and can be improved without changing the whole brand.
- The "Get A Free Estimate" action exists and links toward the contact page.

## Biggest conversion issues

- The page title is still "Bathrooms | M&B Remodeling," which makes the page look like an unfinished remodeling template.
- The footer says "© 2035 by M&B Remodeling. Powered and secured by Wix," creating a major trust mismatch with Ark Property Services.
- The visible Wix ad banner, login button, Wix social links, and template footer make the business look less finished.
- The top section says what services exist, but it does not tell visitors what to do next: call, text, email photos, or use a contact form.
- Phone and email are present in the header but not promoted as primary calls to action.
- The gallery has no captions, so visitors have to guess which photo proves deck staining, roof/gutter work, pressure washing, or driveway/drainage cleaning.
- There are no local trust cues near the top beyond the phone number. Michigan service context should be stated in plain language.
- The current CTA is below the gallery, small, and generic: "Create your dream home" does not match property cleaning and maintenance jobs.

## Best Page Profit Check improvements

- Replace the template confusion with consistent Ark Property Services naming in title, footer, CTA copy, and metadata.
- Turn the first visible section into a clear estimate path: call/text, email project photos, and include location/scope.
- Add a compact service menu near the top so visitors can quickly see roof/gutter cleaning, pressure washing, window washing, deck staining, driveway drainage, and remodeling support.
- Add short captions to the existing photo grid so each original photo becomes proof of a service instead of just a gallery image.
- Keep the same Wix page geometry, gray section, black CTA band, cream header, and original photos so the change feels like a cleanup, not a replacement.
- Replace the "Log In" slot with an estimate action or remove it from the public service page.
- Make the bottom CTA say exactly what visitors should send and provide both phone and email options.

## SEO basics to tighten

- Change the browser title to something like "Property Services in Michigan | Ark Property Services, LLC."
- Add a meta description that includes the main services and Michigan context.
- Keep one clear H1, ideally "Property Services" or "Michigan Property Services."
- Use descriptive alt text on project photos, for example "deck staining project" and "roof and gutter cleaning."
- Make the live URL, nav link, and page naming consistent. The current browser URL is `/property-services`, while the visible Services nav points to `/services`.
- Remove or update all M&B Remodeling and 2035 template leftovers.
- If Wix supports it later, add local business schema with business name, phone, email, service area, and service types.

## Realistic implementation angle

This should be a focused Wix page cleanup, not a rebuild. The practical path:

1. Keep the current header, page color palette, photo grid, and black CTA band.
2. Fix template leftovers first: page title, footer, login slot, social links, and any M&B references.
3. Add a compact estimate path directly under the service intro.
4. Caption the existing photos with service labels.
5. Rewrite the black CTA band around Ark's real request flow: call/text or email photos with location and scope.
6. Check the mobile view so phone/email buttons stay easy to tap.

## Offer fit

Good fit for a $99 Page Profit Check because the page has clear, high-impact diagnosis points and enough existing assets to show a visual before/after direction quickly. The $99 offer should stay audit/diagnosis only: review the page, identify the highest-impact fixes, and show a visual direction. Any Wix implementation would be a separate project after Ark approves the direction.

## Direct links

- Live Property Services page: https://arkpsllc1.wixsite.com/aps1/property-services
- Home page from live nav: https://arkpsllc1.wixsite.com/aps1
- About page from live nav: https://arkpsllc1.wixsite.com/aps1/about
- Services page from live nav: https://arkpsllc1.wixsite.com/aps1/services
- Work page from live nav: https://arkpsllc1.wixsite.com/aps1/work
- Contact page from live nav: https://arkpsllc1.wixsite.com/aps1/contact
- Phone: tel:8103556352
- Email: mailto:arkpsllc@gmail.com

## Audit-to-Prototype Coverage

- Template confusion: prototype updates the browser title, meta description, footer text, and CTA language to Ark Property Services.
- Weak estimate path: prototype adds call/text, email project photos, and Michigan local help cards directly above the gallery.
- Buried CTA: prototype keeps the original black CTA band but rewrites it around sending service, location, photos, and contact preference.
- Unclear service menu: prototype labels the service categories in a compact top strip and captions every original project photo.
- Missing local trust cue: prototype mentions Michigan property services near the top and in the footer without inventing licenses, guarantees, or reviews.
- Visual similarity risk: prototype keeps the Wix banner, cream header, boxed nav style, gray service section, 3 by 2 photo grid, black CTA band, chat widget placement, footer layout, and live Wix assets.

## Similarity check

The prototype intentionally stays close to the existing Wix service page rather than turning it into a generic contractor landing page. It preserves the section heights, gray/cream/black palette, header/nav placement, six-photo grid, bottom CTA band, chat widget, and footer positioning while adding conversion clarity.

Visual similarity gate result:

```json
{
  "colorHistogramSimilarity": 0.8584,
  "pixelSimilarity": 0.774,
  "edgeLayoutSimilarity": 0.6883,
  "perceptualHashSimilarity": 0.6562,
  "weightedSimilarity": 0.756
}
```

This passes the working threshold used for this batch: weightedSimilarity is above 0.25 and edgeLayoutSimilarity is above 0.45.

## Source assets reused

- Live Wix SVG house mark from `static.wixstatic.com`.
- Six original Ark Property Services project photos from the live page.
- Live Wix footer social icon assets.
- Existing business name, phone, email, services, page structure, and CTA direction.
- No stock, Unsplash, Pexels, AI-generated, or generic placeholder images were used.

## Final acceptance checklist

- [x] Inspected the live site with Playwright before writing.
- [x] Captured the current live target screenshot with Chromium.
- [x] Extracted image/logo/photo URLs from the live DOM and computed CSS via Playwright page evaluation.
- [x] Reused original website assets from the live Wix page.
- [x] Rejected stock and generic placeholder imagery.
- [x] Authored the prototype HTML directly by hand, not with the old scripted prototype generator.
- [x] Preserved recognizable header/nav, section order, palette direction, image treatment, contact/footer, and Wix/site-builder texture.
- [x] Added a clearer estimate path, service menu, local trust cue, and corrected template leftovers.
- [x] Captured the prototype screenshot.
- [x] Ran `python3 scripts/visual_similarity_gate.py screenshots/2026-05-18-0200-nightly/ark-property-services-target.png screenshots/2026-05-18-0200-nightly/ark-property-services-prototype.png`.
