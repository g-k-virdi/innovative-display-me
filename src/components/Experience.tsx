import { Briefcase, Circle, MapPin, Calendar, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const workExperienceData = [
  {
    title: "Intern, Data Joins",
    company: "Remote",
    period: "June 2025 – Present",
    icon: "💼",
    color: "from-blue-500/20 to-cyan-500/20",
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
    color: "from-purple-500/20 to-pink-500/20",
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
    color: "from-orange-500/20 to-amber-500/20",
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
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
        </div>

        {/* Work Experience with Enhanced Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            Work Experience
          </h3>
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 hidden md:block"></div>
            
            <div className="space-y-8">
              {workExperienceData.map((item, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot with pulse animation */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-accent border-4 border-background rounded-full z-10 hidden md:block">
                    <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20"></div>
                  </div>
                  
                  <Card className={`md:ml-20 border-2 border-border hover:shadow-xl hover:border-accent transition-all duration-300 bg-gradient-to-br ${item.color} overflow-hidden group`}>
                    <CardContent className="p-6 relative">
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full"></div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-accent/10 border-2 border-accent rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                          <div className="flex flex-wrap gap-3 mb-3">
                            <p className="text-muted-foreground text-sm flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {item.company}
                            </p>
                            <p className="text-accent text-sm font-medium flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {item.period}
                            </p>
                          </div>
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

        {/* Extracurriculars with enhanced visuals */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Extracurriculars
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {extracurricularsData.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:shadow-xl hover:border-accent transition-all duration-300 animate-fade-in bg-card overflow-hidden group"
                style={{ animationDelay: `${(workExperienceData.length + index) * 100}ms` }}
              >
                <CardContent className="p-6 relative">
                  {/* Decorative element */}
                  <div className="absolute -top-2 -right-2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {item.icon}
                  </div>
                  
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <p className="text-accent text-sm mb-3 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
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
