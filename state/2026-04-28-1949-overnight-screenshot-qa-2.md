# Screenshot QA 2 runbook — 2026-04-28-1949-overnight

## What I checked
- `scripts/capture-batch.js`
- `scripts/check-batch-package.js`
- `opportunities/2026-04-28-1949-overnight/batch.json`
- current overnight file presence in `opportunities/`, `offers/`, and `prototypes/`

## Helper added
- `scripts/capture-batch-subset.js`

Purpose: run the existing batch capture flow against a subset of slugs without editing `scripts/capture-batch.js` or mutating the real batch metadata.

### Usage
```bash
node scripts/capture-batch-subset.js 2026-04-28-1949-overnight --slugs my-fitness-world
node scripts/capture-batch-subset.js 2026-04-28-1949-overnight --slugs slug-a,slug-b,slug-c
node scripts/capture-batch-subset.js 2026-04-28-1949-overnight --slugs-file state/slugs-to-recapture.txt
node scripts/capture-batch-subset.js 2026-04-28-1949-overnight --slugs my-fitness-world --dry-run
```

Notes:
- It creates a temporary subset batch alias under `opportunities/`.
- It symlinks that alias to the real `prototypes/<batch>/` and `screenshots/<batch>/` folders.
- Actual output still lands in `screenshots/2026-04-28-1949-overnight/`.
- Good for first-pass capture on newly ready leads and targeted retries after partial failures.

## Current readiness snapshot
`node scripts/check-batch-package.js 2026-04-28-1949-overnight`

As of this check:
- screenshot-ready complete package count: **1** lead with audit + offer + prototype present before screenshots:
  - `my-fitness-world`
- near-ready but **not** safe for full pair capture yet:
  - `palmer-personal-training` — audit + offer present, prototype missing
- not screenshot-ready yet:
  - `earthworks-landscape-construction`
  - `landscape-construction-llc`
  - `hard-body-fitness-personal-training-group`
  - `trifecta-athletics`
  - `donnas-home-fitness`
  - `evolve-personal-trainer`
  - `sprintervision-nutrition`
  - `wellabee`

## Safe screenshot-run plan
1. **Before taking a browser slot**, rerun:
   ```bash
   node scripts/check-batch-package.js 2026-04-28-1949-overnight
   ```
2. **Only capture slugs whose audit + offer + prototype already exist.**
   This avoids wasting browser time on predictable prototype-side failures.
3. **Use subset capture, not full-batch capture, while the batch is still filling in.**
   Recommended first command once a slot is assigned:
   ```bash
   node scripts/capture-batch-subset.js 2026-04-28-1949-overnight --slugs my-fitness-world
   ```
4. **For later waves**, pass only the newly ready slugs:
   ```bash
   node scripts/capture-batch-subset.js 2026-04-28-1949-overnight --slugs slug-a,slug-b
   ```
5. **For retries**, reuse the same helper with only failed or suspicious slugs instead of recapturing everything.
6. **After each run**, verify expected PNGs exist:
   - `screenshots/<batch>/<slug>-target.png`
   - `screenshots/<batch>/<slug>-prototype.png`
7. **Then rerun package QA** to confirm screenshot completeness for those leads:
   ```bash
   node scripts/check-batch-package.js 2026-04-28-1949-overnight
   ```

## Observed capture-script behavior / caveats
- `scripts/capture-batch.js` opens one page per slug and captures both target and prototype on that same page object.
- It logs failures but continues, which is good for batch tolerance.
- It does **not** preflight whether prototype HTML exists, so using it on incomplete slugs will burn browser time and produce avoidable `PROTO FAIL` noise.
- `my-fitness-world` may still be content-risky even though files are present, because its live site has known parking/recovery issues in the audit; that is a capture-policy decision, not a tooling blocker.

## Recommendation to controller
- Assign screenshot browser work only per-ready-subset, not whole-batch.
- Current best first candidate: `my-fitness-world`.
- Hold `palmer-personal-training` until `prototypes/2026-04-28-1949-overnight/palmer-personal-training/index.html` exists.
