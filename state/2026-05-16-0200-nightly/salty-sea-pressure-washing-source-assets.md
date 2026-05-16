# Source assets reused: Salty Sea Pressure Washing LLC

Live site inspected: https://saltyseawashing.wixsite.com/sspw

Extraction method: Playwright/Chromium page evaluation collected `document.images`, visible link targets, and computed CSS `background-image` URLs from the live Wix DOM. The prototype reuses only assets that came from the live site.

## Reused original image/photo/logo URLs

1. Logo image
   - URL: https://static.wixstatic.com/media/5d9bc8_621b66905cf84bb29602b9bdb29fd818~mv2.jpg/v1/fill/w_424,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cleaning%20and%20pressure%20washing%20logo%20(1)%20-.jpg
   - Used in prototype: centered header logo, same dimensions and placement direction as live site.

2. Before/after result image / video poster
   - URL: https://static.wixstatic.com/media/5d9bc8_eddb24c44e3342639df7a7030a9b1533f000.jpg/v1/fill/w_257,h_146,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5d9bc8_eddb24c44e3342639df7a7030a9b1533f000.jpg
   - Used in prototype: left-edge hero result visual, clipped off the left side to match the original hero geometry.

3. First service card image
   - URL: https://static.wixstatic.com/media/5d9bc8_2b2ac9f884c74c7f81d98bad3c8e26b1~mv2.jpg/v1/fill/w_127,h_85,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/download_jfif.jpg
   - Used in prototype: Roof Cleaning service card image, matching the live first service-card photo position.

4. Flat surface / stairs pressure washing image
   - URL: https://static.wixstatic.com/media/bccb7dec5d8846a4800d10a140a02d84.jpg/v1/fill/w_127,h_85,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pressure%20Washer%20on%20Stairs.jpg
   - Used in prototype: Flat Surface Cleaning service card image.

5. House washing image
   - URL: https://static.wixstatic.com/media/5d9bc8_8bd08a12d53b45598e84e9851c19a97b~mv2.jpg/v1/fill/w_135,h_78,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/images_jfif.jpg
   - Used in prototype: House Washing service card image.

6. Gutter cleaning image
   - URL: https://static.wixstatic.com/media/5d9bc8_5caa73dc65fd4308be2b1bff6ae1b273~mv2.jpg/v1/fill/w_127,h_78,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/how-to-clean-gutters-step-6-A.jpg
   - Used in prototype: Gutter Cleaning service card image.

7. Bin cleaning image
   - URL: https://static.wixstatic.com/media/5d9bc8_d13c355119ff48309bd655944d46467c~mv2.jpg/v1/fill/w_135,h_68,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/images.jpg
   - Used in prototype: Bin Cleaning service card image.

## Extracted but not reused directly

- Wix page/background texture found in computed CSS:
  - https://static.wixstatic.com/media/795a848c6d67ea95c771976e7f21d8ce.wix_mp/v1/fill/w_75,h_78,al_c,enc_auto/795a848c6d67ea95c771976e7f21d8ce.wix_mp
  - Not reused because it was a page-builder background texture rather than meaningful business imagery.
- Several Wix UI textures were extracted as `data:image/png;base64,...` backgrounds for menu/button chrome. These were recreated with CSS gradients instead of embedding large base64 UI strips.
- No Unsplash, random stock, or new generic placeholder images were introduced.
