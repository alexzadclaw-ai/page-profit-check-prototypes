# Exacta Painting LLC Page Profit Check Audit

## Quick take

Exacta Painting already has a clear residential painting identity, a strong local owner story, real project photos in the site assets, and a simple one-page Wix structure. The biggest problem is that the first screen does not give a visitor a fast reason to request an estimate. It says who they are, but it does not immediately clarify interiors, exteriors, drywall repairs, Lexington service area, proof of work, or the next step.

## What is already working

- The business name and positioning are visible: “Exacta Painting LLC” and “Residential Painting Specialist.”
- The hero photo, black navigation, centered logo, and paint-stroke dividers create a recognizable painting-company feel.
- The services are directionally right: repairs, interiors, and exteriors.
- The About section includes useful trust details: locally owned, Lexington, quick custom quotes, and working directly with owner Seth Corman.
- The live DOM contains real project/gallery images that can be used as visual proof.
- Email and phone are present on the page.

## Biggest conversion issues

- No primary hero CTA. Visitors need to scroll to find contact details.
- The header navigation items all point back to the same page URL instead of clearly anchoring to sections.
- The Wix banner at the top makes the site feel less finished.
- The hero does not mention Lexington, interiors, exteriors, drywall repair, trim, staining, or pressure washing until later.
- The “Our Work” area appears visually underused in the live screenshot, despite project assets being present in the DOM.
- The “Customer Reviews” section is empty, which creates a trust gap.
- The Facebook icons link to a default Wix Facebook URL, not the business.
- The phone number is displayed but was not detected as a `tel:` link during inspection.
- The contact form is present, but the submit path is low-emphasis and not framed as an estimate request.

## Best Page Profit Check improvements

- Add a clear first-screen estimate path: “Request an Estimate” and “Call (859) 552-3008.”
- Rewrite the hero subhead around the actual decision: residential interiors, exteriors, drywall repair, trim, staining, and pressure washing in Lexington, KY.
- Surface trust cues above the fold: locally owned, work directly with Seth, on-the-spot custom quotes.
- Turn “Our Work” into a visible 6-image project proof grid using the existing Wix-hosted assets.
- Rename or reframe the empty reviews area until real reviews are available, so the page does not look unfinished.
- Replace the default Wix Facebook link or remove it until there is a real business profile.
- Make contact actions clickable: `mailto:exactapaintingllc@gmail.com` and `tel:8595523008`.
- Tighten whitespace so the page feels intentional instead of partially filled.

## SEO basics to tighten

- Add a real meta description focused on Lexington residential painting.
- Use one clear H1: “Residential Painting in Lexington, KY.”
- Add descriptive alt text to the logo and project photos.
- Include service keywords naturally: interior painting, exterior painting, drywall repair, trim painting, staining, pressure washing.
- Add visible local service-area copy for Lexington and nearby neighborhoods if accurate.
- Connect nav links to actual section anchors.
- Consider local business schema once address/service-area details are confirmed.

## Realistic implementation angle

This is a good fit for a surgical Wix cleanup rather than a full redesign. Keep the black nav, centered logo, hero image, paint-stroke dividers, monochrome palette, light condensed typography, and one-page flow. The work is mostly copy hierarchy, CTA placement, section tightening, project-photo visibility, link fixes, and a clearer estimate request flow.

A practical implementation ROM after diagnosis: 4 to 8 hours in Wix if the account is accessible, assuming no new branding or photography is needed. If reviews, a real Facebook URL, or additional service-area details need to be gathered, add a little time for content collection.

## Offer fit

Strong fit for a $99 Page Profit Check because the site has visible conversion leaks that can be diagnosed quickly and shown with a before/after direction. It is also a good prospect for a separate implementation project because most fixes are straightforward and should not require rebuilding the whole site.

## Direct links

- Live site: <https://exactapaintingllc.wixsite.com/home>
- Email: <mailto:exactapaintingllc@gmail.com>
- Phone: <tel:8595523008>
- Instagram detected: <https://instagram.com/exactapaintingllc>
- Target screenshot: `screenshots/2026-05-17-0200-nightly/exacta-painting-target.png`
- Prototype HTML: `prototypes/2026-05-17-0200-nightly/exacta-painting/index.html`
- Prototype screenshot: `screenshots/2026-05-17-0200-nightly/exacta-painting-prototype.png`
- Source assets report: `state/2026-05-17-0200-nightly/exacta-painting-source-assets.md`

## Audit-to-Prototype Coverage

- Hero CTA added with estimate and phone actions.
- Hero copy now clarifies interiors, exteriors, drywall repair, trim, staining, pressure washing, and Lexington, KY.
- Header keeps the recognizable black nav while adding a compact phone CTA.
- Services remain repairs, interiors, and exteriors, with tighter copy and clearer scope.
- Project proof grid uses the existing Exacta Wix project assets.
- About section keeps the locally owned and owner-led quote story.
- Contact section is reframed as “Request an Estimate” with clickable email and phone links.
- Empty reviews area is replaced with honest trust/process cards based on existing site claims, without inventing testimonials.
- Default Wix Facebook link is flagged as a live-site issue and not treated as a real business proof point.

## Similarity check

- Preserved: black nav, centered brand/logo, large hero photo, uppercase light typography, monochrome palette, paint-stroke divider texture, one-page section order, services/about/contact/footer rhythm.
- Improved: CTA hierarchy, service-area clarity, gallery visibility, contact path, trust cues, and section density.
- Avoided: stock photos, generic SaaS layout, fake reviews, unrelated colors, or replacing the site’s identity.

## Source assets reused

- Hero interior room photo from the live Wix DOM.
- Exacta logo image from the live Wix DOM.
- Paint-stroke divider from the live Wix DOM.
- Six project images from the live Wix DOM.
- Large background/photo layer from the live Wix DOM.
- Footer/reviews background photo from the live Wix DOM.
- Instagram/Facebook icon assets from the live Wix DOM, with a note that the live Facebook URL needs replacement.

Full extraction details are documented in `state/2026-05-17-0200-nightly/exacta-painting-source-assets.md`.

## Final acceptance checklist

- [x] Live site inspected with Playwright before prototype authoring.
- [x] Live target screenshot captured after load.
- [x] DOM image assets extracted.
- [x] Computed CSS background images checked. None were found.
- [x] Prototype authored directly as static HTML, not generated from an old scripted prototype tool.
- [x] Prototype reuses original Exacta/Wix assets only.
- [x] Prototype preserves recognizable visual identity while improving conversion path.
- [x] Prototype screenshot captured and verified over 20KB.
- [x] Audit includes all required H2 sections.
