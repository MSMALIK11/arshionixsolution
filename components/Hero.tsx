"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Sparkles,
  HeartPulse,
  Building2,
  UserCircle,
  GraduationCap,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const rotatingFocus = [
  "Healthcare websites",
  "Business websites",
  "Personal branding",
  "School & education",
];

const pillars = [
  {
    label: "Healthcare",
    description: "Clinics, doctors & wellness — trust-first UX",
    href: "/healthcare-websites",
    icon: HeartPulse,
  },
  {
    label: "Business",
    description: "Local & growing brands — leads & clarity",
    href: "/business-websites",
    icon: Building2,
  },
  {
    label: "Personal brand",
    description: "Experts & creators — one flagship site",
    href: "/personal-branding-websites",
    icon: UserCircle,
  },
  {
    label: "Schools",
    description: "K–12, colleges & programs — admissions-ready",
    href: "/school-websites",
    icon: GraduationCap,
  },
] as const;

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      el.textContent = rotatingFocus.join(" · ");
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    let index = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      if (cancelled) return;
      const node = roleRef.current;
      if (!node) return;

      const current = rotatingFocus[index];
      if (!deleting) {
        node.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(type, 1700);
          return;
        }
      } else {
        node.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          index = (index + 1) % rotatingFocus.length;
        }
      }
      timeoutId = setTimeout(type, deleting ? 50 : 90);
    };

    timeoutId = setTimeout(type, 400);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-hero flex items-center overflow-hidden bg-hero-pattern noise-bg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:opacity-40">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl animate-pulse-slow motion-reduce:animate-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none dark:bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-16 py-20 sm:py-24 lg:py-28">
          <div className="flex-1 text-center lg:text-left w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-5 animate-fade-in-up">
              <Sparkles className="w-4 h-4 shrink-0" aria-hidden />
              <span>Healthcare, business, schools &amp; personal brands</span>
            </div>

            <h1
              id="hero-heading"
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.35rem] xl:text-6xl font-bold leading-[1.08] tracking-tight mb-5 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Build Modern Web Apps
              <br />
              <span className="text-gradient">& AI Solutions</span>
            </h1>

            <p
              className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-6 animate-fade-in-up leading-relaxed"
              style={{ animationDelay: "0.15s" }}
            >
             We help startups and businesses build scalable digital products.
            </p>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-base md:text-lg font-medium text-muted-foreground mb-8 animate-fade-in-up min-h-[1.75rem] md:min-h-[2rem]"
              style={{ animationDelay: "0.2s" }}
              aria-hidden
            >
              <span className="text-foreground/80">Specializing in</span>
              <span
                ref={roleRef}
                className="text-brand-400 inline-block min-w-[12ch] md:min-w-[22ch] text-left font-semibold tabular-nums"
              />
              <span
                className="w-0.5 h-5 bg-brand-400 animate-pulse shrink-0 motion-reduce:animate-none motion-reduce:opacity-80"
                aria-hidden
              />
            </div>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              <Button size="lg" className="group rounded-xl shadow-lg shadow-brand-500/25" asChild>
                <a href="#contact" onClick={scrollToContact}>
                  Get in touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
                </a>
              </Button>
              {site.calendly ? (
                <Button size="lg" variant="outline" className="rounded-xl border-border" asChild>
                  <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                    Book a call
                  </a>
                </Button>
              ) : (
                <Button size="lg" variant="outline" className="rounded-xl border-border" asChild>
                  <Link href="/portfolio">View our work</Link>
                </Button>
              )}
            </div>

            <ul
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 animate-fade-in-up text-left"
              style={{ animationDelay: "0.3s" }}
              aria-label="Why teams choose us"
            >
              {["Reply within 24 hours", "Clear scope & pricing", "NDA on request"].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/95 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside
            className="flex-shrink-0 w-full max-w-md lg:max-w-[440px] animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
            aria-label="Browse website services by audience"
          >
            <div className="relative rounded-2xl border border-border/90 bg-card/90 backdrop-blur-md shadow-[0_24px_60px_-12px_rgba(37,99,235,0.12)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.45)] overflow-hidden ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
              <div
                className="h-1 w-full bg-gradient-to-r from-brand-500 via-violet-500 to-brand-500 opacity-90"
                aria-hidden
              />
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-500/[0.07] blur-3xl pointer-events-none dark:bg-violet-500/10" aria-hidden />

              <div className="relative p-6 sm:p-7">
                <header className="mb-5 sm:mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400 border border-brand-500/15">
                    <LayoutGrid className="h-3.5 w-3.5 opacity-80" aria-hidden />
                    Pick your path
                  </span>
                </header>

                <nav aria-label="Website services by audience">
                  <ul className="flex flex-col gap-2">
                    {pillars.map(({ label, description, href, icon: Icon }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="group flex min-h-[4.25rem] items-center gap-3.5 rounded-xl border border-border/80 bg-muted/25 px-3.5 py-3.5 text-left transition-all duration-200 hover:border-brand-500/35 hover:bg-brand-500/[0.06] hover:shadow-sm dark:hover:bg-brand-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99]"
                        >
                          <span
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-md shadow-brand-500/20 ring-1 ring-white/10 dark:ring-white/5"
                            aria-hidden
                          >
                            <Icon className="h-5 w-5" strokeWidth={2} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-semibold text-sm sm:text-[0.9375rem] text-foreground group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                              {label}
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug text-muted-foreground line-clamp-2">
                              {description}
                            </span>
                          </span>
                          <ChevronRight
                            className="h-5 w-5 shrink-0 text-muted-foreground/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-500 dark:group-hover:text-brand-400"
                            aria-hidden
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* <div className="mt-5 sm:mt-6 flex flex-col gap-1 border-t border-border/70 pt-5">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/90 mb-2">
                    More on this site
                  </p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 justify-start px-2 text-brand-600 hover:text-brand-700 hover:bg-brand-500/10 dark:text-brand-400 dark:hover:text-brand-300 -ml-2"
                      asChild
                    >
                      <Link href="/#who-we-work-with" className="gap-1 font-medium">
                        Who we work with
                        <span className="text-muted-foreground font-normal">↓</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 justify-start px-2 text-muted-foreground hover:text-foreground -ml-2 sm:ml-0"
                      asChild
                    >
                      <Link href="/services" className="gap-1 font-medium">
                        All services
                        <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
                      </Link>
                    </Button>
                  </div>
                </div> */}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce motion-reduce:animate-none opacity-45 motion-reduce:opacity-35">
        <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center pt-1">
          <div className="w-1 h-2 bg-brand-400 rounded-full animate-bounce motion-reduce:animate-none" />
        </div>
      </div>
    </section>
  );
}
