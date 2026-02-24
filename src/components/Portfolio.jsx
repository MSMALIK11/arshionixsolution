import { useState } from "react";
import { ExternalLink, Github, Globe, Smartphone, Layers, Palette } from "lucide-react";
import { cn } from "../lib/utils";

const categories = ["All", "Web", "Software", "Android", "UI/UX"];

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web",
        description: "Full-stack e-commerce with React, Node.js & Stripe payments. Features real-time inventory, admin dashboard, and analytics.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        icon: Globe,
        color: "from-brand-400 to-brand-600",
        bg: "bg-gradient-to-br from-brand-900/40 to-brand-700/20",
    },
    {
        title: "Task Management SaaS",
        category: "Software",
        description: "Collaborative project management tool with real-time updates, Kanban boards, and team collaboration features.",
        tags: ["Next.js", "PostgreSQL", "WebSocket", "Redis"],
        icon: Layers,
        color: "from-violet-400 to-violet-600",
        bg: "bg-gradient-to-br from-violet-900/40 to-violet-700/20",
    },
    {
        title: "Food Delivery App",
        category: "Android",
        description: "Android food delivery app with live tracking, payment gateway, and restaurant management system.",
        tags: ["Kotlin", "Firebase", "Google Maps", "Stripe"],
        icon: Smartphone,
        color: "from-green-400 to-emerald-600",
        bg: "bg-gradient-to-br from-green-900/40 to-emerald-700/20",
    },
    {
        title: "Fintech Dashboard UI",
        category: "UI/UX",
        description: "Modern financial analytics dashboard with data visualization, dark mode, and accessible design tokens.",
        tags: ["Figma", "Design System", "Prototyping"],
        icon: Palette,
        color: "from-pink-400 to-rose-500",
        bg: "bg-gradient-to-br from-pink-900/40 to-rose-700/20",
    },
    {
        title: "Real Estate Portal",
        category: "Web",
        description: "Property listing platform with advanced search filters, map integration, and virtual tour features.",
        tags: ["React", "Next.js", "Mapbox", "Prisma"],
        icon: Globe,
        color: "from-amber-400 to-orange-500",
        bg: "bg-gradient-to-br from-amber-900/40 to-orange-700/20",
    },
    {
        title: "Fitness Tracker App",
        category: "Android",
        description: "Comprehensive fitness app with workout planning, progress tracking, and smart wearable integration.",
        tags: ["Kotlin", "Room DB", "Wear OS", "Charts"],
        icon: Smartphone,
        color: "from-cyan-400 to-blue-600",
        bg: "bg-gradient-to-br from-cyan-900/40 to-blue-700/20",
    },
];

function ProjectCard({ project }) {
    const { icon: Icon, title, category, description, tags, color, bg } = project;
    return (
        <div className={cn("group relative rounded-2xl border border-border overflow-hidden card-hover", bg)}>
            {/* Header visual */}
            <div className={cn("h-40 bg-gradient-to-br flex items-center justify-center relative", color)}>
                <Icon className="w-16 h-16 text-white/80" />
                <div className="absolute inset-0 bg-black/10" />
                {/* Category badge */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-semibold">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-brand-400 transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-400 text-xs font-medium border border-brand-500/20">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-4 h-4" /> Code
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand-400 transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="portfolio" className="section-padding relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
                        My Work
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A curated selection of projects that showcase my skills across different domains.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
                                activeCategory === cat
                                    ? "bg-gradient-to-r from-brand-500 to-violet-600 text-white shadow-lg shadow-brand-500/25"
                                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-brand-500/30"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
