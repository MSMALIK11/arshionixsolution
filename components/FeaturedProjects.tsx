"use client";

import Link from "next/link";
import { ArrowRight, Globe, Layers, Palette, Smartphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getFeaturedProjects, getProjectCardHref } from "@/lib/projects";
import type { Project } from "@/lib/projects";

const iconMap = {
  Globe,
  Smartphone,
  Layers,
  Palette,
} as const;

function FeaturedCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon as keyof typeof iconMap] ?? Layers;
  const href = getProjectCardHref(project);

  const inner = (
    <>
      <div
        className={cn(
          "relative h-32 rounded-xl flex items-center justify-center mb-4 overflow-hidden",
          "bg-gradient-to-br",
          project.color
        )}
      >
        <div className="absolute inset-0 bg-black/20" />
        <Icon className="relative z-10 w-12 h-12 text-white/95 drop-shadow-md" />
        {project.comingSoon && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur-sm border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            <Sparkles className="w-3 h-3 text-brand-400" />
            Soon
          </span>
        )}
        <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white/90 bg-black/35 backdrop-blur-sm px-2 py-0.5 rounded">
          {project.category}
        </span>
      </div>
      <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-brand-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      {href ? (
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-400 group-hover:gap-2 transition-all">
          View project
          <ArrowRight className="w-4 h-4" />
        </span>
      ) : (
        <span className="text-sm font-medium text-muted-foreground">Details coming soon</span>
      )}
    </>
  );

  const className = cn(
    "group block rounded-2xl border border-border bg-card p-5 text-left transition-all duration-300 card-webteck",
    "hover:border-brand-500/35 hover:shadow-saas-lg hover:-translate-y-0.5",
    href && "cursor-pointer"
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={cn(className, "cursor-default")}>
      {inner}
    </div>
  );
}

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  if (featured.length === 0) return null;

  return (
    <section id="projects" className="section-padding relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
              <span className="w-5 h-0.5 bg-brand-400 inline-block" />
              Spotlight
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">work</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              A few projects we&apos;re building —{" "}
              <Link href="/portfolio" className="text-brand-400 hover:underline font-medium">
                view all in Portfolio
              </Link>
              .
            </p>
          </div>
          <Button variant="outline" className="rounded-xl shrink-0 border-border" asChild>
            <Link href="/portfolio" className="inline-flex items-center gap-2">
              All projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <FeaturedCard key={project.slug ?? project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
