import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO optimization
    document.title = "Infinity Network Studio - Where Stories Become Infinite";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Infinity Network Studio creates bold stories across film, podcasts, and documentaries. Africa-focused creative studio launching 2025 with global distribution outlook."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;