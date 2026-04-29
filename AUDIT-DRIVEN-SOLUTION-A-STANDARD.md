# Audit-Driven Solution A Standard

Default prototype standard for future Page Profit Check prospects.

## Goal
Create a **high-fidelity surgical clone** that still feels like the prospect's existing website, while visibly fixing the most important conversion and trust issues found in the audit.

This is not a redesign.
It is **the same website family, cleaned up and clarified**.

## When to use Solution A
Use this as the default when:
- the live site already has recognizable brand assets or decent visual bones
- the business owner would likely respond better to continuity than reinvention
- the core opportunity is cleanup, clarification, trust repair, or better CTA flow

Do not default to Solution A when the site is so broken that a minimal cleanup cannot solve the main problem. In that case, note the blocker and choose a lighter diagnostic format instead of forcing a fake redesign.

## Non-negotiable principles
1. **Preserve the visual fingerprint**
   - logo treatment
   - color direction
   - typography feel
   - image treatment
   - header/nav pattern
   - section rhythm
   - site-builder texture when that texture is part of recognition

2. **Fix the real audit problems**
   The prototype must visibly address all Critical findings and as many High findings as possible without breaking brand recognition.

3. **Do not preserve broken elements for similarity**
   If something damages trust or conversion, fix it in the lightest possible way.

4. **The prototype must read like a believable improved homepage**
   No internal commentary, no "experiment" language, no explanation copy about what the prototype is doing.


## Steve Piper calibration lesson — fidelity means using the actual site DNA

The Steve Piper pilot exposed a failure mode: prototypes can pass artifact QA and still be unusable if they share a generic layout/template instead of matching the original site. Treat this as a hard standard for all agents.

Before coding any prototype, agents must capture and use the site's actual visual DNA:
- original logo and real public image assets, especially hero/banner images
- exact header/nav/utility-bar structure and color treatment
- real background image choice and crop/framing, not a substitute image
- original font family or close typography feel
- original section density, card rhythm, CTA/button style, and builder quirks

For Steve Piper, the accepted calibration used the real hero asset:
`https://lirp.cdn-website.com/dbc08bb1/dms3rep/multi/opt/banner-1920w.jpg`

The wrong attempts failed because they tried to manipulate the wrong background image (`wid4`) with zoom/crop changes. The fix was not “zoom more” or “zoom less”; the fix was to identify and use the correct original banner asset.

### Visual fidelity gate

A prototype cannot be marked complete until it passes this gate:
1. Put the original screenshot and prototype screenshot side by side.
2. Within three seconds, the prototype must look like the same site family.
3. Header/logo/nav, hero image, colors, type feel, and section rhythm must be recognizably derived from the original.
4. If the prototype looks like a house template shared with other leads, it fails even if the copy and CTA strategy are good.
5. If an image/background looks wrong, inspect the live site assets and CSS instead of guessing with `background-size` tweaks.

### Agent process requirement

For large-scale repair or generation, every worker must include a short “visual fingerprint evidence” note before implementation:
- source screenshot path or URL
- logo asset URL/path
- hero/background asset URL/path
- dominant colors
- font/typography feel
- header/nav pattern
- one sentence explaining what makes the original recognizable

Workers should not proceed to bulk prototype generation without this fingerprint. Supervisors must spot-check rendered screenshots, not just file existence.

## Required workflow

### 1) Build a visual fingerprint before coding
Capture:
- brand/logo assets
- hero/background assets where possible
- dominant colors
- font family or typography feel
- button/card style
- section order and density
- spacing rhythm
- notable builder quirks

Write down the few elements that must remain recognizable.

### 2) Rank audit findings by severity
Use these levels:
- **Critical** = strong trust or conversion damage
- **High** = meaningful friction or clarity problems
- **Medium** = worthwhile cleanup but not essential to first-touch performance

### 3) Create an Audit-to-Prototype Coverage map before implementation
For each Critical and High finding, define:
- finding
- severity
- concrete prototype fix
- where it should appear in the prototype
- expected status: fixed / improved / deferred

### 4) Build in this order
1. Hero clarity + CTA hierarchy
2. Trust strip near the top
3. Service story organized by buyer intent
4. Consultation / what-happens-next block
5. Contact/form cleanup
6. Footer/template residue cleanup
7. Mobile scannability pass
8. SEO basics: title, meta description, heading structure

### 5) Run the acceptance gate before publishing
The prototype is not complete until the answer is yes or mostly yes to all of these:
- Is the hero clearer than the original?
- Is the main CTA specific rather than generic?
- Are trust signals visible near the top?
- Are services organized in a way first-time buyers can scan?
- Is there a clear explanation of what happens next?
- Are obvious template leftovers removed?
- Is the page easier to scan on mobile?
- Would the owner recognize this as their site, just cleaned up?

If any Critical item is still missing, revise before publishing.

## Required audit sections
Every audit that ships with a Solution A prototype should include:
- Quick take
- What is already working
- Biggest conversion issues
- Best Page Profit Check improvements
- SEO basics to tighten
- Realistic implementation angle
- Offer fit
- Direct links
- **Audit-to-Prototype Coverage**
- **Similarity check**
- **Final acceptance checklist**

## Audit-to-Prototype Coverage rules
- All Critical findings must be marked **fixed** or **improved** unless impossible without redesign.
- If a Critical or High finding is deferred, explain why plainly.
- The prototype must visibly reflect the coverage map, not just mention it in the audit.

## Prototype content rules
- Do not write internal notes into the page.
- Do not describe the page as a prototype, concept, experiment, or audit deliverable inside the user-facing page.
- Do not add agency-style explanation copy about the cleanup itself.
- Keep the copy believable as a real homepage.
- Prefer shorter paragraphs, stronger headings, clear CTA labels, and obvious next steps.

## Similarity rule
The target is not "better looking in the abstract."
The target is:
> Would the owner instantly recognize this as their same website, but clearer, more trustworthy, and easier to act on?

## Recommended final verdicts in the audit
End with both:
- **Visual resemblance:** High / Medium / Low
- **Audit coverage:** High / Medium / Low

A prototype is not successful if it scores high on resemblance but low on audit coverage.
