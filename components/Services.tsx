"use client";

import { useState } from "react";
import { ArrowRight, Globe, Code2, Smartphone, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    tagline: "Websites & web apps that scale",
    description:
      "We build fast, modern web applications tailored to your goals — marketing sites, e-commerce, or SaaS. From design to deployment, you get a custom solution (React, Next.js, Node.js) that’s performant, SEO-friendly, and works on every device.",
    benefits: [
      { label: "Custom-built", text: "No templates — built for your brand and requirements." },
      { label: "Modern stack", text: "React, Next.js, Node.js — future-proof and maintainable." },
      { label: "SEO & performance", text: "Fast load times and search-friendly from day one." },
      { label: "Responsive & accessible", text: "Works on all devices; we follow WCAG standards." },
    ],
    icon: Globe,
  },
  {
    title: "Software Development",
    tagline: "Custom software & backends",
    description:
      "We build end-to-end software that solves real business problems — internal tools, dashboards, APIs, or enterprise platforms. Full lifecycle: architecture, development, testing, deployment, and ongoing support.",
    benefits: [
      { label: "Scalable architecture", text: "Systems designed to grow with your business." },
      { label: "Agile delivery", text: "Bi-weekly demos so you see progress and give feedback early." },
      { label: "Right stack for the job", text: "Web, desktop, or API — we pick the best fit." },
      { label: "Post-launch support", text: "Maintenance, updates, and support after go-live." },
    ],
    icon: Code2,
  },
  {
    title: "Android Development",
    tagline: "Native & cross-platform mobile apps",
    description:
      "We build Android apps (native with Kotlin or cross-platform) that users love — from idea to Play Store. High performance, intuitive UX, and we handle publishing and ASO so your app gets discovered.",
    benefits: [
      { label: "Native or cross-platform", text: "Kotlin for Android; React Native when you need iOS too." },
      { label: "Intuitive UX", text: "Material Design and usability testing built in." },
      { label: "Offline & real-time", text: "Push, sync, and offline support where it matters." },
      { label: "Launch & ASO", text: "We handle Play Store submission and optimization." },
    ],
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    tagline: "Interfaces users love",
    description:
      "We design product experiences that reduce friction and drive results — from research and wireframes to Figma prototypes and design systems. You get a clear vision and specs so development matches the design.",
    benefits: [
      { label: "Research first", text: "We understand your users before we design." },
      { label: "Prototypes you can click", text: "Figma prototypes to test ideas before build." },
      { label: "Design systems", text: "Component libraries and tokens for consistency." },
      { label: "Clean handoff", text: "Specs and collaboration so dev matches the vision." },
    ],
    icon: Palette,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-0.5 bg-brand-400 inline-block" />
            What We Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            We do four things: <strong className="text-foreground/90">web development</strong>, <strong className="text-foreground/90">custom software</strong>, <strong className="text-foreground/90">Android apps</strong>, and <strong className="text-foreground/90">UI/UX design</strong>. Pick one below to see details. Typical MVP: 8–12 weeks.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-2xl shadow-brand-500/10 border border-border">
          <nav className="lg:w-72 xl:w-80 flex-shrink-0 bg-[#0d1528] overflow-y-auto max-h-[400px] lg:max-h-none">
            <ul>
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <li key={service.title}>
                    <button
                      onClick={() => setActiveIndex(i)}
                      className={`w-full text-left px-5 py-3.5 flex items-center gap-3 transition-all duration-200 border-b border-white/5 ${
                        activeIndex === i
                          ? "bg-gradient-to-r from-brand-500 to-violet-600 text-white"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0 opacity-80" />
                      <span className="flex flex-col items-start">
                        <span className="font-semibold text-sm">{service.title}</span>
                        <span className={`text-xs mt-0.5 ${activeIndex === i ? "text-white/80" : "text-slate-400"}`}>
                          {service.tagline}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex-1 bg-background dark:bg-card p-8 md:p-10 flex flex-col justify-between min-h-[440px]">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-1">{active.title}</h3>
              <p className="text-brand-400 font-medium text-sm mb-4">{active.tagline}</p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                {active.description}
              </p>
              <p className="text-foreground font-semibold text-sm mb-3">What you get</p>
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
            <CardFooter className="mt-8 flex justify-end p-0">
              <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group rounded-xl shadow-lg"
              >
                Get a quote for {active.title}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </div>
        </div>
      </div>
    </section>
  );
}
