import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <div className="hidden md:flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-2 py-2 rounded-full border border-border">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant="ghost"
                className={`rounded-full px-6 hover:bg-accent hover:text-accent-foreground transition-all ${
                  location.pathname === item.path ? "bg-accent text-accent-foreground" : ""
                }`}
              >
                <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden absolute right-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  asChild
                  variant="ghost"
                  className="justify-start hover:bg-secondary"
                >
                  <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
