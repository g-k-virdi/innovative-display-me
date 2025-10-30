import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experienceData = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical excellence.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description:
      "Developed responsive user interfaces and implemented modern design systems. Collaborated with UX designers to create intuitive user experiences.",
    technologies: ["React", "JavaScript", "CSS", "Figma", "Git"],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description:
      "Built and maintained multiple client websites. Gained experience in full project lifecycle from planning to deployment.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />


            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-slide-in-left"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-5 h-5 bg-foreground border-4 border-background hidden sm:block" />

                  <Card className="sm:ml-20 overflow-hidden hover:shadow-lg transition-all duration-300 group rounded-none border-2">

                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 sm:hidden">
                          <div className="w-12 h-12 bg-foreground flex items-center justify-center">

                            <Briefcase className="w-6 h-6 text-background" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-accent transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-4">
                            <span className="font-medium">{exp.company}</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-foreground/80 mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-sm hover:bg-foreground hover:text-background transition-colors"
                          >

                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
