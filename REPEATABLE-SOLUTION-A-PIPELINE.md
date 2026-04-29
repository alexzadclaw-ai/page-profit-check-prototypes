# Repeatable Solution A Pipeline

Use this pipeline for future prospects when the right deliverable is a **brand-faithful upgrade**: recognizable business DNA plus obvious improvements, not a generic redesign and not a pixel-copy clone.

## Outcome
Produce a believable improved homepage that:
- still feels connected to the prospect's existing brand/site
- fixes the highest-severity trust and conversion issues from the audit
- visibly improves hierarchy, CTA flow, service clarity, trust proof, and mobile action
- is reviewable as a static HTML prototype
- can be shared via htmlpreview when needed




### Report size rule

Default visual review reports must stay lightweight:
- keep report HTML small;
- store screenshots as separate optimized `.webp` or `.jpg` files under `reports/assets/<report-id>/`;
- reference screenshots via stable GitHub Pages/raw URLs;
- include inline action links for original website, prototype, audit report, offer letter, contact point, and fingerprint inside each comparison card;
- avoid base64-embedding screenshots except for tiny pilots or when external image hosting is failing and the user explicitly needs a self-contained file.

Reason: embedding screenshots directly as base64 makes a 10-site report exceed 50 MB and would make a 100-site report hundreds of MB.

## Brand-faithful upgrade operating rule

Do not scale a repair run until a small calibration pilot is approved. The Steve Piper and PN Dog Grooming pilots define the bar:
- use the actual original hero/banner asset when it matters for recognition, not a similar service-card image
- preserve the original header/nav/utility-bar rhythm when it helps recognition
- keep the real brand colors and typography feel, but improve spacing, hierarchy, and CTA clarity
- do not stop at cloning; make the improvement obvious in the first screen
- recapture screenshots after every visual change
- publish a timestamped lightweight side-by-side report for review: HTML stays small, screenshots are separate optimized .webp/.jpg assets referenced by stable GitHub Pages/raw URLs; use embedded/base64 reports only for tiny pilots or fallback troubleshooting

For each site, build from evidence:
1. Capture live screenshot.
2. Inspect live assets/CSS for logo, hero/background, fonts, colors, nav/header.
3. Write a visual fingerprint note.
4. Choose 2–3 **non-negotiable structural cues** that must survive into the prototype. These must be skeleton-level cues, not just colors/assets: header/nav rhythm, hero composition, diagonal/angled divider, card overlap, service-grid rhythm, footer/contact pattern, section density, or other layout DNA.
5. Write a visible upgrade plan: what will be clearer, easier, more trustworthy, or more actionable.
6. Build the prototype from the fingerprint, structural cues, and upgrade plan.
7. Recapture prototype screenshot.
8. Compare original/prototype screenshots side by side.
9. Only then run package QA and commit.

A worker that only creates a generic conversion layout has failed the task, even if all required files exist. A worker that only clones the old page without a clear conversion/design improvement has also failed. A worker that uses the right logo/colors/images but drops the original structural rhythm has also failed; that is a skin over a house template, not a brand-faithful upgrade.

## Step 1 — Capture the live page
Gather:
- homepage URL
- contact/source URL
- full-page screenshot when possible
- logo and major public brand assets
- visible fonts, colors, nav/header pattern, button style, section rhythm

## Step 2 — Write the audit first
Audit before building.

Identify:
- what is already working
- the top conversion issues
- the top trust issues
- the likely quick-win improvements
- the realistic implementation angle

Rank findings by severity:
- Critical
- High
- Medium

## Step 3 — Create the visual fingerprint and upgrade plan
Before touching the prototype, note:
- exact or approximate font family
- dominant colors
- visual density / spacing feel
- image treatment
- header/nav pattern
- service card / section pattern
- quirks that make the site recognizable

Then write the upgrade plan:
- what gets clearer above the fold
- what CTA/action path becomes easier
- what trust proof moves higher
- what service/package information becomes easier to scan
- what mobile action improvement is visible

## Step 4 — Make the Audit-to-Prototype Coverage map
For each Critical and High issue, define:
- the problem
- the prototype fix
- where the fix will appear
- whether it should be fixed, improved, or deferred

Use: `templates/AUDIT-TO-PROTOTYPE-COVERAGE-TEMPLATE.md` and `templates/BRAND-FAITHFUL-UPGRADE-CHECKLIST.md`.

## Step 5 — Build in the right order
1. Hero clarity
2. CTA specificity and hierarchy
3. Trust strip near the top
4. Service organization by buyer intent
5. Consultation / what-happens-next flow
6. Form cleanup
7. Footer/template cleanup
8. Mobile scannability pass
9. Meta title / description / heading cleanup

## Step 6 — Apply content rules
The page itself should:
- read like a real homepage
- avoid internal commentary
- avoid calling itself a prototype, experiment, or concept
- avoid explaining the cleanup inside the page
- stay connected to the original site's taste and structure without becoming a clone
- make the improvement obvious to a business owner and a prospective customer

## Step 7 — Run the acceptance checklist
Use: `templates/SOLUTION-A-ACCEPTANCE-CHECKLIST.md` and `templates/BRAND-FAITHFUL-UPGRADE-CHECKLIST.md`.

If a Critical issue is not clearly improved in the rendered page, revise before publishing. If the side-by-side review makes the prototype look generic or too close to the original, revise before publishing.

## Step 8 — Save required outputs
For each prospect, save:
- audit markdown
- draft offer markdown
- prototype HTML
- target screenshot
- prototype screenshot

Recommended audit sections:
- Quick take
- What is already working
- Biggest conversion issues
- Best improvements
- SEO basics
- Realistic implementation angle
- Offer fit
- Direct links
- Audit-to-Prototype Coverage
- Similarity check
- Final acceptance checklist

## Step 9 — Publish and verify
- Commit files
- Push to GitHub
- Share htmlpreview links when sending direct review links
- Verify final link renders and the title/body content match the intended prototype

## Decision rule
A Solution A prototype succeeds only if both are true:
1. The owner would recognize it as their business.
2. The top audit findings are visibly fixed or improved.
3. The owner can immediately see why the prototype is better, not just different or similar.

## Timestamped report convention

Going forward, each Page Profit Check run should publish a separate timestamped HTML report file, preferably under `reports/`, instead of relying only on the root `index.html`. Use a filename that includes the run timestamp and purpose, for example `reports/page-profit-check-fidelity-repair-YYYYMMDD-HHMM.html` or `reports/page-profit-check-nightly-YYYYMMDD-HHMM.html`. The root `index.html` may remain a latest-run landing page, but final user-facing links should point to the timestamped report artifact so separate runs do not get mixed together.
