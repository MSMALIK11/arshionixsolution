import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Twitter, Sparkles, Users } from "lucide-react";

const services = ["Web Development", "Software Engineering", "Android Apps", "UI/UX Design"];

export default function Hero() {
    const roleRef = useRef(null);

    useEffect(() => {
        let index = 0;
        let charIndex = 0;
        let deleting = false;
        const el = roleRef.current;
        if (!el) return;

        const type = () => {
            const current = services[index];
            if (!deleting) {
                el.textContent = current.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    deleting = true;
                    setTimeout(type, 1800);
                    return;
                }
            } else {
                el.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    deleting = false;
                    index = (index + 1) % services.length;
                }
            }
            setTimeout(type, deleting ? 60 : 100);
        };

        const timer = setTimeout(type, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleNavClick = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-hero-pattern noise-bg"
        >
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-3xl" />
            </div>

            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 min-h-screen py-24">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6 animate-fade-in-up">
                            <Sparkles className="w-4 h-4" />
                            Now Accepting New Projects
                        </div>

                        {/* Headline */}
                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            We Build
                            <br />
                            <span className="text-gradient">Digital Products</span>
                            <br />
                            That Matter
                        </h1>

                        {/* Typewriter */}
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-xl md:text-2xl font-semibold text-muted-foreground mb-6 animate-fade-in-up h-10" style={{ animationDelay: "0.2s" }}>
                            <span className="text-foreground/60">Specializing in</span>
                            <span ref={roleRef} className="text-brand-400" />
                            <span className="w-0.5 h-7 bg-brand-400 animate-pulse ml-0.5" />
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                            <strong className="text-foreground">Arshinox</strong> is a full-service digital agency delivering world-class web applications, scalable software, native Android apps, and stunning UI/UX designs — all under one roof.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                            <button
                                onClick={() => handleNavClick("#portfolio")}
                                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                View Our Work
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => handleNavClick("#contact")}
                                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-background/50 backdrop-blur-sm font-semibold hover:bg-accent hover:-translate-y-1 transition-all duration-300"
                            >
                                Get a Free Quote
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                            {[
                                { icon: Github, href: "#", label: "GitHub" },
                                { icon: Linkedin, href: "#", label: "LinkedIn" },
                                { icon: Twitter, href: "#", label: "Twitter" },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-brand-400 hover:border-brand-400/50 hover:bg-brand-500/5 transition-all duration-200"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right - Visual */}
                    <div className="flex-shrink-0 relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Rotating ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-400/30 animate-spin" style={{ animationDuration: "20s" }} />
                            <div className="absolute inset-4 rounded-full border border-violet-500/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />

                            {/* Logo container */}
                            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-500 via-violet-600 to-brand-700 p-1 shadow-2xl shadow-brand-500/40 animate-float">
                                <div className="w-full h-full rounded-full bg-gradient-to-b from-brand-900 to-background flex flex-col items-center justify-center gap-1">
                                    <span className="font-heading font-black text-6xl text-gradient select-none leading-none">AS</span>
                                    <span className="font-heading font-bold text-sm text-white/60 tracking-[0.2em]">ARSHIONIX SOLUTIONS</span>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-4 py-2 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                                <p className="text-xs text-muted-foreground font-medium">Projects</p>
                                <p className="text-2xl font-bold text-gradient">50+</p>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-2 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                                <div className="flex items-center gap-1.5">
                                    <Users className="w-4 h-4 text-brand-400" />
                                    <p className="font-bold text-gradient">Team</p>
                                </div>
                                <p className="text-xs text-muted-foreground">of experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
                <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Scroll</span>
                <div className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center pt-1">
                    <div className="w-1 h-2 bg-brand-400 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
