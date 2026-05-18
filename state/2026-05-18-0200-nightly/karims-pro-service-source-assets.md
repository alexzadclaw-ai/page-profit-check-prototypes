# Karim's Pro Service Etc source assets

Batch: 2026-05-18-0200-nightly  
Site: https://karimfields030.wixsite.com/my-site

## Inspection method

- Used Playwright with system Chromium at `/snap/bin/chromium` to load the live Wix site before writing the audit or prototype.
- Captured the live target screenshot after Wix content rendered: `screenshots/2026-05-18-0200-nightly/karims-pro-service-target.png`.
- Ran page evaluation against the live DOM to extract image URLs, link/contact data, visible copy, computed text/color cues, and CSS background-image URLs.
- The site is effectively a one-page Wix layout. The nav items extracted from the DOM all point back to the same live URL.
- Computed CSS background images found: none. The visual assets were rendered as `<img>` elements.
- Raw inspection JSON: `state/2026-05-18-0200-nightly/karims-pro-service-inspection.json`.

## Live brand/style cues

- Top strip: white Vista x Wix bar. In the prototype, the strip geometry is preserved but the template branding is replaced with a service/quote trust note.
- Header/nav: cream/beige band, left text logo `KARIM'S PRO SERVICE ETC`, centered uppercase nav, phone number on the right.
- Palette: cream `rgb(241, 227, 200)`, dark olive `rgb(57, 61, 50)`, burnt orange `rgb(170, 61, 29)`, deep blue contact area, yellow form button, black/dark-brown about section.
- Typography feel: simple Wix/Arial-style sans serif, uppercase navigation and section headings, large 44px hero and section heading treatment.
- Layout texture: full-width worker hero, dark service band with five tall service icons, dark `WHO WE ARE` band, cream testimonials band, blue contact/form band.

## Extracted image assets reused in prototype

### Hero worker image

- Live rendered size: 1440 x 657
- URL: `https://static.wixstatic.com/media/a38016_925a0d8e71a44716a65d95ec04e80fe6.jpg/v1/fill/w_1440,h_657,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_925a0d8e71a44716a65d95ec04e80fe6.jpg`
- Reused as the prototype hero background.

### Wood texture image

- Live rendered size: 1440 x 1100
- URL: `https://static.wixstatic.com/media/a38016_006ea8c45821441db6f0bb261178cc6f.jpg/v1/fill/w_1440,h_1100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_006ea8c45821441db6f0bb261178cc6f.jpg`
- Reused subtly behind the services, about, and contact areas to preserve the Wix/site-builder texture.

### Service icons

- Carpentry icon: `https://static.wixstatic.com/media/a38016_6a5a1bff2b7745818c6b2661f05261d9.png/v1/fill/w_65,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_6a5a1bff2b7745818c6b2661f05261d9.png`
- Plumbing icon: `https://static.wixstatic.com/media/a38016_5b2baf51f5024b4c816c9553e2e607df.png/v1/fill/w_65,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_5b2baf51f5024b4c816c9553e2e607df.png`
- Pressure washing icon: `https://static.wixstatic.com/media/a38016_0b4fe7bbc9df4d85a626fd3190d9e9f4.png/v1/fill/w_39,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_0b4fe7bbc9df4d85a626fd3190d9e9f4.png`
- Landscaping icon: `https://static.wixstatic.com/media/a38016_1439136c15f845bcbb1b10286923624e.png/v1/fill/w_45,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_1439136c15f845bcbb1b10286923624e.png`
- Car washing icon: `https://static.wixstatic.com/media/a38016_5938d9c28cd74c068772d9ea21735305.png/v1/fill/w_56,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_5938d9c28cd74c068772d9ea21735305.png`
- Reused in the same five-service order, with tightened copy and quote-first phrasing.

### Social icons extracted from live DOM

- Facebook icon: `https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png`
- Twitter icon: `https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01ab6619093f45388d66736ec22e5885.png`
- Instagram-style icon: `https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/81af6121f84c41a5b4391d7d37fce12a.png`
- Reused visually in the contact band, but the prototype does not keep the generic Wix social links.

## Extracted but intentionally not reused

- Vista x Wix SVG: `https://img-wixmp-a9a8500ac7c5cd8136e17898.wixmp.com/dd0b6be6-8bd8-4d13-8f5b-aa8368132cfb/1676561308306/Vista-x-Wix-final.svg`
- Reason: it is a template/publishing banner rather than a business asset, and the prototype removes that leftover while preserving the top strip's visual geometry.

## Contact and link data extracted

- Live root: `https://karimfields030.wixsite.com/my-site`
- Phone shown on site: `762-225-8934`
- Phone CTA used in prototype: `tel:7622258934`
- Email shown on site: `fieldskarim8@gmail.com`
- Email CTA used in prototype: `mailto:fieldskarim8@gmail.com`
- Extracted generic social links from live site: `http://www.facebook.com/wix`, `http://www.twitter.com/wix`, `https://instagram.com/wix/`

## No stock or generic placeholder images added

The prototype uses only assets extracted from the live site. No Unsplash, Pexels, stock, or unrelated placeholder imagery was added.
