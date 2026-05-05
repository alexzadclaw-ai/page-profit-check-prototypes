# Bay Area Builders LLC - Audit-Driven Solution A

## Quick take
Bay Area Builders LLC already has the bones of a useful contractor site: a clear roofing/remodeling category, real phone/email/address details, service-area language, and an M&B-style Wix contractor layout. The biggest issue is trust leakage. The homepage still shows Wix/template residue, placeholder paragraph copy, and fake testimonial text, which makes the business look unfinished even though the contact details and service list are real.

Visual fingerprint evidence:
- Source screenshot: `screenshots/2026-05-05-0200-nightly/bay-area-builders-llc-desktop.png`
- Source HTML snapshot: `screenshots/2026-05-05-0200-nightly/bay-area-builders-llc-source.html`
- Logo/brand treatment: small Bay Area Builders logo image at top left, paired with a simple white header and dark text navigation.
- Logo asset: `https://static.wixstatic.com/media/4f9229_8feeddc5abcb41998234a83d98b5eb2a~mv2.png/v1/fill/w_135,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bay%20Area%20Builders%20Logo_edited_edited.png`
- Hero/background asset: `https://static.wixstatic.com/media/4f9229_9d2e03c800f9409685b01d7b66af123af000.jpg/v1/fill/w_864,h_1080,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/4f9229_9d2e03c800f9409685b01d7b66af123af000.jpg`
- Other visible service imagery: kitchen, bathroom, and roof photo cards from Wix static media.
- Dominant colors observed: white, black/dark charcoal, pale gray `#f5f5f5`, blue accent near `#2279ab`, and dark blue-gray near `#20303c`.
- Typography feel: Wix builder mix of Arial/Helvetica body text, Poppins/Montserrat utility text, and large Times-style serif headings.
- Header/nav pattern: white top/header area, logo left, horizontal service nav, phone callout on the right.
- Section rhythm: hero, Why Choose Us four-column feature strip, Our Services three-image cards, Satisfied Customers three testimonials, final contact block with service areas and form.
- Non-negotiable structural cues preserved: same hero headline idea, same four trust/benefit cards, same three service-card rhythm, same customer/testimonial band, same contact details/form section.

## What is already working
- Clear contractor category: roofing and remodeling are immediately visible in navigation and page copy.
- Strong service-area and contact signals: Maryland, Virginia, Delaware, Baltimore address, email, and phone are on the page.
- The navigation already maps to buyer-intent services: New Roof Installation, Insurance Roof Replacement, Commercial Roofing, Siding, Completed Projects, Contact.
- The site has a recognizable simple contractor layout that an owner can understand and maintain in Wix.
- Existing assets give enough visual continuity to clean the site without rebuilding the brand from scratch.

## Biggest conversion issues
| Finding | Severity | Why it matters |
|---|---:|---|
| Wix banner says the site was built on Wix and invites visitors to create their own. | Critical | Makes the company look unfinished or temporary before the customer reaches the offer. |
| Main intro paragraph is default placeholder copy: “I'm a paragraph. Click here to add your own text...” | Critical | Directly damages credibility and suggests the site was never completed. |
| Testimonials are fake/default template testimonials. | Critical | Trust section does the opposite of its job and may make visitors question all claims. |
| Hero CTA is generic: “Get A Free Estimate.” | High | Does not connect to the high-intent roof replacement and insurance roof replacement paths. |
| Services section lists Kitchens, Bathrooms, Roofing, while nav emphasizes roof, insurance, commercial, and siding. | High | Buyers may not understand whether roofing or remodeling is the main service. |
| “What happens next” is not explained. | Medium | Contractor leads often need reassurance about consultation, estimate, and next steps. |
| Footer copyright is outdated at 2023. | Medium | Adds to the unfinished-template impression. |
| Mobile scan is likely heavy because important trust and next-step details are not structured near the top. | Medium | Phone visitors need fast call/estimate options and reassurance before scrolling. |

## Best Page Profit Check improvements
- Replace placeholder hero paragraph with real roofing/remodeling positioning tied to MD, VA, and DE.
- Replace the generic CTA with “Get a Free Roof Estimate” and keep the phone action close by.
- Add trust near the top: licensed and insured, free in-home consultation, financing, and 5-star service messaging.
- Keep the same Why Choose Us cards, but rewrite them so they sound like real contractor promises.
- Clarify services by buyer intent: roof replacement, insurance roof replacement, commercial roofing, siding, kitchens, and bathrooms.
- Replace fake testimonials with safer, non-specific testimonial-style proof labels until real reviews can be inserted.
- Add a “What Happens Next” section so visitors know the process before contacting.
- Remove Wix/template residue and update the copyright.

## SEO basics to tighten
- Page title should include the brand plus primary services and geography, for example: “Bay Area Builders LLC | Roofing & Remodeling in MD, VA & DE.”
- Meta description should mention roof replacement, insurance roof replacement, siding, remodeling, and service areas.
- Add one clear H1 only, then use H2 sections for services, process, testimonials, and contact.
- Replace empty/generic image alt text with service-specific alt text.
- Build separate service pages or sections for New Roof Installation, Insurance Roof Replacement, Commercial Roofing, and Siding if the Wix site supports it.
- Add local business schema once final legal name, license details, and review source are confirmed.

## Realistic implementation angle
This is a light surgical cleanup, not a rebrand. The fastest implementation is to keep the current Wix structure, logo, color direction, image cards, and navigation, then replace copy, adjust CTAs, remove template leftovers, and add a short process block. If the Wix free banner is visible because the site is on a free Wix domain, the practical recommendation is to connect a real domain and use a Wix plan that removes platform ads.

Estimated implementation range after the $99 check: $600 to $1,200 for homepage copy cleanup, section edits, CTA/form improvements, mobile polish, basic title/meta updates, and launch QA in the existing Wix site. Add more if they want separate service pages, review integrations, photo gallery cleanup, or domain/email setup.

## Offer fit
Strong fit. The site has obvious trust-damaging issues that can be explained in a short, respectful pitch, and the fixes are concrete enough to show value quickly. The owner would likely recognize the prototype as the same site cleaned up rather than an agency trying to replace the entire brand.

## Direct links
- Live site: https://bayareastagingemai.wixsite.com/my-site
- Contact email: mailto:blh11@live.com
- Phone shown on site: 443-695-6990
- Prototype file: `prototypes/2026-05-05-0200-nightly/bay-area-builders-llc/index.html`
- Desktop screenshot: `screenshots/2026-05-05-0200-nightly/bay-area-builders-llc-desktop.png`

## Audit-to-Prototype Coverage
| Finding | Severity | Prototype fix | Where it appears | Status |
|---|---:|---|---|---|
| Wix banner/template ad appears above the site. | Critical | Removed the banner from the cleaned page structure. | Top of prototype | fixed |
| Placeholder intro paragraph remains in hero. | Critical | Replaced with real service-area roofing/remodeling copy. | Hero section | fixed |
| Fake default testimonials are visible. | Critical | Replaced default names and placeholder text with safer customer proof language and generic project labels pending real reviews. | Satisfied Customers section | improved |
| Generic “Get A Free Estimate” CTA. | High | Changed to “Get a Free Roof Estimate” and paired with phone CTA. | Hero and services CTA | fixed |
| Services do not clearly match buyer intent. | High | Kept Kitchen/Bath/Roofing cards but clarified roofing card includes new roof, insurance replacement, and commercial roofing. | Our Services section | improved |
| Trust points are generic and not tied to the estimate path. | Medium | Rewrote financing, free consultation, service, and licensed/insured cards. | Why Choose Us section | fixed |
| Next steps are unclear. | Medium | Added three-step “What Happens Next” section. | Process section | fixed |
| Contact form subject is generic. | Medium | Added project-type prompt covering roof, insurance roof, commercial roofing, siding, kitchen, and bathroom. | Contact form | fixed |
| Outdated copyright. | Medium | Updated to 2026 and added concise service-area footer text. | Footer | fixed |
| Mobile needs faster scan path. | Medium | Responsive layout stacks service cards, keeps call action in header, shortens copy blocks, and keeps CTA near top. | Mobile CSS/layout | improved |

## Similarity check
- Preserved the original white header with logo-left/navigation-right contractor pattern.
- Preserved the same large serif hero headline feel and the original “Is It Time To Replace Your Old Roof?” concept.
- Preserved the blue accent, charcoal/dark-blue trust color direction, white/pale-gray section rhythm, and Wix-style rectangular content blocks.
- Preserved the Why Choose Us four-card structure and the three-card service/testimonial rhythm.
- Preserved the same public contact details and service areas.
- Changed only what was conversion-damaging: placeholder copy, fake testimonials, unclear CTA, missing next-step explanation, and template residue.

## Final acceptance checklist
- [x] Hero is clearer than original.
- [x] Main CTA is specific.
- [x] Trust appears near the top.
- [x] Services are clearer by buyer intent.
- [x] What happens next is visible.
- [x] Template leftovers are removed.
- [x] Mobile is easier to scan.
- [x] Owner would recognize it as the same site cleaned up.
