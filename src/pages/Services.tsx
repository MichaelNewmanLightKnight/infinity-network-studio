import { useEffect } from "react";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Comprehensive creative services from concept to distribution. Film production, podcasts, video creation and strategic positioning."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;