import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import UTESCACaseStudy from "./pages/UTESCACaseStudy";
import UHNCaseStudy from "./pages/UHNCaseStudy";
import WayfindingCaseStudy from "./pages/WayfindingCaseStudy";
import BIACaseStudy from "./pages/BIACaseStudy";
import NHLCaseStudy from "./pages/NHLCaseStudy";
import PollutionCaseStudy from "./pages/PollutionCaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study/urgent-care-pal" element={<CaseStudy />} />
          <Route path="/case-study/utesca-portal" element={<UTESCACaseStudy />} />
          <Route path="/case-study/uhn-inventory" element={<UHNCaseStudy />} />
          <Route path="/case-study/wayfinding" element={<WayfindingCaseStudy />} />
          <Route path="/case-study/bia-tool-redesign" element={<BIACaseStudy />} />
          <Route path="/case-study/nhl-draft-prediction" element={<NHLCaseStudy />} />
          <Route path="/case-study/pollution-forecasting" element={<PollutionCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
