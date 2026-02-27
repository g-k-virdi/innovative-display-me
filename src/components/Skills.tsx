import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "UX Design & Research",
      skills: [
        "Wireframing", "Prototyping", "UX Research", "Journey Mapping",
        "Usability Testing", "Heuristic Evaluation", "Task Analysis",
        "HCI Principles", "Information Architecture", "Information Theory",
        "UML Diagrams", "Storyboarding", "Persona Development",
      ],
    },
    {
      title: "Data Analytics",
      skills: [
        "Exploratory Data Analysis", "Predictive Modelling",
        "Time-Series Forecasting", "Data Visualization", "Storytelling with Data",
      ],
    },
    {
      title: "Project & Product Management",
      skills: ["Agile Workflow", "Team Collaboration", "Stakeholder Communication"],
    },
    {
      title: "Tools",
      skills: ["Figma", "Tableau", "Jupyter Notebook", "GitHub", "Excel", "Jira", "Google Suite"],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "R", "Java", "MATLAB"],
    },
    {
      title: "Core Competencies",
      skills: ["Teamwork", "Communication", "Report Writing", "Presentation", "Critical Thinking"],
    },
  ];

  return (
    <div id="skills" className="py-16 lg:py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Skills & Tools
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="border border-border hover:border-accent/50 transition-all duration-300 bg-card animate-scale-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <CardContent className="p-5">
              <h3 className="text-base font-semibold text-foreground mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="text-xs font-normal px-2.5 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
