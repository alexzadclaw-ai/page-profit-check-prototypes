# Portillo Home Improvement LLC Page Profit Check Audit

## Quick take

Portillo Home Improvement LLC already has the right raw material: real project photos, a clear service area, a simple free estimate form, and a direct email address. The main issue is that visitors land on a nice photo but do not immediately see what the business does, where it serves, or what action to take. The prototype keeps the same Wix-style site structure and original photos, then adds a clearer quote path and tighter visual hierarchy.

## What is already working

- Real project photography is present throughout the site.
- The logo and business name are visible at the top.
- The mission copy communicates personalized attention and quality materials.
- The service area is stated: Maryland, Washington DC, and Virginia.
- The services are easy to scan once the visitor reaches the black gallery section.
- The contact form includes the right basic fields for an estimate lead.
- The black-and-white palette and Playfair-style headings give the site a recognizable look.

## Biggest conversion issues

- The free Wix banner at the very top makes the business feel less established.
- The hero image has no headline, service-area message, or call to action.
- The header only exposes email. There is no visible estimate button above the fold.
- The service gallery looks good, but the black section begins without a clear heading or reason to click.
- The form is present, but there is little guidance about what information to send.
- The email is repeated, but there is no phone number, no trust proof, no reviews, and no license or insurance language on the home page.
- The footer still shows an old 2022 copyright and Wix credit.

## Best Page Profit Check improvements

- Add a hero headline that says what the company does and where it works.
- Add a strong above-the-fold button: “Get a Free Estimate.”
- Keep the existing hero photo and carousel feel, but place a simple dark text panel over it.
- Add a tiny navigation row for Mission, Services, and Free Estimate so the page feels intentional without becoming a new design.
- Keep the large “OUR MISSION” section, but add a quote CTA directly after the copy.
- Keep the black service gallery and original photo cards, then add a short “Services” heading and clearer click path.
- Keep the same contact section geometry, but add a short form intro that tells visitors what to submit.
- Remove or replace the Wix promotional banner when possible, ideally by using a paid Wix plan and custom domain.

## SEO basics to tighten

- Use one clear H1 near the top, such as “Home Improvement Services in Maryland, DC, and Virginia.”
- Keep the existing meta description idea, but make it more local and service-specific.
- Add alt text that describes each project photo instead of file names like `IN.jpeg`.
- Add service-specific copy for bathrooms, kitchens, floors, painting, stone work, and living rooms.
- Add consistent NAP information if a public phone number and business address or service-area address are available.
- Add LocalBusiness schema once phone, service area, and business details are confirmed.
- Update the footer copyright and remove the public Wix credit if moving to a paid Wix plan.
- If the business has Google reviews, add a small review/testimonial section using real quotes.

## Realistic implementation angle

This is very realistic to implement inside the existing Wix site. The current page already has the needed sections and images. Most changes are layout, copy, link, and style edits rather than a rebuild.

Implementation ROM estimate:

- Fast cleanup inside Wix: 3 to 6 hours.
- If adding a custom domain, paid Wix plan cleanup, SEO settings, and basic local schema: 5 to 9 hours.
- If adding real testimonials, phone number, badges, and a stronger service page: 1 to 2 additional short work sessions after the owner provides the missing details.

## Offer fit

This is a strong fit for a $99 Page Profit Check because the site does not need a full redesign to show value. A before/after can be shown quickly: same photos, same brand, same Wix feel, but with clearer messaging, a quote CTA, better service framing, and a less unfinished first impression.

The best pitch angle is: “I kept your current site and photos, but made the first screen explain what you do and guide people to request an estimate.”

## Direct links

- Live site: https://portillollc.wixsite.com/homeimprovementllc
- Existing services page linked from site: https://portillollc.wixsite.com/homeimprovementllc/services-1
- Prototype HTML: `page-profit-check-prototypes/prototypes/2026-05-13-0200-nightly/portillo-home-improvement/index.html`
- Before screenshot: `page-profit-check-prototypes/screenshots/2026-05-13-0200-nightly/portillo-home-improvement-target.png`
- After screenshot: `page-profit-check-prototypes/screenshots/2026-05-13-0200-nightly/portillo-home-improvement-prototype.png`
- Source asset notes: `page-profit-check-prototypes/state/2026-05-13-0200-nightly/portillo-home-improvement-source-assets.md`
- Raw inspection JSON: `page-profit-check-prototypes/state/2026-05-13-0200-nightly/portillo-home-improvement-inspect.json`

## Audit-to-Prototype Coverage

- Missing hero message: covered with an overlay headline, service-area line, and estimate CTA.
- Weak above-the-fold conversion path: covered with “Get a Free Estimate” in the hero and header navigation.
- Email-only header: preserved the email, but added navigation to the form.
- Unframed service gallery: covered with a simple Services heading and explanatory line while preserving the black section and original cards.
- Mission section has no action: covered with “Request a Free Estimate” directly after the original mission copy.
- Contact form lacks context: covered with a short intro and form note.
- Wix/free-site texture: preserved the simple Wix block feel, but replaced the promotional top bar with business/service-area information in the prototype.
- Old footer: updated the footer year while keeping the same business name and email structure.

## Similarity check

The prototype is intentionally not a new agency or SaaS landing page. It preserves the recognizable parts of the original site:

- Large white header with original logo, business name, and email.
- Full-width hero image geometry with carousel-dot visual cue.
- Black-and-white palette direction.
- Playfair-style serif headings and all-caps section labels.
- Mission section order and copy.
- Large black services block with the same six service categories and original project photos.
- Contact section with photo on the left and form on the right.
- Simple centered footer with business name and email.

The owner should recognize it as the same site cleaned up, not a replacement brand.

## Source assets reused

- Original logo from Wix media.
- Original active hero slideshow image extracted from the Wix StripSlideshow iframe background style.
- Original six service/gallery photos from live DOM `img.currentSrc`.
- Original contact image from live DOM/Wix `wow-image` data.
- Original email address, service area, mission language, service labels, and form field labels.

No stock imagery was introduced. Other hero slideshow photos were documented but not used in the static prototype.

## Final acceptance checklist

- [x] Inspected the live site with Playwright and page evaluation.
- [x] Captured live before screenshot.
- [x] Extracted logo/photo URLs from DOM `currentSrc`, Wix image data, and iframe background styles.
- [x] Reused original website images and copy wherever practical.
- [x] Built a bespoke prototype for this slug only.
- [x] Preserved the same site structure and Wix-style texture.
- [x] Added only surgical conversion improvements.
- [x] Captured prototype after screenshot.
- [x] Verified the prototype screenshot is not blank, gray, or stale.
- [x] Verified the prototype still looks like Portillo Home Improvement LLC cleaned up.
