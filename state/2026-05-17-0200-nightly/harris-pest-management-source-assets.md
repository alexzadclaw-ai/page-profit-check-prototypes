# Harris Pest Management source assets

Batch: 2026-05-17-0200-nightly  
Site: https://harrispestmgmt.wixsite.com/pest-1

## Inspection method

- Used Playwright with system Chromium to load the live Wix site before writing the audit or prototype.
- Captured the live target screenshot after waiting for Wix content to render: `screenshots/2026-05-17-0200-nightly/harris-pest-management-target.png`.
- Ran page evaluation against the live DOM to extract `<img>` sources, link/contact data, typography/color cues, visible copy, and computed CSS `background-image` URLs.
- Inspected these live pages from the same site: `/`, `/about`, `/services`, `/reviews`, and `/contact`.
- Computed CSS background images found: none. The relevant visual assets were rendered as `<img>` elements.

## Live brand/style cues

- Header/nav: two-row Wix header, gray blocks, small left logo/photo, business name, tagline "Our Word Is Our Bond," hot-pink call button, nav links Home/About/Services/Reviews/Contact, email and phone shown in the second row.
- Palette: warm gray, black, white, and bright pink/magenta. Extracted prominent colors include `rgb(107, 105, 107)`, `rgb(255, 141, 238)`, `rgb(243, 127, 225)`, black, and white.
- Typography feel: Wix defaults with Futura-like heading treatment and Proxima/Arial-style body copy.
- Layout texture: large truck hero image, centered welcome block, pink service/contact area, split gray about panel with pest image, simple footer.

## Extracted image assets reused in prototype

### Logo/header image

- Alt from DOM: `20210823_124823_edited_edited.jpg`
- URL: `https://static.wixstatic.com/media/7b4cb3_ecf7918a2d8446738579700e790820ab~mv2.jpg/v1/fill/w_69,h_40,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20210823_124823_edited_edited.jpg`

### Main truck hero image

- Alt from DOM: `truck decal side view.jpg`
- URL: `https://static.wixstatic.com/media/7b4cb3_377c402103b1454da13d673cbbfc91b6~mv2.jpg/v1/fill/w_1440,h_1600,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7b4cb3_377c402103b1454da13d673cbbfc91b6~mv2.jpg`

### Mosquito image

- Alt from DOM: `mosquitoes.jpg`
- URL: `https://static.wixstatic.com/media/7b4cb3_1a5f963512cf41898a013ef31b25b28a~mv2.jpg/v1/fill/w_720,h_600,fp_0.50_0.50,lg_2,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7b4cb3_1a5f963512cf41898a013ef31b25b28a~mv2.jpg`

### Services page pest-control image

- Alt from DOM: `Pest Control`
- URL: `https://static.wixstatic.com/media/6ee2848368dd4cedb2982f8c98deab58.jpg/v1/fill/w_1280,h_480,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6ee2848368dd4cedb2982f8c98deab58.jpg`

### Bed bug service image

- Alt from DOM: `bed bug mattress.jpg`
- URL: `https://static.wixstatic.com/media/7b4cb3_1d891e685109474bb614d4791836055f~mv2.jpg/v1/fill/w_480,h_420,al_c,lg_2,q_80,enc_avif,quality_auto/bed%20bug%20mattress.jpg`

### Pest control service card image

- Alt from DOM: `Pest Control`
- URL: `https://static.wixstatic.com/media/6ee2848368dd4cedb2982f8c98deab58.jpg/v1/fill/w_480,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pest%20Control.jpg`

### Reviews page spraying image

- Alt from DOM: `spaying image.jpg`
- URL: `https://static.wixstatic.com/media/7b4cb3_dc2f54b1c2a3480088ffa7461089e8dc~mv2.jpg/v1/fill/w_460,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/spaying%20image.jpg`

### Facebook icons

- Header/footer 20px icon: `https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Facebook.png`
- Contact section 26px icon: `https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Facebook.png`

## Contact and link data extracted

- Phone CTA in header: `tel:2103181246`
- Secondary phone shown on site: `(210) 318-5818`
- Email: `mailto:harrispestmgmt@gmail.com`
- Facebook: `https://www.facebook.com/harrispestmgmt`
- About page: `https://harrispestmgmt.wixsite.com/pest-1/about`
- Services page: `https://harrispestmgmt.wixsite.com/pest-1/services`
- Reviews page: `https://harrispestmgmt.wixsite.com/pest-1/reviews`
- Contact page: `https://harrispestmgmt.wixsite.com/pest-1/contact`

## Raw inspection files

- Home inspection JSON: `state/2026-05-17-0200-nightly/harris-pest-management-inspection.json`
- Multi-page inspection JSON: `state/2026-05-17-0200-nightly/harris-pest-management-pages.json`
