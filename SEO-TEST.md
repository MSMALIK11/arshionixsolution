# SEO Testing Guide

Use these tools to test and improve your SEO score (target: above 90).

---

## 1. Google Search Console

- **URL:** [search.google.com/search-console](https://search.google.com/search-console)
- **Steps:** Add your property (e.g. `https://arshionix.com`), verify (HTML tag in `app/layout.tsx` → `metadata.verification.google`), submit sitemap `https://yourdomain.com/sitemap.xml`, request indexing for key URLs.
- **Check:** Coverage, Performance (queries, clicks, impressions), Core Web Vitals.

---

## 2. Lighthouse (Chrome DevTools)

- **How:** Open your site in Chrome → DevTools (F12) → Lighthouse tab → select **SEO** (and Performance) → Analyze.
- **Target:** SEO score **90+**. Fix any suggested improvements (meta description, tap targets, etc.).

---

## 3. PageSpeed Insights

- **URL:** [pagespeed.web.dev](https://pagespeed.web.dev)
- **Steps:** Enter your live URL. Review Performance, Accessibility, Best Practices, SEO for mobile and desktop.
- **Target:** SEO and Performance in the green. Address Core Web Vitals (LCP, FID, CLS).

---

## Quick checklist

| Check | Action |
|-------|--------|
| Title & description | Unique, under 60 / 160 chars, include main keywords. |
| Canonical | Set on all pages (already in layout and per-page). |
| Sitemap | Submit `/sitemap.xml` in GSC. |
| Robots | Allow `/`, disallow `/api/`, sitemap link (already in `app/robots.ts`). |
| Structured data | Organization, WebSite, Services (already in layout). |
| Images | Use `next/image`, alt text, lazy loading (used on careers, portfolio). |
| Security headers | Set in `next.config.ts`. |
| HTTPS | Enforced by host (e.g. Vercel). |

After deployment, run Lighthouse and PageSpeed Insights on the live URL and fix any reported issues to reach SEO score above 90.
