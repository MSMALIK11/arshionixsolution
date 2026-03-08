"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site } from "@/lib/site";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "info@arshionix.com", href: "mailto:info@arshionix.com" },
  { icon: Phone, label: "Call Us", value: "+91 7300519548", href: "tel:+917300519548" },
  { icon: MapPin, label: "Location", value: "India — Remote Worldwide", href: undefined },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: undefined },
];

const whatHappensNext = [
  "We reply within 24 hours with next steps.",
  "Short discovery call to understand your project.",
  "You receive a tailored proposal and timeline.",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Tell us about it — our team will review your requirements and get back to you within 24 hours. Your details stay private.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
              <Wrapper
                key={label}
                {...(href ? { href } : {})}
                className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-brand-500/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-shadow">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{label}</p>
                  <p className="font-semibold mt-0.5 group-hover:text-brand-400 transition-colors">{value}</p>
                </div>
              </Wrapper>
              );
            })}

            <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-500/10 to-violet-600/10 border border-brand-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Accepting New Projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Our team is currently open for new client projects. Let&apos;s discuss your vision!
              </p>
            </div>
            {site.calendly && (
              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-border bg-card hover:border-brand-500/30 transition-all font-semibold text-brand-400"
              >
                <Calendar className="w-5 h-5" />
                Book a free call
              </a>
            )}
          </div>

          <div className="lg:col-span-3">
            <Card className="p-8 shadow-xl">
              <CardContent className="p-0">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                    <h3 className="font-heading text-2xl font-bold mb-2">Message Received!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out! Our team will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        company: "",
                        service: "",
                        projectType: "",
                        budget: "",
                        message: "",
                      });
                      }}
                      className="mt-6 rounded-xl"
                    >
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-5 h-5 text-brand-400" />
                      <h3 className="font-heading text-xl font-bold">Send Us a Message</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">We&apos;ll reply within 24 hours. Your details stay private.</p>
                    {error && (
                      <p className="text-sm text-destructive mb-4">{error}</p>
                    )}

                    <div className="space-y-1.5">
                      <Label>Full name *</Label>
                      <Input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label>Email *</Label>
                      <Input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label>Company</Label>
                      <Input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label>Project type</Label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0"
                      >
                        <option value="">Select project type</option>
                        <option>Web Development</option>
                        <option>Software Development</option>
                        <option>Android App</option>
                        <option>UI/UX Design</option>
                        <option>AI / ML</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Select service</Label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0"
                      >
                        <option value="">Select a service</option>
                        <option>Web Development</option>
                        <option>Software Development</option>
                        <option>Android Development</option>
                        <option>UI/UX Design</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Budget</Label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0"
                      >
                        <option value="">Select budget range</option>
                        <option>Under $10,000</option>
                        <option>$10,000 – $25,000</option>
                        <option>$25,000 – $50,000</option>
                        <option>$50,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Tell us about your project *</Label>
                      <Textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl py-3.5"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="text-sm font-semibold text-foreground mb-3">What happens next?</p>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        {whatHappensNext.map((step, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="font-bold text-brand-400">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
