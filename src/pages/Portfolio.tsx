import { useEffect } from "react";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Portfolio - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Explore our works in progress and concept development representing our commitment to authentic and inspirational storytelling."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;