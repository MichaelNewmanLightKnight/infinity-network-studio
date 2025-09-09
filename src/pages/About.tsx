import { useEffect } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Learn about Infinity Network Studio's mission to amplify African creativity through authentic storytelling and global distribution."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;