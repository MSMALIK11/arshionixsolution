"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Globe, Smartphone, Layers, Palette, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";

const categories = ["All", "Web", "Software", "Android", "UI/UX"];

const categoryAccent: Record<string, string> = {
  Web: "card-accent-indigo",
  Software: "card-accent-violet",
  Android: "card-accent-cyan",
  "UI/UX": "card-accent-emerald",
};

const iconMap = {
  Globe,
  Smartphone,
  Layers,
  Palette,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = iconMap[project.icon as keyof typeof iconMap] ?? Globe;
  const { title, category, description, outcome, tags, color, bg, liveUrl, screenshot, slug, comingSoon } = project;
  const hasDetail = Boolean(slug) && !comingSoon;
  const isComingSoon = Boolean(comingSoon);
  const showComingSoonBadge = !hasDetail || isComingSoon;
  const accentClass = categoryAccent[category] ?? "card-accent-indigo";
  const cardClass = cn(
    "project-card group relative overflow-hidden block h-full rounded-2xl card-webteck card-webteck-hover",
    accentClass
  );

  const content = (
    <>
        {/* Decorative shapes */}
        <div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-[0.12] dark:opacity-[0.08] blur-2xl pointer-events-none"
          style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 w-20 h-20 rounded-full opacity-[0.1] dark:opacity-[0.06] blur-xl pointer-events-none bg-gradient-to-br from-blue-500 to-violet-600 dark:from-indigo-500 dark:to-violet-600"
          aria-hidden
        />
        {hasDetail && !isComingSoon && (
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-400/60 dark:bg-brand-400/40" aria-hidden />
        )}

        {showComingSoonBadge && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span className="text-xs font-semibold text-muted-foreground">Coming soon</span>
          </div>
        )}

        <div
          className={cn(
            "project-card-image-wrap relative h-36 flex items-center justify-center",
            !screenshot && "bg-gradient-to-br",
            !screenshot && color
          )}
        >
          {screenshot ? (
            <>
              <Image
                src={screenshot}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="project-card-overlay absolute inset-0 z-[1]" />
              <div className="project-card-shine absolute inset-0 z-[2] pointer-events-none" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
              <Icon className="w-14 h-14 text-white/90 drop-shadow-sm relative z-10" />
            </>
          )}
          <span className="absolute bottom-3 left-4 z-10 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider">
            {category}
          </span>
        </div>

      <div className={cn("p-5 bg-card", bg)}>
        <h3 className="font-heading text-lg font-bold text-foreground mb-1.5 group-hover:text-brand-500 transition-colors duration-300">
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
          {hasDetail ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 group-hover:text-brand-300 transition-colors">
              View details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          ) : isComingSoon ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground cursor-not-allowed select-none">
              View details
              <ArrowRight className="w-4 h-4 opacity-50" />
            </span>
          ) : liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
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
    </>
  );

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="h-full"
    >
      {hasDetail ? (
        <Link href={`/portfolio/${slug!}`} className={cardClass}>
          {content}
        </Link>
      ) : (
        <article className={cardClass}>
          {content}
        </article>
      )}
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative scroll-mt-24 pt-24 md:pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            <span className="w-5 h-0.5 bg-brand-400 rounded-full" />
            Our work
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A selection of our work across web, software, mobile, and design. Click any project for full details.
          </p>
          <Button asChild variant="secondary" size="lg" className="rounded-xl">
            <Link href="/#contact">
              Start your project <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
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
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug ?? project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
