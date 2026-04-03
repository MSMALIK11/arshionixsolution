import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { serviceVerticals } from "@/lib/service-verticals";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    ...serviceVerticals.map((v) => ({
      label: v.navLabel,
      href: `/${v.slug}`,
    })),
    { label: "All services", href: "/services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <BrandLogo variant="full" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Healthcare websites, business websites, schools, and personal branding — one studio, clear service pages,
              honest scope.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-bold text-sm mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-brand-400 text-sm font-normal transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
