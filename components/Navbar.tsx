"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getProductsForNavigation } from "@/lib/projects";
import BrandLogo from "@/components/BrandLogo";

const navProducts = getProductsForNavigation();

const navLinks = [
  { href: "/", label: "Home", hash: "#home" },
  { href: "/services", label: "Services", hash: "#services" },
  { href: "/about", label: "About", hash: "#about" },
  { href: "/portfolio", label: "Work", hash: undefined },
  { href: "/", label: "Process", hash: "#process" },
  { href: "/contact", label: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const handleNavClick = (link: (typeof navLinks)[0]) => {
    setMobileOpen(false);
    if (pathname === link.href && link.hash) {
      const el = document.querySelector(link.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (link.hash && link.href === "/") {
      router.push(link.href + link.hash);
      setTimeout(() => document.querySelector(link.hash)?.scrollIntoView({ behavior: "smooth" }), 100);
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
            {navLinks.slice(0, 2).map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-brand-400 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </button>
            ))}

            <div
              ref={productsRef}
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductsOpen((o) => !o)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors group flex items-center gap-1",
                  productsOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Products
                <ChevronDown className={cn("w-4 h-4 transition-transform", productsOpen && "rotate-180")} />
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-brand-400 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 pt-1 min-w-[280px] z-50">
                  <div className="rounded-xl border border-border bg-card shadow-xl py-2 overflow-hidden">
                    {navProducts.map((p) =>
                      p.href ? (
                        <Link
                          key={p.slug}
                          href={p.href}
                          onClick={() => setProductsOpen(false)}
                          className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-brand-400 transition-colors"
                        >
                          {p.title}
                        </Link>
                      ) : (
                        <div
                          key={p.slug}
                          className="px-4 py-2.5 text-sm text-muted-foreground cursor-default flex items-center justify-between gap-2"
                        >
                          <span>{p.title}</span>
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-400/80">
                            Soon
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-brand-400 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </button>
            ))}
            <Link
              href="/careers"
              className="relative px-4 py-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors group"
            >
              Careers
              <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-brand-400 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick(navLinks.find((l) => l.label === "Contact")!)}
              size="default"
              className="rounded-xl"
            >
              Get a Quote
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-1">
          {navLinks.slice(0, 2).map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div>
            <button
              type="button"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex w-full items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              Products
              <ChevronDown className={cn("w-4 h-4 transition-transform", mobileProductsOpen && "rotate-180")} />
            </button>
            {mobileProductsOpen && (
              <div className="pl-4 border-l-2 border-brand-500/30 ml-4 my-1 space-y-0.5">
                {navProducts.map((p) =>
                  p.href ? (
                    <Link
                      key={p.slug}
                      href={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2 text-sm text-foreground hover:text-brand-400"
                    >
                      {p.title}
                    </Link>
                  ) : (
                    <div key={p.slug} className="px-4 py-2 text-sm text-muted-foreground flex justify-between gap-2">
                      <span>{p.title}</span>
                      <span className="text-xs text-brand-400">Soon</span>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          {navLinks.slice(2).map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/careers"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-brand-400 hover:text-brand-300 hover:bg-accent transition-colors"
          >
            Careers
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <Button
              onClick={() => handleNavClick(navLinks.find((l) => l.label === "Contact")!)}
              className="flex-1 rounded-xl"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
