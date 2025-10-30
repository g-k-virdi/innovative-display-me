import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    degree: "Master of Computer Science",
    institution: "University Name",
    period: "2020 - 2022",
    description: "Specialized in AI and Machine Learning with focus on practical applications.",
    achievements: ["GPA: 3.9/4.0", "Research Assistant", "Dean's List"],
  },
  {
    degree: "Bachelor of Software Engineering",
    institution: "College Name",
    period: "2016 - 2020",
    description: "Foundation in software development, algorithms, and system design.",
    achievements: ["Honors Graduate", "President of Tech Club", "Hackathon Winner"],
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
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

                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-foreground text-background text-sm"
                        >

                          {achievement}
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
