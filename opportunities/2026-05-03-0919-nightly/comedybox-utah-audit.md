# ComedyBox Utah — Page Profit Check Audit

## Quick take
ComedyBox Utah already has the hard part: a memorable improv-club personality, real event inventory, public tickets, strong social channels, a downtown Provo address, and playful copy that feels different from a generic venue site. The conversion leak is not lack of personality; it is that the first screen and navigation make visitors work too hard to answer the simplest questions: what is next, where do I click, what happens at the show, and can I book them for my event?

## Visual fingerprint evidence
- Source screenshot: `screenshots/2026-05-03-0919-nightly/comedybox-utah-target.png`
- Logo asset: `https://static.wixstatic.com/media/bd446e_9e5a87bde3b644eb899835383976b7d1~mv2.png/v1/fill/w_512,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Comedybox%20white%20horizontal.png`
- Hero/photo asset: `https://static.wixstatic.com/media/bd446e_76683bf9c0254567895fa58bcd54b0fa~mv2.jpg/v1/fill/w_1440,h_511,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bd446e_76683bf9c0254567895fa58bcd54b0fa~mv2.jpg`
- Supporting character assets: blue/red ComedyBox player cutouts from the live homepage.
- Dominant colors: black and white base, bright yellow ticket-callout energy, red/blue accent characters/buttons.
- Typography feel: simple Wix/Arial-style sans-serif, loud all-caps headings, intentionally goofy voice.
- Header/nav pattern: dense horizontal Wix navigation with many links and a ticket path.
- Recognizable structural cues to preserve: centered Wix-like canvas on black page sides, black header with white ComedyBox horizontal logo, wide cast-photo hero, event cards, oversized playful CTA language.
- Upgrade direction: keep the energetic comedy-site texture, but reorganize the first screen around next show/ticket purchase, audience paths, trust basics, and mobile-first scanability.

## What is already working
- The site clearly communicates a fun local improv brand: “The world’s most bestest improv comedy” is memorable and on-brand.
- Ticket intent exists: `TICKETS`, “Buy Tickets now!”, event cards, and direct event-detail links are present.
- The venue has strong practical proof: since 1999, downtown Provo address, email, phone, and social channels.
- The site offers more than shows: workshops, private events, improv academy, gift cards, and backstage/news content.
- Visual assets are distinctive: real venue/cast photo, white horizontal logo, and colorful performer cutouts.

## Biggest conversion issues
### Critical
1. **The first screen does not make the next ticket action obvious enough.** The homepage has ticket links and a playful “PSSSST” prompt, but the immediate next show/date and strongest ticket CTA are not framed as the main above-the-fold action.
   - Prototype fix: added a hero-level “Next public show” card for the Friday 7:30 Show with date, door/seating note, and direct ticket CTA.
2. **Visitors have too many equal navigation choices before they know what to do.** The desktop nav includes Home, Tickets, Workshops, Private Events, About, FAQs, Improv Academy, Backstage, and Gift Card. That creates decision friction for first-time visitors who mainly need shows, workshops, or private events.
   - Prototype fix: simplified top nav and created three large buyer paths: See a show, Try improv, Hire the cast.

### High
1. **Practical trust details are present but scattered.** Address, runtime, seating, phone, and email appear lower on the page, while first-time ticket buyers need those details earlier.
   - Prototype fix: added a top trust strip with since 1999, downtown Provo, weekend shows, and phone number.
2. **Show expectations are buried in paragraph copy.** Doors open, first-come seating, 90-minute runtime, and intermission are useful buyer details, but they are not tied directly to the ticket CTA.
   - Prototype fix: surfaced door/seating/runtime details in the next-show card and “what happens next” section.
3. **Private event intent is split across multiple blocks.** “PRivate events!”, “WE ARE FOR HIRE!”, “BOOK NOW,” “HIRE US,” and “LEARN MORE” all point toward the same offer but feel repetitive rather than organized.
   - Prototype fix: consolidated private events into one clear “Hire the cast” path with one CTA.
4. **Mobile scanning likely suffers from dense nav and scattered calls to action.** The playful copy works, but mobile users need fewer competing links and bigger action cards.
   - Prototype fix: converted the main actions and events into stacked, large-tap-target sections on small screens.

### Medium
- Some capitalization/typos are charming but uneven (`THe`, `WHATS`, `PRivate`). Keep the comedic voice, but tighten the most visible trust/CTA copy.
- SEO title already includes improv and address, but the homepage H1 structure can better target “improv comedy shows in Provo.”
- Social follow section is useful but competes with ticket conversion; it should remain secondary after ticket/private-event actions.

## Best Page Profit Check improvements
1. Make the hero answer “what should I do next?” with a direct next-show card and ticket CTA.
2. Reduce top-level navigation pressure by grouping user intent into shows, workshops, and private events.
3. Move venue trust basics above the fold: since 1999, downtown Provo, address/phone, weekend show expectations.
4. Turn the runtime/seating notes into scan-friendly “what happens next” steps.
5. Consolidate private-event copy into one memorable offer path.
6. Preserve the goofy ComedyBox voice while cleaning the highest-visibility copy.
7. Improve mobile tap targets and section hierarchy without making the site feel corporate.

## SEO basics to tighten
- Suggested title: `ComedyBox Utah | Improv Comedy Shows in Provo, UT`
- Suggested meta description: `ComedyBox Utah is Provo's interactive improv comedy club at 36 W Center St. See upcoming shows, buy tickets, book private events, and join improv workshops.`
- Use one H1 focused on improv comedy and Provo.
- Use descriptive headings for `Upcoming Improv Shows`, `Private Comedy Events`, `Improv Workshops`, and `Downtown Provo Comedy Club`.
- Add alt text to venue/cast images that describes the club and performers, not generic file names.
- Add structured local-business/event basics later if implementation scope expands.

## Realistic implementation angle
This can be a surgical Wix cleanup rather than a redesign. Keep the existing ComedyBox logo, cast photos, event system, social links, and playful voice. The likely implementation work is: adjust hero hierarchy, add a featured next-show module, simplify/condense navigation labels, create three audience-path cards, move address/phone/show logistics higher, and tighten mobile section stacking.

## Offer fit
Strong fit for a $99 Page Profit Check. The business has real activity and visible buyer intent, so a small before/after homepage direction can show value quickly. A follow-on implementation sprint could be positioned as a Wix homepage/CTA cleanup rather than a full site rebuild.

## Direct links
- Original website: https://www.comedyboxutah.com/
- Tickets: https://www.comedyboxutah.com/event-list
- Friday 7:30 Show: https://www.comedyboxutah.com/event-details/friday-7-30-show-2026-05-08-19-30
- Workshops: https://www.comedyboxutah.com/workshops
- Private events: https://www.comedyboxutah.com/hire-us
- Email: mailto:comedyboxutah@gmail.com
- Phone: tel:18013779700
- Prototype file: `prototypes/2026-05-03-0919-nightly/comedybox-utah/index.html`

## Audit-to-Prototype Coverage
| Finding | Severity | Prototype fix | Where it appears | Status |
|---|---|---|---|---|
| Next ticket action is not clear enough above the fold | Critical | Added featured next-show card with Friday 7:30 Show, date, door/seating note, and direct CTA | Hero | Fixed |
| Dense navigation creates decision friction | Critical | Simplified nav and added three audience paths: shows, workshops, private events | Header and path cards | Improved |
| Practical trust details are scattered | High | Added top trust strip with since 1999, downtown Provo, weekend shows, and phone | Trust strip below hero | Fixed |
| Show logistics are buried in paragraph copy | High | Moved doors/seating/runtime details into next-show card and simple steps | Hero card and “What happens next” | Fixed |
| Private-event offer is repetitive across multiple blocks | High | Consolidated into one “Hire the cast” card and CTA | Audience path cards and contact CTA | Improved |
| Mobile scanability needs clearer tap targets | High | Built stacked mobile layout with large buttons/cards and fewer competing first-screen links | Full responsive prototype | Improved |

## Similarity check
- Preserved: black/white ComedyBox palette, white horizontal ComedyBox logo, centered Wix-like page canvas, wide cast-photo hero, goofy all-caps voice, yellow/red/blue accent energy, event-card rhythm, downtown Provo address, phone/email, and real ticket/private-event/workshop links.
- Changed lightly: gave the hero a stronger next-show/ticket module, condensed the decision paths, moved trust details higher, and made the private-event/workshop paths easier to scan.
- Visual resemblance: High. The page should read as ComedyBox Utah upgraded, not a generic theater template.

## Final acceptance checklist
- [x] The hero is clearer than the original.
- [x] The primary CTA is specific, not generic.
- [x] Trust signals appear near the top of the page.
- [x] Services/offers are organized by buyer intent: show tickets, workshops, private events.
- [x] There is a visible “what happens next” flow for guests.
- [x] Obvious CTA repetition is reduced.
- [x] The contact section feels intentional and business-specific.
- [x] Copy is easier to scan on mobile.
- [x] The page still feels like the same brand/site family.
- [x] The prototype contains no internal commentary about being a prototype or experiment.

Final scores:
- Visual resemblance: High
- Audit coverage: High
