import { Github, Linkedin, Twitter, Code2, Smartphone, Palette, Layers } from "lucide-react";

const team = [
    {
        name: "Shoaibi",
        role: "Founder & CEO",
        specialty: "Full-Stack Engineering",
        icon: Code2,
        gradient: "from-brand-500 to-violet-600",
        initials: "SH",
        bio: "Visionary leader with expertise in modern web and software architecture. Drives the technical direction of every Arshionix project.",
        socials: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
        name: "Usman Ali",
        role: "Senior Android Developer",
        specialty: "Android & Mobile",
        icon: Smartphone,
        gradient: "from-green-400 to-emerald-600",
        initials: "UA",
        bio: "Kotlin expert building performant, beautiful Android apps. Brings extensive experience in mobile architecture and Play Store optimization.",
        socials: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
        name: "Zara Malik",
        role: "Lead UI/UX Designer",
        specialty: "Design & Prototyping",
        icon: Palette,
        gradient: "from-pink-400 to-rose-500",
        initials: "ZM",
        bio: "Creative force behind Arshinox's beautiful interfaces. Specializes in user research, design systems, and Figma prototypes that convert.",
        socials: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
        name: "Hamza Raza",
        role: "Backend & DevOps Engineer",
        specialty: "Cloud & Infrastructure",
        icon: Layers,
        gradient: "from-amber-400 to-orange-500",
        initials: "HR",
        bio: "Infrastructure wizard keeping everything fast, secure, and scalable. Expert in Node.js, PostgreSQL, Kubernetes, and AWS.",
        socials: { github: "#", linkedin: "#", twitter: "#" },
    },
];

function TeamCard({ member }) {
    const { name, role, specialty, icon: Icon, gradient, initials, bio, socials } = member;

    return (
        <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300 card-hover">
            {/* Card header */}
            <div className={`relative h-32 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 flex items-center justify-center">
                    <span className="font-heading font-black text-3xl text-white">{initials}</span>
                </div>
                <div className="absolute bottom-0 right-0 p-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="mb-1">
                    <h3 className="font-heading text-lg font-bold group-hover:text-brand-400 transition-colors">{name}</h3>
                    <p className="text-brand-400 text-sm font-semibold">{role}</p>
                </div>
                <span className="inline-block text-xs px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-3">
                    {specialty}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{bio}</p>

                {/* Socials */}
                <div className="flex gap-2">
                    {[
                        { icon: Github, href: socials.github },
                        { icon: Linkedin, href: socials.linkedin },
                        { icon: Twitter, href: socials.twitter },
                    ].map(({ icon: SIcon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-brand-400 hover:border-brand-400/50 transition-all"
                        >
                            <SIcon className="w-3.5 h-3.5" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <section id="team" className="section-padding relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
                        Our Team
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                        Meet the <span className="text-gradient">Experts</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A talented team of developers and designers united by a passion for building exceptional digital products.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member) => (
                        <TeamCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
}
