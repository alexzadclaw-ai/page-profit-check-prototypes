# Source notes - M + M Cabinet Painting LLC

- Live URL inspected: https://mmqpainting.wixsite.com/mmqualitypainting
- Target screenshot: `../../../screenshots/2026-05-17-0200-nightly/m-m-cabinet-painting-target.png`
- Extracted assets/state: `../../../state/2026-05-17-0200-nightly/m-m-cabinet-painting-assets.json`
- Asset notes: `../../../state/2026-05-17-0200-nightly/m-m-cabinet-painting-source-assets.md`

## Prototype authorship

This prototype was directly authored for M + M Cabinet Painting LLC as a custom one-page HTML concept.

## Fidelity choices

- Preserved the live site's white/navy/periwinkle palette, simple Wix-style single-page structure, logo, header contact details, social links, and footer contact details.
- Reused the live Wix media assets for the logo, hero image, process/equipment photos, testimonial images, wide kitchen image, and gallery photos.
- Kept the brand name and existing source copy concepts: request a quote, products and equipment, Italian wood coatings, high-end sprayers, the one-week process, and the three testimonials.
- Improved only conversion hierarchy: clearer hero promise, top quote buttons, compact quote form, proof cards, process timeline, scannable testimonials, and captioned gallery.

## Asset extraction notes

Playwright loaded the live page, waited for load/network idle, scrolled through the full page to trigger Wix lazy loading, returned to top, and captured the target screenshot. DOM image URLs and computed CSS background URLs were extracted through page evaluation. Computed CSS background extraction returned no visible background images; the page's visible media came from DOM image elements.
