import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";

export const metadata: Metadata = {
  title: "Blog — Insights on Web, SaaS & AI",
  description:
    "Arshionix blog: web development, SaaS development, AI tools, and startup tech. Tips and insights from our team.",
  openGraph: {
    title: "Blog | Arshionix — Web, SaaS & AI Insights",
    description: "Articles on web development, software, AI, and building products.",
    url: `${SITE_URL}/blog`,
  },
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
