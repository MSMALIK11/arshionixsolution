import type { Metadata } from "next";
import ServiceVerticalPage from "@/components/ServiceVerticalPage";
import { personalBrandingVertical } from "@/lib/service-verticals";

export const metadata: Metadata = {
  title: personalBrandingVertical.pageTitle,
  description: personalBrandingVertical.subhead,
  openGraph: {
    title: `${personalBrandingVertical.pageTitle} | Arshionix`,
    description: personalBrandingVertical.subhead,
  },
};

export default function PersonalBrandingWebsitesPage() {
  return <ServiceVerticalPage vertical={personalBrandingVertical} />;
}
