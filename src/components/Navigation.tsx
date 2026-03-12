import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background border-b border-border"
            : "bg-transparent"
        }`}
        ref={menuRef}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 sm:h-20">
            {/* Desktop nav */}
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
                  <Link to={item.path}>{item.label}</Link>
                </Button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden absolute right-4 z-50"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-200 ${isMobileMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`} />
                <X className={`absolute inset-0 transition-all duration-200 ${isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`} />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-200 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-45 bg-background border-b border-border md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ zIndex: 45 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
