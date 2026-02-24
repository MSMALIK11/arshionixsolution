import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Ahmed Hassan",
        role: "CEO, TechStart Dubai",
        avatar: "AH",
        rating: 5,
        text: "Arshionix delivered our e-commerce platform ahead of schedule with exceptional quality. Their team's communication and attention to detail made the entire process seamless. Highly recommend!",
        color: "from-brand-500 to-violet-600",
    },
    {
        name: "Sarah Mitchell",
        role: "Product Manager, AppNova",
        avatar: "SM",
        rating: 5,
        text: "We hired Arshionix for our Android app and the result was outstanding. The app is beautifully designed, performs flawlessly, and our users absolutely love it. Will definitely work with them again!",
        color: "from-violet-500 to-pink-500",
    },
    {
        name: "Bilal Khan",
        role: "Founder, DesignHub",
        avatar: "BK",
        rating: 5,
        text: "The UI/UX designs Arshionix created for our SaaS product are world-class. They deeply understood our target audience and translated that into an intuitive, beautiful interface.",
        color: "from-green-500 to-emerald-600",
    },
    {
        name: "Priya Sharma",
        role: "CTO, DataVault Inc.",
        avatar: "PS",
        rating: 5,
        text: "Arshionix built our entire backend infrastructure with incredible precision. The system handles thousands of concurrent users effortlessly. A truly professional team from start to finish.",
        color: "from-amber-500 to-orange-500",
    },
];

function TestimonialCard({ testimonial }) {
    const { name, role, avatar, rating, text, color } = testimonial;
    return (
        <div className="group relative bg-card border border-border rounded-2xl p-6 hover:border-brand-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/10">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-400/20 group-hover:text-brand-400/40 transition-colors" />

            <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{text}"</p>

            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {avatar}
                </div>
                <div>
                    <p className="font-semibold text-sm">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
                        Testimonials
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                        What Our Clients <span className="text-gradient">Say</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don't just take our word for it — here's what our clients say about working with Arshionix.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.name} testimonial={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
