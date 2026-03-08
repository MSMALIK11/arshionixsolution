"use client";

import { Search, Palette, Code, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We learn your goals, users, and constraints so we can propose the right solution.",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Wireframes and prototypes you can click through — we align on the experience before code.",
  },
  {
    icon: Code,
    title: "Build",
    desc: "Sprint-based development with demos every two weeks. You see progress and give feedback early.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "We deploy, monitor, and hand over documentation so your team can own it long term.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    desc: "Post-launch support, maintenance, and iterations so your product keeps evolving.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            How We Work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            From Idea to <span className="text-gradient">Launch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A clear process so you always know what happens next — and so we deliver on time, every time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-brand-500/30 transition-all duration-300"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-500/30 to-transparent -translate-y-1/2 pointer-events-none" />
              )}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center mb-4 shadow-lg">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
