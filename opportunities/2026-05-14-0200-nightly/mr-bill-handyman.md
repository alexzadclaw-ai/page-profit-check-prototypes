# Mr. Bill Handyman LLC audit

- Live site: https://mrbillhandymanllc.wixsite.com/mrbillhandymanllc
- Business: Mr. Bill Handyman, LLC
- Contact found: mr.billhandymanllc@gmail.com, 609-435-4398
- Category: handyman, home improvement, renovation, and repair
- Location signal: South Jersey, Northern Pennsylvania, McKean County, Potter County, Port Allegany PA

## Quick read

Mr. Bill has a better story than the current homepage shows at first glance. The page has licensing, insurance, TWIC clearance, a family business origin, 25 years of home improvement experience, and many project photos. The problem is not lack of substance. The problem is hierarchy: the strongest trust and estimate cues are scattered through a very long Wix page.

## Main conversion leaks

1. **The first screen is too generic for a high-intent handyman visitor.** The live hero says “Welcome” and “At Your Service,” but a visitor with a real repair need has to keep reading to understand what to ask for and why to trust Bill.
2. **Trust proof is present but buried in paragraph copy.** License numbers, insurance, TWIC clearance, and 25 years of experience should be visible above the fold and near contact calls to action.
3. **Phone consistency needs cleanup.** The visible site text shows 609-435-4398, while some call buttons in the captured DOM point to a different `tel:` number. That can leak calls and create doubt.
4. **Service breadth is hard to scan.** Flooring, backsplash, remodel, odd jobs, gutters, decks, fixtures, drywall, painting, and carpentry are all there, but the visitor has to work too hard to map their problem to a next step.
5. **The gallery is valuable but too heavy.** The large photo grid proves real work, but it appears after a long scroll and can distract from the estimate path.

## Prototype direction

The prototype keeps the original black and gold contractor aesthetic, horse handyman logo, construction hero image, service imagery, family tone, and project photos. It reorganizes the page around:

- A stronger handyman headline and two clear CTAs: call or email photos.
- Above-the-fold proof pills for license, insurance, TWIC clearance, and experience.
- Four simple service cards: flooring/tile, remodels/repairs, kitchens/baths, odd jobs/exterior help.
- A short “real people, real needs” story section that keeps Julie and Bill’s personality without forcing a long read.
- A tighter project photo gallery that supports trust without burying contact.
- A final estimate block with the current visible phone and email.

## Expected impact

This should make the page feel more credible in the first 10 seconds, reduce confusion around what Mr. Bill does, and increase calls or email estimate requests from homeowners who need practical repairs and small projects finished.

## Artifact links

- Prototype: `prototypes/2026-05-14-0200-nightly/mr-bill-handyman/index.html`
- Source notes: `prototypes/2026-05-14-0200-nightly/mr-bill-handyman/source-notes.md`
- Live screenshot: `screenshots/2026-05-14-0200-nightly/mr-bill-handyman-target.png`
