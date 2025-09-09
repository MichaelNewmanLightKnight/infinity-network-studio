import { useEffect } from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", 
      "Get in touch with Infinity Network Studio. Whether you're an investor, creative, client, or supporter - let's start a conversation."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;