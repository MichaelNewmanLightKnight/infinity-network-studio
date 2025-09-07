import { useEffect } from "react";
import Header from "@/components/Header";
import Services from "@/components/Services";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Comprehensive creative services from concept to distribution. Film production, podcasts, video creation and strategic positioning."
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Services />
      </main>
    </div>
  );
};

export default ServicesPage;