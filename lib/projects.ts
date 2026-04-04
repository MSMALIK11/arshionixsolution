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
  /** Show on homepage featured section (default: true when slug exists) */
  featured?: boolean;
  /**
   * Use for homepage / portfolio card links when the detail URL must not be derived from `slug`
   * (e.g. avoid confusion with service vertical paths like /healthcare-websites).
   */
  featuredHref?: string;
};

export const projects: Project[] = [
  {
    slug: "arshionix-healthcare",
    title: "Arshionix Healthcare",
    category: "Product",
    description:
      "Multi-tenant hospital SaaS: public patient booking, branded staff dashboards, week and day appointment views, doctors and patients, exports, activity logs, reminders, and admin vs staff roles — Next.js, MongoDB, and a UI built for real clinic workflows.",
    outcome: "Ship faster · White-label ready · Extend with your integrations",
    tags: ["Next.js", "MongoDB", "MUI", "Multi-tenant", "App Router", "Healthcare"],
    icon: "Smartphone",
    color: "from-rose-500 to-brand-600 dark:from-rose-400 dark:to-brand-600",
    bg: "bg-gradient-to-br from-rose-500/10 to-brand-600/5 dark:from-rose-500/10 dark:to-brand-600/5",
    liveUrl: null,
    screenshot: "/portfolio/arshionix-healthcare-home.png",
    longDescription:
      "Arshionix Healthcare is an in-house product we use as a baseline for clinics and small hospitals: a branded public experience (homepage, services by department, multi-step booking) plus a secure staff dashboard scoped by tenant — appointments (week list + day board), doctor and patient directories, hospital settings and branding, CSV export, audit-style activity, email reminders, print-friendly day sheets, and optional patient self-service links. Built with Next.js App Router, MongoDB, JWT sessions, and MUI — designed to be customized, hosted for you, or licensed as a starting point.",
    featuredHref: "/portfolio/arshionix-healthcare",
  },
  {
    slug: "voice-agent-customer-support",
    title: "Voice-First Conversational AI",
    category: "Software",
    description:
      "Custom voice AI platform for inbound and outbound calls, support, and lead follow-up. Design flows in a visual editor, plug in LLMs for decisions, and review every interaction with built-in analytics.",
    outcome: "Faster deployment · Lower cost per contact · Full control over flows",
    tags: ["Next.js", "tRPC", "Prisma", "AI/LLM", "Voice", "React Flow"],
    icon: "Layers",
    color: "from-brand-500 to-violet-600 dark:from-violet-400 dark:to-violet-600",
    bg: "bg-gradient-to-br from-brand-500/10 to-violet-600/5 dark:from-violet-500/10 dark:to-violet-600/5",
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
    color: "from-brand-500 to-violet-600 dark:from-violet-400 dark:to-violet-600",
    bg: "bg-gradient-to-br from-brand-500/10 to-violet-600/5 dark:from-violet-500/10 dark:to-violet-600/5",
    liveUrl: null,
    screenshot: null,
    comingSoon: true,
  },
  
];

/** Card / “View project” target (featured strip, portfolio grid). */
export function getProjectCardHref(project: Project): string | null {
  if (project.comingSoon) return null;
  if (project.featuredHref) return project.featuredHref;
  if (!project.slug) return null;
  return `/portfolio/${project.slug}`;
}

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
      href: p.comingSoon ? null : getProjectCardHref(p),
    }));
}

/** Projects to highlight on the homepage (has slug, featured !== false) */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.slug && p.featured !== false);
}
