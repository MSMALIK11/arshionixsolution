# Arshionix

Next.js 15 app (App Router). See `docs/THEME.md` for design tokens.

## Scripts

| Command | Purpose |
|--------|---------|
| `npm run dev` | Dev server (Webpack HMR — default; avoids Turbopack ping/HMR noise) |
| `npm run dev:turbo` | Dev with **Turbopack** (faster; may log `unrecognized HMR message "ping"` with some browsers/IDE previews) |
| `npm run dev:clean` | Delete `.next` + cache, then dev |
| `npm run clean` | Remove `.next` and `node_modules/.cache` only |
| `npm run build` / `npm start` | Production build & serve |

## Dev errors: `Cannot find module './XXX.js'` or `__webpack_modules__...`

The `.next` folder is out of sync (common after interrupted compiles, two dev servers, or switching git branches while `next dev` runs).

1. Stop **all** `next dev` / `next start` processes for this repo.
2. Run: `npm run clean`
3. Start again: `npm run dev`

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` for correct canonical URLs in production.
