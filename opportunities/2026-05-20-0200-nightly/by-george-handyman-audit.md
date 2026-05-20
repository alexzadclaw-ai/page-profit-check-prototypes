# By George! HandyMan Page Profit Check Audit

## Quick take

The current Wix homepage has a recognizable local handyman identity, visible phone/email contact info, a clear Angi reviews link, and real service copy for deck/fence repairs, drywall repairs, painting, and general handyman work. The biggest opportunity is not a full redesign; it is a focused top-of-page cleanup that makes the estimate path, call path, services, and trust proof obvious before visitors scroll.

## What is already working

- The business name, email, and phone number are visible near the top of the page.
- The homepage already has a simple handyman-services message: efficient, cost-effective help for jobs of any size.
- The existing visual fingerprint is usable: white header, dark blue hero block, large white hero text card, and real repair imagery.
- The Angi/HomeAdvisor review link is already present and should stay prominent.
- Service examples exist on the page: Deck & Fence Repairs, Drywall Repairs & Painting, and a Full List of Services path.
- The page has direct email and phone contact options.

## Biggest conversion issues

- The hero says “Handyman Services” but does not immediately show a strong call/click path beside the headline.
- Phone and email exist, but the phone should also be repeated as a prominent call button in the main navigation/hero.
- The first screen does not quickly summarize the types of jobs handled; visitors must scroll to connect the headline with actual services.
- The Angi review link is useful, but it is not paired with other simple trust/clarity cues.
- The free Wix banner and wixsite URL reduce professional credibility.
- One detected link mismatch should be checked in Wix: a visible “Get In Touch” item points to `tel:706-414-0117`, while the page displays `336-405-8637`.
- Some CTAs currently loop back to the same homepage instead of clearly opening a call, email, estimate, or services path.

## Best Page Profit Check improvements

- Keep the current Wix visual identity: white header, dark blue hero area, white headline card, and original repair photo.
- Add a clear primary CTA: “Get An Estimate.”
- Add a secondary call CTA: “Call Now” / “Call 336-405-8637.”
- Bring common service categories above the fold as compact scan cards.
- Keep “Reviews on Angi” visible in the navigation as trust proof.
- Make email and phone consistently clickable throughout the page.
- Fix the mismatched telephone link and make sure every button has a clear destination.
- If budget allows later, connect a custom domain and remove the free Wix banner.

## SEO basics to tighten

- Use one clear H1 that includes the business name and service: “By George! HandyMan: Handyman Services.”
- Add short, plain-language copy mentioning handyman services, deck repair, fence repair, drywall repair, painting, home maintenance, and estimates.
- Add descriptive alt text for the hero repair image and service images.
- Keep the phone number, email address, and business name consistent in header, body, and footer.
- If there is a known service area, add it explicitly in page copy, title/meta text, and footer.
- Add basic LocalBusiness/HomeAndConstructionBusiness schema later if Wix supports it.

## Realistic implementation angle

This should be sold as a surgical Wix cleanup, not a rebrand. The best implementation is:

1. Keep the existing layout vocabulary and images.
2. Strengthen the first screen with estimate and call CTAs.
3. Add service-category scan cards above the fold.
4. Keep Angi reviews visible as trust proof.
5. Fix inconsistent links and CTA destinations.
6. Improve mobile phone/email click behavior.

## Offer fit

Good fit for a $99 Page Profit Check because the page has real business details but loses momentum in the first screen. The audit can show clear, practical fixes: stronger estimate CTA, direct call path, service clarity, review trust, and link cleanup. Implementation in Wix should be a separate focused project.

## Direct links

- Live site: https://bygeorgehandyman9.wixsite.com/home
- Services page: https://bygeorgehandyman9.wixsite.com/home/services
- Angi/HomeAdvisor reviews: https://www.homeadvisor.com/rated.ByGeorgeHandyManLLC.62365115.html
- Email: mailto:bygeorgehandyman9@gmail.com
- Displayed phone: tel:3364058637

## Audit-to-Prototype Coverage

- Weak first-screen estimate path: prototype adds a primary “Get An Estimate” button in the hero.
- Phone not prominent enough: prototype adds “Call 336-405-8637” in the header and “Call Now” in the hero.
- Services hidden below hero: prototype adds above-fold cards for Deck & Fence Repairs, Drywall Repairs, Painting Help, and General Home Repairs.
- Trust proof could be clearer: prototype keeps “Reviews on Angi” in the main navigation and adds a compact trust row.
- CTA link ambiguity: prototype maps estimate to email and call actions to the displayed phone number.
- Visual fidelity: prototype preserves the Wix banner, white contact/header areas, dark blue hero background, original hero repair image, white text card, and service order themes.

## Similarity check

The prototype intentionally stays close to the existing Wix homepage instead of becoming a generic contractor landing page. The visual similarity gate returned:

- colorHistogramSimilarity: 0.7153
- pixelSimilarity: 0.6111
- edgeLayoutSimilarity: 0.6389
- perceptualHashSimilarity: 0.4375
- weightedSimilarity: 0.6181

The required thresholds are passed: weightedSimilarity is above 0.25 and edgeLayoutSimilarity is above 0.45. The main differences are purposeful conversion fixes: stronger estimate/call CTAs, service scan cards, and clearer trust/contact cues.

## Source assets reused

- Original Wix page structure and top bars.
- Original hero repair image: `22da903611924c41a0a1be1d3da3d857.jpg` from Wix static assets.
- Existing business name, email, displayed phone, services language, Angi/HomeAdvisor link, and footer copy themes.
- Existing color direction: white header/contact areas, dark blue hero block, black text, and warm accent for active navigation/CTAs.

## Final acceptance checklist

- [x] Inspected the live site with Playwright in Chromium using `/snap/bin/chromium`.
- [x] Scrolled the live page to trigger lazy-loaded assets before capture.
- [x] Captured the current target screenshot.
- [x] Extracted DOM text, links, and image URLs.
- [x] Reused original website imagery, palette, layout fingerprint, contact details, Angi link, and service themes.
- [x] Did not add unrelated stock or placeholder imagery.
- [x] Wrote the prototype HTML directly by hand.
- [x] Did not send emails, submit forms, commit, push, or touch CRM/Gmail.
- [x] Created the audit, offer, prototype, target screenshot, prototype screenshot, source-assets file, and visual similarity JSON under the repo paths.
- [x] Ran `python3 scripts/visual_similarity_gate.py screenshots/2026-05-20-0200-nightly/by-george-handyman/by-george-handyman-target.png screenshots/2026-05-20-0200-nightly/by-george-handyman/by-george-handyman-prototype.png` from `/home/claw/.openclaw/workspace/page-profit-check-prototypes`.
- [x] Passed visual similarity thresholds: weightedSimilarity 0.6181 and edgeLayoutSimilarity 0.6389.
