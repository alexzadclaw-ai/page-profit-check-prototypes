# Premier Fitness - Audit-Driven Solution A

## Quick take
Premier Fitness already has the raw ingredients of a trustworthy local fitness site: a clear coach, real program categories, physical location, email, phone, and recognizable dark athletic Wix styling. The homepage can convert better by making the first action more specific, moving trust closer to the top, clarifying which program fits which buyer, and removing low-value Wix/template leftovers that distract from booking.

Visual fingerprint evidence:
- Source screenshot placeholder: `artifacts/2026-05-05-0200-nightly/premier-fitness-ky/source-desktop.png` and `source-mobile.png`
- Logo/brand treatment: centered all-caps `PREMIER FITNESS` wordmark with wide letter spacing and tagline `CHANGING THE WORLD OF FITNESS FOREVER`; small circular logo/image appears near the header.
- Hero/background asset URL: `https://static.wixstatic.com/media/ae05886c0fb64b20b27102bc315585e8.jpg/v1/fill/w_1440,h_1600,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ae05886c0fb64b20b27102bc315585e8.jpg` with alt text `Kettlebells`.
- Dominant colors observed: charcoal/dark gray around `#323337`, off-white/cream around `#f0eee6`, white text, muted gray dividers, black/gray body text in light sections.
- Typography feel: default Wix-style Arial/Helvetica sans-serif, uppercase nav and brand text, broad tracking on tagline and utility text.
- Header/nav pattern: white top contact strip, dark brand band, centered horizontal nav with Home, Shop, Book Online, Blog, Book Now.
- Section rhythm: full-width hero, light `Our Programs` block with three equal image cards, dark `Meet Our Coaches`, contact section, footer.
- Non-negotiable structural cues preserved: dark athletic hero with kettlebell imagery; three program-card grid; Greg Vaughn coach section with headshot and credentials.

## What is already working
- The homepage immediately communicates a fitness/performance direction with a strong dark hero image.
- Program categories are useful: Group Training, Personal Training, and Online Programs.
- Greg Vaughn's credibility is real and specific: personal trainer since 2009, multiple certifications, featured in fitness industry platforms.
- Contact basics are visible: `greg@vaughnfitness.com`, `(502) 821-2012`, and `210 E Arch St Madisonville KY United States 42431`.
- The site has social links to Facebook and Instagram.
- The Wix page structure is simple enough to improve surgically without rebuilding the whole brand.

## Biggest conversion issues
- **Critical: first-step CTA is diluted.** The hero says `Learn More`, nav says `Book Now`, program cards say `Read More` or `Contact Us`, and the contact form says `Submit`. Visitors do not get one obvious next step.
- **Critical: trust is buried.** Greg's strongest proof appears below the program cards instead of near the hero where first-time visitors decide whether to keep reading.
- **High: program paths are listed by name but not by buyer intent.** A visitor has to infer whether they need classes, one-on-one coaching, or online programming.
- **High: template/Wix leftovers distract.** The live page shows the Wix promo banner and footer copy `PROUDLY CREATED WITH WIX.COM`; the `Subscribe Form` area feels generic and lower-value.
- **Medium: contact section asks users to fill a form but does not explain what happens after contact.** This raises friction for new prospects.
- **Medium: mobile scan is text-heavy.** On a phone, the key reasons to trust and the correct program path should be chunked earlier and more clearly.

## Best Page Profit Check improvements
- Replace the vague hero CTA with a specific consultation CTA: `Schedule a consultation`.
- Add a three-item trust strip directly below the hero: training since 2009, everyday-athlete positioning, Madisonville location plus online options.
- Rewrite the program cards around buyer intent:
  - Group Training: structure, energy, accountability.
  - Personal Training: a plan built around you.
  - Online Programs: home, travel, or on-the-go training.
- Add a `What Happens Next` section with a simple 1-2-3 path before the contact form.
- Keep the current Wix-style visual fingerprint instead of introducing a new agency look.
- Remove or replace template leftovers that weaken trust.

## SEO basics to tighten
- Add a real homepage meta description. The live page currently returned an empty description.
- Update title/H1 language to include core local intent such as `Personal Training in Madisonville, KY` while preserving the brand's headline feel.
- Use descriptive image alt text for coach/program images instead of vague names like `Untitled` and `headshot.PNG`.
- Make NAP details consistent: `210 E Arch St, Madisonville, KY 42431`, `greg@vaughnfitness.com`, `(502) 821-2012`.
- Consider internal page titles for `Group Training`, `Personal Training`, and `Online Programs` if separate pages are kept.
- Remove public-facing builder/template copy where possible.

## Realistic implementation angle
This can be implemented as a surgical Wix homepage refresh, not a full rebuild. The work is mostly copy structure, CTA cleanup, section reordering, light styling, and replacing generic/template areas. Existing Wix assets can be reused, including the kettlebell hero image, program images, and Greg's headshot. A realistic implementation range is 3-6 hours if Wix access and existing assets are available, or 1-2 business days if additional copy review and mobile QA are included.

## Offer fit
Good fit for a $99 Page Profit Check because the business does not need a new brand or complex technical build to see value. The biggest revenue leak is clarity: the site has the material, but it does not guide a prospect from interest to the right training path and a consultation.

## Direct links
- Live site: https://premierfit.wixsite.com/health
- Contact email: mailto:greg@vaughnfitness.com
- Facebook: https://www.facebook.com/thepremierfitness/
- Instagram: https://www.instagram.com/premierfitnessky
- Book Online: https://premierfit.wixsite.com/health/book-online
- Blog: https://premierfit.wixsite.com/health/blog
- Prototype file: `prototypes/2026-05-05-0200-nightly/premier-fitness-ky/index.html`
- Source HTML: `artifacts/2026-05-05-0200-nightly/premier-fitness-ky/source.html`

## Audit-to-Prototype Coverage
| Finding | Severity | Prototype fix | Where it appears | Status |
|---|---:|---|---|---|
| First-step CTA is vague and split across `Learn More`, `Book Now`, `Read More`, `Contact Us`, and `Submit`. | Critical | Primary CTA changed to `Schedule a consultation`; secondary CTA is `Compare programs`. | Hero, header quick CTA, program cards | fixed |
| Coach trust appears too low for first-time visitors. | Critical | Added trust strip immediately below hero and kept expanded Greg section. | Trust strip, Meet Your Coach section | improved |
| Program choices are not framed by buyer intent. | High | Rewrote three cards around structure/accountability, custom plan, and home/on-the-go training. | Program cards | fixed |
| User cannot quickly understand what happens after contact. | High | Added `What Happens Next` with a 1-2-3 flow. | Start Here section before contact | fixed |
| Wix/template leftovers weaken credibility. | High | Removed Wix promo/footer language and generic subscribe form from the refreshed page. | Header/footer/contact area | fixed |
| Mobile scan requires too much effort. | Medium | Responsive one-column cards, full-width CTAs, condensed trust and steps blocks. | CSS mobile breakpoint | improved |
| SEO basics are underbuilt, including empty meta description. | Medium | Added descriptive title and meta description, clearer alt text, consistent local NAP. | Head metadata, images, contact | improved |
| Social proof/testimonials link exists but no testimonial detail was visible on homepage. | Low | Deferred adding testimonials because public testimonial content was not inspected in detail for this single-page refresh. | N/A | deferred |

## Similarity check
- Preserved the dark/athletic Wix feel, charcoal backgrounds, white top contact bar, centered uppercase brand, simple horizontal nav, hero over fitness imagery, three-card program block, coach section, and contact footer rhythm.
- Did not introduce a new premium agency brand system, new logo, or unfamiliar color palette.
- Changed the conversion path and copy hierarchy while keeping the owner-recognizable structure and assets.
- Prototype avoids the terms audit, prototype, mockup, experiment, and Page Profit Check in public-facing page copy.

## Final acceptance checklist
- [x] Hero is clearer than original.
- [x] Main CTA is specific.
- [x] Trust appears near the top.
- [x] Services are clearer by buyer intent.
- [x] What happens next is visible.
- [x] Template leftovers are removed.
- [x] Mobile is easier to scan.
- [x] Owner would recognize it as the same site cleaned up.
- [x] All Critical findings are fixed or improved.
