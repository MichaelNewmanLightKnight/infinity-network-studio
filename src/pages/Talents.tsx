import { useEffect } from "react";
import Header from "@/components/Header";
import Talents from "@/components/Talents";

const TalentsPage = () => {
  useEffect(() => {
    document.title = "Careers - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Join our founding team at Infinity Network Studio. Where visionaries create tomorrow's content today."
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