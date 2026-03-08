import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arshionix | Digital Agency — Web, Software, Android & UI/UX",
    template: "%s | Arshionix",
  },
  description:
    "Full-service digital agency: Web Development, Software Engineering, Android Apps, and UI/UX Design. We build world-class products for clients worldwide. Get a free quote.",
  keywords: [
    "digital agency",
    "web development",
    "software development",
    "Android app development",
    "UI/UX design",
    "React",
    "Next.js",
    "custom software",
    "Arshionix",
  ],
  authors: [{ name: "Arshionix", url: SITE_URL }],
  creator: "Arshionix",
  publisher: "Arshionix",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Arshionix",
    title: "Arshionix | Digital Agency — Web, Software, Android & UI/UX",
    description:
      "We build high-quality web apps, software systems, Android apps, and UI/UX designs. Let's build something amazing together.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arshionix — Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshionix | Digital Agency",
    description: "Web Development, Software Engineering, Android Apps & UI/UX Design. World-class digital products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // Add when you have them: google: "google-site-verification-code", yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Arshionix",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
      description: "Full-service digital agency: Web Development, Software Engineering, Android Apps, and UI/UX Design.",
      foundingDate: "2022",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@arshionix.com",
        telephone: "+91-7300519548",
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: "English",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Arshionix",
      description: "Digital Agency — Web, Software, Android & UI/UX Design.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
