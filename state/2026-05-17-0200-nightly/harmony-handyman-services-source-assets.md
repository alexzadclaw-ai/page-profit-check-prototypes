# Harmony Handyman Services Source Assets

Inspection performed with Playwright before writing the prototype. The live root page was loaded, scrolled to trigger lazy assets, screenshotted, and evaluated in-page for `document.images`, links, headings, visible text, and computed CSS `background-image` URLs. Additional same-site pages inspected for reusable original photos: Home, Services, Gallery, Testimonials, and About.

## Live pages inspected

- Root/contact: https://harmonygc.wixsite.com/harmonygc
- Home: https://harmonygc.wixsite.com/harmonygc/harmonygc
- Services: https://harmonygc.wixsite.com/harmonygc/services
- Gallery: https://harmonygc.wixsite.com/harmonygc/gallery
- Testimonials: https://harmonygc.wixsite.com/harmonygc/page3
- About: https://harmonygc.wixsite.com/harmonygc/page4

## Extracted contact and business details

- Business name: Harmony Handyman Services
- Phone: 408-509-9861
- Email: handyman9services@gmail.com
- Mailing address shown: P.O.Box 15424 S.F. CA 94115-0424
- Hours shown in footer on other pages: Open Monday-Friday 8AM-5PM
- Key instruction: visitors should include name, phone number, full address/location, availability, project description, and images.
- Service area examples: West San Jose, West Valley, Willow Glen, Mountain View, Los Altos, Campbell, Los Gatos, Palo Alto, Menlo Park, Almaden Valley, Sunnyvale, Saratoga, Fremont, and other Bay Area communities.

## Images reused in prototype

| Use | Source URL | Notes |
|---|---|---|
| Body background | https://static.wixstatic.com/media/fe332c_d89ac666245a411cb5c69c91cc70b332~mv2.jpg/v1/fill/w_1053,h_1080,al_c,q_85,enc_avif,quality_auto/fe332c_d89ac666245a411cb5c69c91cc70b332~mv2.jpg | Original tools/wood image used as full-page background on the Wix site. |
| Logo | https://static.wixstatic.com/media/fe332c_18e0aa34a4e140728488f773e4831aa1~mv2.png/v1/fill/w_127,h_147,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Harmony%20Logo.png | Original Harmony logo. |
| Hero handshake | https://static.wixstatic.com/media/fe332c_b4b2c2983d2540e7b1420a761a071a71~mv2.jpg/v1/fill/w_876,h_427,al_c,q_85,enc_avif,quality_auto/Shaking%20hends.jpg | Original home page hero image. |
| Facebook icon | https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e316f544f9094143b9eac01f1f19e697.png | Original social icon. |
| Yelp icon | https://static.wixstatic.com/media/263c6eefe13c431681f9363e2e92ddb7.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/263c6eefe13c431681f9363e2e92ddb7.png | Original social icon. |
| Instagram icon | https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f9c321c774844b793180620472aa4f1.png | Original social icon. |
| Gallery proof photo 1 | https://static.wixstatic.com/media/fe332c_169fd187807f4def82a72b9c47754de8~mv2.jpg/v1/fill/w_472,h_354,q_90,enc_avif,quality_auto/fe332c_169fd187807f4def82a72b9c47754de8~mv2.jpg | Original Gallery page image. |
| Gallery proof photo 2 | https://static.wixstatic.com/media/fe332c_5c09b24737b24bff8b979ab4dcbe05f1~mv2_d_4160_3120_s_4_2.jpg/v1/fill/w_471,h_353,q_90,enc_avif,quality_auto/fe332c_5c09b24737b24bff8b979ab4dcbe05f1~mv2_d_4160_3120_s_4_2.jpg | Original Gallery page image. |
| Gallery proof photo 3 | https://static.wixstatic.com/media/fe332c_9191cb1557cf4b3fa62efb6d4004ef7d~mv2.jpg/v1/fill/w_471,h_353,q_90,enc_avif,quality_auto/fe332c_9191cb1557cf4b3fa62efb6d4004ef7d~mv2.jpg | Original Gallery page image. |
| Gallery proof photo 4 | https://static.wixstatic.com/media/fe332c_b4553d1baca34a0e852ec715949126ec~mv2.jpg/v1/fill/w_472,h_229,q_90,enc_avif,quality_auto/fe332c_b4553d1baca34a0e852ec715949126ec~mv2.jpg | Original Gallery page image. |

## Other extracted assets not reused

- Contact page mail icon: https://static.wixstatic.com/media/fe332c_c92b04af1b0b495896f0f45022c1f791~mv2.png/v1/crop/x_7,y_0,w_343,h_297/fill/w_60,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fe332c_c92b04af1b0b495896f0f45022c1f791~mv2.png
- Twitter icon: https://static.wixstatic.com/media/9c4b521dd2404cd5a05ed6115f3a0dc8.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9c4b521dd2404cd5a05ed6115f3a0dc8.png
- Blogger icon: https://static.wixstatic.com/media/79d828dc54b74458bff28f6ab9f863e9.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/79d828dc54b74458bff28f6ab9f863e9.png
- Credit card / PayPal related image from home page: https://static.wixstatic.com/media/fe332c_4b9d72c1b6604ef08764d60e0c9da7e6~mv2.png/v1/fill/w_247,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Creditredit-card-.png

## Computed CSS background extraction

- Root/contact page computed CSS backgrounds were Wix data-URI textures only; no reusable non-data CSS background image was found there. The main visible tools/wood background is implemented as an image element, so it was extracted from `document.images` and reused as the prototype body background.
- Home page had one non-data computed background image on a lower page element: https://static.wixstatic.com/media/70e2af1934134a68174f0f93c033cbfc.png/v1/crop/x_0,y_0,w_213,h_213,q_85,enc_auto/70e2af1934134a68174f0f93c033cbfc.png. It was not reused because it is not part of the first-screen conversion direction.

## External/stock asset check

No stock, Unsplash, AI-generated, or generic placeholder imagery was used. The prototype uses only assets found on Harmony Handyman Services' own Wix pages.
