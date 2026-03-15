import Link from "next/link";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="section-padding pt-28">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Who we are
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="text-gradient">Arshionix</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              We build digital products that matter — from idea to launch. Learn about our team, values, and how we work with clients worldwide.
            </p>
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/#contact">
                Get in touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </div>
  );
}
