# Ark Property Services Source Assets

Inspection performed with Playwright on May 18, 2026 before writing the prototype. The live page was loaded in Chromium at the assigned URL, allowed to finish Wix lazy loading, screenshotted, and evaluated in-page for visible text, links, image/source URLs, computed CSS background images, colors, fonts, and section geometry.

## Live page inspected

- Property Services page: https://arkpsllc1.wixsite.com/aps1/property-services

## Extracted business and contact details

- Business name shown in header: Ark Property Services, LLC
- Phone: 810-355-6352
- Email: arkpsllc@gmail.com
- Page headline: Property Services
- Visible service copy: roof/gutter cleaning, pressure washing for house, driveway, and deck, window washing, deck staining, and driveway drainage cleaning
- CTA text on live page: Get A Free Estimate
- Live page title returned by browser: Bathrooms | M&B Remodeling
- Footer text returned by browser: © 2035 by M&B Remodeling. Powered and secured by Wix

## Images and media reused in prototype

| Use | Source URL | Notes |
|---|---|---|
| Header house mark | https://static.wixstatic.com/shapes/84770f_7b3b36b4bad04ce6a72d030012b1f3a0.svg | Wix-hosted SVG shape loaded by the live page. Reused with black filter to match the live header. |
| Gallery photo 1 | https://static.wixstatic.com/media/3717fa_30cfd56fcf1f45dcaeb8f24a8502b0fd~mv2.png/v1/fit/w_480,h_480,q_90,enc_avif,quality_auto/3717fa_30cfd56fcf1f45dcaeb8f24a8502b0fd~mv2.png | Original live page project image. |
| Gallery photo 2 | https://static.wixstatic.com/media/3717fa_5c8b1cd1b24c4c87b09693ba7444ad89~mv2.png/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/3717fa_5c8b1cd1b24c4c87b09693ba7444ad89~mv2.png | Original live page project image. |
| Gallery photo 3 | https://static.wixstatic.com/media/3717fa_7597123169374b979d8db8e4dc9b9a30~mv2.png/v1/fit/w_480,h_480,q_90,enc_avif,quality_auto/3717fa_7597123169374b979d8db8e4dc9b9a30~mv2.png | Original live page project image. |
| Gallery photo 4 | https://static.wixstatic.com/media/3717fa_e6e25bd327b342fc8e30408905a0af07~mv2.png/v1/fit/w_480,h_480,q_90,enc_avif,quality_auto/3717fa_e6e25bd327b342fc8e30408905a0af07~mv2.png | Original live page project image. |
| Gallery photo 5 | https://static.wixstatic.com/media/3717fa_6bfd6527865548bfb8686b4dfd7eac72~mv2.png/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/3717fa_6bfd6527865548bfb8686b4dfd7eac72~mv2.png | Original live page project image. |
| Gallery photo 6 | https://static.wixstatic.com/media/3717fa_47d89e6df12b4b69aeab3ffdc2a277c1~mv2.png/v1/fit/w_480,h_480,q_90,enc_avif,quality_auto/3717fa_47d89e6df12b4b69aeab3ffdc2a277c1~mv2.png | Original live page project image. |
| Facebook icon | https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/facebook.png | Live Wix footer social icon. |
| Twitter icon | https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/twitter.png | Live Wix footer social icon. |
| YouTube icon | https://static.wixstatic.com/media/78aa2057f0cb42fbbaffcbc36280a64a.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/youtube.png | Live Wix footer social icon. |

## Computed CSS background extraction

The Playwright page evaluation found no reusable non-data CSS `background-image` URLs on visible content blocks. The visible work photos are image/source elements from `static.wixstatic.com`, and those original site images were reused directly.

## External and stock asset check

No stock, Unsplash, Pexels, AI-generated, or generic placeholder imagery was used. The prototype uses only assets found on Ark Property Services' own Wix page, plus hand-authored HTML and CSS.

## Local inspection artifacts

- Raw Playwright extraction JSON: state/2026-05-18-0200-nightly/ark-property-services-inspection.json
- Condensed extraction JSON: state/2026-05-18-0200-nightly/ark-property-services-summary.json
- Similarity results JSON: state/2026-05-18-0200-nightly/ark-property-services-similarity.json
