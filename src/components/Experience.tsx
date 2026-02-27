import { Briefcase, Circle, MapPin, Calendar, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const workExperienceData = [
  {
    title: "Intern, Data Joins",
    company: "Remote",
    period: "June 2025 – Present",
    icon: "💼",
    responsibilities: [
      "Perform data cleaning, exploratory analysis, and dashboard design on datasets.",
      "Wireframe and prototype web and app experiences in Figma, applying HCI and UX principles to improve usability.",
      "Collaborate on front-end web and app development.",
    ],
  },
  {
    title: "Volunteer UX Designer, 65square",
    company: "Remote",
    period: "August 2025 – Present",
    icon: "🎨",
    responsibilities: [
      "Research and wireframe app features for a non-profit organization using Figma.",
      "Participate in weekly design reviews and present progress updates.",
    ],
  },
  {
    title: "Director of Design & Marketing, UTESCA",
    company: "Toronto",
    period: "September 2025 – Present",
    icon: "📊",
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
    icon: "📚",
    description:
      "Participate in weekly group discussions on philosophical fiction and literature, exploring objections, ideas, and different perspectives together.",
  },
  {
    title: "Digital Content Creator",
    organization: "Independent Project",
    period: "April 2023 – July 2024",
    icon: "✨",
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
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
        </div>

        {/* Work Experience */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            Work Experience
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-6">
              {workExperienceData.map((item, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[26px] top-7 w-[10px] h-[10px] bg-accent border-2 border-background rounded-full z-10 hidden md:block" />

                  <Card className="md:ml-20 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 bg-card">
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 bg-accent/10 rounded-lg shrink-0">
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                          <div className="flex flex-wrap gap-3 mb-3 text-sm">
                            <span className="text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {item.company}
                            </span>
                            <span className="text-accent font-medium flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {item.period}
                            </span>
                          </div>
                          <ul className="space-y-1.5">
                            {item.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-foreground/80 text-sm leading-relaxed">
                                <Circle className="w-1.5 h-1.5 fill-accent text-accent mt-2 shrink-0" />
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
          <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Extracurriculars
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {extracurricularsData.map((item, index) => (
              <Card
                key={index}
                className="border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 animate-fade-in bg-card"
                style={{ animationDelay: `${(workExperienceData.length + index) * 100}ms` }}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold leading-snug">{item.title}</h3>
                      <p className="text-muted-foreground text-xs flex items-center gap-1 mt-0.5">
                        <Building2 className="w-3 h-3" />
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <p className="text-accent text-xs mb-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </p>
                  <p className="text-foreground/80 text-sm leading-relaxed">
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
