import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import GetInTouchModal from "@/components/GetInTouchModal";
import { ThemeProvider } from "@/components/ThemeProvider";
import { organizationSameAsUrls } from "@/lib/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arshionix.com";

const DEFAULT_TITLE =
  "Healthcare, Business, Schools & Personal Brand Websites | Arshionix";
const DEFAULT_DESCRIPTION =
  "Custom websites for clinics, local businesses, schools, and personal brands. Mobile-first, SEO-ready, clear scope and pricing. Book a free consultation.";

/** Inter — common on modern SaaS landings (e.g. HRMS-style sites like Inkludo). */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/** Browser chrome / PWA; matches light canvas & dark background tokens. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Arshionix",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "healthcare website design",
    "clinic website development",
    "business website",
    "local business website",
    "personal branding website",
    "school website design",
    "education website development",
    "portfolio website",
    "Next.js",
    "React",
    "responsive web design",
    "SEO friendly website",
    "Arshionix",
  ],
  authors: [{ name: "Arshionix", url: SITE_URL }],
  creator: "Arshionix",
  publisher: "Arshionix",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Arshionix",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Arshionix — Websites for healthcare, business, schools & personal brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
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

function buildStructuredData(siteUrl: string) {
  const sameAs = organizationSameAsUrls();
  const org: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Arshionix",
    url: siteUrl,
    logo: { "@type": "ImageObject", url: `${siteUrl}/og-image.png` },
    description:
      "We build high-trust websites for healthcare practices, local businesses, schools, and personal brands — with dedicated service pages and clear positioning.",
    foundingDate: "2022",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@arshionix.com",
      telephone: "+91-7300519548",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  };
  if (sameAs.length > 0) {
    org.sameAs = sameAs;
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Arshionix",
        description:
          "Websites for healthcare practices, local businesses, schools, and personal brands — mobile-first, SEO-ready, and built to convert.",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#services`,
        name: "Arshionix website services",
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "Website design and development",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Website services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Healthcare website development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business website development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal branding websites" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "School & education website development" } },
          ],
        },
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = buildStructuredData(SITE_URL);

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var r=document.documentElement.classList;r.remove('light','dark');var t=localStorage.getItem('arshionix-theme');r.add(t==='dark'?'dark':'light');})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Analytics />
          <GetInTouchModal />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
