import { MetadataRoute } from "next";
import { getCanonicalSiteUrl } from "@/lib/seo";

const BASE_URL = getCanonicalSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
