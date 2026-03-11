import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm">© 2025 Gurleen Kaur Virdi</p>
            <p className="text-sm opacity-90 mt-1">
              Human-Centered Engineer | UX · Research · Data-Driven Design
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-2 border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors rounded"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
