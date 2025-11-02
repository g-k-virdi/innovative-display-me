import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "UX Design & Research",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&auto=format&fit=crop&q=80",
      preview: ["Wireframing", "Prototyping", "UX Research", "Journey Mapping"],
      allSkills: [
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80",
      preview: ["Exploratory Data Analysis", "Predictive Modelling"],
      allSkills: [
        "Exploratory Data Analysis",
        "Predictive Modelling",
        "Time-Series Forecasting",
        "Data Visualization",
        "Storytelling with Data",
      ],
    },
    {
      title: "Project & Product Management",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=80",
      preview: ["Agile Workflow", "Team Collaboration"],
      allSkills: [
        "Agile Workflow",
        "Team Collaboration",
        "Stakeholder Communication",
      ],
    },
    {
      title: "Tools",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80",
      preview: ["Figma", "Tableau", "Jupyter Notebook", "GitHub"],
      allSkills: [
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
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=80",
      preview: ["Python", "R", "Java", "MATLAB"],
      allSkills: ["Python", "R", "Java", "MATLAB"],
    },
    {
      title: "Core Competencies",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80",
      preview: ["Team Work", "Communication", "Report Writing"],
      allSkills: [
        "Team Work",
        "Communication",
        "Report Writing",
        "Presentation",
        "Critical Thinking",
      ],
    },
  ];

  return (
    <div id="skills" className="py-16 lg:py-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Skills & Tools
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="group border-2 border-border hover:border-accent transition-all duration-500 bg-card overflow-hidden hover:shadow-2xl cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-32 overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60"></div>
              <h3 className="absolute bottom-3 left-4 text-lg font-semibold text-foreground z-10">
                {category.title}
              </h3>
            </div>
            <CardContent className="p-6 relative">
              <div className="transition-all duration-500">
                {category.allSkills.length <= 5 ? (
                  <ul className="space-y-2">
                    {category.allSkills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/90 text-sm">
                        <span className="text-accent mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <ul className="space-y-2 group-hover:hidden">
                      {category.preview.map((skill, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/90 text-sm">
                          <span className="text-accent mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                      <li className="text-foreground/65 text-sm italic mt-3">
                        Hover to see all {category.allSkills.length} skills
                      </li>
                    </ul>
                    
                    <ul className="space-y-2 hidden group-hover:block">
                      {category.allSkills.map((skill, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/90 text-sm">
                          <span className="text-accent mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
