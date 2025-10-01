import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import ServicesPage from "./pages/Services";
import TalentsPage from "./pages/Talents";
import InvestorsPage from "./pages/Investors";
import InsidersOnlyPage from "./pages/InsidersOnly";
import ContactPage from "./pages/Contact";
import OurTeamPage from "./pages/OurTeam";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<TalentsPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/insiders" element={<InsidersOnlyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
