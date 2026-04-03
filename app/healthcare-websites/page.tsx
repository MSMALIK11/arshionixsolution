import type { Metadata } from "next";
import ServiceVerticalPage from "@/components/ServiceVerticalPage";
import { healthcareVertical } from "@/lib/service-verticals";

export const metadata: Metadata = {
  title: healthcareVertical.pageTitle,
  description: healthcareVertical.subhead,
  openGraph: {
    title: `${healthcareVertical.pageTitle} | Arshionix`,
    description: healthcareVertical.subhead,
  },
};

export default function HealthcareWebsitesPage() {
  return <ServiceVerticalPage vertical={healthcareVertical} />;
}
