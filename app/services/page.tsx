import Link from "next/link";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { serviceVerticals } from "@/lib/service-verticals";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="section-padding pt-28">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
              What we do
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Four focused tracks — each with its own page for problem, solution, features, and booking a call.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {serviceVerticals.map((v) => (
                <Button key={v.slug} variant="outline" size="sm" className="rounded-full border-border" asChild>
                  <Link href={`/${v.slug}`}>{v.navLabel}</Link>
                </Button>
              ))}
            </div>
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/#contact">
                Get in touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
