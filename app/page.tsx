import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import BackgroundShapes from "@/components/BackgroundShapes";

/** Set to true when you want “Client voices” / testimonials back on the homepage. */
const SHOW_TESTIMONIALS = false;

export default function Home() {
  return (
    <div className="min-h-hero relative">
      <BackgroundShapes />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ScrollReveal delay={0.05}>
            <WhoWeWorkWith />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Services />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <FeaturedProjects />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <About />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Process />
          </ScrollReveal>
          {SHOW_TESTIMONIALS && (
            <ScrollReveal delay={0.1}>
              <Testimonials />
            </ScrollReveal>
          )}
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
