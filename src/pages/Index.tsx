import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

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
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Index;