"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Zap,
  Users,
  Globe,
  ChevronRight,
  Star,
  Rocket,
  Coffee,
  Award,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const openings = [
  {
    id: 1,
    title: "Senior React / Next.js Developer",
    type: "Full-time",
    location: "Remote (Worldwide)",
    department: "Engineering",
    level: "Senior",
    description:
      "We're looking for a battle-tested frontend engineer to lead the delivery of complex web products for our enterprise clients. You'll architect scalable component libraries, mentor junior devs, and collaborate directly with design leads.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST / GraphQL"],
  },
  {
    id: 2,
    title: "Android Developer (Kotlin)",
    type: "Full-time",
    location: "Remote (Worldwide)",
    department: "Mobile",
    level: "Mid–Senior",
    description:
      "Join our mobile team to build polished, high-performance Android apps from scratch. You'll own features end-to-end — from architecture decisions to Play Store deployment and post-launch monitoring.",
    skills: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "REST APIs"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote (Worldwide)",
    department: "Design",
    level: "Mid-level",
    description:
      "Craft beautiful, intuitive product experiences that users rave about. You'll run discovery workshops, produce Figma prototypes, and hand off production-ready design systems to our engineering teams.",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems", "Usability Testing"],
  },
  {
    id: 4,
    title: "Full-Stack Software Engineer",
    type: "Full-time",
    location: "Remote (Worldwide)",
    department: "Engineering",
    level: "Mid-level",
    description:
      "Build robust, scalable back-ends and intuitive front-ends across a variety of exciting client projects. You'll work in Node.js and Python for services, and React for UIs, within an agile, collaborative team.",
    skills: ["Node.js", "Python", "React", "PostgreSQL", "Docker"],
  },
];

const whyUs = [
  { icon: Globe, title: "Fully Remote", desc: "Work from anywhere in the world. We've been async-first since day one — no mandatory offices, ever." },
  { icon: Zap, title: "Fast-Paced Growth", desc: "Ship real products to real users every sprint. You'll build more in 6 months here than 2 years elsewhere." },
  { icon: Heart, title: "Work You Love", desc: "No boring CRUD apps. We work on AI tools, mobile apps, and design systems that push what's possible." },
  { icon: Users, title: "Tight-Knit Team", desc: "A small team of senior engineers and designers — no bureaucracy, just smart people doing great work." },
  { icon: TrendingUp, title: "Career Growth", desc: "Clear progression paths, regular reviews, and a personal learning budget to keep levelling up." },
  { icon: Coffee, title: "Async-First Culture", desc: "Deep work is sacred here. No endless meetings — we communicate clearly in writing and trust each other." },
  { icon: Award, title: "Competitive Pay", desc: "Market-rate salaries benchmarked globally, performance bonuses, and equity options for senior roles." },
  { icon: Rocket, title: "Ship Fast, Learn Faster", desc: "Weekly deploys, fast feedback loops, and a culture that celebrates learning from failure — not punishing it." },
];

const cultureImages = [
  { src: "/culture-team.png", label: "Collaboration" },
  { src: "/culture-office.png", label: "Our Workspace" },
  { src: "/culture-celebration.png", label: "We Celebrate Wins" },
];

const typeColors: Record<string, string> = {
  "Full-time": "bg-green-500/15 text-green-400 border-green-500/30",
  "Part-time": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Contract: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

const deptColors: Record<string, string> = {
  Engineering: "bg-brand-500/15 text-brand-400",
  Mobile: "bg-violet-500/15 text-violet-400",
  Design: "bg-pink-500/15 text-pink-400",
  Infrastructure: "bg-cyan-500/15 text-cyan-400",
  Marketing: "bg-orange-500/15 text-orange-400",
};

function AnimatedOrb({ className }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none ${className ?? ""}`}
    />
  );
}

function JobCard({ job, index }: { job: (typeof openings)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <CardContent className="p-6">
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${typeColors[job.type] ?? "bg-muted text-muted-foreground"}`}
          >
            {job.type}
          </span>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${deptColors[job.department] ?? "bg-muted text-muted-foreground"}`}
          >
            {job.department}
          </span>
          <span className="text-xs text-muted-foreground ml-auto font-medium">{job.level}</span>
        </div>

        <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-brand-400 transition-colors">
          {job.title}
        </h3>

        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> {job.type}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" /> {job.department}
          </span>
        </div>

        <p
          className={`text-muted-foreground text-sm leading-relaxed overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
        >
          {job.description}
        </p>

        {open && (
          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.map((s) => (
              <span
                key={s}
                className="text-xs px-2.5 py-1 rounded-lg bg-brand-500/10 text-brand-400 font-medium border border-brand-500/20"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
          <button
            onClick={() => setOpen(!open)}
            className="text-xs text-muted-foreground hover:text-brand-400 flex items-center gap-1 transition-colors"
          >
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
            />
            {open ? "Less details" : "View details"}
          </button>
          <a
            href={`mailto:careers@arshionix.com?subject=Application: ${encodeURIComponent(job.title)}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-brand-500/30 hover:scale-105 transition-all duration-200"
          >
            Apply Now <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

function CultureGallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % cultureImages.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative">
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-brand-500/20 border border-brand-500/20 bg-muted/30">
        {cultureImages.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              i === active ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-brand-500/20 to-violet-600/20 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">{img.label}</span>
            </div>
          </div>
        ))}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-5">
          <span className="text-white font-semibold text-sm tracking-wide">
            {cultureImages[active].label}
          </span>
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-brand-500 to-violet-600 text-white text-xs font-bold shadow-lg">
          ✨ Life at Arshionix
        </div>
      </div>

      <div className="flex gap-3 mt-3">
        {cultureImages.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className={`flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              i === active ? "border-brand-500 opacity-100 scale-105" : "border-border opacity-50 hover:opacity-75"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-brand-500/10 to-violet-600/10" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <AnimatedOrb className="w-[600px] h-[600px] bg-brand-500 -top-48 -left-48" />
        <AnimatedOrb className="w-[500px] h-[500px] bg-violet-600 top-1/2 -right-32" />
        <AnimatedOrb className="w-[400px] h-[400px] bg-brand-400 bottom-0 left-1/3" />
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-400/30 animate-bounce"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-heading font-black text-base">A</span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">
              Arshi<span className="text-gradient">onix</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <nav aria-label="Breadcrumb" className="border-b border-border bg-card/30">
          <div className="container mx-auto px-6 py-3">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground">Careers</li>
            </ol>
          </div>
        </nav>
        <section className="py-24 md:py-32 text-center">
          <div className="container mx-auto px-6">
            <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
              <span className="w-5 h-0.5 bg-brand-400 inline-block" />
              We&apos;re Hiring
              <span className="w-5 h-0.5 bg-brand-400 inline-block" />
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 leading-tight">
              Build the Future <br />
              <span className="text-gradient">With Us</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Arshionix is a fully-remote digital agency where senior engineers, designers, and marketers work
              together to ship exceptional products. Join us and do the best work of your career.
            </p>
            <Button
              asChild
              className="rounded-2xl shadow-xl"
            >
              <a href="#openings">See Open Roles <ArrowRight className="w-4 h-4" /></a>
            </Button>
          </div>
        </section>

        <section className="py-20 bg-card/40 backdrop-blur-sm border-y border-border">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
                <span className="w-5 h-0.5 bg-brand-400 inline-block" />
                Perks & Culture
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold">
                Why Work <span className="text-gradient">With Us</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                We&apos;ve built a company where talented people actually want to come to work — every single day.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyUs.map(({ icon: Icon, title, desc }, i) => (
                <Card
                  key={title}
                  className="group p-6 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <CardContent className="p-0">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading font-bold mb-2 group-hover:text-brand-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <CultureGallery />
              <div>
                <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  <span className="w-5 h-0.5 bg-brand-400 inline-block" />
                  Our Culture
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  A Place Where <br />
                  <span className="text-gradient">Great Work Happens</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  We believe the best teams are built on trust, autonomy, and a shared obsession with quality. At
                  Arshionix, you won&apos;t find micro-management or pointless meetings. You&apos;ll find talented
                  people who care deeply about the craft and push each other to grow.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We celebrate every launch, learn from every stumble, and always have each other&apos;s backs.
                  Whether you&apos;re debugging a thorny issue at 11PM or launching a feature you&apos;re proud of —
                  you&apos;ll never feel alone.
                </p>

                <ul className="space-y-3">
                  {[
                    "Async-first, zero micro-management",
                    "Build products used by thousands of real users",
                    "Personal learning budget for courses & conferences",
                    "Regular team socials and virtual retreats",
                    "Fast career progression with transparent reviews",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <Star className="w-4 h-4 text-brand-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="openings" className="py-24 bg-card/40 backdrop-blur-sm border-y border-border">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
                <span className="w-5 h-0.5 bg-brand-400 inline-block" />
                Open Positions
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Current <span className="text-gradient">Job Openings</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                All roles are fully remote. We hire globally and welcome applications from anywhere in the world.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {openings.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} />
              ))}
            </div>

            <div className="mt-12 text-center p-8 rounded-2xl border border-dashed border-brand-500/30 bg-brand-500/5">
              <p className="text-muted-foreground text-sm mb-4">
                Don&apos;t see a role that fits? We love meeting talented people proactively.
              </p>
              <a
                href="mailto:careers@arshionix.com?subject=Open Application"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-200"
              >
                Send an Open Application <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5">
              Ready to <span className="text-gradient">Join Us?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Apply to any open role above or send us an open application. We&apos;ll get back to you within 3
              business days.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild className="rounded-2xl shadow-xl">
                <a href="#openings">Browse Openings <ArrowRight className="w-4 h-4" /></a>
              </Button>
              <Button variant="secondary" asChild className="rounded-2xl">
                <Link href="/">← Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
