# Fitzgerald Lawn Solutions Source Assets

Inspection performed with Playwright and system Chromium at `/snap/bin/chromium` on May 19, 2026 before writing the prototype. The assigned live Wix services page was loaded, scrolled from top to bottom to trigger lazy assets, returned to the top, screenshotted, and evaluated in-page for DOM image URLs, source/srcset URLs, computed CSS background-image URLs, visible text, links, colors, fonts, and section geometry.

## Live page inspected

- Services page: https://fitzlawns.wixsite.com/website/services
- Browser title returned: `Services | Fitzgerald Lawn Solutions`
- Captured target screenshot: `screenshots/2026-05-19-0200-nightly/fitzgerald-lawn-solutions-target.png`

## Extracted business and contact details

- Business name: Fitzgerald Lawn Solutions
- Email: fitzgeraldlawnsolutions@gmail.com
- Phone: 912-536-9887
- Address shown in footer: 232 Walker Ave., Fitzgerald, GA 31750
- Primary page headline: Lawn Care & Landscape Services
- Visible services: lawn maintenance, shrub/hedge trimming, leaf and pine needle removal, property cleanup, mulch and pine straw installation, garden bed defining
- Social links: Facebook and Instagram

## Images and media reused in prototype

| Use | Source URL | Notes |
|---|---|---|
| Header logo | https://static.wixstatic.com/media/154912_cba764741e164f3b83276b56603f2b54~mv2.png/v1/fill/w_155,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WIX%20LOGO.png | Original Wix-hosted Fitzgerald Lawn Solutions logo from the live header. |
| Header Facebook icon | https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Facebook.png | Live header social icon. |
| Header Instagram icon | https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Instagram.png | Live header social icon. |
| Lawn maintenance photo | https://static.wixstatic.com/media/154912_210e7613d7ca4475afa7cb8eb5343ab0~mv2.jpg/v1/fill/w_663,h_641,fp_0.50_0.50,q_85,enc_avif,quality_auto/154912_210e7613d7ca4475afa7cb8eb5343ab0~mv2.jpg | Original live page service image, alt text on live page: `zero+turn.jpg`. |
| Shrub/hedge trimming photo | https://static.wixstatic.com/media/154912_b02a9c438b324ec7829a1f5dc88e5967~mv2.jpg/v1/fill/w_683,h_660,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/154912_b02a9c438b324ec7829a1f5dc88e5967~mv2.jpg | Original live page service image, alt text on live page: `Hedge Trimming.jpg`. |
| Leaf and pine needle removal photo | https://static.wixstatic.com/media/154912_ef1de4c14c624d8d9f87feace2498689~mv2.jpg/v1/fill/w_658,h_635,fp_0.50_0.50,lg_1,q_85,enc_avif,quality_auto/154912_ef1de4c14c624d8d9f87feace2498689~mv2.jpg | Original live page service image, alt text on live page: `Service-Leaf-Removal_edited.jpg`. |
| Property cleanup photo | https://static.wixstatic.com/media/154912_b42a25ef46fb4c54817f1b1bd8d2a90b~mv2.jpg/v1/fill/w_683,h_660,fp_0.35_0.48,lg_2,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/154912_b42a25ef46fb4c54817f1b1bd8d2a90b~mv2.jpg | Original live page service image, alt text on live page: `Yard Cleanup.jpg`. |
| Mulch and pine straw photo | https://static.wixstatic.com/media/154912_4e5a60c1c9b64b7997e2dc75d21233b8~mv2.jpg/v1/fill/w_683,h_660,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/154912_4e5a60c1c9b64b7997e2dc75d21233b8~mv2.jpg | Original live page service image, alt text on live page: `pine straw.jpg`. |
| Garden bed defining photo | https://static.wixstatic.com/media/154912_a00bc2852e674099ac3c1c9cf6dce326~mv2.jpg/v1/fill/w_683,h_660,fp_0.50_0.50,lg_2,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/154912_a00bc2852e674099ac3c1c9cf6dce326~mv2.jpg | Original live page service image, alt text on live page: `Bed Edging.jpg`. |
| Footer Facebook icon | https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Facebook.png | Live footer social icon. |
| Footer Instagram icon | https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Instagram.png | Live footer social icon. |

## Computed CSS background extraction

The Playwright page evaluation found no reusable non-data CSS `background-image` URLs on visible content blocks. The visible logo, service photos, and social icons are DOM image elements from `static.wixstatic.com`, and those live assets were reused directly.

## External and stock asset check

No stock, Unsplash, Pexels, AI-generated, or generic placeholder imagery was introduced. The prototype uses only assets found on Fitzgerald Lawn Solutions' own Wix page, plus hand-authored HTML and CSS.

## Local inspection artifacts

- Raw Playwright extraction JSON: `state/2026-05-19-0200-nightly/fitzgerald-lawn-solutions-inspection.json`
- Condensed extraction JSON: `state/2026-05-19-0200-nightly/fitzgerald-lawn-solutions-summary.json`
- Similarity results JSON: `state/2026-05-19-0200-nightly/fitzgerald-lawn-solutions-similarity.json`
- Target screenshot: `screenshots/2026-05-19-0200-nightly/fitzgerald-lawn-solutions-target.png`
- Prototype screenshot: `screenshots/2026-05-19-0200-nightly/fitzgerald-lawn-solutions-prototype.png`
