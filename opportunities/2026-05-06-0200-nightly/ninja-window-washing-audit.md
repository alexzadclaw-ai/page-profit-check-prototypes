# Ninja Window Washing, LLC Audit

## Quick take
Ninja Window Washing already has a recognizable simple Wix-style identity: bright blue type, clean white space, a ninja logo, large photo sections, and direct phone/email contact. The biggest opportunity is not a full redesign. It is a surgical cleanup that removes template leftovers, clarifies the service area and request path above the fold, and turns the existing “we fight dirty” personality into more calls and quote requests.

Visual fingerprint captured from the live site:
- Source URL: https://ninjawindowwashing.wixsite.com/home
- Screenshot paths: `captures/2026-05-06-0200-nightly/ninja-window-washing/live-home-desktop.png` and `captures/2026-05-06-0200-nightly/ninja-window-washing/live-home-mobile.png`
- Logo/hero assets found: ninja logo from Wix static media, blue-window hero photo, ladder photo, large glass/building service background.
- Dominant colors: vivid periwinkle/blue around `rgb(87, 114, 255)`, white, black, light gray.
- Type feel: Wix/site-builder mix of Proxima/Avenir for body/nav and oversized geometric all-caps display headings similar to Lulo Clean.
- Header/nav pattern: white header, small logo at left, simple centered nav, two stacked blue phone numbers at right.
- Structural cues to preserve: large full-width photo hero, centered oversized blue brand title, simple about block with ladder image and text, three service columns over/near a big photo background, centered quote section with phone/email.
- Improvement direction: keep the same colors, imagery, section rhythm, logo placement, and Wix-clean simplicity while making the top of the page immediately answer “what do they do, where, and how do I get a quote?”

## What is already working
- **High:** The brand name is memorable and the “We Fight Dirty!” line has personality.
- **High:** Phone numbers and email are present, including Montana and Florida phone numbers.
- **High:** Services are easy to understand once visitors scroll: residential windows, commercial windows, and gutters.
- **Medium:** The blue-and-white visual system is consistent and recognizable.
- **Medium:** The site includes real business history: family-owned, Central Montana since 2019, Florida Panhandle since 2025.

## Biggest conversion issues
- **Critical:** The live site still shows Wix/template branding: top Wix banner, “Home | Mysite” title, and “Proudly created with Wix.com” footer. This lowers trust before visitors decide to call.
- **Critical:** The hero has the business name but no clear service statement, service area, or quote CTA near the main headline. Visitors must infer what the company does or scroll.
- **High:** Two phone numbers appear without labels in the header, making it unclear which number belongs to Montana versus Florida until later.
- **High:** Trust proof is not near the top. Family-owned, serving since 2019, and free estimates are strong facts but buried lower.
- **High:** Services are listed by category, but not by buyer intent or next action. Residential, commercial, and gutters need clearer “request this” paths.
- **Medium:** Contact actions are inconsistent: “Contact Us,” “Contact,” “Book An Appointment,” and “Get a Quote Now” all compete.
- **Medium:** Mobile scanning is likely harder because large decorative headings/photo spacing delay the phone numbers and request options.

## Best Page Profit Check improvements
- **Critical:** Remove visible template/site-builder leftovers and give the page a clean business-owned finish.
- **Critical:** Add a service-focused hero line: window washing and gutter cleaning for Central Montana and the Florida Panhandle.
- **High:** Label both phone numbers wherever they appear: Montana and Florida.
- **High:** Add a compact trust strip immediately below the hero CTA: family-owned, serving Central Montana since 2019, Florida Panhandle since 2025, free estimates.
- **High:** Convert the service area into three clear task cards with matching request CTAs.
- **Medium:** Standardize the main conversion action around “Request a Free Estimate.”
- **Medium:** Keep the existing brand style but tighten spacing, hierarchy, and mobile stacking.

## SEO basics to tighten
- **Critical:** Change the page title from “Home | Mysite” to “Ninja Window Washing | Window Washing & Gutter Cleaning.”
- **High:** Add a descriptive H1/H2 structure that includes services and service areas.
- **High:** Use readable text for Central Montana, Florida Panhandle, window washing, gutter cleaning, residential, and commercial.
- **Medium:** Improve image alt text, especially for the logo and ladder/service images.
- **Medium:** Add a short meta description focused on free estimates, window washing, gutter cleaning, Central Montana, and Florida Panhandle.

## Realistic implementation angle
This is a cleanup sprint, not a rebuild. The fastest path is to keep the current Wix visual system and rebuild/revise the homepage sections:
- remove Wix/template leftovers if they have a paid plan or move to a clean simple static/hosted page,
- update page title/meta basics,
- rewrite hero and CTA text,
- label regional phone numbers,
- add a trust strip and task-based service cards,
- tighten mobile spacing.

Safe ROM: **$350-$900 cleanup sprint**, depending on whether the work happens inside Wix or as a small replacement landing page.

## Offer fit
Good fit for the $99 Page Profit Check offer because the problems are visible and practical: template leftovers, unclear top-of-page conversion path, unlabeled phone numbers, and buried trust. The business does not need a new brand. It needs the current site cleaned up so more visitors confidently call or request a quote.

## Direct links
- Live site: https://ninjawindowwashing.wixsite.com/home
- Email: mailto:NinjaWindowWashing@gmail.com
- Montana phone: tel:406-461-6486
- Florida phone: tel:850-733-7377
- Facebook: http://www.facebook.com/ninjawindowwashing
- Instagram: http://instagram.com/ninjawindowwashing
- Captured desktop screenshot: `captures/2026-05-06-0200-nightly/ninja-window-washing/live-home-desktop.png`
- Captured mobile screenshot: `captures/2026-05-06-0200-nightly/ninja-window-washing/live-home-mobile.png`
- Local solution file: `prototypes/2026-05-06-0200-nightly/ninja-window-washing/index.html`

## Audit-to-Prototype Coverage
| finding | severity | prototype fix | where it appears | status |
|---|---:|---|---|---|
| Wix/template branding and “Mysite” title reduce trust | Critical | Removed all visible Wix/template copy and set a business-specific title/meta description | HTML title, footer, entire page | fixed |
| Hero lacks clear service statement, area, and quote action | Critical | Added service/area subheadline and primary free-estimate CTA under the retained logo/title hero | Hero section | fixed |
| Header phone numbers are unlabeled | High | Added Montana and Florida labels to header phone links and quote section | Header and estimate section | fixed |
| Trust proof is buried below the fold | High | Added compact proof strip directly below hero | Trust strip under hero | fixed |
| Services are not organized around buyer task paths | High | Rebuilt service area as three cards with residential, commercial, and gutter request actions | Services section | improved |
| Multiple competing CTA labels | Medium | Standardized main actions around “Request a Free Estimate” while preserving appointment language as secondary | Header, hero, services, estimate section | improved |
| Mobile page is hard to scan | Medium | Added responsive stacking, smaller hero heading, sticky-feeling top hierarchy, and compact cards | CSS media query and page structure | improved |
| Image alt text is weak or blank | Medium | Added descriptive alt text to logo and service imagery | Image attributes | improved |

## Similarity check
The solution intentionally preserves the owner-recognizable visual fingerprint:
- same bright blue brand color,
- same ninja logo asset,
- same hero/window image and ladder/service imagery from the live site,
- same white header with logo, nav, and phone stack,
- same oversized centered all-caps title feel,
- same about → services → estimate section rhythm,
- same direct phone/email contact style.

It is not a generic redesign. It is the same homepage cleaned up with clearer trust, labels, CTAs, and mobile hierarchy.

## Final acceptance checklist
- Hero clearer: **Yes.** The hero now states window washing and gutter cleaning plus the two service regions.
- CTA specific: **Yes.** The main action is “Request a Free Estimate.”
- Trust near top: **Yes.** Family-owned, serving dates, and free estimates appear immediately below the hero.
- Services by buyer intent/task paths: **Yes.** Residential, commercial, and gutter cleaning each have clear service details and request paths.
- Clear next steps: **Yes.** Visitors can call Montana, call Florida, or email for a quote.
- Template leftovers removed: **Yes.** No Wix banner/footer or “Mysite” copy in the solution page.
- Mobile easier to scan: **Yes.** The page stacks sections, reduces giant headings, and keeps CTAs visible and readable.
- Owner would recognize same site cleaned up: **Yes.** Same logo, colors, imagery, service rhythm, and “We Fight Dirty!” personality are retained.
