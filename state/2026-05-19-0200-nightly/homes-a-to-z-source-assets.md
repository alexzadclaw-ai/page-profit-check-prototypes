# Homes A to Z Handyman Services Source Assets

Inspection performed with Playwright before writing the prototype. The live Wix site was loaded in Chromium using `/snap/bin/chromium`, scrolled to trigger lazy-loaded media, captured as the target screenshot, and evaluated in-page for visible images, links, headings, text blocks, computed CSS background images, and common colors.

## Live page inspected

- Root/home: https://homesatoz1.wixsite.com/mysite

## Extracted business and contact details

- Business name: Homes A to Z Handyman Services
- Proprietor: Rob Hamill
- Phone: 414-232-5246
- Email: homes.a.to.z1@gmail.com
- Location/service area: Wauwatosa and Milwaukee Metro Area
- Trust story: Rob spent more than 25 years as a high school teacher in Wauwatosa, served people in the Milwaukee Metro area with home repair needs, and expanded the business after retiring from teaching.
- Tagline: "No job is too small!"
- Service categories shown: Carpentry, Plumbing, Electrical, Painting, and Maintenance
- Social links: Facebook and Instagram pages with work photos

## Images reused in prototype

| Use | Source URL | Notes |
|---|---|---|
| Hero image | https://static.wixstatic.com/media/a38016_925a0d8e71a44716a65d95ec04e80fe6.jpg/v1/fill/w_1365,h_651,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_925a0d8e71a44716a65d95ec04e80fe6.jpg | Live handyman/tools hero photo. |
| Carpentry icon | https://static.wixstatic.com/media/a38016_6a5a1bff2b7745818c6b2661f05261d9.png/v1/fill/w_65,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_6a5a1bff2b7745818c6b2661f05261d9.png | Live hammer service icon. |
| Plumbing icon | https://static.wixstatic.com/media/a38016_5b2baf51f5024b4c816c9553e2e607df.png/v1/fill/w_62,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_5b2baf51f5024b4c816c9553e2e607df.png | Live wrench service icon. |
| Electrical icon | https://static.wixstatic.com/media/a38016_0b4fe7bbc9df4d85a626fd3190d9e9f4.png/v1/fill/w_37,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_0b4fe7bbc9df4d85a626fd3190d9e9f4.png | Live screwdriver service icon. |
| Painting icon | https://static.wixstatic.com/media/a38016_1439136c15f845bcbb1b10286923624e.png/v1/fill/w_45,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_1439136c15f845bcbb1b10286923624e.png | Live paintbrush service icon. |
| Maintenance icon | https://static.wixstatic.com/media/a38016_5938d9c28cd74c068772d9ea21735305.png/v1/fill/w_56,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_5938d9c28cd74c068772d9ea21735305.png | Live pliers service icon. |
| Wood background | https://static.wixstatic.com/media/a38016_006ea8c45821441db6f0bb261178cc6f.jpg/v1/fill/w_1365,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_006ea8c45821441db6f0bb261178cc6f.jpg | Live wood plank background behind the Who I Am section. |
| Facebook icon | https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png | Live white Facebook social icon. |
| Instagram icon | https://static.wixstatic.com/media/6cc776af25744f77ab9c420b98d1abe6.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6cc776af25744f77ab9c420b98d1abe6.png | Live white Instagram social icon. |

## Computed CSS background extraction

- The in-page computed CSS background extraction returned no reusable non-data CSS background image URLs.
- The visible design is built primarily from Wix image elements and solid section colors.

## External/stock asset check

No Unsplash, Pexels, Pixabay, generated, or unrelated outside stock image references were added. The prototype uses only image URLs found on the live Homes A to Z Wix site.

## Generated inspection artifacts

- Live extraction JSON: `state/2026-05-19-0200-nightly/homes-a-to-z-live-inspection.json`
- Source HTML capture: `state/2026-05-19-0200-nightly/homes-a-to-z-source.html`
- Live target screenshot: `screenshots/2026-05-19-0200-nightly/homes-a-to-z-target.png`
- Prototype screenshot: `screenshots/2026-05-19-0200-nightly/homes-a-to-z-prototype.png`
- Similarity gate result: `state/2026-05-19-0200-nightly/homes-a-to-z-visual-similarity.json`
