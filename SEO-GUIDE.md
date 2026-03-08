# How to Rank Arshionix on Google

Your site already has **technical SEO** in place (titles, descriptions, sitemap, robots, JSON-LD). To actually **rank**, do these steps in order.

---

## 1. Get indexed (so Google knows you exist)

### A. Set your live URL
In **Vercel** (or your host), add this env variable:
- `NEXT_PUBLIC_SITE_URL` = your real domain (e.g. `https://arshionix.com`)

### B. Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add a **property** with your site URL (e.g. `https://arshionix.com`).
3. **Verify ownership**:
   - **HTML tag**: GSC gives you a meta tag like  
     `content="abc123xyz"`  
     Add it in the project: in `app/layout.tsx`, inside `metadata.verification`, set  
     `google: "abc123xyz"` (the value only). Redeploy.
   - Or use **DNS** (TXT record) or **Google Analytics** if you prefer.
4. After verification: **Sitemaps** → add `https://yourdomain.com/sitemap.xml` → Submit.
5. **URL Inspection** → enter `https://yourdomain.com` → **Request indexing**.

Within a few days Google should crawl and list your site. Check **Coverage** / **Pages** in GSC to see indexed pages.

---

## 2. Improve relevance (so you rank for the right words)

### Keywords you’re already targeting
- digital agency, web development, software development, Android app development, UI/UX design, React, Next.js, custom software, Arshionix.

### What to do
- **Homepage**: Keep a clear headline and 1–2 paragraphs that use phrases like “web development agency”, “custom software development”, “Android app development”, “UI/UX design” (you already have this).
- **Services**: Each service (Web, Software, Android, UI/UX) has its own content — good. Add a **blog or “Insights”** later with articles like “How to choose a web development agency”, “Cost of custom software development”, etc. One article per main keyword helps.
- **Location**: If you want “digital agency in [city/country]”, add that phrase in the footer or About (e.g. “Based in India, serving clients worldwide”).
- **FAQ**: You already have an FAQ section — keep it and add more questions people search for (e.g. “How much does it cost to build an app?”, “What is the timeline for a web project?”).

---

## 3. Build authority (so Google trusts you)

- **Backlinks**: Get other sites to link to you (client sites, directories like Clutch/GoodFirms, guest posts, partner sites). Quality matters more than quantity.
- **Google Business Profile**: Create one for “Arshionix” with address, phone, website. Helps local and brand searches.
- **Same content everywhere**: Use the same business name, address, and phone on the site, GSC, and Google Business.

---

## 4. Keep the site healthy

- **Speed**: Next.js + Vercel is already fast. Check [PageSpeed Insights](https://pagespeed.web.dev/) and fix any big issues.
- **Mobile**: Your site is responsive; keep it that way.
- **HTTPS**: Vercel gives you HTTPS; keep it on.
- **No broken links**: Periodically check that every link on the site works (contact, socials, careers, etc.).

---

## 5. Optional: track performance

- **Google Analytics 4**: Create a GA4 property and add the measurement ID to the site (e.g. via a script in layout or a plugin). Use it to see traffic and behavior.
- In **Search Console**: Watch **Performance** (queries, clicks, impressions). Double down on content for queries that get impressions but few clicks.

---

## Quick checklist

| Step | Action |
|------|--------|
| 1 | Set `NEXT_PUBLIC_SITE_URL` to your real domain on Vercel. |
| 2 | Add and verify the site in Google Search Console. |
| 3 | Submit sitemap: `https://yourdomain.com/sitemap.xml`. |
| 4 | Request indexing for the homepage (URL Inspection). |
| 5 | Add Google verification meta tag in `app/layout.tsx` (see 1.B). |
| 6 | Create Google Business Profile for Arshionix. |
| 7 | Later: add a blog and 2–3 articles around your main keywords. |
| 8 | Get a few backlinks from real sites (clients, directories, partners). |

---

## Adding the Google verification tag

After you get the **HTML tag** from Search Console:

1. Open `app/layout.tsx`.
2. Find `verification: { ... }` in `metadata`.
3. Add your value: `google: "your-code-here"` (only the content value from the meta tag).
4. Redeploy.

Example:
```ts
verification: {
  google: "abc123xyz",  // paste the value from GSC here
},
```

---

Ranking takes weeks to months. Focus first on **indexing** (GSC + sitemap + request indexing), then on **content and backlinks**.
