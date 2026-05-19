# Finishing Touch Handyman Services Source Assets

Inspection performed with Playwright before writing the prototype. The live Wix site was loaded in Chromium using `/snap/bin/chromium`, scrolled to trigger lazy assets, captured as the target screenshot, and evaluated in-page for images, links, headings, visible text, and computed CSS background-image URLs.

## Live page inspected

- Root/home: https://finishingtouchpa.wixsite.com/start

## Extracted business and contact details

- Business name: Finishing Touch Handyman Services
- Phone: 610.905.5265
- Email: FinishingTouchHandyman1@gmail.com
- Location/service area: Lehigh Valley, based near Nazareth; Lehigh, Northampton, Northern Bucks, and Southern Monroe Counties
- Existing quote form: https://form.jotform.com/222448850029154
- License/trust proof: licensed contractor PA176483 and fully insured
- Experience proof: owned and operated by Nick, a Lehigh Valley native with over 20 years of home improvement and housing industry experience
- Service categories shown: Carpentry, Plumbing, Electrical, Painting, Remodeling, and more

## Images reused in prototype

| Use | Source URL | Notes |
|---|---|---|
| Header logo | https://static.wixstatic.com/media/6728de_9fe731dbd607476fb8e9cbc03292de08~mv2.png/v1/fill/w_131,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FT%20LOGO%202.png | Live Finishing Touch logo. |
| Facebook icon | https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e316f544f9094143b9eac01f1f19e697.png | Live social icon. |
| Instagram icon | https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d6893330740455c96d218258a458aa4.png | Live social icon. |
| Yelp icon | https://static.wixstatic.com/media/11062b_e4f51512c6a64b839b6d7479f5d5e047~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_e4f51512c6a64b839b6d7479f5d5e047~mv2.png | Live social icon. |
| Hero image | https://static.wixstatic.com/media/a38016_925a0d8e71a44716a65d95ec04e80fe6.jpg/v1/fill/w_1365,h_972,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_925a0d8e71a44716a65d95ec04e80fe6.jpg | Live hero handyman/roof image. |
| Carpentry icon | https://static.wixstatic.com/media/a38016_6a5a1bff2b7745818c6b2661f05261d9.png/v1/fill/w_65,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_6a5a1bff2b7745818c6b2661f05261d9.png | Live services icon. |
| Plumbing icon | https://static.wixstatic.com/media/a38016_5b2baf51f5024b4c816c9553e2e607df.png/v1/fill/w_62,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_5b2baf51f5024b4c816c9553e2e607df.png | Live services icon. |
| Electrical icon | https://static.wixstatic.com/media/a38016_0b4fe7bbc9df4d85a626fd3190d9e9f4.png/v1/fill/w_37,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_0b4fe7bbc9df4d85a626fd3190d9e9f4.png | Live services icon. |
| Painting icon | https://static.wixstatic.com/media/a38016_1439136c15f845bcbb1b10286923624e.png/v1/fill/w_45,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_1439136c15f845bcbb1b10286923624e.png | Live services icon. |
| Remodeling icon | https://static.wixstatic.com/media/a38016_5938d9c28cd74c068772d9ea21735305.png/v1/fill/w_56,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_5938d9c28cd74c068772d9ea21735305.png | Live services icon. |
| Who We Are background | https://static.wixstatic.com/media/a38016_006ea8c45821441db6f0bb261178cc6f.jpg/v1/fill/w_1365,h_472,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_006ea8c45821441db6f0bb261178cc6f.jpg | Live wood-plank section image. |
| Contact background | https://static.wixstatic.com/media/11062b_883ad1721a1949e499b0a264a90c110c~mv2.jpg/v1/fill/w_1365,h_1203,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_883ad1721a1949e499b0a264a90c110c~mv2.jpg | Live handyman/saw contact section image. |

## Computed CSS background extraction

- The in-page computed CSS background extraction returned no reusable non-data CSS background image URLs.
- The visible design is built primarily from Wix image elements and solid section colors.

## External/stock asset check

No Unsplash, Pexels, Pixabay, or unrelated outside stock image references were added. The prototype uses only image URLs found on the live Finishing Touch Handyman Services Wix site.

## Generated inspection artifacts

- Live extraction JSON: `state/2026-05-19-0200-nightly/finishing-touch-handyman-live-inspection.json`
- Source HTML capture: `state/2026-05-19-0200-nightly/finishing-touch-handyman-source.html`
- Live target screenshot: `screenshots/2026-05-19-0200-nightly/finishing-touch-handyman-target.png`
- Prototype screenshot: `screenshots/2026-05-19-0200-nightly/finishing-touch-handyman-prototype.png`
- Similarity gate result: `state/2026-05-19-0200-nightly/finishing-touch-handyman-visual-similarity.json`
