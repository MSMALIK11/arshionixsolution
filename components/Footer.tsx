"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "Software Development", href: "#services" },
    { label: "Android Development", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "GitHub", href: site.social.github },
    { label: "LinkedIn", href: site.social.linkedin },
    { label: "Twitter", href: site.social.twitter },
    { label: "Email", href: "mailto:info@arshionix.com" },
  ],
};

const techStack = ["React", "Next.js", "Node.js", "Kotlin", "Figma"];

export default function Footer() {
  const handleNav = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-black text-base">A</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Arshio<span className="text-gradient">nix</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Arshionix is a full-service digital agency building world-class web apps, software, mobile apps, and UI/UX designs for clients worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-brand-400 hover:border-brand-400/50 hover:bg-brand-500/5 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-brand-400 hover:border-brand-400/50 hover:bg-brand-500/5 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-brand-400 hover:border-brand-400/50 hover:bg-brand-500/5 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-bold text-sm mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Button
                      variant="ghost"
                      className="text-muted-foreground hover:text-brand-400 p-0 h-auto font-normal text-sm"
                      onClick={() => handleNav(href)}
                    >
                      {label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Built with</p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="text-xs px-3 py-1 rounded-lg bg-muted/50 text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-10">
          <div className="bg-gradient-to-r from-brand-500/10 via-violet-500/10 to-brand-500/10 border border-brand-500/20 rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-1">Ready to start your next project?</h3>
              <p className="text-muted-foreground text-sm">Let&apos;s turn your vision into reality. Our team is ready to help.</p>
            </div>
            <Button
              onClick={() => handleNav("#contact")}
              className="flex-shrink-0 rounded-xl shadow-xl whitespace-nowrap"
            >
              Start a Project →
            </Button>
          </div>
        </div>
      </div>

    </footer>
  );
}
