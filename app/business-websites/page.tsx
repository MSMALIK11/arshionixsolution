import type { Metadata } from "next";
import ServiceVerticalPage from "@/components/ServiceVerticalPage";
import { businessVertical } from "@/lib/service-verticals";

export const metadata: Metadata = {
  title: businessVertical.pageTitle,
  description: businessVertical.subhead,
  openGraph: {
    title: `${businessVertical.pageTitle} | Arshionix`,
    description: businessVertical.subhead,
  },
};

export default function BusinessWebsitesPage() {
  return <ServiceVerticalPage vertical={businessVertical} />;
}
