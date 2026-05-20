# Alex Handyman Service source assets

Batch: 2026-05-20-0200-nightly  
Site: https://alexhandyman.wixsite.com/home

## Inspection method

- Used Playwright with system Chromium at `/snap/bin/chromium` to load the live Wix site before writing the audit or prototype.
- Captured the live target screenshot after Wix content rendered: `screenshots/2026-05-20-0200-nightly/alex-handyman-service-target.png`.
- Scrolled the page to trigger Wix lazy-loaded image assets, then evaluated the live DOM for visible text, links, images, and style cues.
- Raw inspection JSON: `state/2026-05-20-0200-nightly/alex-handyman-service-inspection.json`.
- Visible text extract: `state/2026-05-20-0200-nightly/alex-handyman-service-visible-text.txt`.

## Live brand/style cues

- Top strip: Wix ad banner. The prototype preserves the top strip geometry but replaces the ad with a trust/quote note.
- Header/nav: bright yellow bar, white text business name at left, uppercase nav, phone number on the right.
- Hero: full-width handyman worker image with dark overlay, large white `CALL NOW`, phone number, and a blue CTA button with yellow text.
- Sections: medium-blue services section, dark charcoal about section, white testimonials section, dark blue contact section, yellow footer/button accents.
- Typography feel: simple Wix/Arial-style sans serif, uppercase navigation and section headings, large 44px section headings.
- Layout texture: one-page Wix builder layout, centered sections, five service icon columns, circular headshot, testimonial copy, contact row and form.

## Extracted image assets reused in prototype

### Hero worker image

- Role: live hero background image.
- URL: `https://static.wixstatic.com/media/a38016_925a0d8e71a44716a65d95ec04e80fe6.jpg/v1/fill/w_1440,h_764,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_925a0d8e71a44716a65d95ec04e80fe6.jpg`

### Wood texture image

- Role: live Wix texture/section image, reused behind blue/dark bands to preserve site-builder texture.
- URL: `https://static.wixstatic.com/media/a38016_006ea8c45821441db6f0bb261178cc6f.jpg/v1/fill/w_1440,h_1400,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_006ea8c45821441db6f0bb261178cc6f.jpg`

### Headshot

- Role: Alex portrait in the about section.
- URL: `https://static.wixstatic.com/media/2b319b_cabe9f972ef74c0e888ac2e85680093e~mv2_d_1599_1537_s_2.png/v1/fill/w_166,h_159,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2b319b_cabe9f972ef74c0e888ac2e85680093e~mv2_d_1599_1537_s_2.png`

### Service icons

- Minor repair/carpentry icon: `https://static.wixstatic.com/media/a38016_6a5a1bff2b7745818c6b2661f05261d9.png/v1/fill/w_69,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_6a5a1bff2b7745818c6b2661f05261d9.png`
- Furniture assembly icon: `https://static.wixstatic.com/media/a38016_5b2baf51f5024b4c816c9553e2e607df.png/v1/fill/w_67,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_5b2baf51f5024b4c816c9553e2e607df.png`
- Small electrical/fixture icon: `https://static.wixstatic.com/media/a38016_0b4fe7bbc9df4d85a626fd3190d9e9f4.png/v1/fill/w_41,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_0b4fe7bbc9df4d85a626fd3190d9e9f4.png`
- Painting icon: `https://static.wixstatic.com/media/a38016_1439136c15f845bcbb1b10286923624e.png/v1/fill/w_48,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_1439136c15f845bcbb1b10286923624e.png`
- Installation icon: `https://static.wixstatic.com/media/a38016_5938d9c28cd74c068772d9ea21735305.png/v1/fill/w_60,h_135,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_5938d9c28cd74c068772d9ea21735305.png`

### Social icons

- Facebook visual icon: `https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e316f544f9094143b9eac01f1f19e697.png`
- Yelp icon: `https://static.wixstatic.com/media/263c6eefe13c431681f9363e2e92ddb7.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/263c6eefe13c431681f9363e2e92ddb7.png`
- TaskRabbit icon: `https://static.wixstatic.com/media/2b319b_e400a0fd442447e294eed29603e7c7af~mv2.jpg/v1/fill/w_38,h_38,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2b319b_e400a0fd442447e294eed29603e7c7af~mv2.jpg`

## Extracted but intentionally not used as business assets

- Wix ad/banner destination: `https://www.wix.com/lpviral/enviral?utm_campaign=vir_wixad_live&adsVersion=banner_2024&orig_msid=aa99f552-cce6-4d9b-96f0-a304175f7068&orig_msid=f094ca1c-9437-4c1e-a023-35992e5a9029&adsVersion=banner_2024`
- Wix footer link: `http://wix.com/?utm_campaign=vir_created_with`
- Reason: these are platform/template links, not Alex Handyman Service assets. The prototype preserves the geometry but removes the credibility drag.

## Contact and link data extracted

- Live root: `https://alexhandyman.wixsite.com/home`
- Phone shown on site: `1-646-644-2923`
- Phone CTA used in prototype: `tel:16466442923`
- Email shown on site: `alexhandy.info@gmail.com`
- Email CTA used in prototype: `mailto:alexhandy.info@gmail.com`
- Area shown on site: `Orange County, CA`
- Yelp link: `https://www.yelp.com/biz/alex-handyman-service-irvine`
- TaskRabbit link: `https://tr.co/alex-l--42`

## No stock or generic placeholder images added

The prototype uses only assets extracted from the live site. No Unsplash, Pexels, Pixabay, stock, or unrelated placeholder imagery was added.
