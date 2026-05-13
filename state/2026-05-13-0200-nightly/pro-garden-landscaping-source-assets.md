# Pro Garden Landscaping LLC source assets

Live site inspected: https://progardenlandscapi.wixsite.com/progardenlandscaping  
Batch: 2026-05-13-0200-nightly  
Slug: pro-garden-landscaping

## Extraction method

Used Playwright with Chromium to load the live Wix site, scroll the full page to trigger lazy assets, capture the target screenshot, and evaluate the page DOM for:

- `document.images` with `src`, `currentSrc`, `srcset`, `alt`, rendered rectangle, and natural size
- CSS `backgroundImage` URLs from computed styles
- visible headings, links, buttons, section text, page title, and meta description

Inspection JSON saved at:

- `page-profit-check-prototypes/state/2026-05-13-0200-nightly/pro-garden-landscaping-live-inspect.json`

## Original assets found and reused

### Logo

- Role on source site: header logo/home link
- Rendered size on source: 109 x 80
- Natural size reported: 109 x 80
- Alt text on source: `Untitled`
- Reused in prototype: yes, header brand logo
- URL: `https://static.wixstatic.com/media/be3fe1_429deccc8796477286bf24e575577c79~mv2.jpeg/v1/fill/w_109,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.jpeg`

### Facebook icon, header

- Role on source site: small Facebook link in nav/contact strip
- Rendered size on source: 20 x 20
- Natural size reported: 20 x 20
- Reused in prototype: yes, header Facebook link
- URL: `https://static.wixstatic.com/media/d3ee8f_a21cd4b9e8c0499fb0a2f235b6b6d9b0~mv2.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d3ee8f_a21cd4b9e8c0499fb0a2f235b6b6d9b0~mv2.png`

### Hero landscaping photo

- Role on source site: large hero photo inside black hero section
- Rendered size on source: 940 x 600
- Natural size reported: 540 x 345
- Alt text on source: `Untitled`
- Reused in prototype: yes, hero image
- URL: `https://static.wixstatic.com/media/be3fe1_390a205235904b36a7ed73be9fb30ccf~mv2.jpeg/v1/fill/w_540,h_345,al_c,q_80,enc_avif,quality_auto/Untitled.jpeg`

### About section photo

- Role on source site: left image in the About split section
- Rendered size on source: 720 x 680
- Natural size reported: 540 x 510
- Alt text on source: `Untitled`
- Reused in prototype: yes, About image
- URL: `https://static.wixstatic.com/media/be3fe1_fe9451cd5eed4ed4972d31778bb60280~mv2.jpeg/v1/fill/w_540,h_510,fp_0.50_0.50,q_80,enc_avif,quality_auto/be3fe1_fe9451cd5eed4ed4972d31778bb60280~mv2.jpeg`

### Contact section photo

- Role on source site: tall left image in contact/free estimate section
- Rendered size on source: 640 x 1086
- Natural size reported: 318 x 540
- Alt text on source: `Untitled`
- Reused in prototype: yes, contact image
- URL: `https://static.wixstatic.com/media/be3fe1_c98c76dc68ab401f8243e123c5cb723a~mv2.jpeg/v1/fill/w_318,h_540,fp_0.50_0.50,q_80,enc_avif,quality_auto/be3fe1_c98c76dc68ab401f8243e123c5cb723a~mv2.jpeg`

### Facebook icon, contact/footer area

- Role on source site: Facebook link in contact section
- Rendered size on source: 26 x 26
- Natural size reported: 26 x 26
- Reused in prototype: no, because the header Facebook icon already provides the same link and keeps the contact panel cleaner
- URL: `https://static.wixstatic.com/media/d3ee8f_53dfd24b6fc741c1bb871a75935b73e6~mv2.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d3ee8f_53dfd24b6fc741c1bb871a75935b73e6~mv2.png`

## CSS background assets

No usable CSS `background-image` URLs were found on the live page during Playwright inspection.

## Non-original assets

No stock or Unsplash images were added. The prototype uses the original Wix-hosted logo, photos, and Facebook icon from the source site.
