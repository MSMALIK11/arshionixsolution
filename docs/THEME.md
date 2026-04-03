# Theme (light mode)

**Brand:** blue + purple — primary blue, violet/purple gradients and accents.

| Token | Role |
|--------|------|
| **Canvas** | Very light cool gray (`hsl(215 28% 97%)` ≈ `#f4f7fb`) |
| **Cards** | White (`--card`), subtle border + soft elevation |
| **Primary** | Blue 600 (`#2563eb`) — CTAs, links, focus ring |
| **Accents** | Violet / purple (`--brand-accent`, `violet-*` in Tailwind, hero wash) |
| **Trust** | Emerald checkmarks, amber ratings (components) |
| **Type** | [Inter](https://fonts.google.com/specimen/Inter) via `next/font` |

Tokens live in `app/globals.css` (`:root` / `.dark`). Tailwind `brand` = blue scale; pair with `violet-*` for purple.

## Production checklist

- Set `NEXT_PUBLIC_SITE_URL` in `.env` for canonical URLs and OG.
- Run `npm run build` before deploy; use `npm run clean` if `.next` chunks error.
- Add search console verification keys in `app/layout.tsx` `metadata.verification` when ready.
