import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-image-new.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="h-screen flex items-center">
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-background p-8 lg:p-16">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-light mb-6 tracking-tight">
              Gurleen Kaur Virdi
            </h1>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light mb-8">
              Human-Centered Engineer
            </p>
            <p className="text-base text-muted-foreground mb-12 leading-relaxed">
              Blending user research, design, and data analytics to craft intuitive, 
              evidence-based experiences that put people first.
            </p>
            
            <div className="flex gap-4 mb-12">
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
                href="https://linkedin.com"
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

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 h-full relative overflow-hidden">
          <img
            src={heroImage}
            alt="Professional workspace showcasing human-centered engineering and design"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
