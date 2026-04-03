"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { serviceVerticals } from "@/lib/service-verticals";

const navLinks = [
  { href: "/", label: "Home", hash: "#home" as string | undefined },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const handleNavClick = (link: (typeof navLinks)[0] & { hash?: string }) => {
    setMobileOpen(false);
    if (link.hash && pathname === link.href) {
      const el = document.querySelector(link.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (link.hash && link.href === "/") {
      const hash = link.hash;
      router.push(link.href + hash);
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 100);
      return;
    }
    router.push(link.href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-brand-500/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <BrandLogo variant="compact" />

          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => handleNavClick(navLinks[0])}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              Home
              <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-brand-400 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </button>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((o) => !o)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors group flex items-center gap-1",
                  servicesOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-brand-400 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-1 min-w-[260px] z-50">
                  <div className="rounded-xl border border-border bg-card shadow-xl py-2 overflow-hidden">
                    {serviceVerticals.map((v) => (
                      <Link
                        key={v.slug}
                        href={`/${v.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-brand-400 transition-colors"
                      >
                        {v.navLabel}
                      </Link>
                    ))}
                    <div className="border-t border-border my-1" />
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-brand-400 hover:bg-accent transition-colors"
                    >
                      All services overview →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-brand-400 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button
                onClick={() => router.push("/contact")}
                size="default"
                className="rounded-xl"
              >
                Book / contact
              </Button>
            </div>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[min(85vh,28rem)] overflow-y-auto opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-1">
          <button
            onClick={() => handleNavClick(navLinks[0])}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            Home
          </button>
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex w-full items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              Services
              <ChevronDown className={cn("w-4 h-4 transition-transform", mobileServicesOpen && "rotate-180")} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 border-l-2 border-brand-500/30 ml-4 my-1 space-y-0.5">
                {serviceVerticals.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/${v.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 text-sm text-foreground hover:text-brand-400"
                  >
                    {v.navLabel}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-brand-400"
                >
                  All services
                </Link>
              </div>
            )}
          </div>
          {navLinks.slice(1).map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <Button onClick={() => { setMobileOpen(false); router.push("/contact"); }} className="w-full rounded-xl">
              Book / contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
