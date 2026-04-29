# Overnight PPC controller tracker — 2026-04-28-1949-overnight

## Mission windows
- Full production until **2026-04-29 03:15 CDT**
- Stop starting risky new leads after **2026-04-29 03:15 CDT**
- Freeze all new starts at **2026-04-29 04:00 CDT**
- Finalize / QA / publish from **04:00–06:00 CDT**

## Live state (~20:59 CDT)
- Queued candidates: 3
- Qualified candidates: 0
- Audited awaiting prototype: 0
- Prototyped awaiting screenshots: 0
- Screenshot-complete awaiting offer/package: 0
- Fully complete leads: 7
- Blocked/abandoned: 0

## Complete packages
1. My Fitness World *(rescue/relaunch angle; parked-domain issue remains part of pitch context)*
2. Palmer Personal Training
3. Earthworks Landscape Construction, Inc.
4. Landscape Construction LLC
5. Donna's Home Fitness
6. Sprintervision Nutrition
7. Hard Body Fitness Personal Training Group

## Remaining batch items
8. Trifecta Athletics — queued
9. Evolve Personal Trainer — queued
10. Wellabee — queued

## Controller notes
- `scripts/check-batch-package.js` now reports **7 complete packages** for this batch.
- Screenshot files exist for all seven complete leads.
- `scripts/build-dashboard.js` excludes incomplete cards from the root report.
- Hard Body target capture initially failed because `https://hardbodyfitnessptg.com/` has a certificate mismatch in Chromium; batch URL was switched to working HTTP for target capture.
- Next likely fast-turn completion is `trifecta-athletics`, with `evolve-personal-trainer` and `wellabee` still lower-confidence.

## Browser cap
- Max 3 browser-heavy sessions concurrently across the fleet.
- Current capture work has been running in small subset waves.
- Keep using QA gate before every new screenshot assignment.
