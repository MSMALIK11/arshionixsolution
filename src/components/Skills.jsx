import { cn } from "../lib/utils";

const skillGroups = [
    {
        category: "Frontend",
        color: "from-brand-400 to-brand-600",
        skills: [
            { name: "React / Next.js", level: 95 },
            { name: "Vue.js", level: 80 },
            { name: "HTML & CSS", level: 98 },
            { name: "TypeScript", level: 85 },
        ],
    },
    {
        category: "Backend",
        color: "from-violet-400 to-violet-600",
        skills: [
            { name: "Node.js / Express", level: 90 },
            { name: "Python / Django", level: 75 },
            { name: "GraphQL", level: 80 },
            { name: "PostgreSQL / MongoDB", level: 88 },
        ],
    },
    {
        category: "Mobile",
        color: "from-green-400 to-emerald-600",
        skills: [
            { name: "Android / Kotlin", level: 85 },
            { name: "React Native", level: 80 },
            { name: "Firebase", level: 88 },
            { name: "Jetpack Compose", level: 72 },
        ],
    },
    {
        category: "Design & Tools",
        color: "from-pink-400 to-rose-500",
        skills: [
            { name: "Figma", level: 90 },
            { name: "UI/UX Design", level: 88 },
            { name: "Git / GitHub", level: 95 },
            { name: "AWS / Vercel", level: 78 },
        ],
    },
];

const techLogos = [
    "React", "Next.js", "Node.js", "Python", "Kotlin",
    "Figma", "MongoDB", "PostgreSQL", "Firebase", "AWS",
    "TypeScript", "GraphQL",
];

function SkillBar({ name, level, color, index }) {
    return (
        <div className="group" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium">{name}</span>
                <span className="text-xs text-muted-foreground font-semibold">{level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                    className={cn("h-full bg-gradient-to-r rounded-full transition-all duration-1000 ease-out", color)}
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
                        Expertise
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                        Skills & <span className="text-gradient">Technologies</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A broad tech stack refined through real-world projects and continuous learning.
                    </p>
                </div>

                {/* Skill Groups */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skillGroups.map((group) => (
                        <div key={group.category} className="bg-card border border-border rounded-2xl p-6 hover:border-brand-500/30 transition-colors">
                            <div className={cn("inline-flex px-3 py-1 rounded-lg bg-gradient-to-r text-white text-xs font-bold mb-5", group.color)}>
                                {group.category}
                            </div>
                            <div className="space-y-4">
                                {group.skills.map((skill, i) => (
                                    <SkillBar key={skill.name} {...skill} color={group.color} index={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech pills */}
                <div className="text-center">
                    <p className="text-muted-foreground text-sm font-medium mb-6 tracking-wider uppercase">Technologies I Work With</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techLogos.map((tech, i) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-semibold hover:border-brand-500/50 hover:text-brand-400 hover:bg-brand-500/5 transition-all duration-200 cursor-default"
                                style={{ animationDelay: `${i * 0.05}s` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
