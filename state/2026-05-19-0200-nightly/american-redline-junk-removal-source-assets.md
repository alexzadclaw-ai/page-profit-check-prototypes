# American Redline Junk Removal Services Source Assets

Inspection performed with Playwright before writing the prototype. The live site was loaded in Chromium using `/snap/bin/chromium`, scrolled to trigger lazy assets, captured as the target screenshot, and evaluated in-page for `document.images`, links, headings, visible text, and computed CSS `background-image` URLs. The contact page was also inspected for contact and service-area consistency.

## Live pages inspected

- Root/home: https://arjunkremoval.wixsite.com/arjunkremoval
- Contact page: https://arjunkremoval.wixsite.com/arjunkremoval/contact-us

## Extracted business and contact details

- Business name: American Redline Junk Removal Services
- Phone: 909-545-3776
- Email: ARjunkremoval@gmail.com
- Home page service area: Inland Empire
- Contact page service area: Inland Empire, Riverside, San Bernardino
- Social links found:
  - Facebook: https://fb.me/ARjunkremoval
  - Yelp: https://www.yelp.com/biz/american-redline-junk-removal-services-rancho-cucamonga
- Main service categories shown on home page:
  - Junk Removal
  - Trash Hauling & Disposal
  - Green Waste Disposal
  - Construction Debris Removal
- Estimate form service options visible on home page:
  - Appliance Removal
  - Furniture Removal
  - Mattress Removal
  - Misc Junk Removal
  - Garbage Removal
  - Playground / Playset Removal
  - Green Waste Removal
- Trust/recycling copy extracted: family owned and operated, serves those in and around the Inland Empire, on-time, professional, respectful, fair and upfront pricing, no hidden fees, same-day estimate, and recycles as much as possible.

## Images reused in prototype

| Use | Source URL | Notes |
|---|---|---|
| Hero junk photo | https://static.wixstatic.com/media/ef1198_f0a68b9e37454bc7bf698895e3c0ffdc~mv2.png/v1/fill/w_1440,h_540,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef1198_f0a68b9e37454bc7bf698895e3c0ffdc~mv2.png | Live hero photo showing household junk/debris ready for removal. |
| Junk removal icon | https://static.wixstatic.com/media/ef1198_3bfb21ac5cd94155bab4a28749e1dc5a~mv2.png/v1/crop/x_97,y_0,w_307,h_500/fill/w_61,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef1198_3bfb21ac5cd94155bab4a28749e1dc5a~mv2.png | Live refrigerator/appliance-style service icon. |
| Trash hauling icon | https://static.wixstatic.com/media/ef1198_98b836c9e345468ab5b5b7e5dc1354b7~mv2.png/v1/crop/x_88,y_4,w_342,h_496/fill/w_78,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef1198_98b836c9e345468ab5b5b7e5dc1354b7~mv2.png | Live trash can service icon. |
| Green waste icon | https://static.wixstatic.com/media/ef1198_20b47ccce81d47f6aa29d1a7869e4c27~mv2_d_2083_2083_s_2.png/v1/crop/x_56,y_0,w_1990,h_2083/fill/w_107,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef1198_20b47ccce81d47f6aa29d1a7869e4c27~mv2_d_2083_2083_s_2.png | Live tree/green-waste icon. |
| Construction debris icon | https://static.wixstatic.com/media/ef1198_eaf2eb27c61a4c95a847b6cf89e5a7c8~mv2.png/v1/fill/w_92,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef1198_eaf2eb27c61a4c95a847b6cf89e5a7c8~mv2.png | Live construction sign icon. |
| Who We Are wood background | https://static.wixstatic.com/media/a38016_006ea8c45821441db6f0bb261178cc6f.jpg/v1/fill/w_1440,h_1700,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/a38016_006ea8c45821441db6f0bb261178cc6f.jpg | Live background/section image from the home page. |
| Recycling icon | https://static.wixstatic.com/media/ef1198_379b76fe375b456b9941dfd7a7915905~mv2.png/v1/fill/w_140,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ef1198_379b76fe375b456b9941dfd7a7915905~mv2.png | Live Going Green icon. |
| Facebook icon | https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png | Live footer social icon. |
| Yelp icon | https://static.wixstatic.com/media/3ae0375b94ba46fca1f4e6c0f7992fc9.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3ae0375b94ba46fca1f4e6c0f7992fc9.png | Live footer social icon. |

## Computed CSS background extraction

- Root page computed CSS background extraction returned one non-visible data-URI input/control icon from Wix internals.
- No reusable non-data CSS background-image URLs were found by computed style extraction.
- The visible hero and wood textures are implemented by the Wix page as image elements rather than reusable CSS backgrounds.

## External/stock asset check

No Unsplash, Pexels, Pixabay, placeholder, AI-generated, or unrelated stock images were added. The prototype uses only image URLs discovered on the live American Redline Wix site.

## Generated inspection artifacts

- Live extraction JSON: `state/2026-05-19-0200-nightly/american-redline-junk-removal-live-extract.json`
- Contact page extraction JSON: `state/2026-05-19-0200-nightly/american-redline-junk-removal-extra-pages.json`
- Target screenshot: `screenshots/2026-05-19-0200-nightly/american-redline-junk-removal-target.png`
- Prototype screenshot: `screenshots/2026-05-19-0200-nightly/american-redline-junk-removal-prototype.png`
