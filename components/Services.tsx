"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, HeartPulse, Building2, UserRound, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Healthcare website development",
    shortTitle: "Healthcare",
    tagline: "Trust, clarity, and patient-friendly UX",
    href: "/healthcare-websites",
    description:
      "Sites for clinics, doctors, and health practices — professional design, easy navigation, and clear paths to book or call. Built to feel credible the moment someone lands on your page.",
    benefits: [
      { label: "Medical context", text: "Layouts and content structure that fit how patients search and decide." },
      { label: "Mobile-first", text: "Most health searches happen on phones — we optimize for that." },
      { label: "Local visibility", text: "SEO-friendly structure for your city, specialty, and services." },
      { label: "Your workflows", text: "We connect CTAs to the booking or contact tools you already use." },
    ],
    icon: HeartPulse,
  },
  {
    title: "Business website development",
    shortTitle: "Business",
    tagline: "Leads, not just a pretty page",
    href: "/business-websites",
    description:
      "Websites for local and growing businesses that need to explain services, show proof, and get inquiries — with fast load times and copy that makes sense to real customers.",
    benefits: [
      { label: "Clear offer", text: "Homepage and service pages that say what you do in seconds." },
      { label: "Trust", text: "Reviews, logos, team — whatever helps people choose you." },
      { label: "Contact that works", text: "Forms, click-to-call, maps — friction removed." },
      { label: "Room to grow", text: "Add pages or blog later without rebuilding from scratch." },
    ],
    icon: Building2,
  },
  {
    title: "Personal branding websites",
    shortTitle: "Personal brand",
    tagline: "One site for your whole story",
    href: "/personal-branding-websites",
    description:
      "Flagship sites for coaches, consultants, creators, and experts — story-led, portfolio-ready, and built around one primary action (book, subscribe, or apply).",
    benefits: [
      { label: "Positioning", text: "Sharp headline and sections that say who you help and how." },
      { label: "Proof", text: "Work samples, media, speaking — organized for skimmers." },
      { label: "Single CTA", text: "We guide visitors to one main next step." },
      { label: "Brand voice", text: "Tone and visuals aligned with how you show up elsewhere." },
    ],
    icon: UserRound,
  },
  {
    title: "School & education website development",
    shortTitle: "Schools",
    tagline: "Admissions-ready, parent-friendly sites",
    href: "/school-websites",
    description:
      "Sites for schools, colleges, and training programs — clear navigation for families, strong mobile experience, and structured pages for programs, admissions, and news.",
    benefits: [
      { label: "Families first", text: "Paths for new and current parents without hunting through PDFs." },
      { label: "Programs & admissions", text: "What you offer, how to apply, and who to contact — spelled out." },
      { label: "Trust & values", text: "Leadership, faculty, and community story presented with clarity." },
      { label: "Accessible & fast", text: "Readable, responsive layouts that work where parents actually browse." },
    ],
    icon: GraduationCap,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section id="services" className="section-padding relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-0.5 bg-brand-400 inline-block" />
            Our services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            What we <span className="text-gradient">build</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl text-lg">
            Four structured offerings — each with a{" "}
            <strong className="text-foreground/90">dedicated page</strong> for problem, solution, features, and how to
            book a call.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 overflow-hidden rounded-2xl card-webteck card-webteck-hover">
          <nav
            aria-label="Service categories"
            className="lg:w-72 xl:w-80 flex-shrink-0 bg-muted/80 dark:bg-muted overflow-y-auto max-h-[320px] lg:max-h-none border-b border-border lg:border-b-0 lg:border-r"
          >
            <ul>
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <li key={service.href}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={cn(
                        "w-full text-left px-5 py-3.5 flex items-center gap-3 transition-all duration-200 border-b border-border last:border-b-0",
                        activeIndex === i
                          ? "bg-gradient-to-r from-brand-500 to-violet-600 text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-background/70 dark:hover:bg-card/60"
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5 flex-shrink-0",
                          activeIndex === i ? "opacity-95" : "opacity-80"
                        )}
                      />
                      <span className="flex flex-col items-start min-w-0">
                        <span className="font-semibold text-sm leading-snug">{service.shortTitle}</span>
                        <span
                          className={cn(
                            "text-xs mt-0.5",
                            activeIndex === i ? "text-primary-foreground/85" : "text-muted-foreground"
                          )}
                        >
                          {service.tagline}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex-1 bg-background dark:bg-card p-8 md:p-10 flex flex-col justify-between min-h-[400px]">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-1">{active.title}</h3>
              <p className="text-brand-400 font-medium text-sm mb-4">{active.tagline}</p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">{active.description}</p>
              <p className="text-foreground font-semibold text-sm mb-3">Highlights</p>
              <ul className="space-y-2.5">
                {active.benefits.map((b) => (
                  <li key={b.label} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-brand-500 dark:bg-brand-400" />
                    <span>
                      <span className="font-semibold text-foreground">{b.label}</span>
                      <span className="text-muted-foreground"> — {b.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <CardFooter className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-end gap-3 p-0">
              <Button variant="outline" className="rounded-xl border-border" asChild>
                <Link href={active.href}>
                  Full page
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group rounded-xl shadow-lg"
              >
                Discuss {active.shortTitle.toLowerCase()}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </div>
        </div>
      </div>
    </section>
  );
}
