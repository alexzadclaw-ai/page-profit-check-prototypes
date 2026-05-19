# Fix Help Me Home Services Source Assets

Inspection performed with Playwright using system Chromium at `/snap/bin/chromium`. The live home page was loaded, scrolled to trigger lazy images, evaluated in-page for `document.images`, links, visible text, headings, and computed CSS `background-image` URLs, then screenshotted. I also inspected the live Samples of My Work and Contact pages for additional same-site images and contact details.

## Live pages inspected

- Home: https://fixhelpme.wixsite.com/home
- Samples of My Work: https://fixhelpme.wixsite.com/home/samples-of-my-work
- Contact: https://fixhelpme.wixsite.com/home/contact

## Extracted business and contact details

- Business name: Fix Help Me Home Services / Home Services Handyman
- Contact person shown: Bob Rosentrater
- Phone: 978-747-4137
- Email: fixhelpme@gmail.com
- Trust language: insured, dependable and time efficient, senior friendly
- Core services shown: home watch services, property management while away, painting, wall repairs, plumbing repairs, faucet/sprayer/drain/leak repairs, pool pump repairs, shelving installation, TV mounting, picture hanging, small electrical repairs, light bulb changes, electrical fan repair and installation, Ring doorbell installation, unusual requests, Ikea assembly, adjustable bed assembly
- Project sample categories shown: power washing, household repairs, painting or wainscotting, fan and light installation, picture hanging, door replacement and hardware, cabinets and storage creation

## Images reused in prototype

| Use | Source URL | Notes |
|---|---|---|
| Top tool/header image | https://static.wixstatic.com/media/912423_779327bf13b2451482e07d43db760bd9.jpg/v1/fill/w_416,h_114,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/912423_779327bf13b2451482e07d43db760bd9.jpg | Live top header image, reused to preserve page identity. |
| Star mark | https://static.wixstatic.com/media/912423_e0fc0fb2b32a401db8dd52bb98c8eee9.png/v1/fill/w_79,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/912423_e0fc0fb2b32a401db8dd52bb98c8eee9.png | Live decorative star mark, reused in header and feedback area. |
| HomeGuide badge | https://static.wixstatic.com/media/912423_c1a98032454e404c93de01c9ccfa370d.png/v1/fill/w_197,h_72,al_c,lg_1,q_85,enc_avif,quality_auto/912423_c1a98032454e404c93de01c9ccfa370d.png | Live trust badge. |
| ACHP badge | https://static.wixstatic.com/media/912423_b882e4e542cf494ca848e7bcb9c60cd4~mv2.png/v1/fill/w_108,h_118,al_c,q_85,enc_avif,quality_auto/912423_b882e4e542cf494ca848e7bcb9c60cd4~mv2.png | Live trust badge. |
| Angie's List badge | https://static.wixstatic.com/media/912423_d8a77cfad6e14cb7bacb972b2e59c92f~mv2.png/v1/fill/w_191,h_40,al_c,lg_1,q_85,enc_avif,quality_auto/912423_d8a77cfad6e14cb7bacb972b2e59c92f~mv2.png | Live trust badge. |
| Thumbtack badge 2018 | https://static.wixstatic.com/media/912423_cda337c4bee54c1eb7a37739fe1f0dfa~mv2.png/v1/fill/w_106,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/912423_cda337c4bee54c1eb7a37739fe1f0dfa~mv2.png | Live trust badge. |
| Thumbtack badge 2017 | https://static.wixstatic.com/media/912423_0c9d61723faa4dcdb725b45804c645b0~mv2.png/v1/fill/w_93,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/912423_0c9d61723faa4dcdb725b45804c645b0~mv2.png | Live trust badge. |
| Bob/headshot image | https://static.wixstatic.com/media/912423_2afce2cd033f43f09797fc3d0312d65a~mv2.jpg/v1/fill/w_111,h_136,al_c,q_80,enc_avif,quality_auto/912423_2afce2cd033f43f09797fc3d0312d65a~mv2.jpg | Live home page image used near trust copy. |
| Home watch thumbnail | https://static.wixstatic.com/media/57b1a3a1c5c844299f5a99f16a62149b.jpeg/v1/fill/w_74,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Beautiful%20Private%20House%20in%20the%20Suburb.jpeg | Live service thumbnail. |
| Plumbing/faucet image | https://static.wixstatic.com/media/fd466413cbb346e39a4508262616a0f1.jpg/v1/fill/w_288,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Faucet.jpg | Same-site image from the live Samples page and related home thumbnail. |
| Electrical repair thumbnail | https://static.wixstatic.com/media/7e70f3495d9bc2851ec887687d749961.jpg/v1/fill/w_85,h_56,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7e70f3495d9bc2851ec887687d749961.jpg | Live service thumbnail. |
| Painting thumbnail | https://static.wixstatic.com/media/492da6db465049e29272509f17550d04.jpg/v1/fill/w_74,h_64,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/492da6db465049e29272509f17550d04.jpg | Live service thumbnail. |
| Installing shelves thumbnail | https://static.wixstatic.com/media/878e915e4ba240ba93d0c86d838f458d.jpg/v1/fill/w_76,h_65,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Installing%20Shelves.jpg | Live service thumbnail. |
| Unusual request/assembly thumbnail | https://static.wixstatic.com/media/4ccb133588f0013931b70fc841d5002f.jpg/v1/fill/w_68,h_61,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ccb133588f0013931b70fc841d5002f.jpg | Live service thumbnail. |
| Facebook footer icon | https://static.wixstatic.com/media/da00086a27cc2c52ec7a11ec468c4d29.wix_mp/v1/fill/w_20,h_20,al_c,usm_0.66_1.00_0.01,enc_avif,quality_auto/da00086a27cc2c52ec7a11ec468c4d29.wix_mp | Live footer social icon, natural image failed on capture but source URL was present. |
| Twitter footer icon | https://static.wixstatic.com/media/89b1d2497b29ccbb7d37be1ec6ef0052.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/89b1d2497b29ccbb7d37be1ec6ef0052.png | Live footer social icon. |

## Additional extracted same-site assets not reused

- Samples page project images for power washing and household repairs: `912423_445fd3...`, `912423_2c137...`.
- Samples page door, fan, light, picture hanging, cabinets, and storage images: `front door.png`, `fan.png`, `912423_b3c3...`, `912423_95b6...`, `912423_54d...`, `912423_4fd...`, `912423_1c16...`.
- Contact page social icon image: `8d2c2a4846503b9067e2fd2f590445c2.wix_mp`.

## Computed CSS background extraction

- The Playwright page evaluation found CSS background images, but they were data URI decorative/texture assets. No non-data computed CSS background URLs were found on the inspected pages.

## External/stock asset check

- No generic external stock image was introduced independently.
- Images in the prototype are live source-site assets or same-site project/service images from the inspected Wix pages.
- Existing Wix social/Twitter links are noted as cleanup opportunities, not recommended new destinations.
