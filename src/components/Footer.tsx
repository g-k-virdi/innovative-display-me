import { ArrowUp, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/gurleen-kaur-virdi-a918a12ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-primary-foreground/25" />
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

          <div className="text-center space-y-1">
            <p className="text-sm">© 2026 Gurleen Kaur Virdi</p>
            <p className="text-xs opacity-70">
              Human-Centered Engineer · UX · Research · Data-Driven Design
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2 text-sm border border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-colors rounded-full"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
