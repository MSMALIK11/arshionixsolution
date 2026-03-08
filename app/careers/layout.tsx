import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";

export const metadata: Metadata = {
  title: "Careers — Join Our Team",
  description:
    "Join Arshionix. We're hiring remote Senior React/Next.js developers, Android developers, UI/UX designers, and full-stack engineers. Build the future with us.",
  openGraph: {
    title: "Careers | Arshionix — Join Our Team",
    description:
      "Remote roles at Arshionix: React/Next.js, Android, UI/UX, Full-Stack. Competitive pay, async culture, global team.",
    url: `${SITE_URL}/careers`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Arshionix",
    description: "We're hiring. Remote roles in engineering and design.",
  },
  alternates: {
    canonical: `${SITE_URL}/careers`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
