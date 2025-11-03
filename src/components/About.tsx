import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase, Wrench } from "lucide-react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">Design Approach</h3>
            <p className="text-foreground/90 leading-relaxed">
              Empathy and evidence guide my design. My process begins by understanding people — their motivations, needs, and contexts — and evolves through ideation, iteration, and testing. My background in Industrial Engineering helps me combine psychology, design principles, and data-driven insights to create human-centered experiences.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">Design Philosophy</h3>
            <p className="text-foreground/90 leading-relaxed">
              I believe accessibility, clarity, and context-awareness aren't add-ons, but core responsibilities of any product — because a product is only as good as it can be used. Good design isn't just about appearance — it's about functionality that respects how people think, feel, and interact.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">Beyond Design</h3>
            <p className="text-foreground/90 leading-relaxed">
              Curiosity drives me. I love learning for its own sake — from psychology and language to physics and philosophy. Exploring things just out of love for learning helps me stay creative and grounded. Philosophy, in particular, has shaped how I think — it teaches me to question assumptions and look deeper into multiple perspectives. I also enjoy sketching in my free time.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <Button
              onClick={() => scrollToSection("skills")}
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground h-auto py-6 flex flex-col gap-2"
            >
              <Wrench className="w-8 h-8" />
              <span className="font-semibold">View Skills & Tools</span>
            </Button>
            <Button
              onClick={() => scrollToSection("experience")}
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground h-auto py-6 flex flex-col gap-2"
            >
              <Briefcase className="w-8 h-8" />
              <span className="font-semibold">View Experience</span>
            </Button>
            <Button
              onClick={() => scrollToSection("education")}
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground h-auto py-6 flex flex-col gap-2"
            >
              <GraduationCap className="w-8 h-8" />
              <span className="font-semibold">View Education</span>
            </Button>
          </div>

          <div className="flex justify-center pt-2">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Include Skills, Experience, and Education sections */}
        <Skills />
        <Experience />
        <Education />
      </div>
    </section>
  );
};

export default About;
