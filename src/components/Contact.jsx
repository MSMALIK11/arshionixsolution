import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const contactInfo = [
        { icon: Mail, label: "Email Us", value: "hello@Arshionix nox.com", href: "mailto:hello@Arshionix nox.com" },
        { icon: Phone, label: "Call Us", value: "+92 300 1234567", href: "tel:+923001234567" },
        { icon: MapPin, label: "Location", value: "Pakistan — Remote Worldwide", href: "#" },
        { icon: Clock, label: "Response Time", value: "Within 24 hours", href: "#" },
    ];

    return (
        <section id="contact" className="section-padding relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
                        Contact
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                        Let's Build Something <span className="text-gradient">Together</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind? Tell us about it — our team will review your requirements and get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {contactInfo.map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-brand-500/30 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-shadow">
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{label}</p>
                                    <p className="font-semibold mt-0.5 group-hover:text-brand-400 transition-colors">{value}</p>
                                </div>
                            </a>
                        ))}

                        <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-500/10 to-violet-600/10 border border-brand-500/20">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-sm font-semibold text-green-400">Accepting New Projects</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Our team is currently open for new client projects. Let's discuss your vision!</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                                    <h3 className="font-heading text-2xl font-bold mb-2">Message Received!</h3>
                                    <p className="text-muted-foreground">Thanks for reaching out! Our team will get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" }); }}
                                        className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 text-white font-semibold"
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="flex items-center gap-2 mb-6">
                                        <MessageSquare className="w-5 h-5 text-brand-400" />
                                        <h3 className="font-heading text-xl font-bold">Send Us a Message</h3>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">Your Name *</label>
                                            <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                                            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@company.com"
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">Company / Organization</label>
                                        <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Company Name"
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm" />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">Service Needed</label>
                                            <select name="service" value={form.service} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm">
                                                <option value="">Select a service</option>
                                                <option>Web Development</option>
                                                <option>Software Development</option>
                                                <option>Android Development</option>
                                                <option>UI/UX Design</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">Budget Range</label>
                                            <select name="budget" value={form.budget} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm">
                                                <option value="">Select budget</option>
                                                <option>$500 - $1,000</option>
                                                <option>$1,000 - $3,000</option>
                                                <option>$3,000 - $10,000</option>
                                                <option>$10,000+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">Project Details *</label>
                                        <textarea name="message" required value={form.message} onChange={handleChange} rows={5}
                                            placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm resize-none" />
                                    </div>

                                    <button type="submit" disabled={loading}
                                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 text-white font-semibold hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70">
                                        {loading ? (
                                            <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                                        ) : (
                                            <><Send className="w-4 h-4" />Send Message</>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
