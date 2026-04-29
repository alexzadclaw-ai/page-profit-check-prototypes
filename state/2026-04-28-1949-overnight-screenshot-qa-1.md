# Screenshot QA 1 notes — 2026-04-28-1949-overnight

## What I inspected
- `scripts/build-dashboard.js`
- `scripts/capture-batch.js`
- batch metadata at `opportunities/2026-04-28-1949-overnight/batch.json`
- current overnight batch folder presence across `opportunities/`, `offers/`, `prototypes/`, and `screenshots/`

## Helper added
- `scripts/check-batch-package.js`
- machine-readable output path used for this run: `state/2026-04-28-1949-overnight-package-qa.json`

## Usage
```bash
node scripts/check-batch-package.js 2026-04-28-1949-overnight
node scripts/check-batch-package.js 2026-04-28-1949-overnight --json
```

Checks each `batch.json` item for:
- audit markdown: `opportunities/<batch>/<slug>-audit.md`
- offer markdown: `offers/<batch>/<slug>-offer.md`
- prototype HTML: `prototypes/<batch>/<slug>/index.html`
- target screenshot: `screenshots/<batch>/<slug>-target.png`
- prototype screenshot: `screenshots/<batch>/<slug>-prototype.png`

Exit code is non-zero when any item is incomplete, so this can be used as a simple gate.

## Current QA result for this batch
- `batch.json` items: 10
- fully complete packages: 0
- incomplete packages: 10

### Missing counts by deliverable
- audit: 8 missing
- offer: 10 missing
- prototype: 10 missing
- target screenshot: 10 missing
- prototype screenshot: 10 missing

### Per-item snapshot
- `my-fitness-world`: missing audit, offer, prototype, target screenshot, prototype screenshot
- `palmer-personal-training`: missing audit, offer, prototype, target screenshot, prototype screenshot
- `hard-body-fitness-personal-training-group`: missing audit, offer, prototype, target screenshot, prototype screenshot
- `trifecta-athletics`: missing audit, offer, prototype, target screenshot, prototype screenshot
- `earthworks-landscape-construction`: missing offer, prototype, target screenshot, prototype screenshot
- `landscape-construction-llc`: missing offer, prototype, target screenshot, prototype screenshot
- `donnas-home-fitness`: missing audit, offer, prototype, target screenshot, prototype screenshot
- `evolve-personal-trainer`: missing audit, offer, prototype, target screenshot, prototype screenshot
- `sprintervision-nutrition`: missing audit, offer, prototype, target screenshot, prototype screenshot
- `wellabee`: missing audit, offer, prototype, target screenshot, prototype screenshot

## Obvious report/index issues that could block final side-by-side review
1. **Current report builder will surface incomplete latest-batch entries.**
   - `scripts/build-dashboard.js` prefers the latest batch first and de-duplicates by slug globally.
   - If a slug appears in this overnight batch before its package is complete, the incomplete newest card will displace any older complete package for the same slug.
   - That is a real blocker for final side-by-side review once overlapping slugs appear across batches.

2. **Dashboard currently treats missing assets as reviewable placeholders.**
   - The generated report will still render cards for incomplete items, with screenshot placeholders and missing links omitted.
   - That is okay for internal progress visibility, but not okay as a final review surface if the expectation is only complete side-by-side packages.

3. **Overnight batch already has a directory footprint that makes it discoverable by the dashboard.**
   - `opportunities/2026-04-28-1949-overnight/batch.json` exists.
   - `prototypes/2026-04-28-1949-overnight/` also exists, even though it is empty.
   - Because the dashboard discovers batches from directory presence, this batch is eligible to show up before package completion.

## Recommendation
- Use `scripts/check-batch-package.js` as a packaging gate before assigning screenshot capture or rebuilding the final report.
- Before final publish/review, either:
  - filter dashboard cards to only show complete packages, or
  - fall back to the newest **complete** package per slug instead of the newest batch entry regardless of completeness.
