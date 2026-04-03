"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Who is Arshionix for?",
    answer:
      "Teams and individuals who need a serious website: healthcare practices (clinics, doctors, wellness), local and growing businesses that live on leads and trust, schools and education programs that need clear admissions and parent-friendly sites, and people building a personal brand — coaches, consultants, creators, and experts. We match each group with a clear service focus and page structure.",
  },
  {
    question: "How much does a website project cost?",
    answer:
      "It depends on pages, design depth, integrations (booking, forms, maps), and content support. A focused marketing site often falls in a modest four-figure range; larger or multi-language sites scale up. After a short discovery call we give you a fixed scope and quote so you know what you’re paying for — no surprise fees.",
  },
  {
    question: "What’s included in a typical website build?",
    answer: (
      <>
        Discovery and sitemap, mobile-first design, production build (we often use Next.js), on-page SEO basics
        (titles, meta, structured headings, performance), forms and analytics hooks, launch support, and a clean
        handoff. Need{" "}
        <Link href="/services" className="text-brand-400 font-medium underline-offset-2 hover:underline">
          custom software or AI
        </Link>
        ? We can layer that on — see our full services page.
      </>
    ),
  },
  {
    question: "How long does a website take?",
    answer:
      "A straightforward brochure or lead-gen site is often a few weeks from kickoff to launch; deeper sites with many pages, integrations, or stakeholder review cycles take longer. We break work into milestones so you always know what’s next.",
  },
  {
    question: "Do you handle hosting and domains?",
    answer:
      "We guide you on registrar and hosting choices (or work with your existing stack), configure DNS and SSL, and deploy the production site. You keep ownership of your domain; we make sure everything is documented.",
  },
  {
    question: "Can you improve an existing site instead of starting over?",
    answer:
      "Often yes. Sometimes a redesign and rebuild on a modern stack is the right move; sometimes we refresh IA, copy, performance, and SEO on what you already have. We’ll tell you honestly which path fits your goals and budget.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Launch isn’t the end — we offer bug fixes, small updates, performance checks, and optional maintenance so your site stays fast, secure, and aligned with your business as it evolves.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send a message through the contact section on this page with your goals and timeline. We’ll reply with next steps — usually a short call to align on audience, must-have pages, and success metrics.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-0.5 bg-brand-400 inline-block" />
            Got Questions?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Straight answers about website projects with Arshionix. Can&apos;t find what you need?{" "}
            <button
              type="button"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors"
            >
              Reach out to us.
            </button>
          </p>
        </div>

        <div className="space-y-3 max-w-4xl">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "rounded-xl border overflow-hidden transition-all duration-300",
                  isOpen ? "border-brand-500/50 shadow-lg shadow-brand-500/10" : "border-border hover:border-brand-500/25"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className={cn(
                    "w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-300",
                    isOpen
                      ? "bg-gradient-to-r from-brand-500 to-violet-600 text-white"
                      : "bg-card text-foreground hover:bg-secondary/50"
                  )}
                >
                  <span className="font-semibold text-sm md:text-base leading-snug">{faq.question}</span>
                  <span
                    className={cn(
                      "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
                      isOpen ? "bg-white/20" : "bg-brand-500/15 text-brand-400"
                    )}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[min(1200px,85vh)] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 py-5 bg-card text-muted-foreground text-sm md:text-base leading-relaxed border-t border-border">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
