import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const footerLinks = {
    Services: ["Web Development", "Software Development", "Android Development", "UI/UX Design"],
    Company: ["About Us", "Our Team", "Portfolio", "Contact"],
    Connect: ["GitHub", "LinkedIn", "Twitter", "Email"],
};

export default function Footer() {
    const handleNav = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center shadow-lg">
                                <span className="text-white font-heading font-black text-base">A</span>
                            </div>
                            <span className="font-heading font-bold text-xl">
                                Arshi<span className="text-gradient">nix</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Arshionix is a full-service digital agency building world-class web apps, software, mobile apps, and UI/UX designs for clients worldwide.
                        </p>
                        <div className="flex gap-3">
                            {[Github, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#"
                                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-brand-400 hover:border-brand-400/50 hover:bg-brand-500/5 transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-heading font-bold text-sm mb-4 text-foreground">{category}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <button
                                            onClick={() => handleNav("#" + link.toLowerCase().replace(/[^a-z]/g, ""))}
                                            className="text-muted-foreground text-sm hover:text-brand-400 transition-colors"
                                        >
                                            {link}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Banner */}
            <div className="border-t border-border">
                <div className="container mx-auto px-6 py-10">
                    <div className="bg-gradient-to-r from-brand-500/10 via-violet-500/10 to-brand-500/10 border border-brand-500/20 rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="font-heading text-2xl font-bold mb-1">Ready to start your next project?</h3>
                            <p className="text-muted-foreground text-sm">Let's turn your vision into reality. Our team is ready to help.</p>
                        </div>
                        <button
                            onClick={() => handleNav("#contact")}
                            className="flex-shrink-0 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
                        >
                            Start a Project →
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-border">
                <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
                    <p>© 2025 Arshinox. All rights reserved.</p>
                    <p className="flex items-center gap-1.5">
                        Built with <Heart className="w-3.5 h-3.5 text-red-400 fill-current" /> by the Arshionix Team
                    </p>
                </div>
            </div>
        </footer>
    );
}
