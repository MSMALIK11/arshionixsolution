import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";

export const metadata: Metadata = {
  title: "Portfolio — Our Work",
  description:
    "Explore Arshionix projects: web apps, software, Android apps, and UI/UX design. Case studies and live demos from our team.",
  openGraph: {
    title: "Portfolio | Arshionix — Our Work",
    description: "Featured projects in web development, software, Android, and UI/UX.",
    url: `${SITE_URL}/portfolio`,
  },
  alternates: { canonical: `${SITE_URL}/portfolio` },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
