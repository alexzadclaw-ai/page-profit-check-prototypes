# Homes A to Z Handyman Services Page Profit Check Audit

## Quick take

Homes A to Z already has a memorable local handyman story: Rob Hamill, a retired Wauwatosa teacher, offers practical home repair help around Wauwatosa and the Milwaukee Metro area. The live Wix page has the right basics: phone number, email, service list, personal bio, and links to Facebook and Instagram work photos. The main opportunity is to make the first screen act less like a static brochure and more like a simple contact path for homeowners with small jobs.

## What is already working

- The brand is easy to remember: Homes A to Z, Handyman Services, and "No job is too small!"
- The owner story creates trust because Rob is presented as a retired Wauwatosa teacher with deep local roots.
- Phone and email are visible on the page and the email link is clickable.
- The service categories are relevant and easy to understand: Carpentry, Plumbing, Electrical, Painting, and Maintenance.
- The page uses a consistent visual identity: bright yellow navigation, dark hero image, medium-blue service section, yellow service accents, wood background for the bio, and dark-blue contact section.
- Facebook and Instagram links give visitors a path to see real past work.
- The service area is stated clearly in the contact section as Wauwatosa and Milwaukee Metro Area.

## Biggest conversion issues

- The hero section has contact details and social links, but no strong call/text or email button for a homeowner ready to ask about a repair.
- The top nav includes the phone number, but it is not framed as the fastest next step.
- The first screen sends attention to Facebook and Instagram links before it clearly explains what jobs Rob handles and how to request help.
- The service list is useful, but there is no contact prompt right after the services to catch visitors who have found their problem category.
- The local trust story is strong, but it sits below a long service section instead of being hinted at near the top.
- The contact section is far down the page and followed by a large blank blue area, which creates unnecessary scroll depth.
- The footer references "The Handy Gang," which does not match the Homes A to Z brand.
- The free Wix banner and wixsite URL reduce credibility for homeowners comparing local handyman options.
- The plumbing paragraph has a small typo, "I'm you guy," which should be corrected.

## Best Page Profit Check improvements

- Add a clear call/text button and email button in the hero while keeping the original hero photo, headline, owner name, and social links.
- Add a compact proof row above the fold: retired Wauwatosa teacher, Wauwatosa and Milwaukee Metro area, and common job categories.
- Keep the bright yellow header, but make the phone number behave like an obvious call action.
- Keep the five service categories and original icons, then add a short prompt below them: call Rob or email photos if the visitor is not sure where their job fits.
- Keep the Who I Am section and wood background, but add a small trust strip under the story.
- Make the contact section shorter and more intentional by repeating the phone, email, service area, social links, and fastest next step.
- Replace the inconsistent footer language with Homes A to Z Handyman Services.
- Leave social links visible, but position them as supporting proof instead of the primary conversion path.

## SEO basics to tighten

- Use one clear H1 that includes the business, service, and local area, for example: "Homes A to Z Handyman Services in Wauwatosa."
- Add concise page copy mentioning Wauwatosa handyman, Milwaukee Metro handyman, home repair, carpentry, basic plumbing, basic electrical, painting, maintenance, power washing, and seasonal upkeep.
- Add descriptive alt text for the hero photo, service icons, wood background, and social icons where Wix allows it.
- Make the business name, phone number, email, and service area consistent in the header, hero, contact section, and footer.
- Consider connecting a custom domain and removing the free Wix banner to strengthen trust.
- If possible, add LocalBusiness or HomeAndConstructionBusiness schema later.
- Use real section anchors for Home, Services, About, and Contact Info so the nav moves visitors to the right place.

## Realistic implementation angle

This should not become a generic contractor landing page. The best implementation is a focused Wix cleanup:

1. Keep the current color palette, hero photo, service icons, wood background, owner story, and one-page structure.
2. Turn the hero contact information into two clear actions: call/text and email Rob.
3. Move the Wauwatosa teacher trust story into a small above-fold proof line.
4. Add a contact prompt immediately after the service cards.
5. Shorten the blank space below the contact section.
6. Correct the footer branding and small copy issues.

## Offer fit

Good fit for a $99 Page Profit Check because the site has enough real local business information, photos, service details, and contact paths to diagnose quickly. The audit can show exactly where the page loses conversion momentum: weak above-fold CTA, social links competing with contact actions, useful services without a next step, trust story too low, and inconsistent footer branding. Implementation should be sold separately after the owner reviews the diagnosis and visual direction.

## Direct links

- Live site: https://homesatoz1.wixsite.com/mysite
- Phone: tel:4142325246
- Email: mailto:homes.a.to.z1@gmail.com
- Facebook: https://www.facebook.com/Homes-A-to-Z-Handyman-Services-Rob-Hamill-Proprietor-1308185735883516/
- Instagram: https://www.instagram.com/homesatoz/
- Services link found on site: https://homesatoz1.wixsite.com/mysite/our-services

## Audit-to-Prototype Coverage

- Weak hero CTA: prototype adds visible call/text and email buttons while keeping the original headline, owner name, hero photo, and social links.
- Local trust too low: prototype adds a proof line for retired Wauwatosa teacher and local Milwaukee Metro handyman near the first screen.
- Service categories need a next step: prototype keeps the original five service cards and adds call Rob/email photos actions below them.
- Contact section too passive: prototype repeats phone, email, service area, social links, and a fastest next step card.
- Inconsistent footer: prototype changes the footer to Homes A to Z Handyman Services.
- Brand fidelity: prototype reuses the live yellow header, hero photo, service icons, wood image, social icons, blue sections, section order, owner story, tagline, phone, email, and service-area language.

## Similarity check

The prototype intentionally stays close to the existing Wix page instead of becoming a generic handyman template. It reuses the same live images and icons, keeps the same section order, preserves the bright yellow and blue palette, and makes conversion changes inside the current layout. Visual similarity QA was run with `python3 scripts/visual_similarity_gate.py screenshots/2026-05-19-0200-nightly/homes-a-to-z-target.png screenshots/2026-05-19-0200-nightly/homes-a-to-z-prototype.png` and returned weightedSimilarity 0.8494, pixelSimilarity 0.8948, edgeLayoutSimilarity 0.7854, and perceptualHashSimilarity 0.8594.

## Source assets reused

- Original Homes A to Z hero handyman/tools photo.
- Original service icons for Carpentry, Plumbing, Electrical, Painting, and Maintenance.
- Original wood-plank background from the Who I Am section.
- Original white Facebook and Instagram icons.
- Existing copy themes and business facts: Rob Hamill, retired Wauwatosa teacher, Wauwatosa and Milwaukee Metro Area, "No job is too small," phone, email, service categories, and social work-photo links.

## Final acceptance checklist

- [x] Inspected the live site with Playwright in Chromium using `/snap/bin/chromium`.
- [x] Scrolled the live page to trigger lazy-loaded assets before capture.
- [x] Captured the current target screenshot.
- [x] Extracted DOM image URLs and computed CSS background image URLs.
- [x] Reused original website photos, icons, palette, section order, contact details, and local trust story.
- [x] Did not add unrelated stock or placeholder imagery.
- [x] Wrote the prototype HTML directly by hand, not with the old scripted prototype generator.
- [x] Did not send emails or submit forms.
- [x] Created the audit, offer, prototype, target screenshot, prototype screenshot, and source-assets files.
- [x] Ran `visual_similarity_gate.py` on the target/prototype screenshot pair and saved the result.
