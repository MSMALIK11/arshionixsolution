"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Globe, Smartphone, Layers, Palette, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web", "Software", "Android", "UI/UX"];

const projects = [
  {
    title: "AL Measure",
    category: "Web",
    description: "Measurement and analytics platform built for precision tracking and reporting. Clean UI with dashboards and data visualization.",
    outcome: "Custom solution · Scalable architecture",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    icon: Globe,
    color: "from-brand-400 to-brand-600",
    bg: "from-brand-500/10 to-brand-600/5",
    liveUrl: null as string | null,
    screenshot: null as string | null,
  },
  {
    title: "Journal Book",
    category: "Web",
    description: "Trading journal and dashboard app with layout options, sidebar navigation, and structured content. Next.js with MongoDB integration.",
    outcome: "Next.js app · Responsive layout",
    tags: ["Next.js", "MongoDB", "Tailwind", "App Router"],
    icon: Layers,
    color: "from-violet-400 to-violet-600",
    bg: "from-violet-500/10 to-violet-600/5",
    liveUrl: null as string | null,
    screenshot: null as string | null,
  },
  {
    title: "E-Commerce Platform",
    category: "Web",
    description: "Full-stack e-commerce with React, Node.js & Stripe. Real-time inventory, admin dashboard, and analytics.",
    outcome: "Launched in 10 weeks · 2x faster checkout",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: Globe,
    color: "from-brand-400 to-brand-600",
    bg: "from-brand-500/10 to-brand-600/5",
    liveUrl: null as string | null,
    screenshot: null as string | null,
  },
  {
    title: "Task Management SaaS",
    category: "Software",
    description: "Collaborative tool with real-time updates, Kanban boards, and team features.",
    outcome: "50+ teams onboarded in first 6 months",
    tags: ["Next.js", "PostgreSQL", "WebSocket", "Redis"],
    icon: Layers,
    color: "from-violet-400 to-violet-600",
    bg: "from-violet-500/10 to-violet-600/5",
    liveUrl: null as string | null,
    screenshot: null as string | null,
  },
  {
    title: "Food Delivery App",
    category: "Android",
    description: "Android app with live tracking, payments, and restaurant management.",
    outcome: "4.8★ on Play Store · 100k+ downloads",
    tags: ["Kotlin", "Firebase", "Google Maps", "Stripe"],
    icon: Smartphone,
    color: "from-green-400 to-emerald-600",
    bg: "from-green-500/10 to-emerald-600/5",
    liveUrl: null as string | null,
    screenshot: null as string | null,
  },
  {
    title: "Fintech Dashboard UI",
    category: "UI/UX",
    description: "Financial analytics dashboard with data viz, dark mode, and design system.",
    outcome: "Reduced support tickets by 40%",
    tags: ["Figma", "Design System", "Prototyping"],
    icon: Palette,
    color: "from-pink-400 to-rose-500",
    bg: "from-pink-500/10 to-rose-600/5",
    liveUrl: null as string | null,
    screenshot: null as string | null,
  },
  {
    title: "Real Estate Portal",
    category: "Web",
    description: "Property listings with search, maps, and virtual tours.",
    outcome: "MVP in 12 weeks · 3x more leads",
    tags: ["React", "Next.js", "Mapbox", "Prisma"],
    icon: Globe,
    color: "from-amber-400 to-orange-500",
    bg: "from-amber-500/10 to-orange-600/5",
    liveUrl: null as string | null,
    screenshot: null as string | null,
  },
  {
    title: "Fitness Tracker App",
    category: "Android",
    description: "Fitness app with workouts, progress tracking, and wearable sync.",
    outcome: "Featured by Google · 50k+ MAU",
    tags: ["Kotlin", "Room DB", "Wear OS", "Charts"],
    icon: Smartphone,
    color: "from-cyan-400 to-blue-600",
    bg: "from-cyan-500/10 to-blue-600/5",
    liveUrl: null as string | null,
    screenshot: null as string | null,
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const { icon: Icon, title, category, description, outcome, tags, color, bg, liveUrl, screenshot } = project;
  return (
    <article
      className={cn(
        "group relative rounded-2xl border border-border bg-card overflow-hidden",
        "transition-all duration-300 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1"
      )}
    >
      {/* Coming soon ribbon */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-brand-400" />
        <span className="text-xs font-semibold text-muted-foreground">Coming soon</span>
      </div>

      {/* Header: screenshot or icon */}
      <div className={cn("relative h-36 flex items-center justify-center overflow-hidden", !screenshot && color)}>
        {screenshot ? (
          <Image
            src={screenshot}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
            <Icon className="w-14 h-14 text-white/90 drop-shadow-sm relative z-10" />
          </>
        )}
        <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className={cn("p-5 bg-gradient-to-b from-card to-card/80", bg)}>
        <h3 className="font-heading text-lg font-bold text-foreground mb-1.5 group-hover:text-brand-400 transition-colors">
          {title}
        </h3>
        {outcome && (
          <p className="text-brand-400 text-xs font-medium mb-3">{outcome}</p>
        )}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-muted/80 text-muted-foreground text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View live
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
              Case study & demo coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-0.5 bg-brand-400 rounded-full" />
            Our Work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A preview of our work across web, software, mobile, and design. Case studies and live demos are coming soon.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "secondary"}
              onClick={() => setActiveCategory(cat)}
              size="sm"
              className={cn(
                "rounded-lg font-medium",
                activeCategory === cat && "shadow-md shadow-brand-500/20"
              )}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
