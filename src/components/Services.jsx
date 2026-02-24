import { Globe, Smartphone, Layers, Palette, ArrowRight, Check } from "lucide-react";
import { cn } from "../lib/utils";

const services = [
    {
        icon: Globe,
        title: "Web Development",
        description:
            "We build fast, responsive, and scalable web applications using modern frameworks. From landing pages to complex SaaS platforms — we've got you covered.",
        features: ["React / Next.js / Vue", "REST & GraphQL APIs", "Performance Optimization", "SEO Best Practices"],
        gradient: "from-brand-400 to-brand-600",
    },
    {
        icon: Layers,
        title: "Software Development",
        description:
            "End-to-end software solutions engineered for reliability and scale. Our team handles everything from architecture to deployment.",
        features: ["Node.js / Python / Go", "Microservices & APIs", "Database Architecture", "Cloud & DevOps"],
        gradient: "from-violet-400 to-violet-600",
        featured: true,
    },
    {
        icon: Smartphone,
        title: "Android Development",
        description:
            "Native and cross-platform mobile apps built with Kotlin and React Native, delivering smooth performance and great user experiences.",
        features: ["Kotlin / Java", "React Native", "Play Store Deployment", "Push Notifications"],
        gradient: "from-brand-400 to-brand-600",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description:
            "Our design team creates beautiful, intuitive interfaces that users love — from wireframes and prototypes to production-ready design systems.",
        features: ["Figma & Prototyping", "Design Systems", "User Research", "Accessibility (WCAG)"],
        gradient: "from-pink-400 to-violet-500",
    },
];

function ServiceCard({ service, index }) {
    const { icon: Icon, title, description, features, gradient, featured } = service;

    return (
        <div
            className={cn(
                "relative group rounded-2xl p-8 border transition-all duration-500 card-hover",
                featured
                    ? "bg-gradient-to-br from-brand-500/10 via-violet-500/5 to-transparent border-brand-500/30 shadow-xl shadow-brand-500/10"
                    : "bg-card border-border hover:border-brand-500/30"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {featured && (
                <div className="absolute -top-3 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-brand-500 to-violet-600 text-white text-xs font-bold tracking-wide shadow-lg">
                    ✨ Most Requested
                </div>
            )}

            <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg", gradient)}>
                <Icon className="w-7 h-7 text-white" />
            </div>

            <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-brand-400 transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>

            <ul className="space-y-2 mb-6">
                {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-brand-400 flex-shrink-0" />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group/btn flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:gap-3 transition-all"
            >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>
    );
}

export default function Services() {
    return (
        <section id="services" className="section-padding relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
                        What We Do
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                        Our Core <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From concept to deployment, Arshionix onix delivers end-to-end digital solutions that drive results and delight users.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <ServiceCard key={service.title} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
