import type { Metadata } from "next";
import { getCanonicalSiteUrl } from "@/lib/seo";

const base = getCanonicalSiteUrl();

export const metadata: Metadata = {
  title: "Blog — Insights on Web, SaaS & AI",
  description:
    "Arshionix blog: web development, SaaS development, AI tools, and startup tech. Tips and insights from our team.",
  openGraph: {
    type: "website",
    title: "Blog | Arshionix — Web, SaaS & AI Insights",
    description: "Articles on web development, software, AI, and building products.",
    url: `${base}/blog`,
    siteName: "Arshionix",
  },
  alternates: { canonical: `${base}/blog` },
  robots: { index: true, follow: true },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
