import { Briefcase, Circle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const workExperienceData = [
  {
    title: "Intern, Data Joins",
    company: "Remote",
    period: "June 2025 – Present",
    responsibilities: [
      "Perform data cleaning, exploratory analysis, and dashboard design on datasets.",
      "Wireframe and prototype web and app experiences in Figma, applying HCI and UX principles to improve usability.",
      "Collaborate on front-end web and app development.",
    ],
  },
  {
    title: "Volunteer UX Designer, 65Square",
    company: "Remote",
    period: "August 2025 – Present",
    responsibilities: [
      "Research and wireframe app features for a non-profit organization using Figma.",
      "Participate in weekly design reviews and present progress updates.",
    ],
  },
  {
    title: "Director of Design & Marketing, UTESCA",
    company: "Toronto",
    period: "September 2025 – Present",
    responsibilities: [
      "Wireframe and design the UTESCA member portal using Figma and UX principles.",
      "Collaborate with a team to create visual content for events, including posters.",
      "Design short video content to enhance engagement and reach on social media.",
    ],
  },
];

const extracurricularsData = [
  {
    title: "Philosophical Literature Reading Group (PLRG) — General Member",
    organization: "University of Toronto",
    period: "November 2025 — Present",
    description:
      "Participate in weekly group discussions on philosophical fiction and literature, exploring objections, ideas, and different perspectives together.",
  },
  {
    title: "Digital Content Creator",
    organization: "Independent Project",
    period: "April 2023 – July 2024",
    description:
      "Created and translated poetry and quotes paired with visual storytelling. Built an online audience of over 15K followers.",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
        </div>

        {/* Work Experience with Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-accent">Work Experience</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {workExperienceData.map((item, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-accent border-4 border-background rounded-full z-10 hidden md:block"></div>
                  
                  <Card className="md:ml-20 border-2 border-border hover:shadow-xl hover:border-accent transition-all duration-300 bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-accent/10 border-2 border-accent rounded flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                          <p className="text-muted-foreground text-sm mb-1">
                            {item.company}
                          </p>
                          <p className="text-xs text-accent mb-4 font-medium">
                            {item.period}
                          </p>
                          <ul className="space-y-2">
                            {item.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-foreground text-sm"
                              >
                                <Circle className="w-1.5 h-1.5 fill-accent text-accent mt-1.5 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extracurriculars */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-accent">Extracurriculars</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {extracurricularsData.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:shadow-xl transition-all duration-300 animate-fade-in bg-card"
                style={{ animationDelay: `${(workExperienceData.length + index) * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {item.organization}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.period}
                  </p>
                  <p className="text-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
