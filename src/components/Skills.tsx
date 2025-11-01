import { Palette, BarChart3, Users, Wrench, Code, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Skills = () => {
  const skillCategories = [
    {
      title: "UX Design & Research",
      icon: Palette,
      skills: [
        "Wireframing",
        "Prototyping",
        "UX Research",
        "Journey Mapping",
        "Usability Testing",
        "Heuristic Evaluation",
        "Task Analysis",
        "HCI Principles",
        "Information Architecture",
        "Information Theory",
        "UML Diagrams",
        "Storyboarding",
        "Persona Development",
      ],
    },
    {
      title: "Data Analytics",
      icon: BarChart3,
      skills: [
        "Exploratory Data Analysis",
        "Predictive Modelling",
        "Time-Series Forecasting",
        "Data Visualization",
        "Storytelling with Data",
      ],
    },
    {
      title: "Project & Product Management",
      icon: Users,
      skills: [
        "Agile Workflow",
        "Team Collaboration",
        "Stakeholder Communication",
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: [
        "Figma",
        "Tableau",
        "Jupyter Notebook",
        "GitHub",
        "Excel",
        "Jira",
        "Google Suite",
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "R", "Java", "MATLAB"],
    },
    {
      title: "Core Competencies",
      icon: Lightbulb,
      skills: [
        "Team Work",
        "Communication",
        "Report Writing",
        "Presentation",
        "Critical Thinking",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="border-2 border-border hover:shadow-xl hover:border-accent transition-all duration-300 animate-scale-in bg-card overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-accent/10 border-2 border-accent rounded">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.skills.length} skills
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        View Skills
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-accent" />
                          {category.title}
                        </DialogTitle>
                        <DialogDescription>
                          Complete list of skills in this category
                        </DialogDescription>
                      </DialogHeader>
                      <ul className="space-y-2 mt-4">
                        {category.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground">
                            <span className="text-accent mt-1">•</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
