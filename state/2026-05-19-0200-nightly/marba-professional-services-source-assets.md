# M@RBA Professional Services - Source Assets

Live site inspected with Playwright using system Chromium at `/snap/bin/chromium`.

- Live URL: https://marbapros.wixsite.com/lawns
- Capture date: 2026-05-19
- Viewport: 1365 x 1400
- Live screenshot: `screenshots/2026-05-19-0200-nightly/marba-professional-services-target.png`
- Inspection JSON: `state/2026-05-19-0200-nightly/marba-professional-services-live-inspection.json`
- Scroll behavior: page was opened, waited for load/network idle when available, then scrolled from top to bottom in increments to trigger Wix lazy assets before returning to the top for the screenshot.

## Extracted DOM image URLs

1. LawnStarter Certified Pro badge/logo. Live rect was off to the right of the 1365px viewport, so the prototype brought it back inside the header as a cleaned-up trust cue.

   `https://static.wixstatic.com/media/516fa6_c5cadc6b94b046baa619775d1fb19d28~mv2.png/v1/fill/w_260,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/516fa6_c5cadc6b94b046baa619775d1fb19d28~mv2.png`

2. Wide green lawn photo used on the source site for the “Our 5-Star Services” banner.

   `https://static.wixstatic.com/media/000e0c377403478d8bfb1b2f9648f08f.jpg/v1/fill/w_1365,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/000e0c377403478d8bfb1b2f9648f08f.jpg`

3. Circular service image for Lawn Manicure Maintenance, showing a manicured yard with a white chair.

   `https://static.wixstatic.com/media/516fa6_2fef18fb95a24c4d86c4928704fdd359~mv2.jpg/v1/crop/x_289,y_0,w_201,h_200/fill/w_220,h_220,al_c,lg_1,q_80,enc_avif,quality_auto/516fa6_2fef18fb95a24c4d86c4928704fdd359~mv2.jpg`

4. Circular service image for Landscaping Restoration, showing an overgrown yard/house.

   `https://static.wixstatic.com/media/516fa6_bad075f07d4043a7ba27a02a3a49a740~mv2.jpg/v1/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/516fa6_bad075f07d4043a7ba27a02a3a49a740~mv2.jpg`

5. Circular service image for “...And Much More!”, showing a landscaped stone path and garden bed.

   `https://static.wixstatic.com/media/516fa6_81386292516548c9bbcd50420ef70a25~mv2.jpg/v1/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/516fa6_81386292516548c9bbcd50420ef70a25~mv2.jpg`

6. Wide lawn/pathway photo used on the source site for the bottom “Want to Customize?” contact section.

   `https://static.wixstatic.com/media/d9e9c6100e184ea1b839db003707679d.jpg/v1/fill/w_1365,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d9e9c6100e184ea1b839db003707679d.jpg`

## Computed CSS background image URLs

No computed CSS background image URLs were found on the live page during Playwright evaluation. The source site used DOM `<img>` elements for the visible photo sections and service images.

## Other source resources observed

The live Wix page loaded Futura-style fonts that were reused in the prototype to preserve the typography feel:

- `https://static.parastorage.com/fonts/v2/790166f1-b347-4f16-8a29-f0c4931a7c35/v1/futura-lt-w01-book.woff2`
- `https://static.parastorage.com/fonts/v2/8e5b5cbc-6ad9-49f7-aee7-4e5133c3ee4d/v1/futura-lt-w01-light.woff2`

## Source text and contact details preserved

- Business: `M@RBA Professional Services`
- Tagline: `"Making a Million Love Your Yard!"`
- Email: `Marbapros@gmail.com`
- Phone: `816-582-6398`
- Primary booking URL: `https://marbapros.wixsite.com/lawns/services-schedule-online`
- Maid services link from source site: `http://www.marbapros.com/`
- Family owned and operated since 2014
- Services: lawn manicure maintenance, landscaping restoration, retaining walls, stone pathways, lawn beautification
- Testimonial: `"I knew from our first conversation that you are good people! I feel like family!"` from `C. Casey ~ Spring, TX`

## Asset reuse decision

All photos, the certification badge, and typography resources used in the prototype came from the live Wix site or live Wix-loaded resources. No unrelated stock, Unsplash, Pexels, AI-generated, or generic placeholder imagery was introduced.
