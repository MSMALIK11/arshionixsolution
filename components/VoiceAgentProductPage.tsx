"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mic,
  Languages,
  Shield,
  Plug,
  UserPlus,
  BarChart3,
  Phone,
  Globe,
  Lock,
  FileCheck,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/projects";

const LottiePlayer = dynamic(() => import("@/components/LottiePlayer"), { ssr: false });

/** Tighter section spacing for this page (no huge gaps) */
const sectionClass = "py-14 md:py-20";

const stats = [
  { value: "35%", label: "Operational cost reduction" },
  { value: "60%", label: "Automated resolution rate" },
  { value: "55%", label: "CSAT improvement" },
  { value: "<300ms", label: "End-to-end reply time" },
];

const useCases = [
  {
    title: "Retail & e-commerce",
    description: "Order status, returns, and product questions over the phone. Reduce load on live agents while keeping satisfaction high.",
    icon: Globe,
    accent: "card-accent-indigo",
  },
  {
    title: "Financial services",
    description: "Account inquiries, verification steps, and guided flows that stay within your compliance and eligibility rules.",
    icon: Shield,
    accent: "card-accent-violet",
  },
  {
    title: "Utilities & service ops",
    description: "Billing questions, outage updates, and appointment scheduling via voice so customers get answers without waiting in queue.",
    icon: Phone,
    accent: "card-accent-cyan",
  },
];

const features = [
  {
    title: "Live voice in and out",
    description: "Streaming speech-to-text and neural text-to-speech so callers can talk naturally and get spoken responses without long pauses.",
    icon: Mic,
    accent: "card-accent-indigo",
  },
  {
    title: "Multiple languages",
    description: "Support several languages and mixed-language input so you can serve diverse audiences from a single flow.",
    icon: Languages,
    accent: "card-accent-violet",
  },
  {
    title: "Rules and escalation",
    description: "Define eligibility, compliance, and when to hand off to a human—all configurable in the flow instead of hard-coded logic.",
    icon: FileCheck,
    accent: "card-accent-cyan",
  },
  {
    title: "Your existing systems",
    description: "REST, webhooks, and adapters for telephony, CRM, ticketing, and payments so the assistant fits into your current stack.",
    icon: Plug,
    accent: "card-accent-emerald",
  },
  {
    title: "Handoff with context",
    description: "When the assistant can’t complete the request, transfer to an agent with the full conversation history so the customer doesn’t repeat themselves.",
    icon: UserPlus,
    accent: "card-accent-rose",
  },
  {
    title: "Security and control",
    description: "Consent and PII handling, audit trails, and the option to run in your own environment for stricter data and compliance needs.",
    icon: Lock,
    accent: "card-accent-indigo",
  },
];

const integrations = [
  {
    title: "Voice and telephony",
    description: "Works with SIP, PSTN, and your call routing. Escalate to live agents when the flow decides a human is needed.",
    accent: "card-accent-emerald",
  },
  {
    title: "Chat and messaging",
    description: "Same logic can drive web chat and messaging; share context so a conversation started on voice can continue on another channel.",
    accent: "card-accent-rose",
  },
  {
    title: "Where you run it",
    description: "Deploy in the cloud, on your own infrastructure, or in a hybrid setup so data stays where your policy requires.",
    accent: "card-accent-indigo",
  },
];

const analyticsItems = [
  { title: "Topic and intent view", description: "See what callers ask about and where automation succeeds or needs improvement.", accent: "card-accent-violet" },
  { title: "Handle time and FCR", description: "Monitor average handle time and first-contact resolution to tune flows and staffing.", accent: "card-accent-cyan" },
  { title: "Call review and retention", description: "Access recordings and transcripts with configurable retention for quality and compliance.", accent: "card-accent-emerald" },
  { title: "Downstream results", description: "Track tickets created, leads qualified, and bookings completed from each flow.", accent: "card-accent-rose" },
];

const complianceItems = [
  { title: "Data and residency", description: "Designed for strict data handling; optional on-prem or private-cloud deployment for sovereignty requirements.", accent: "card-accent-indigo" },
  { title: "Rules and eligibility", description: "Flow-level rules for who gets what offer or action so you stay within regulatory and internal policy.", accent: "card-accent-violet" },
  { title: "Traceability", description: "Searchable call logs, transcripts, and retention settings so you can demonstrate control and respond to audits.", accent: "card-accent-cyan" },
];

const faqs = [
  {
    q: "How does this compare to IVR or scripted chatbots?",
    a: "Unlike fixed IVR menus or rule-only bots, this uses live speech recognition and AI so callers can speak freely. You design the flow and logic in a visual editor; the system handles turn-taking and routing so you don’t maintain huge decision trees by hand.",
  },
  {
    q: "Can we run it on our own infrastructure?",
    a: "Yes. We support cloud, on-premise, and hybrid setups so you can keep data in a specific region or inside your network and still use the same design and analytics tools.",
  },
  {
    q: "What do we need to connect?",
    a: "You can wire in your existing telephony, CRM, help desk, and internal APIs. We also support web and messaging so you can offer the same assistant across voice and digital channels.",
  },
  {
    q: "Who is it for?",
    a: "Teams that handle large volumes of customer conversations: financial services, telecoms, utilities, healthcare, retail, and public sector. Especially where you need multiple languages, compliance, and clear handoff to humans.",
  },
];

export default function VoiceAgentProductPage({ project }: { project: Project }) {
  return (
    <div className="pt-20">
      {/* Breadcrumb — same pattern as Careers (pt-20 clears fixed Navbar) */}
      <nav aria-label="Breadcrumb" className="border-b border-border bg-card/30">
        <div className="container mx-auto px-6 py-3">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-brand-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/portfolio" className="hover:text-brand-400 transition-colors">
                Portfolio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">{project.title}</li>
          </ol>
        </div>
      </nav>

      {/* Top section — same pattern as Careers (centered, label + title + description + CTA) */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-0 w-56 h-56 md:w-72 md:h-72 opacity-30 pointer-events-none">
          <LottiePlayer src="/lottie/dev.json" className="w-full h-full" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
            <span className="w-5 h-0.5 bg-brand-400 inline-block" />
            {project.category}
            <span className="w-5 h-0.5 bg-brand-400 inline-block" />
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 leading-tight">
            Voice-First AI <br />
            <span className="text-gradient">For Support & Automation</span>
          </h1>
          <p className="font-sans text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Design call and chat flows in a visual editor, plug in your LLMs, and go live in days. Built for support, lead follow-up, and reminders at scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-2xl shadow-xl font-heading font-semibold">
              <Link href="/#contact">
                Schedule a demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="rounded-2xl font-heading font-semibold">
              <Link href="/#contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hero image */}
      {project.screenshot && (
        <section className="container mx-auto px-6 max-w-6xl py-0 pb-14 md:pb-20">
          <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden card-webteck shadow-2xl">
            <Image
              src={project.screenshot}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="border-y border-border bg-muted/30 py-12 md:py-14">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }, i) => {
              const accents = ["card-accent-indigo", "card-accent-violet", "card-accent-cyan", "card-accent-emerald"];
              return (
                <div
                  key={label}
                  className={cn(
                    "p-6 rounded-2xl card-webteck card-webteck-hover text-center",
                    accents[i % accents.length]
                  )}
                >
                  <p className="font-heading text-3xl md:text-4xl font-bold text-gradient tracking-tight">{value}</p>
                  <p className="font-sans text-sm text-muted-foreground mt-1">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className={sectionClass}>
        <div className="container mx-auto px-6 max-w-6xl">
          <span className="font-heading text-brand-400 text-sm font-semibold tracking-widest uppercase">Use cases</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 tracking-tight">
            Where it fits
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Inbound and outbound voice, support, and follow-up—all from one flow design.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map(({ title, description, icon: Icon, accent }) => (
              <div
                key={title}
                className={cn("p-6 rounded-2xl card-webteck card-webteck-hover", accent)}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why / Features */}
      <section className={`${sectionClass} bg-muted/20 relative overflow-hidden`}>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-56 md:h-56 opacity-20 pointer-events-none">
          <LottiePlayer src="/lottie/dev.json" className="w-full h-full" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <span className="font-heading text-brand-400 text-sm font-semibold tracking-widest uppercase">Why choose us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 tracking-tight">
            What we deliver
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Fast speech pipelines, configurable rules and handoffs, and integrations that fit into your stack so you can ship and iterate quickly.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ title, description, icon: Icon, accent }) => (
              <div
                key={title}
                className={cn("p-6 rounded-2xl card-webteck card-webteck-hover", accent)}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className={sectionClass}>
        <div className="container mx-auto px-6 max-w-6xl">
          <span className="font-heading text-brand-400 text-sm font-semibold tracking-widest uppercase">Integrations</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 tracking-tight">
            Fits your infrastructure
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Connect to your telephony, CRM, ticketing, payments, and internal APIs so the assistant works with the tools you already have.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map(({ title, description, accent }) => (
              <div
                key={title}
                className={cn("p-6 rounded-2xl card-webteck card-webteck-hover", accent)}
              >
                <h3 className="font-heading text-lg font-bold mb-2">{title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className={`${sectionClass} bg-muted/20`}>
        <div className="container mx-auto px-6 max-w-6xl">
          <span className="font-heading text-brand-400 text-sm font-semibold tracking-widest uppercase">Analytics</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 tracking-tight">
            See what’s working
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Topic breakdown, resolution rates, call and transcript review, and downstream outcomes so you can improve flows and prove impact.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsItems.map(({ title, description, accent }) => (
              <div key={title} className={cn("flex gap-4 p-6 rounded-2xl card-webteck card-webteck-hover", accent)}>
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-1">{title}</h3>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web & channels (compact) */}
      <section className={sectionClass}>
        <div className="container mx-auto px-6 max-w-6xl">
          <span className="font-heading text-brand-400 text-sm font-semibold tracking-widest uppercase">Web & messaging</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 tracking-tight">
            Same logic, more channels
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Run the same flows on your site and messaging apps. Share context so a conversation that started on voice can continue in chat.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Website widget", "Messaging (e.g. WhatsApp)", "Shared conversation context", "Handoff to live chat or phone"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl card-webteck card-webteck-hover text-sm font-medium"
              >
                <Check className="w-4 h-4 text-brand-400 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & trust */}
      <section className={`${sectionClass} bg-muted/20`}>
        <div className="container mx-auto px-6 max-w-6xl">
          <span className="font-heading text-brand-400 text-sm font-semibold tracking-widest uppercase">Compliance & trust</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 tracking-tight">
            Built for regulated environments
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Consent and PII controls, configurable retention, and deployment options so you can meet data and regulatory requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {complianceItems.map(({ title, description, accent }) => (
              <div key={title} className={cn("p-6 rounded-2xl card-webteck card-webteck-hover", accent)}>
                <h3 className="font-heading font-bold mb-2">{title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={sectionClass} id="faq">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="font-heading text-brand-400 text-sm font-semibold tracking-widest uppercase">FAQs</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-12 tracking-tight">
            Common questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }, i) => (
              <div
                key={q}
                className={cn(
                  "rounded-2xl card-webteck card-webteck-hover p-6",
                  i % 2 === 0 ? "card-accent-violet" : "card-accent-indigo"
                )}
              >
                <h3 className="font-heading font-bold text-foreground mb-3 tracking-tight">{q}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your analysis CTA */}
      <section className={sectionClass}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="p-8 md:p-10 rounded-3xl card-webteck card-webteck-hover card-accent-indigo text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 tracking-tight">Get a custom assessment</h2>
            <p className="font-sans text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Tell us your use case and volume; we’ll outline where voice AI fits, suggest flow ideas, and give you a realistic timeline and scope.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-xl">
                <Link href="/#contact">Request assessment</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-xl">
                <Link href="/#contact">Schedule a call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans px-3 py-1.5 rounded-lg bg-muted/80 text-muted-foreground text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
