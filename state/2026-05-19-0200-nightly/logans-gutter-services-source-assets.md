# Logans Gutter Services Source Assets

Inspection performed with Playwright on May 19, 2026 before writing the prototype. The live page was loaded in Chromium at the assigned URL, allowed time for Wix rendering, scrolled from top to bottom to trigger lazy-loaded assets, screenshotted, and evaluated in-page for visible text, links, DOM images, response image URLs, computed CSS background images, colors, fonts, and section geometry.

## Live page inspected

- Home page: https://logansgutterservic.wixsite.com/website-2

## Extracted business and contact details

- Business name shown in hero: LOGANS GUTTER SERVICES
- Browser title returned by live page: Home | LOGANS GUTTER SERVICES
- Location text: Westchester NY
- Hero subtitle: Exceptional Service All Westchester
- Email: logansgutterservicesny@gmail.com
- Phone: 9144334835
- Main nav links: Home, Book Online
- Hero CTAs: Click here to Call or Text, Click here to email us
- Services shown: Gutter Cleaning, Gutter Install & Repairs., Gutter Guards, Pressure Wash
- Contact section: Get in Touch, Westchester NY, email, phone, contact form
- Opening hours shown: Mon - Fri 8am - 7pm, Sat 8am - 7pm, Sun 8am - 2am
- Footer text: ©2020 by LOGANS GUTTER SERVICES. Proudly created with Wix.com

## Images and media reused in prototype

| Use | Source URL | Notes |
|---|---|---|
| Hero roof/gutter background | https://static.wixstatic.com/media/82bb0d30b19f4ae1b53a0d6b84c13065.jpg/v1/fill/w_1366,h_1160,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/82bb0d30b19f4ae1b53a0d6b84c13065.jpg | Live page image alt: Corner of a Roof Gutter. Reused as hero background. |
| About split image | https://static.wixstatic.com/media/fe1129_5842a7ca04c5410a93b9c4b1729d4723~mv2.jpg/v1/fill/w_660,h_522,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/fe1129_5842a7ca04c5410a93b9c4b1729d4723~mv2.jpg | Live page image alt: gutter-cleaning.jpg. Reused in the about section. |
| Gutter cleaning service image | https://static.wixstatic.com/media/fe1129_c77e9ef8ee1b40ff87c35f3452c748ec~mv2.jpg/v1/fill/w_551,h_420,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/fe1129_c77e9ef8ee1b40ff87c35f3452c748ec~mv2.jpg | Original live service image. |
| Gutter install and repairs service image | https://static.wixstatic.com/media/f8b94c6bd4cc4a1e9d20c56fd59457f2.jpg/v1/fill/w_603,h_460,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f8b94c6bd4cc4a1e9d20c56fd59457f2.jpg | Live page image alt: Climbing a Ladder. Reused in service row. |
| Gutter guards service image | https://static.wixstatic.com/media/fe1129_e9432b5482ac4ea8ac79064a16eb6e7b~mv2.jpg/v1/fill/w_272,h_207,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/fe1129_e9432b5482ac4ea8ac79064a16eb6e7b~mv2.jpg | Original live service image. |
| Pressure wash service image | https://static.wixstatic.com/media/fe1129_6230e12ba27e4302886a076401100ac2~mv2.jpg/v1/fill/w_490,h_374,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/fe1129_6230e12ba27e4302886a076401100ac2~mv2.jpg | Original live service image. |
| Opening-hours background | https://static.wixstatic.com/media/f8b94c6bd4cc4a1e9d20c56fd59457f2.jpg/v1/fill/w_1366,h_740,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f8b94c6bd4cc4a1e9d20c56fd59457f2.jpg | Same live ladder image reused at the bottom photo section. |
| Facebook footer icon | https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Facebook.png | Live Wix footer social icon. |
| Twitter footer icon | https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Twitter.png | Live Wix footer social icon. |
| LinkedIn footer icon | https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LinkedIn.png | Live Wix footer social icon. |

## Computed CSS background extraction

The Playwright page evaluation searched all visible elements for non-data `background-image` URLs. The live Wix page presented the reusable photography as DOM image/source elements rather than reusable CSS background-image URLs, so no separate CSS background URL was needed. The prototype reuses the original DOM image URLs directly.

## Colors and layout cues reused

- Wix promotional top banner retained in the prototype for visual texture.
- Two-row dark header retained: upper Free Estimates/Get In Touch row and lower Home/Book Online/contact row.
- Main palette retained: near-black charcoal sections, slightly lighter charcoal panels, beige/tan accents, cream serif headings, and white body text.
- Hero geometry retained: full-width gutter/roof photo, centered dark overlay panel, large uppercase business-name headline, small centered CTA links, and fixed chat widget.
- About geometry retained: 50/50 split image and beige text panel.
- Service geometry retained: four stacked 603px image plus 603px dark-card rows.
- Contact/footer flow retained: Get in Touch section, form layout, map area, signup strip, opening-hours image block, subscribe/footer area, social icons, and Wix footer line.

## External and stock asset check

No stock, Unsplash, Pexels, AI-generated, or unrelated placeholder images were used. All photographic and social icon assets came from the live Logans Gutter Services Wix site. The only non-site external embed in the prototype is a Google Maps embed for Westchester NY, replacing the live Wix Google map component area while preserving the contact/map flow.

## Local inspection artifacts

- Raw Playwright extraction JSON: state/2026-05-19-0200-nightly/logans-gutter-services-inspection.json
- Extracted body text: state/2026-05-19-0200-nightly/logans-gutter-services-bodytext.txt
- Live target screenshot: screenshots/2026-05-19-0200-nightly/logans-gutter-services-target.png
- Prototype screenshot: screenshots/2026-05-19-0200-nightly/logans-gutter-services-prototype.png
- Similarity results JSON: state/2026-05-19-0200-nightly/logans-gutter-services-similarity.json
