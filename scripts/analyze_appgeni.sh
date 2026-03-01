#!/usr/bin/env bash
set -euo pipefail

TARGET_URL="${1:-https://appgeni.netlify.app/}"
RUN_LABEL="${2:-manual}"

command -v npx >/dev/null 2>&1 || {
  echo "Error: npx is required but not found on PATH."
  exit 1
}

CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
PWCLI="${PWCLI:-$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh}"

if [[ ! -x "$PWCLI" ]]; then
  echo "Error: Playwright wrapper was not found at: $PWCLI"
  echo "Set PWCLI to the correct path, then run again."
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_BASE="$ROOT_DIR/output/playwright"
STAMP="$(date +%Y%m%d-%H%M%S)"
RUN_DIR="$OUT_BASE/appgeni-$STAMP-$RUN_LABEL"
SESSION="appgeni-$STAMP-$$"

mkdir -p "$RUN_DIR"

pw() {
  "$PWCLI" --session "$SESSION" "$@"
}

if ! "$PWCLI" --help >/dev/null 2>"$RUN_DIR/00-preflight-error.log"; then
  echo "Error: Playwright CLI preflight failed."
  echo "Details: $RUN_DIR/00-preflight-error.log"
  echo "Fix:"
  echo "  1) Ensure internet access to registry.npmjs.org"
  echo "  2) Or install globally: npm install -g @playwright/cli@latest"
  echo "  3) Re-run this script"
  exit 1
fi

cleanup() {
  pw close >/dev/null 2>&1 || true
}
trap cleanup EXIT

printf "Run directory: %s\n" "$RUN_DIR"
printf "Target URL: %s\n" "$TARGET_URL"

pw open "$TARGET_URL"
pw resize 1440 2200
pw snapshot >"$RUN_DIR/01-snapshot-initial.txt"

pw eval "document.title" >"$RUN_DIR/02-title.txt"
pw eval "location.href" >"$RUN_DIR/03-url.txt"
pw eval "document.querySelectorAll('section').length" >"$RUN_DIR/04-section-count.txt"
pw eval "document.querySelectorAll('img').length" >"$RUN_DIR/05-image-count.txt"
pw eval "document.querySelectorAll('a[href]').length" >"$RUN_DIR/06-link-count.txt"
pw eval "JSON.stringify(Array.from(document.querySelectorAll('h1,h2,h3')).map((el, i) => ({index: i + 1, tag: el.tagName, text: (el.textContent || '').trim()})).filter(x => x.text).slice(0, 60), null, 2)" >"$RUN_DIR/07-headings.json"
pw eval "JSON.stringify(Array.from(document.querySelectorAll('a[href]')).map((el, i) => ({index: i + 1, text: (el.textContent || '').trim(), href: el.getAttribute('href')})).slice(0, 120), null, 2)" >"$RUN_DIR/08-links.json"

pushd "$RUN_DIR" >/dev/null
pw screenshot >"$RUN_DIR/09-screenshot-log.txt"
pw pdf >"$RUN_DIR/10-pdf-log.txt" || true
popd >/dev/null

pw console >"$RUN_DIR/11-console.log"
pw network >"$RUN_DIR/12-network.log"

cat >"$RUN_DIR/REPORT.md" <<EOF
# AppGeni Playwright Analysis

- Run at: $(date -u "+%Y-%m-%d %H:%M:%S UTC")
- Target: $TARGET_URL
- Session: $SESSION
- Output folder: $RUN_DIR

## Quick metrics

- Document title: $(tr -d '\r' <"$RUN_DIR/02-title.txt")
- Final URL: $(tr -d '\r' <"$RUN_DIR/03-url.txt")
- Sections: $(tr -d '\r' <"$RUN_DIR/04-section-count.txt")
- Images: $(tr -d '\r' <"$RUN_DIR/05-image-count.txt")
- Links: $(tr -d '\r' <"$RUN_DIR/06-link-count.txt")

## Artifacts

- Initial snapshot: \`01-snapshot-initial.txt\`
- Headings: \`07-headings.json\`
- Links: \`08-links.json\`
- Screenshot/PDF command logs: \`09-screenshot-log.txt\`, \`10-pdf-log.txt\`
- Console log: \`11-console.log\`
- Network log: \`12-network.log\`
EOF

echo "Done. Analysis report: $RUN_DIR/REPORT.md"
