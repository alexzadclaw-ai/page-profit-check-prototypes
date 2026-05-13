#!/usr/bin/env bash
set -euo pipefail

batch="${1:-}"
if [[ -z "$batch" ]]; then
  echo "Usage: scripts/finalize-nightly-batch.sh <batch> [--skip-crm] [--skip-push]" >&2
  exit 2
fi
shift || true
skip_crm=0
skip_push=0
for arg in "$@"; do
  case "$arg" in
    --skip-crm) skip_crm=1 ;;
    --skip-push) skip_push=1 ;;
    *) echo "Unknown arg: $arg" >&2; exit 2 ;;
  esac
done

cd "$(dirname "$0")/.."
root="$PWD"
report="reports/page-profit-check-nightly-${batch//-/}.html"

if [[ ! -f "opportunities/$batch/batch.json" ]]; then
  echo "Missing opportunities/$batch/batch.json" >&2
  exit 2
fi

# Some per-site workers have historically written screenshots one directory too deep.
# Normalize that recoverably before QA so a single nested path cannot stop publish/finalization.
find "screenshots/$batch" -mindepth 2 -maxdepth 2 -type f -name '*.png' 2>/dev/null | while read -r f; do
  base="$(basename "$f")"
  dest="screenshots/$batch/$base"
  [[ -f "$dest" ]] || cp "$f" "$dest"
done

node scripts/qa-batch.js "$batch"
node scripts/build-batch-report.js "$batch" "$report"
node scripts/build-batch-report.js "$batch" index.html

# Verify the report references expected committed paths before any push.
grep -q "$batch" "$report"
grep -q "$batch" index.html
grep -q 'href="assets/styles.css"' index.html
grep -q "raw.githubusercontent.com/alexzadclaw-ai/page-profit-check-prototypes/main/screenshots/$batch" "$report"
grep -q "htmlpreview.github.io" "$report"

if [[ "$skip_push" -eq 0 ]]; then
  git add "opportunities/$batch" "offers/$batch" "prototypes/$batch" "screenshots/$batch" "state/$batch" "state/$batch-package-qa.json" "$report" index.html scripts/qa-batch.js scripts/build-batch-report.js scripts/finalize-nightly-batch.sh
  git commit -m "Finalize PPC nightly batch $batch" || true
  git push origin main
fi

if [[ "$skip_crm" -eq 0 ]]; then
  cd "$root/.."
  python3 scripts/sync_latest_ppc_batch_to_crm.py "$batch"
  python3 scripts/create_ppc_drafts_for_batch.py "$batch"
  cd "$root"
fi

echo "FINALIZED_BATCH=$batch"
echo "REPORT=$report"
echo "HTMLPREVIEW=https://htmlpreview.github.io/?https://github.com/alexzadclaw-ai/page-profit-check-prototypes/blob/main/$report"
