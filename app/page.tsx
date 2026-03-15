import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import BackgroundShapes from "@/components/BackgroundShapes";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <BackgroundShapes />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ScrollReveal>
            <TrustedBy />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Services />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <About />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Portfolio />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Process />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Testimonials />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <FAQ />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Contact />
          </ScrollReveal>
        </main>
        <Footer />
        <FloatingCTA />
        <BackToTop />
      </div>
    </div>
  );
}
