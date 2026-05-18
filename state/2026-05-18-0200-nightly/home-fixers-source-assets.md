# Home Fixers LLC Source Assets

Inspection performed with Playwright using system Chromium at `/snap/bin/chromium`. The live home page was loaded, scrolled to trigger lazy images, evaluated in-page for `document.images`, links, visible text, and computed CSS `background-image` URLs, then screenshotted. I also inspected the live About and Our Decor Team pages for additional same-site imagery and template leftovers.

## Live pages inspected

- Home: https://txhomefixers.wixsite.com/san-antonio
- About: https://txhomefixers.wixsite.com/san-antonio/about
- Our Decor Team: https://txhomefixers.wixsite.com/san-antonio/our-work

## Extracted business and contact details

- Business name: Home Fixers LLC / Home Fixers, LLC
- Phone: 210-777-1123
- Main email: homefixerstx@gmail.com
- Decor Team email: homefixersdecorteam@gmail.com
- Hours shown on home page: Monday to Friday, 9:30 AM to 4:30 PM
- Service area examples shown: San Antonio, Boerne, Windcrest, Shavano Forest, Universal City, Hollywood Park, Shavano Heights, Alamo Heights, Encino Park, Timberwood Park, Converse, Castle Hills, Hill Country Village, Leon Valley, Stone Oak, Shavano Park, and surrounding areas in Bexar County.
- Services shown: appliance installation, bathroom repairs and refresh, cabinets repair and installation, ceiling fan installation, door installations, drywall repairs, electrical repairs, deck and patio, furniture assembly, garage opener installation and repair, kitchen upgrades and refresh, light fixture installation, painting and staining, plumbing repairs, pressure washing, tile and flooring, TV mounting, decor services, and AirBnB make-ready work.

## Images reused in prototype

| Use | Source URL | Notes |
|---|---|---|
| Hero kitchen/interior image | https://static.wixstatic.com/media/6835ee_d9ae388d13d948928f338479356aaaf9~mv2.png/v1/fill/w_1280,h_860,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/6835ee_d9ae388d13d948928f338479356aaaf9~mv2.png | Main live home hero image, reused to preserve first-screen identity. |
| Main logo | https://static.wixstatic.com/media/6835ee_155a29d81ff34a6c99b7022b1ced4685~mv2.png/v1/fill/w_231,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HomeFixers_logo_color-05.png | Original Home Fixers logo from live hero. |
| Left intro image | https://static.wixstatic.com/media/6835ee_6a3d4082e38143fdb20aa7e415633882~mv2.png/v1/fill/w_640,h_1248,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/6835ee_6a3d4082e38143fdb20aa7e415633882~mv2.png | Live page image used in the first content section. |
| Home Repairs service card | https://static.wixstatic.com/media/74f558_993f041afc4045c69c824d6022d78ca0~mv2_d_4000_2667_s_4_2.jpeg/v1/fill/w_407,h_404,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/74f558_993f041afc4045c69c824d6022d78ca0~mv2_d_4000_2667_s_4_2.jpeg | Live home service-card image. |
| Decor Services service card | https://static.wixstatic.com/media/74f558_9b1cc2c7424d47bf83b890c15ed8127f~mv2_d_5625_3750_s_4_2.jpg/v1/fill/w_402,h_404,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/74f558_9b1cc2c7424d47bf83b890c15ed8127f~mv2_d_5625_3750_s_4_2.jpg | Live home service-card image. |
| Apartments and AirBnB service card | https://static.wixstatic.com/media/nsplsh_f783aa3b929b4ff399c2f0f678de6a55~mv2.jpg/v1/fill/w_402,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_f783aa3b929b4ff399c2f0f678de6a55~mv2.jpg | This appears to be a source-used Wix/Unsplash image already present on the live home page. It was reused only because the source site uses it. |
| Logo divider background | https://static.wixstatic.com/media/1e47b2_0d6c77b5ffd04c0e92f186a8193c3e3c.jpg/v1/fill/w_1296,h_1080,al_c,q_85,enc_avif,quality_auto/1e47b2_0d6c77b5ffd04c0e92f186a8193c3e3c.jpg | Live horizontal patterned/texture image behind the centered logo. |
| Divider logo | https://static.wixstatic.com/media/6835ee_155a29d81ff34a6c99b7022b1ced4685~mv2.png/v1/fill/w_218,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6835ee_155a29d81ff34a6c99b7022b1ced4685~mv2.png | Live mid-page logo. |
| CPO badge | https://static.wixstatic.com/media/6835ee_99b06c16460f4467b40c432dcc5ede4d~mv2.png/v1/fill/w_140,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/phta-19-cpo-cert-logo-300_7_1.png | Live badge. |
| HVAC badge | https://static.wixstatic.com/media/6835ee_21799b8ebb8f42f0bf72618e89e3ee3f~mv2.png/v1/fill/w_140,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HVAC-badge-1.png | Live badge. |
| Decor training badge | https://static.wixstatic.com/media/6835ee_7edd33f903b64131abca74f9f2436af4~mv2.png/v1/fill/w_122,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/url_edited.png | Live badge. |
| Instagram icon | https://static.wixstatic.com/media/11062b_084cbbff6ae446c1b03dc3637193e77a~mv2.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_084cbbff6ae446c1b03dc3637193e77a~mv2.png | Live footer social icon. |
| Facebook icon | https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/facebook.png | Live footer social icon. |
| YouTube icon | https://static.wixstatic.com/media/78aa2057f0cb42fbbaffcbc36280a64a.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/youtube.png | Live footer social icon. |

## Additional extracted assets not reused

- About page hero image: https://static.wixstatic.com/media/6835ee_32ba4586009746d1bce957b684d46183~mv2.png/v1/fill/w_1440,h_1200,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/6835ee_32ba4586009746d1bce957b684d46183~mv2.png
- About page carousel/project photos, including real-looking Home Fixers room and repair photos such as `6835ee_8cabc276...`, `6835ee_6e62a5...`, `6835ee_5c3bcb...`, `6835ee_f931fc...`, and related carousel duplicates.
- Our Decor Team page extracted a mix of source-used decor gallery images and multiple `nsplsh_...` stock-style images. I did not introduce any external image source that was not already present on the live site.

## Computed CSS background extraction

- The Playwright page evaluation found no non-data computed CSS `background-image` URLs on the home page, About page, or Our Decor Team page. The visible imagery is implemented as DOM images, so reusable assets came from `document.images`.

## External/stock asset check

- No generic external stock image was introduced independently.
- The `nsplsh_f783...` image is source-used in the live Home Fixers service cards, so it was reused only to preserve the existing page's own card treatment.
- No Unsplash/Pexels-style image not already present on the live Home Fixers site was added.
