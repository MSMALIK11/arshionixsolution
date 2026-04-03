"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dr. A. Rahman",
    role: "Private practice",
    avatar: "AR",
    rating: 5,
    text: "Patients find us online now without confusion. The site is clean, loads fast on phones, and booking is obvious — exactly what we needed for the clinic.",
    color: "from-brand-500 to-violet-600",
  },
  {
    name: "Maya K.",
    role: "Local services business",
    avatar: "MK",
    rating: 5,
    text: "We finally have a site that explains what we do in the first screen. Inquiries doubled compared to our old template. Scope and timeline were clear the whole way.",
    color: "from-violet-500 to-purple-600 dark:from-violet-400 dark:to-pink-500",
  },
  {
    name: "James O.",
    role: "Consultant & speaker",
    avatar: "JO",
    rating: 5,
    text: "One flagship site for my story, talks, and booking. It feels like me, not a generic portfolio — and I can update sections without rebuilding from scratch.",
    color: "from-green-500 to-emerald-600",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  const { name, role, avatar, rating, text, color } = testimonial;
  return (
    <Card className="group relative p-6 hover:border-brand-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/10">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-400/20 group-hover:text-brand-400/40 transition-colors" />
      <CardContent className="p-0">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">&quot;{text}&quot;</p>
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
          >
            {avatar}
          </div>
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Client voices
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-gradient">trust & clarity</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Representative feedback from healthcare, business, school, and personal-brand website projects — the
            areas we focus on most.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
