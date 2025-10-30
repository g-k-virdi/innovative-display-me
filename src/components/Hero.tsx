import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center pt-20">
      <div className="w-full h-full flex">
        {/* Left Side - Text Content - Always 50% */}
        <div className="w-1/2 h-full flex items-center justify-center bg-background p-8 lg:p-16">

          <div className="max-w-xl animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-light mb-6 tracking-tight">
              Your Name
            </h1>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light mb-8">
              Creative Developer & Designer
            </p>
            <p className="text-base text-muted-foreground mb-12 leading-relaxed">
              Crafting digital experiences with precision and elegance. 
              Where creativity meets functionality.
            </p>
            
            <div className="flex gap-4 mb-12">
              <Button 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8"
                onClick={() => scrollToSection("projects")}
              >
                View Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-none px-8 border-foreground hover:bg-foreground hover:text-background"
                onClick={() => scrollToSection("experience")}
              >
                About Me
              </Button>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image - Always 50% */}
        <div className="w-1/2 h-full relative overflow-hidden">

          <img
            src={heroImage}
            alt="Professional workspace showcasing creativity and technical expertise"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
