import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-light mb-6 tracking-tight">
            Gurleen Kaur Virdi
          </h1>
          <div className="w-20 h-1 bg-accent mb-6"></div>
          <p className="text-xl lg:text-2xl text-muted-foreground font-light mb-8">
            Human-Centered Engineer
          </p>
          <p className="text-base text-muted-foreground mb-12 leading-relaxed max-w-xl">
            Blending user research, design, and data analytics to craft intuitive, 
            evidence-based experiences that put people first.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              size="lg"
              onClick={() => navigate("/projects")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-8"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/about")}
              className="rounded-none px-8 border-border hover:bg-accent hover:text-accent-foreground"
            >
              About Me
            </Button>
          </div>

          {/* Featured Case Study Link */}
          <button
            onClick={() => navigate("/case-study/urgent-care-pal")}
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-12"
          >
            <span>Featured: Urgent Care Pal Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex gap-6">
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
