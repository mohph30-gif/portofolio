# Playwright Website Analysis (CLI)

This project includes a reusable Playwright CLI automation script for website analysis:

- Script: `scripts/analyze_appgeni.sh`
- Default target: `https://appgeni.netlify.app/`
- Artifacts: `output/playwright/appgeni-<timestamp>-<label>/`

## Run Steps

1. From the project root:

```bash
cd /Users/mohammedsalah/Desktop/portofolio/portofolio
chmod +x scripts/analyze_appgeni.sh
```

2. Run with defaults:

```bash
./scripts/analyze_appgeni.sh
```

3. Run with custom target and run label:

```bash
./scripts/analyze_appgeni.sh "https://appgeni.netlify.app/" "baseline"
```

## Prerequisites

- `npx` must be available.
- The first run needs access to `registry.npmjs.org` so `@playwright/cli` can be resolved by the wrapper.
- If preflight fails, check: `output/playwright/appgeni-<timestamp>-<label>/00-preflight-error.log`

## What It Collects

- Page snapshot (`snapshot`)
- Page title and URL
- Counts of sections, images, and links
- Extracted headings (`h1/h2/h3`) and anchor links
- Screenshot and PDF command output
- Browser console logs
- Network request logs
- Consolidated run summary in `REPORT.md`
