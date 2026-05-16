# Exterior Excellence source assets reused

Live site inspected with Playwright/Chromium on 2026-05-16. Image URLs were extracted from live DOM `<img>` elements and checked computed CSS backgrounds. No computed CSS background-image URLs were present.

## Reused original website assets

1. Hero / video poster image
   - URL: https://static.wixstatic.com/media/84770f_0512b95c6bd44398a825e832e08a47a5f000.jpg/v1/fill/w_1440,h_661,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/84770f_0512b95c6bd44398a825e832e08a47a5f000.jpg
   - Source DOM use: first visible full-width hero poster/image in the Wix hero area.
   - Prototype use: full-width hero background with the same orange overlay direction.

2. Exterior Excellence logo
   - URL: https://static.wixstatic.com/media/ee55bb_acf2d7d48de8427e834e569b3b86d086~mv2.png/v1/crop/x_566,y_0,w_1901,h_1831/fill/w_396,h_382,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee55bb_acf2d7d48de8427e834e569b3b86d086~mv2.png
   - Source DOM use: circular mountain/sunset Exterior Excellence logo in the hero and repeated near the estimate area.
   - Prototype use: hero logo and repeated estimate-section brand mark.

3. Window washing work photo
   - URL: https://static.wixstatic.com/media/118778_9ab93139941e4ac2b73920d57552969c~mv2_d_3836_4555_s_4_2.jpg/v1/fill/w_390,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/118778_9ab93139941e4ac2b73920d57552969c~mv2_d_3836_4555_s_4_2.jpg
   - Source DOM use: picture/gallery section image of window washing.
   - Prototype use: retained as the Pictures / Recent Work visual next to the orange block.

4. Estimate section background photo
   - URL: https://static.wixstatic.com/media/375882_16a849c58b3f44f1a2db890a54b0bf59~mv2_d_3783_2523_s_4_2.jpg/v1/fill/w_1440,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/375882_16a849c58b3f44f1a2db890a54b0bf59~mv2_d_3783_2523_s_4_2.jpg
   - Source DOM use: full-width pale background image behind the request-estimate area.
   - Prototype use: retained as the request-estimate background with the same warm orange overlay direction.

## Not reused

- Wix promotional banner, Wix attribution link, and free-site ad artifacts were not reused because they are conversion friction and template/site-builder artifacts.
- No Unsplash, external stock, or non-source-site replacement imagery was added.
- Service icons were recreated as simple inline SVG-style orange marks to preserve the original icon placement without inventing unrelated image assets.
