import Link from "next/link";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="dark min-h-screen">
      <Navbar />
      <main>
        <section className="section-padding pt-28">
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Our work
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              A selection of our work across web, software, mobile, and design. Case studies and demos are being added.
            </p>
            <Button asChild variant="secondary" size="lg" className="rounded-xl">
              <Link href="/#contact">
                Start your project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
