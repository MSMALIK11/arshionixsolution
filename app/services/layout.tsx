import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";

export const metadata: Metadata = {
  title: "Services — Web, Software, Android & UI/UX",
  description:
    "Arshionix services: Web Development, Software Development, AI Solutions, Android App Development, and UI/UX Design. Custom solutions for startups and enterprises.",
  openGraph: {
    title: "Services | Arshionix — Web, Software, AI & UI/UX",
    description: "Web Development, Software Development, AI Solutions, Android Apps, UI/UX Design. Get a free consultation.",
    url: `${SITE_URL}/services`,
  },
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
