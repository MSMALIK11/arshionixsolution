"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How much does a project cost?",
    answer:
      "It depends on scope: a focused MVP typically starts in the $3k–$10k range and takes 6–10 weeks; larger web or mobile apps often run $10k–$30k+ over 3–6 months. We give you a fixed quote after a short discovery call so you know exactly what you're paying for — no surprise fees.",
  },
  {
    question: "What type of services does Arshionix offer?",
    answer: (
      <>
        Arshionix offers a wide array of services a business needs, including{" "}
        <span className="text-brand-400 font-medium">AI Development Services</span>,{" "}
        <span className="text-brand-400 font-medium">AI Chatbot Development</span>,{" "}
        <span className="text-brand-400 font-medium">Machine Learning & Deep Learning</span>,{" "}
        <span className="text-brand-400 font-medium">Mobile App Development</span>,{" "}
        <span className="text-brand-400 font-medium">ChatGPT Integration</span>,{" "}
        <span className="text-brand-400 font-medium">DevOps</span>,{" "}
        <span className="text-brand-400 font-medium">UI/UX Design</span>,{" "}
        <span className="text-brand-400 font-medium">Custom Software Development</span>, and{" "}
        <span className="text-brand-400 font-medium">Digital Marketing Solutions</span>.
      </>
    ),
  },
  {
    question: "Does Arshionix offer post-development support?",
    answer:
      "Yes, absolutely. We believe our relationship with clients doesn't end at launch. We provide dedicated post-development support including bug fixes, performance monitoring, feature updates, and SLA-backed maintenance packages — so your product stays healthy and evolving long after it goes live.",
  },
  {
    question: "Can AI technology help us make better business decisions?",
    answer:
      "Definitely. AI-driven analytics and predictive modeling can surface patterns hidden in your data, forecast demand, detect anomalies, and recommend optimised actions — all in real time. Whether it's reducing customer churn, streamlining operations, or identifying new revenue opportunities, AI gives your leadership team information it could never gather manually.",
  },
  {
    question: "How do I choose the right AI Chatbot development company for my business?",
    answer:
      "Look for a team with demonstrated NLP expertise, production-grade deployment experience, and a clear process for understanding your business domain before writing a single line of code. At Arshionix we start every engagement with a discovery workshop to map your workflows, then build chatbots that reflect your brand voice and integrate seamlessly with your existing tools.",
  },
  {
    question: "Why choose Arshionix as your AI development company?",
    answer:
      "Arshionix brings together senior AI researchers, full-stack engineers, and UX designers under one roof. We don't just deliver models — we deliver end-to-end solutions that are production-ready, explainable, and maintained over time. Our transparent pricing, agile sprints, and commitment to knowledge transfer mean you're never locked in and always in control.",
  },
  {
    question: "How are Arshionix developers different from the competition?",
    answer:
      "Our engineers combine deep academic knowledge with hands-on industry experience. Every developer on our team has shipped real AI/ML products — not just personal projects. We enforce code reviews, automated testing, and security audits on every commit, so what you receive is production-quality code, not rushed prototypes.",
  },
  {
    question: "How long does it typically take to build a custom software solution?",
    answer:
      "Timelines vary by scope, but as a rough guide: a focused MVP takes 6–10 weeks, a mid-complexity web or mobile application typically takes 3–5 months, and a large enterprise platform can be 6–12 months. During onboarding we break your project into milestones so you have full visibility on delivery dates and can course-correct early if priorities shift.",
  },
  {
    question: "Is my data safe with Arshionix?",
    answer:
      "Security is baked into every layer of our work. We operate under strict NDAs, follow OWASP security guidelines, encrypt data at rest and in transit, and perform penetration testing before any production release. For AI workloads, we apply data-minimisation principles and can train models on anonymised datasets so your raw customer data never leaves your infrastructure.",
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
            Everything you need to know about working with Arshionix. Can&apos;t find your answer?{" "}
            <button
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
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
