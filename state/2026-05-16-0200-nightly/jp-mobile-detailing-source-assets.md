# JPs Mobile Detailing source assets

Live URL inspected with Playwright/Chromium: https://jkpmobiledetailing.wixsite.com/jpmobiledetailing

Extraction summary:

- DOM image scan found 13 visible image assets.
- Computed CSS background-image scan found 0 URL-based background assets.
- Prototype reused only assets present on the source Wix site or the original Wix media file behind the source-site rendered image. No outside stock or placeholder imagery was added.
- Snap Chromium could not read the hidden workspace path by `file://`, so the prototype screenshot was captured from an identical temporary local-file copy in Chromium's accessible local file area. The required workspace `index.html` is the source of that copy.

## Reused original assets

1. Header logo/icon, used in the rebuilt header brand block  
   https://static.wixstatic.com/media/48aa5d_ab325f49693d40979edb72b431741c2a~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a1.png

2. Header Facebook icon, used in the top-right social links  
   https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Facebook.png

3. Header Instagram icon, used in the top-right social links  
   https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Instagram.png

4. RV detailing hero image, reused as the hero image. The live DOM rendered this same Wix media ID through a cropped fill URL; the prototype uses the original Wix media URL to preserve more of the source composition.  
   https://static.wixstatic.com/media/48aa5d_962a9f8d13894f4c80ec3e4c60c5258d~mv2.jpg

   Live DOM rendered fill URL for the same source image:  
   https://static.wixstatic.com/media/48aa5d_962a9f8d13894f4c80ec3e4c60c5258d~mv2.jpg/v1/fill/w_455,h_400,fp_0.50_0.50,q_80,enc_avif,quality_auto/48aa5d_962a9f8d13894f4c80ec3e4c60c5258d~mv2.jpg

5. Blurred RV/vehicle image band, reused as the wide lower image band  
   https://static.wixstatic.com/media/48aa5d_acc8be7d77084c94b35dfb247c9b983a~mv2.jpg/v1/fill/w_147,h_47,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/48aa5d_acc8be7d77084c94b35dfb247c9b983a~mv2.jpg

6. Motorhome exterior photo, reused in the photo-based quote/RV detailing card  
   https://static.wixstatic.com/media/48aa5d_d91be8f0b921493ea416f0197fc591a0~mv2.jpg/v1/fill/w_455,h_1200,fp_0.50_0.50,q_85,enc_avif,quality_auto/48aa5d_d91be8f0b921493ea416f0197fc591a0~mv2.jpg

7. RV interior photo, reused in the interior detailing card  
   https://static.wixstatic.com/media/48aa5d_6f6b056c5f93407d8d6c7c7ff38681aa~mv2.jpg/v1/fill/w_455,h_1200,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/48aa5d_6f6b056c5f93407d8d6c7c7ff38681aa~mv2.jpg

8. Footer Facebook icon, reused in the footer social links  
   https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Facebook.png

9. Footer Instagram icon, reused in the footer social links  
   https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Instagram.png

## Extracted source assets not reused

These were present in the live DOM but were not necessary for the final prototype direction:

- Blue bubbles/cleaning graphic: https://static.wixstatic.com/media/48aa5d_dcfa18375aec4378acd565029d762730~mv2.png/v1/fill/w_1365,h_1200,al_c,q_90,enc_avif,quality_auto/48aa5d_dcfa18375aec4378acd565029d762730~mv2.png
- White travel trailer photo: https://static.wixstatic.com/media/48aa5d_5d9612180e1b4b2cb5203934c0494f5c~mv2.jpg/v1/fill/w_172,h_455,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/48aa5d_5d9612180e1b4b2cb5203934c0494f5c~mv2.jpg
- RV Wash & Detailing flyer image: https://static.wixstatic.com/media/48aa5d_e88e112aaaa1441493142933163a6b64~mv2.jpg/v1/fill/w_235,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1_edited.jpg
- Car Wash & Detailing flyer image: https://static.wixstatic.com/media/48aa5d_87271365cfbb43eb9964478a2f08868f~mv2.jpg/v1/fill/w_241,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20220701_140759%5B3363%5D.jpg
