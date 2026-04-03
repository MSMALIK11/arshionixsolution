import Link from "next/link";
import { Stethoscope, Store, UserRound, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Stethoscope,
    title: "Clinics & doctors",
    description: "Practices that need a trustworthy online presence, clear services, and easy ways for patients to connect.",
    href: "/healthcare-websites",
    cta: "Healthcare websites",
  },
  {
    icon: Store,
    title: "Local businesses",
    description: "Shops, agencies, and service businesses that want more leads from Google and a site that explains what you sell.",
    href: "/business-websites",
    cta: "Business websites",
  },
  {
    icon: UserRound,
    title: "Personal brands",
    description: "Experts, coaches, and creators who need one flagship site for their story, work, and bookings.",
    href: "/personal-branding-websites",
    cta: "Personal branding",
  },
  {
    icon: GraduationCap,
    title: "Schools & education",
    description: "Schools and programs that need clear admissions info, mobile-friendly pages, and a site parents and students can trust.",
    href: "/school-websites",
    cta: "School websites",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="section-padding relative scroll-mt-24 border-y border-border bg-muted/20">
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-0.5 bg-brand-400 inline-block" />
            Clarity
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Who we <span className="text-gradient">work with</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Four focuses — so you instantly know if we&apos;re a fit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {audiences.map(({ icon: Icon, title, description, href, cta }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col card-webteck card-webteck-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center text-white mb-5 shadow-lg shadow-brand-500/20">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{description}</p>
              <Button variant="outline" className="rounded-xl border-border w-full sm:w-auto" asChild>
                <Link href={href}>{cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
