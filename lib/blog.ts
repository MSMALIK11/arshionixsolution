export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "web-development-cost-guide",
    title: "How Much Does Custom Web Development Cost?",
    description: "A practical guide to budgeting for web apps, from MVP to scale. What affects price and how to get the best value.",
    date: "2025-03-01",
    category: "Web Development",
    readTime: "5 min read",
  },
  {
    slug: "saas-development-best-practices",
    title: "SaaS Development Best Practices for Startups",
    description: "Architecture, security, and scaling tips when building your first SaaS product.",
    date: "2025-02-15",
    category: "SaaS Development",
    readTime: "7 min read",
  },
  {
    slug: "ai-tools-for-product-teams",
    title: "AI Tools Every Product Team Should Know",
    description: "From prototyping to analytics: AI tools that speed up design and development without replacing judgment.",
    date: "2025-02-01",
    category: "AI Tools",
    readTime: "6 min read",
  },
  {
    slug: "startup-tech-stack-2025",
    title: "Startup Tech Stack 2025: What We Recommend",
    description: "Our go-to stack for MVPs: Next.js, databases, auth, and deployment. Fast to ship, easy to maintain.",
    date: "2025-01-20",
    category: "Startup Tech",
    readTime: "8 min read",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
