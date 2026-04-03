import type { Metadata } from "next";
import type { BlogPost } from "@/lib/blog";

/** Canonical origin, no trailing slash. */
export function getCanonicalSiteUrl(): string {
  const u = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";
  return u.replace(/\/$/, "");
}

/**
 * Search engine verification meta tags (set env vars after adding the site in each console).
 * Google: Search Console → Settings → Ownership verification → HTML tag → copy `content` value.
 * Bing: Webmaster Tools → verify → meta tag `msvalidate.01`.
 */
export function searchEngineVerification(): Metadata["verification"] | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const yandex = process.env.YANDEX_VERIFICATION?.trim();
  const bing = process.env.BING_SITE_VERIFICATION?.trim();

  const other: Record<string, string | number | (string | number)[]> = {};
  if (bing) other["msvalidate.01"] = bing;

  if (!google && !yandex && Object.keys(other).length === 0) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(yandex ? { yandex } : {}),
    ...(Object.keys(other).length ? { other } : {}),
  };
}

/** Article + BreadcrumbList JSON-LD for blog posts. */
export function blogPostJsonLd(siteUrl: string, slug: string, post: BlogPost) {
  const pageUrl = `${siteUrl}/blog/${slug}`;
  const published = new Date(post.date).toISOString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.description,
        datePublished: published,
        dateModified: published,
        author: {
          "@type": "Organization",
          name: "Arshionix",
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "Arshionix",
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/icon.svg`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        articleSection: post.category,
        inLanguage: "en-US",
        isAccessibleForFree: true,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
