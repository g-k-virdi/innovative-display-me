import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ValuesInterests from "@/components/ValuesInterests";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isNavigating, setIsNavigating] = useState(false);

  const sections = {
    home: <Hero />,
    education: <Education />,
    experience: <Experience />,
    values: <ValuesInterests />,
    projects: <Projects />,
  };

  // Handle navbar clicks - fade transition
  const handleNavClick = (sectionId: string) => {
    setIsNavigating(true);
    setActiveSection(sectionId);
    setTimeout(() => setIsNavigating(false), 300);
  };

  // Detect manual scroll and update active section
  useEffect(() => {
    if (isNavigating) return; // Don't detect scroll during navigation

    const handleScroll = () => {
      const sections = ["home", "education", "experience", "values", "projects"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavigating]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={handleNavClick} />
      
      <div className="relative">
        {Object.entries(sections).map(([key, component]) => (
          <div
            key={key}
            id={key}
            className={`transition-opacity duration-300 ${
              activeSection === key ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            {component}
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
