const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Gurleen Kaur Virdi
          </p>
          <p className="text-sm text-muted-foreground">
            Human-Centered Engineer | UX · Research · Data-Driven Design
          </p>
          <button
            onClick={scrollToTop}
            className="text-sm text-accent hover:underline transition-all"
          >
            [Back to Top]
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
