import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const workExperienceData = [
  {
    title: "Intern, Data Joins",
    company: "Remote",
    period: "June 2025 – Present",
    responsibilities: [
      "Perform data cleaning, exploratory analysis, and visualization for client datasets.",
      "Wireframe and prototype web and app applications using Figma, following HCI and UX principles.",
      "Develop interactive dashboards that help communicate insights clearly.",
      "Use data storytelling to make findings accessible for non-technical audiences.",
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
    period: "2024 – Present",
    responsibilities: [
      "Wireframe and design the UTESCA member portal using Figma and UX principles.",
      "Collaborate with a team to create visual content for events, including posters.",
      "Design short video content to enhance engagement and reach on social media.",
    ],
  },
];

const extracurricularsData = [
  {
    title: "Philosophy Discussion Group — General Member",
    organization: "University of Toronto",
    description:
      "Take part in weekly discussions based on philosophical readings, where we explore objections and different perspectives together.",
  },
  {
    title: "Digital Content Creator — Independent Project",
    organization: "April 2023 – July 2024",
    description:
      "Created and translated poetry and quotes paired with visual storytelling. Built an online audience of over 15K followers.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
        </div>

        {/* Work Experience */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-accent">Work Experience</h3>
          <div className="space-y-8">
            {workExperienceData.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:shadow-xl transition-all duration-300 animate-fade-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 border-2 border-accent">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-1">
                        {item.company}
                      </p>
                      <p className="text-xs text-muted-foreground mb-4">
                        {item.period}
                      </p>
                      <ul className="space-y-2">
                        {item.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground text-sm"
                          >
                            <span className="text-accent mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurriculars */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-accent">Extracurriculars</h3>
          <div className="space-y-6">
            {extracurricularsData.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:shadow-xl transition-all duration-300 animate-fade-in bg-card"
                style={{ animationDelay: `${(workExperienceData.length + index) * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.organization}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
