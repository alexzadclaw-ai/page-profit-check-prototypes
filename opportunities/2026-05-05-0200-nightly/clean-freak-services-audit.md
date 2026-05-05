# Clean Freak Services LLC - Audit

## Quick take
Clean Freak Services LLC has the bones of a credible local cleaning business site: real phone number, real email, simple service promise, local-owner/value language, and cleaning imagery that fits the category. The biggest leak is not the brand, it is template residue and service confusion. The Book Online page still shows three generic “Service Name” blocks at $19.99, while real services are mixed together with inconsistent pricing language and CTAs. The fix is a surgical cleanup that keeps the same Wix-style identity but makes the path to a free estimate obvious.

Visual fingerprint evidence:
- Source screenshot path placeholder: `screenshots/2026-05-05-0200-nightly/clean-freak-services-desktop.png`; mobile: `screenshots/2026-05-05-0200-nightly/clean-freak-services-mobile.png`; supporting page captures for Book Online/About/Get a Quote/Features are in the same screenshots folder.
- Logo/brand treatment: text-only logo, “Clean Freak Services LLC,” in dark navy Oswald-style condensed type, no icon mark observed.
- Hero/background asset URLs observed:
  - Mirror cleaning image: `https://static.wixstatic.com/media/11062b_61a16c9a2b01411f9e358bb44627ad7e~mv2.jpg/v1/fill/w_490,h_1200,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_61a16c9a2b01411f9e358bb44627ad7e~mv2.jpg`
  - Floor cleaning image: `https://static.wixstatic.com/media/11062b_c56a41913fe54a15bb4eb68d70134e08~mv2.jpg/v1/fill/w_980,h_540,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_c56a41913fe54a15bb4eb68d70134e08~mv2.jpg`
- Dominant colors: dark navy/royal blue around `#162b6f` and `#142e84`, white backgrounds, pale gray Wix ad bar, light blue-gray dividers.
- Typography feel: Oswald-like condensed headings and brand text; Avenir/Helvetica-like light body and navigation.
- Header/nav pattern: top Wix banner, sticky/simple white header, text brand on left, horizontal nav with Home / Book Online / About / Get a Quote / Features / More, phone number at right.
- Section rhythm: large hero with oversized heading and cleaning image, About block, service/booking area, features/value block, quote/contact form, simple Wix footer.
- Non-negotiable structural cues preserved: text-only navy brand header; oversized Oswald-style hero headline; cleaning imagery split between tall mirror image and floor-cleaning image; “Contact us for your free estimate!” contact area; phone number repeated in header/footer.

## What is already working
- Real business contact details are visible: `502-299-3213` and `cleanfreaksllc21@gmail.com`.
- The home page promise is simple and relevant: cleaning done right, customized offerings, free estimate.
- The site already has useful pages for About, Get a Quote, Features, and Book Online.
- The existing photos match the cleaning-service category and should be preserved.
- The navy-on-white template is simple, legible, and recognizable.

## Biggest conversion issues
1. **Critical: generic booking leftovers.** The Book Online page shows three repeated “Service Name” items with “1 hr” and “19.99 US dollars,” which makes the business look unfinished or accidental.
2. **Critical: services are mixed without buyer intent.** Car detailing, hood vent cleaning, floor buffing, power washing, residential cleaning, and commercial cleaning are all listed together, making it harder for a visitor to know whether they are in the right place.
3. **High: main CTA is too vague.** “Contact” and “Submit” do not reinforce the strongest offer, which is a free estimate.
4. **High: quote path is thin.** The Get a Quote page only says “Prices our competition cant beat and service they cant meet” plus Submit, without explaining what to send or what happens after submission.
5. **Medium: trust proof is buried.** Local owners, professional approach, detailed training, and outstanding quality exist on the Features page but are not near the first decision point.
6. **Medium: mobile scanning is harder than necessary.** The current page repeats nav/template content and leaves visitors to dig for services and next steps.

## Best Page Profit Check improvements
- Replace generic booking leftovers with a clean “Our Services” section grouped by buyer intent: Home Cleaning, Business & Floor Care, Detailing & Exterior.
- Make the primary action “Call for a Free Estimate” and keep email as the secondary action.
- Move trust cues near the hero: local owners, clear quotes, flexible service types.
- Add a short “What Happens Next” section so visitors know how to request a quote.
- Preserve the existing Wix visual fingerprint instead of redesigning the business into something unfamiliar.
- Keep car detailing starting at $125 and quote-based language for variable cleaning/power washing services.

## SEO basics to tighten
- Title should include the business name, Louisville, and cleaning services, for example: “Clean Freak Services LLC | Louisville Cleaning Services.”
- Meta description should mention residential cleaning, commercial cleaning, detailing, floor buffing, hood vent cleaning, power washing, Louisville, and free estimates.
- The page should have one clear H1 and descriptive H2s for About, Services, What Happens Next, Features, and Free Estimate.
- Add plain-language service terms on the page rather than hiding them only inside booking widgets.
- Improve grammar in visible copy: “everyday” should be “every day,” “cant” should be “can’t.”
- If implemented in Wix, add image alt text that describes the cleaning images and local service area.

## Realistic implementation angle
This is a small Wix cleanup, not a rebuild. A realistic implementation would be:
- Remove or hide the three placeholder “Service Name” booking items.
- Rewrite the Book Online/service area into grouped service cards.
- Update hero copy and CTA buttons.
- Add a short next-step section above the quote/contact form.
- Bring Features trust language closer to the top.
- Update page title/meta and copy cleanup.

ROM implementation estimate: about 3 to 6 hours in Wix if the owner has access and does not need new photography or custom integrations. If the booking flow needs reconfiguration across Wix Bookings, estimate 5 to 8 hours.

## Offer fit
Good fit for a $99 Page Profit Check because the issue is concrete and visible: template leftovers are likely costing trust. The deliverable can show a same-site cleanup rather than an abstract critique. The implementation upsell is also modest and believable because Wix changes should be contained.

## Direct links
- Live site: https://cleanfreaksllc6.wixsite.com/website
- Book Online: https://cleanfreaksllc6.wixsite.com/website/book-online
- About: https://cleanfreaksllc6.wixsite.com/website/about
- Get a Quote: https://cleanfreaksllc6.wixsite.com/website/get-a-quote
- Features: https://cleanfreaksllc6.wixsite.com/website/features
- Phone: tel:502-299-3213
- Email: mailto:cleanfreaksllc21@gmail.com
- Local prototype file: `prototypes/2026-05-05-0200-nightly/clean-freak-services/index.html`

## Audit-to-Prototype Coverage
| Finding | Severity | Prototype fix | Where it appears | Status |
|---|---:|---|---|---|
| Three generic “Service Name” booking blocks with $19.99 damage trust. | Critical | Removed placeholders and replaced with real grouped service cards. | `#services` / “Our Services” | fixed |
| Services are mixed together without clear buyer intent. | Critical | Grouped into Home Cleaning, Business & Floor Care, Detailing & Exterior. | `#services` cards | fixed |
| Main CTA says “Contact” instead of the specific free-estimate action. | High | Primary hero button now says “Call for a Free Estimate”; secondary email button supports estimate request. | Hero section | fixed |
| Quote page does not explain what happens after a visitor asks for pricing. | High | Added “What Happens Next” with three steps: reach out, share details, get estimate. | “What Happens Next” section | fixed |
| Trust cues are isolated on a separate Features page. | Medium | Added near-top trust strip and kept Features section lower on page. | Hero trust strip and `#features` | improved |
| Mobile view requires too much digging to understand services and quote path. | Medium | Collapsed into a single-page scan path with stacked cards, full-width CTAs, and visible phone/email. | Responsive CSS under 860px | improved |
| Existing brand could be lost if redesigned too heavily. | Medium | Preserved navy/white palette, Oswald-like headings, Wix banner/header/footer rhythm, and original images. | Whole page | fixed |
| SEO lacks localized/service-specific page framing. | Medium | Added localized title, meta description, one H1, and descriptive service copy. | `<head>` and headings | improved |

## Similarity check
The prototype intentionally remains a cleaned-up version of the same site rather than a new agency design. It preserves the Wix ad bar, text-only navy brand, simple white header, large Oswald-style hero heading, original cleaning images, navy/white palette, About section, Features language, free-estimate contact area, repeated phone number, and Wix-style footer. The main changes are conversion cleanup: more specific CTA, grouped services, trust near the top, and removal of generic booking leftovers.

## Final acceptance checklist
- [x] Hero is clearer than original.
- [x] Main CTA is specific: “Call for a Free Estimate.”
- [x] Trust appears near the top.
- [x] Services are clearer by buyer intent.
- [x] What happens next is visible.
- [x] Template leftovers and “Service Name” blocks are removed.
- [x] Mobile is easier to scan with stacked cards and full-width CTAs.
- [x] Owner would recognize it as the same site cleaned up.
- [x] Prototype page does not mention audit, mockup, experiment, prototype, or Page Profit Check.
