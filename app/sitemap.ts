import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";

const staticPages: { url: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
  { url: `${BASE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/portfolio`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${BASE_URL}/careers`, changeFrequency: "weekly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map(({ url, changeFrequency, priority }) => ({
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
  const blogSlugs = getAllSlugs();
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticEntries, ...blogEntries];
}
