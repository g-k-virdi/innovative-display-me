import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    degree: "Bachelor of Applied Science, Industrial Engineering",
    institution: "University of Toronto",
    period: "September 2022 – June 2026",
    description: "Focus: Human Factors",
    achievements: [
      "Human Factors Engineering",
      "Engineering Psychology",
      "Cognitive Psychology",
      "Ergonomic Design of Information Systems",
      "Workplace Ergonomics",
      "Design & Analysis of Information Systems",
      "Statistics",
      "Probability",
      "Data Science",
      "Introduction to Machine Learning",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in border-l-4 border-l-foreground rounded-none"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-foreground flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-background" />

                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="font-medium">{edu.institution}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-foreground/80">
                      {edu.description}
                    </p>

                    <p className="text-sm text-muted-foreground mb-4">
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-secondary text-foreground text-sm border border-border"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
