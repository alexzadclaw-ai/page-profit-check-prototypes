# Mint Cleaning Services LLC source asset notes

Batch: 2026-05-13-0200-nightly  
Slug: mint-cleaning-services  
Live site: https://ymmintcleaningsvc.wixsite.com/mintcleaningservices

## Inspection method

- Inspected the live Wix site with Playwright Chromium using the real URL.
- Captured a full-page live screenshot after waiting for Wix to load and scrolling through the page to trigger lazy images.
- Extracted image URLs from DOM `src`, `currentSrc`, and `srcset` values.
- Checked computed CSS `backgroundImage` across the page. No CSS background-image URLs were found.
- Wrote optional inspect JSON here: `page-profit-check-prototypes/state/2026-05-13-0200-nightly/mint-cleaning-services-inspect.json`.

## Source assets reused in prototype

1. Vista x Wix banner asset  
   Source URL: `https://img-wixmp-a9a8500ac7c5cd8136e17898.wixmp.com/dd0b6be6-8bd8-4d13-8f5b-aa8368132cfb/1676561308306/Vista-x-Wix-final.svg`  
   Prototype usage: top Vista x Wix banner texture, matching the live site.

2. Mint Cleaning Services logo  
   Source URL: `https://static.wixstatic.com/media/e191ac_0d0a2dceb2fd4984bc5289e34457bdd7~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.png`  
   Live alt: `Untitled`  
   Prototype usage: header brand lockup.

3. Hero cleaning image  
   Source URL: `https://static.wixstatic.com/media/11062b_41561a16bd94495d8c9c685b35a1f468~mv2.jpg/v1/fill/w_1440,h_1800,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_41561a16bd94495d8c9c685b35a1f468~mv2.jpg`  
   Live alt: `Cleaning Ladies`  
   Prototype usage: large hero background.

4. Service image, move-in/move-out  
   Source URL: `https://static.wixstatic.com/media/0b150d41b502424784613e85cbcdf662.jpg/v1/fill/w_460,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Clean%20Kitchen.jpg`  
   Live alt: `Clean Kitchen`  
   Prototype usage: Move-in/Move-out service card.

5. Service image, common area maintenance  
   Source URL: `https://static.wixstatic.com/media/d9aea41b66274531aadd36d2cda820d2.jpeg/v1/fill/w_460,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Vacuuming.jpeg`  
   Live alt: `Vacuuming`  
   Prototype usage: Common Area Maintenance service card.

6. Service image, customized cleaning  
   Source URL: `https://static.wixstatic.com/media/851ee9a3fdd542869ddff81ccaf27cd9.jpg/v1/fill/w_460,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cleaning%20Materials.jpg`  
   Live alt: `Cleaning Materials`  
   Prototype usage: Customized Cleaning Services card.

7. Service image, Hablamos Español  
   Source URL: `https://static.wixstatic.com/media/11062b_29ddc6a8cb6d4007a2de61d8ce8f9d58~mv2.jpg/v1/fill/w_460,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bathroom%20Cleaner.jpg`  
   Live alt: `Bathroom Cleaner`  
   Prototype usage: Hablamos Español service card.

8. Veteran-owned/about image  
   Source URL: `https://static.wixstatic.com/media/13d7c2aaa56c4b97bbe3dae31594a095.jpg/v1/fill/w_460,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/US%20Army%20Soldier%20in%20Universal%20Camouflage%20Uniform.jpg`  
   Live alt: `US Army Soldier in Universal Camouflage Uniform`  
   Prototype usage: About Us veteran-owned section.

9. Wide cleaning materials image  
   Source URL: `https://static.wixstatic.com/media/851ee9a3fdd542869ddff81ccaf27cd9.jpg/v1/fill/w_940,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cleaning%20Materials.jpg`  
   Live alt: `Cleaning Materials`  
   Prototype usage: pre-quote image break, matching the live page order.

10. Facebook icon  
    Source URL: `https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Facebook.png`  
    Live alt: `Facebook`  
    Prototype usage: footer social link.

## Assets intentionally not added

- No outside stock, Unsplash, AI-generated, or unrelated images were added.
- The source site uses stock-style cleaning images from Wix, but they are original to the live site, so they were reused.
- No additional logo or brand mark was invented.

## Original images unavailable note

The live site did not expose real before/after project photos, team photos, or local service-area photos. The prototype therefore reuses the available source-site Wix images and does not fabricate project-specific photography.
