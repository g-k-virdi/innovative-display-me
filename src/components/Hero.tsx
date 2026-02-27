import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-sm tracking-widest uppercase text-accent mb-4 font-medium">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-4 tracking-tight">
            Gurleen Kaur Virdi
          </h1>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="text-xl lg:text-2xl text-muted-foreground font-light mb-4">
            Human-Centered Engineer
          </p>
          <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-xl">
            Blending user research, design, and data analytics to craft intuitive,
            evidence-based experiences that put people first.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <Button
              size="lg"
              onClick={() => navigate("/projects")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/about")}
              className="px-8 border-border hover:bg-accent hover:text-accent-foreground"
            >
              About Me
            </Button>
          </div>

          {/* Featured */}
          <button
            onClick={() => navigate("/case-study/urgent-care-pal")}
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-10"
          >
            <span className="underline underline-offset-4 decoration-border group-hover:decoration-accent transition-colors">
              Featured: Urgent Care Pal Case Study
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gurleen-kaur-virdi-a918a12ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
