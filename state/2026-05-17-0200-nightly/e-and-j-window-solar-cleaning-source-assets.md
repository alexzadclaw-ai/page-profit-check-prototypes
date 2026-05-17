# E & J Window and Solar Panel Cleaning - Source Assets

Batch: `2026-05-17-0200-nightly`  
Site: https://eandjwaspcleaning.wixsite.com/ejwindowandsolarpane  
Inspection method: Playwright loaded the live Wix page, waited for load/network idle where possible, scrolled the page to trigger lazy images, captured the live screenshot, then evaluated the DOM for `document.images` and computed `background-image` URLs on all elements.

## Inspection summary

- Page title: `Home | E & J Window and solar panel cleaning`
- Final URL: `https://eandjwaspcleaning.wixsite.com/ejwindowandsolarpane`
- Scroll height captured: 5522px
- Image elements found: 4
- Computed CSS background images found: 0
- Link elements found: 4
- No separate logo image found. The business identity appears as live text in the header.
- No stock or generic placeholder images were added to the prototype.

## Live assets extracted and reused

### 1. Large before/after service photo

- URL: `https://static.wixstatic.com/media/aecdc9_0f58c64934c74a3ba066d310eaab073d~mv2.jpg/v1/fill/w_720,h_973,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aecdc9_0f58c64934c74a3ba066d310eaab073d~mv2.jpg`
- Live alt: `Polish_20240626_205447755.jpg`
- Natural size observed: 720x973
- Live box: x 0, y 1311, w 720, h 973
- Prototype use: before/after hero proof photo in the quote section.

### 2. Contact section job photo

- URL: `https://static.wixstatic.com/media/aecdc9_f6efc6d08c7648b29a268af2233e49f6~mv2.jpg/v1/fill/w_640,h_780,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aecdc9_f6efc6d08c7648b29a268af2233e49f6~mv2.jpg`
- Live alt: `Untitled`
- Natural size observed: 640x780
- Live box: x 80, y 2232, w 640, h 780
- Prototype use: before/after gallery card.

### 3. Gutter cleaning photo

- URL: `https://static.wixstatic.com/media/aecdc9_4e4d492e44364d50b19201da3f465176~mv2.jpg/v1/fill/w_630,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/aecdc9_4e4d492e44364d50b19201da3f465176~mv2.jpg`
- Live alt: `Polish_20231211_164413701.jpg`
- Natural size observed: 630x440
- Live box: x 80, y 3374, w 630, h 440
- Prototype use: gutter cleaning service proof card.

### 4. Solar/window before-after photo

- URL: `https://static.wixstatic.com/media/aecdc9_7a15239d7aea45aea6a1bc3e121c83b4~mv2.jpg/v1/fill/w_640,h_520,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/aecdc9_7a15239d7aea45aea6a1bc3e121c83b4~mv2.jpg`
- Live alt: `Untitled`
- Natural size observed: 640x520
- Live box: x 80, y 4269, w 640, h 520
- Prototype use: final “let us do the dirty job” photo and review CTA section.

## Links extracted from live site

- Wix promo banner: `https://www.wix.com/lpviral/enviral?utm_campaign=vir_wixad_live&adsVersion=banner_2024&orig_msid=aa99f552-cce6-4d9b-96f0-a304175f7068&orig_msid=8166abd3-8cb6-47be-a926-4d28a3303a6f&adsVersion=banner_2024`
- Home/business name: `https://eandjwaspcleaning.wixsite.com/ejwindowandsolarpane`
- Email: `mailto:eandjwaspcleaning@gmail.com`
- Google Reviews: `https://share.google/qRu9HBvVFnnyMWQo9`

## Local files from inspection

- Raw inspection JSON: `state/2026-05-17-0200-nightly/e-and-j-window-solar-cleaning-inspection.json`
- Summary JSON: `state/2026-05-17-0200-nightly/e-and-j-window-solar-cleaning-inspection-summary.json`
- Live screenshot: `screenshots/2026-05-17-0200-nightly/e-and-j-window-solar-cleaning-target.png`

## Prototype image handling note

The prototype uses Wix `v1/fit` variants of the same four media IDs where useful so embedded before/after labels are not unnecessarily cropped in the mockup. These are the same source Wix-hosted job photos observed on the live page, not stock or replacement photography.
