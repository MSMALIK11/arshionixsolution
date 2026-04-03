import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
