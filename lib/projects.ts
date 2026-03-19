export type Project = {
  slug?: string;
  title: string;
  category: string;
  description: string;
  outcome: string;
  tags: string[];
  icon: string;
  color: string;
  bg: string;
  liveUrl: string | null;
  screenshot: string | null;
  /** If true, show "Coming soon" badge and disabled "View details" (no link) */
  comingSoon?: boolean;
  /** Optional long description for the detail page */
  longDescription?: string;
  /** Show "Your analysis" section in detail view */
  showYourAnalysis?: boolean;
  /** Use full product-style detail page (e.g. Boliye-style sections) */
  showFullProductPage?: boolean;
};

export const projects: Project[] = [
  {
    slug: "voice-agent-customer-support",
    title: "Voice-First Conversational AI",
    category: "Software",
    description:
      "Custom voice AI platform for inbound and outbound calls, support, and lead follow-up. Design flows in a visual editor, plug in LLMs for decisions, and review every interaction with built-in analytics.",
    outcome: "Faster deployment · Lower cost per contact · Full control over flows",
    tags: ["Next.js", "tRPC", "Prisma", "AI/LLM", "Voice", "React Flow"],
    icon: "Layers",
    color: "from-violet-400 to-violet-600",
    bg: "from-violet-500/10 to-violet-600/5",
    liveUrl: null,
    screenshot: "",
    longDescription:
      "We built a voice-first conversational AI stack so teams can ship automated call and support experiences without lock-in. You design flows in a node-based editor—triggers, voice I/O, LLM-based routing, and agent nodes—then run sessions and inspect results. Suited for support, reminders, lead qualification, and similar use cases. Stack: Next.js, tRPC, Prisma, React Flow.",
    showYourAnalysis: true,
    showFullProductPage: true,
  },
  {
    slug: "al-measure",
    title: "AL Measure",
    category: "Web",
    description:
      "Measurement and analytics platform built for precision tracking and reporting. Clean UI with dashboards and data visualization.",
    outcome: "Custom solution · Scalable architecture",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    icon: "Globe",
    color: "from-brand-400 to-brand-600",
    bg: "from-brand-500/10 to-brand-600/5",
    liveUrl: null,
    screenshot: null,
    comingSoon: true,
  },
  {
    slug: "journal-book",
    title: "Journal Book",
    category: "Web",
    description:
      "Trading journal and dashboard app with layout options, sidebar navigation, and structured content. Next.js with MongoDB integration.",
    outcome: "Next.js app · Responsive layout",
    tags: ["Next.js", "MongoDB", "Tailwind", "App Router"],
    icon: "Layers",
    color: "from-violet-400 to-violet-600",
    bg: "from-violet-500/10 to-violet-600/5",
    liveUrl: null,
    screenshot: null,
    comingSoon: true,
  },
  
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.filter((p) => p.slug).map((p) => p.slug!);
}

/** Products shown in navbar (all projects with a slug; comingSoon = no link yet) */
export function getProductsForNavigation(): { title: string; slug: string; href: string | null }[] {
  return projects
    .filter((p) => p.slug)
    .map((p) => ({
      title: p.title,
      slug: p.slug!,
      href: p.comingSoon ? null : `/portfolio/${p.slug}`,
    }));
}
