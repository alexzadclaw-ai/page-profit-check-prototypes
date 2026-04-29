# Ten-site visual fidelity pilot summary

Date: 2026-04-29

## Scope

Repaired exactly these 10 prototype HTMLs and recaptured only their prototype screenshots:

1. `2026-04-29-0110-overnight-10/corwin-drywall-contracting`
2. `2026-04-29-0110-overnight-10/adv-masonry-contractor`
3. `2026-04-28-2303-overnight-3/pure-windows`
4. `2026-04-28-2337-overnight-5/anderson-window-gutter-cleaning`
5. `2026-04-29-0004-overnight-6/tm-tree-service`
6. `2026-04-29-0039-overnight-8/wiz-plumbing`
7. `2026-04-29-0039-overnight-8/henson-concrete-construction`
8. `2026-04-29-0027-overnight-7/stec-roofing-sg`
9. `2026-04-29-0027-overnight-7/executive-green-carpet-cleaning`
10. `2026-04-29-0110-overnight-10/copper-oak-remodeling`

## Outputs

- Per-site fingerprints: `state/fidelity-pilot-10site/*-fingerprint.md`
- Live inspection JSON and live screenshots: `state/fidelity-pilot-10site/*-inspect.json`, `*-live.png`
- Embedded side-by-side report: `reports/page-profit-check-fidelity-pilot-10site-20260429-1150.html`
- Report verification: 20 embedded images, 0 nested htmlpreview links, all 10 names/slugs present.

## QA

All touched batch package checks passed with complete=10 / incomplete=0:

- `2026-04-29-0110-overnight-10`
- `2026-04-28-2303-overnight-3`
- `2026-04-28-2337-overnight-5`
- `2026-04-29-0004-overnight-6`
- `2026-04-29-0039-overnight-8`
- `2026-04-29-0027-overnight-7`

Forbidden internal-term grep over the 10 touched prototype HTMLs returned no hits.

## Quality note

This pass uses actual visible live-site logos and hero/service assets where available and preserves each site's header/nav/color/type rhythm more closely than the failed broad generic repair. It is suitable as a controlled pilot review artifact. Before scaling to all 100, spot-check the embedded report visually; several sites are close surgical static clones, but a full rerun should keep this evidence-first/site-specific pattern rather than generic templates.
