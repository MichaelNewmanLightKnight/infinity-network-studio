import { useEffect } from "react";
import Header from "@/components/Header";
import Talents from "@/components/Talents";
import Footer from "@/components/Footer";

const TalentsPage = () => {
  useEffect(() => {
    document.title = "Careers - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Join our founding team at Infinity Network Studio. Where visionaries create tomorrow's content today."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Talents />
      </main>
      <Footer />
    </div>
  );
};

export default TalentsPage;