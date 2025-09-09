import { useEffect } from "react";
import Header from "@/components/Header";
import Investors from "@/components/Investors";
import Footer from "@/components/Footer";

const InvestorsPage = () => {
  useEffect(() => {
    document.title = "Investors - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Investment opportunities in Africa's creative economy. Join us in building the future of global cultural content."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Investors />
      </main>
      <Footer />
    </div>
  );
};

export default InvestorsPage;