const Skills = () => {
  const skillCategories = [
    {
      title: "UX Design & Research",
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
      skills: [
        "Exploratory Data Analysis",
        "Predictive Modelling",
        "Time-Series Forecasting",
        "Data Visualization",
        "Storytelling with Data",
      ],
    },
    {
      title: "Project & Product",
      skills: [
        "Agile Workflow",
        "Team Collaboration",
        "Stakeholder Communication",
      ],
    },
    {
      title: "Tools",
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
      skills: ["Python", "R", "Java", "MATLAB"],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border p-6 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary text-foreground text-sm border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
