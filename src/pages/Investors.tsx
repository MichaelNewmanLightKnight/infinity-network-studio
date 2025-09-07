import { useEffect } from "react";
import Header from "@/components/Header";
import Investors from "@/components/Investors";

const InvestorsPage = () => {
  useEffect(() => {
    document.title = "Investors - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Investment opportunities in Africa's creative economy. Join us in building the future of global cultural content."
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Investors />
      </main>
    </div>
  );
};

export default InvestorsPage;