# JustIn Time Contracting source assets

Batch: 2026-05-20-0200-nightly  
Site: https://radar317.wixsite.com/justinthehandyman

## Inspection method

- Used Playwright with system Chromium at `/snap/bin/chromium` to load the live Wix homepage before writing the audit or prototype.
- Captured the live target screenshot after Wix content rendered: `screenshots/2026-05-20-0200-nightly/justin-time-handyman-services-target.png`.
- Inspected the live Services and Gallery pages for additional service detail and real project-photo assets.
- Ran page evaluation against the live DOM to extract image URLs, link/contact data, visible copy, computed text/color cues, and CSS background-image data.
- Computed CSS background images found: none. The visible photo assets were rendered as `<img>` elements.
- Raw inspection JSON:
  - `state/2026-05-20-0200-nightly/justin-time-handyman-services-inspection.json`
  - `state/2026-05-20-0200-nightly/justin-time-handyman-services-pages-inspection.json`

## Live brand/style cues

- Top strip: light gray Wix promo banner. In the prototype, the geometry is preserved but the Wix promo wording is replaced with a trust/quote note.
- Header/nav: black/dark charcoal header, left stacked white logo text, white boxed nav items, gold phone call box on the right.
- Palette: black `rgb(0, 0, 0)`, white/near-white nav boxes, pale gold/yellow CTA and contact areas, black body text, patriotic red/white/blue hero image.
- Typography feel: simple Wix/Arial-style sans serif, bold business-name treatment, uppercase nav labels, large centered hero text.
- Layout texture: Wix page-builder structure with a promo strip, tall black header, full-width image hero, centered hero copy, bottom gold contact strip, and floating chat button.

## Extracted image assets reused in prototype

### Homepage American flag hero image

- Live rendered size: 1440 x 998
- Alt text from live site: `American Flag`
- URL: `https://static.wixstatic.com/media/11062b_ba3d1fa0ee6b4ca5836e47bcd333180f~mv2_d_4000_2934_s_4_2.jpg/v1/fill/w_1440,h_998,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_ba3d1fa0ee6b4ca5836e47bcd333180f~mv2_d_4000_2934_s_4_2.jpg`
- Reused as the prototype hero background.

### Services page project photos

- Framing and drywall:
  - Live rendered size: 300 x 219
  - Alt text from live site: `framing and drywall 2.jpg`
  - URL: `https://static.wixstatic.com/media/1bfbb3_6e4a6d4b4f1b4d36a44b36b9709ceb20~mv2.jpg/v1/fill/w_300,h_219,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/framing%20and%20drywall%202.jpg`
- Custom laundry setup:
  - Live rendered size: 262 x 219
  - Alt text from live site: `custom laundry setup.jpg`
  - URL: `https://static.wixstatic.com/media/1bfbb3_32114023471c483595a21048e0287064~mv2.jpg/v1/fill/w_262,h_219,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/custom%20laundry%20setup.jpg`
- Handrail:
  - Live rendered size: 258 x 219
  - Alt text from live site: `handrail.jpg`
  - URL: `https://static.wixstatic.com/media/1bfbb3_3101546dc0d342fd9d60a79db10b7e0e~mv2.jpg/v1/fill/w_258,h_219,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/handrail.jpg`

These three photos are reused in the prototype as a small near-the-fold proof strip.

## Extracted but intentionally not reused

- Wix promo banner destination: `https://www.wix.com/lpviral/enviral?...`
  - Reason: this is platform advertising, not a business asset. The prototype preserves the top-strip shape but removes the third-party promo friction.
- Additional gallery images:
  - Reason: the Gallery page contains many useful proof photos, but the prototype only needs a small homepage before/after direction. Three project photos are enough to demonstrate the conversion fix without creating a full gallery rebuild.

## Contact and link data extracted

- Live root: `https://radar317.wixsite.com/justinthehandyman`
- Services page: `https://radar317.wixsite.com/justinthehandyman/services`
- Gallery page: `https://radar317.wixsite.com/justinthehandyman/gallery`
- Phone shown on site: `317-349-8265`
- Phone CTA used in prototype: `tel:3173498265`
- Email shown on site: `317JustinTime@gmail.com`
- Email CTA used in prototype: `mailto:317JustinTime@gmail.com`

## Source copy and service details reused

- Business name: `JustIn Time Contracting`
- Positioning: `General Contracting & Handyman Services`
- Existing copy/themes reused: reliable, insured contractor/handyman, quality work, home repair, maintenance, miscellaneous projects, remodeling, furniture assembly, custom shelves, smoke alarms, and broad project help.
- Location inference used carefully: the site shows a 317 phone number and related Indiana/Noblesville gallery copy. Prototype uses `Indianapolis, IN` as a practical local-service framing; this should be confirmed with the owner during implementation.

## No stock or generic placeholder images added

The prototype uses only assets extracted from the live Wix site. No Unsplash, Pexels, stock, AI-generated, or unrelated placeholder imagery was added.
