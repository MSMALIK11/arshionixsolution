"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home", hash: "#home" },
  { href: "/services", label: "Services", hash: "#services" },
  { href: "/about", label: "About", hash: "#about" },
  { href: "/portfolio", label: "Work", hash: "#portfolio" },
  { href: "/", label: "Process", hash: "#process" },
  { href: "/contact", label: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center shadow-lg group-hover:shadow-brand-500/40 transition-shadow">
              <span className="text-white font-heading font-black text-base">A</span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">
              Arshi<span className="text-gradient">onix</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
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
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-1">
          {navLinks.map((link) => (
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
          <Button
            onClick={() => handleNavClick(navLinks.find((l) => l.label === "Contact")!)}
            className="w-full mt-2 rounded-xl"
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
