import { useEffect } from "react";
import Header from "@/components/Header";
import OurTeam from "@/components/OurTeam";
import Footer from "@/components/Footer";

const OurTeamPage = () => {
  useEffect(() => {
    document.title = "Our Team - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Meet the talented team behind Infinity Network Studio. Creative professionals dedicated to transforming ideas into extraordinary stories."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
};

export default OurTeamPage;
