import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Business Analysis & Consulting",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=80",
      preview: ["Requirements Gathering", "Stakeholder Interviews", "Process Mapping", "Gap Analysis"],
      allSkills: [
        "Requirements Gathering", "Stakeholder Interviews", "Process Mapping",
        "Workflow Analysis", "Task Analysis", "Gap Analysis",
        "Business Process Improvement", "Root Cause Analysis",
        "Use Case Documentation", "UML Diagrams", "Decision Frameworks",
        "Agile Methodologies", "Stakeholder Communication", "Miro",
      ],
    },
    {
      title: "Data & Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80",
      preview: ["SQL", "Python (Pandas, Jupyter Notebook)", "KPI Dashboards", "Tableau"],
      allSkills: [
        "SQL", "Python (Pandas, Jupyter Notebook)", "Excel",
        "Statistical Analysis", "Exploratory Data Analysis",
        "Predictive Modelling", "Time-Series Forecasting",
        "KPI Dashboards", "Tableau", "Data Visualization", "Storytelling with Data",
      ],
    },
    {
      title: "Human Factors & UX",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&auto=format&fit=crop&q=80",
      preview: ["Human-Centered Design", "User Research", "Usability Testing", "Figma"],
      allSkills: [
        "Human-Centered Design", "User Research", "Usability Testing",
        "Heuristic Evaluation", "Task Analysis", "User Journey Mapping",
        "Information Architecture", "Wireframing", "Prototyping",
        "Persona Development", "Storyboarding", "HCI Principles",
        "UML Diagrams", "Figma",
      ],
    },
    {
      title: "Communication",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80",
      preview: ["Documentation", "Presentations", "Stakeholder Management", "Rationale Delivery"],
      allSkills: [
        "Documentation", "Presentations", "Stakeholder Management",
        "Rationale Delivery", "Report Writing", "Critical Thinking", "Teamwork",
        "Translating Technical Concepts for Non-Technical Stakeholders",
      ],
    },
    {
      title: "AI & Automation",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80",
      preview: ["AI-Assisted Development (Cursor, Figma Make, Magic Patterns)", "Prompt Engineering", "Context Engineering"],
      allSkills: [
        "AI-Assisted Development (Cursor, Figma Make, Magic Patterns)",
        "Prompt Engineering", "Context Engineering",
      ],
    },
    {
      title: "Tools & Technologies",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=80",
      preview: ["Figma", "Miro", "Tableau", "SQL"],
      allSkills: [
        "Figma", "Miro", "Canva", "Tableau", "SQL", "Python", "R",
        "Java", "MATLAB", "Jupyter Notebook", "Excel", "Jira",
        "GitHub", "Cursor", "Google Suite",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => {
          const isExpanded = expandedIndex === index;
          const hasMore = category.allSkills.length > category.preview.length;

          return (
            <Card
              key={index}
              className="group border-2 border-border hover:border-accent transition-all duration-500 bg-card overflow-hidden hover:shadow-2xl cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => hasMore && setExpandedIndex(isExpanded ? null : index)}
            >
              <div className="relative h-32 sm:h-40 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="transition-all duration-500">
                  {!hasMore ? (
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
                      {/* Desktop: hover behavior */}
                      <div className="hidden md:block">
                        <ul className="space-y-2 group-hover:hidden">
                          {category.preview.map((skill, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-foreground/90 text-sm">
                              <span className="text-accent mt-1">•</span>
                              <span>{skill}</span>
                            </li>
                          ))}
                          <li className="text-foreground/70 text-sm italic mt-3">
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
                      </div>

                      {/* Mobile: tap to expand */}
                      <div className="md:hidden">
                        <ul className="space-y-2">
                          {(isExpanded ? category.allSkills : category.preview).map((skill, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-foreground/90 text-sm">
                              <span className="text-accent mt-1">•</span>
                              <span>{skill}</span>
                            </li>
                          ))}
                          {!isExpanded && (
                            <li className="text-foreground/70 text-sm italic mt-3">
                              Tap to see all {category.allSkills.length} skills
                            </li>
                          )}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
