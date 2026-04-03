import type { Metadata } from "next";
import ServiceVerticalPage from "@/components/ServiceVerticalPage";
import { schoolVertical } from "@/lib/service-verticals";

export const metadata: Metadata = {
  title: schoolVertical.pageTitle,
  description: schoolVertical.subhead,
  openGraph: {
    title: `${schoolVertical.pageTitle} | Arshionix`,
    description: schoolVertical.subhead,
  },
};

export default function SchoolWebsitesPage() {
  return <ServiceVerticalPage vertical={schoolVertical} />;
}
