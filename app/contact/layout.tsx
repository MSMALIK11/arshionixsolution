import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";

export const metadata: Metadata = {
  title: "Contact — Get a Quote",
  description:
    "Contact Arshionix for web development, software, AI solutions, or UI/UX design. Free consultation. We reply within 24 hours.",
  openGraph: {
    title: "Contact | Arshionix — Get a Free Quote",
    description: "Start your project. Free consultation, reply within 24 hours.",
    url: `${SITE_URL}/contact`,
  },
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
