"use client";

import { Award, Users, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Award, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Globe, value: "10+", label: "Countries Served" },
  { icon: Star, value: "5★", label: "Average Rating" },
];

const values = [
  { title: "Quality First", desc: "We never ship anything we're not proud of." },
  { title: "On-Time Delivery", desc: "Deadlines are a promise, not a suggestion." },
  { title: "Transparent Communication", desc: "You're always in the loop, every step of the way." },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-violet-600/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-brand-600/20 rounded-3xl -rotate-3" />
              <Card className="relative w-full h-full flex items-center justify-center overflow-hidden shadow-2xl rounded-3xl border-border">
                <CardContent className="text-center p-8">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 mx-auto mb-6 flex items-center justify-center shadow-xl">
                    <span className="font-heading font-black text-5xl text-white">A</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-1">Arshionix</h3>
                  <p className="text-muted-foreground text-sm mb-4">Digital Agency & Software Studio</p>
                  <div className="space-y-2">
                    {values.map((v) => (
                      <div key={v.title} className="flex items-start gap-2 text-left p-2 rounded-lg bg-muted/40">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold">{v.title}</p>
                          <p className="text-xs text-muted-foreground">{v.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="absolute -top-5 -right-5 bg-card border border-brand-500/30 rounded-2xl px-4 py-2 shadow-xl">
                <p className="text-xs text-muted-foreground">Founded</p>
                <p className="font-bold text-brand-400">2022</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Who We Are
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              A Team Passionate About{" "}
              <span className="text-gradient">Digital Excellence</span>
            </h2>
            <p className="text-brand-400 font-semibold mb-4">
              We&apos;re the technical partner that ships on time and stays until it&apos;s right.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                <strong className="text-foreground">Arshionix</strong> is a full-service digital agency built by a team of passionate developers, designers, and engineers who love solving complex problems with elegant solutions.
              </p>
              <p>
                Founded by Shoaibi, our agency has grown into a collaborative team delivering world-class web apps, robust software systems, native Android applications, and intuitive UI/UX designs for clients across the globe.
              </p>
              <p>
                We work as an extension of your team — aligned with your goals, committed to your success, and obsessed with quality at every level.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <Card key={label} className="text-center p-4 hover:border-brand-500/30 transition-colors">
                  <CardContent className="p-0">
                    <Icon className="w-5 h-5 text-brand-400 mx-auto mb-2" />
                    <p className="font-heading text-2xl font-bold text-gradient">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="rounded-xl shadow-xl"
            >
              Start a Project With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
