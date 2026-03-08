import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Arshionix is a digital agency building web apps, software, AI solutions, and mobile products. Learn about our team, values, and how we work.",
  openGraph: {
    title: "About | Arshionix — Who We Are",
    description: "Digital agency focused on web, software, AI, Android & UI/UX. Trusted by startups and enterprises.",
    url: `${SITE_URL}/about`,
  },
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
