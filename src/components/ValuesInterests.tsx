import { Heart, Code, Palette, Globe, Coffee, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const valuesData = [
  {
    icon: Heart,
    title: "User-Centric Design",
    description: "Creating experiences that put people first and solve real problems.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, efficient code that stands the test of time.",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "Always exploring new technologies and methodologies.",
  },
];

const interestsData = [
  {
    icon: Palette,
    title: "Design Systems",
    description: "Building scalable and consistent design frameworks.",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Contributing to and learning from the developer community.",
  },
  {
    icon: Coffee,
    title: "Minimalism",
    description: "Finding beauty in simplicity and purposeful design.",
  },
];

const ValuesInterests = () => {
  return (
    <section id="values" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principles that guide my work and decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valuesData.map((value, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in group rounded-none border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground group-hover:bg-accent transition-colors duration-300 mb-6">
                    <value.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Interests
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What drives my passion and curiosity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {interestsData.map((interest, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in group rounded-none border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground group-hover:bg-accent transition-colors duration-300 mb-6">
                    <interest.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                  <p className="text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesInterests;
