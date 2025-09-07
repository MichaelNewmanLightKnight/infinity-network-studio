import { useEffect } from "react";
import Header from "@/components/Header";
import Talents from "@/components/Talents";

const TalentsPage = () => {
  useEffect(() => {
    document.title = "Careers - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Join our team of cultural architects. Where creativity meets possibility in shaping Africa's creative economy."
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Talents />
      </main>
    </div>
  );
};

export default TalentsPage;