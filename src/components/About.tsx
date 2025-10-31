import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-12 animate-fade-in">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-accent">Design Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empathy and evidence guide my design. My process begins by understanding people — their motivations, needs, and contexts — and evolves through ideation, iteration, and testing.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              My background in Industrial Engineering, with a focus on Human Factors, helps me combine psychology, design principles, and data-driven insights to create human-centered experiences.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-accent">Design Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe accessibility, clarity, and context-awareness aren't add-ons, but core responsibilities of any product — because a product is only as good as it can be used.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Good design isn't just about appearance — it's about functionality that respects how people think, feel, and interact.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-accent">Beyond Design</h3>
            <p className="text-muted-foreground leading-relaxed">
              Curiosity drives me. I love learning for its own sake — from psychology and philosophy to physics and language. Exploring things just out of love for learning helps me stay creative and grounded. I also enjoy sketching in my free time.
            </p>
          </div>

          <div className="flex justify-center pt-8">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-8"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
