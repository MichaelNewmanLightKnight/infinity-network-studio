import { useEffect } from "react";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";

const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Portfolio - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Explore our works in progress and concept development representing our commitment to authentic and inspirational storytelling."
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Portfolio />
      </main>
    </div>
  );
};

export default PortfolioPage;