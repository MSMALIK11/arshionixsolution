import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import GetInTouchModal from "@/components/GetInTouchModal";
import { ThemeProvider } from "@/components/ThemeProvider";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arshionix | Web Development, Software Development & AI Solutions",
    template: "%s | Arshionix",
  },
  description:
    "Full-service digital agency: Web Development, Software Development, AI Solutions, Android Apps & UI/UX Design. We build world-class products for startups and enterprises. Get a free consultation.",
  keywords: [
    "digital agency",
    "web development",
    "software development",
    "AI solutions",
    "Android app development",
    "UI/UX design",
    "React",
    "Next.js",
    "custom software",
    "SaaS development",
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
    title: "Arshionix | Web Development, Software Development & AI Solutions",
    description:
      "Web Development, Software Development, AI Solutions, Android Apps & UI/UX Design. World-class digital products for clients worldwide.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Arshionix — Digital Agency | Web, Software, AI & UI/UX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshionix | Web Development, Software & AI Solutions",
    description: "Web Development, Software Development, AI Solutions, Android Apps & UI/UX Design. Get a free consultation.",
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
      description: "Full-service digital agency: Web Development, Software Development, AI Solutions, Android Apps, and UI/UX Design.",
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
      description: "Digital Agency — Web Development, Software Development, AI Solutions, Android & UI/UX Design.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#services`,
      name: "Arshionix Services",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "Digital Agency Services",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital agency services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Android App Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
        ],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('arshionix-theme');document.documentElement.classList.add(t==='light'?'light':'dark');})();`,
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Analytics />
          <GetInTouchModal />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
