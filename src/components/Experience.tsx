import { Circle, MapPin, Calendar, Building2 } from "lucide-react";

const workExperienceData = [
  {
    title: "UX Designer, 65square",
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
  {
    title: "Intern, Data Joins",
    company: "Remote",
    period: "June 2025 – December 2025",
    responsibilities: [
      "Perform data cleaning, exploratory analysis, and dashboard design on datasets.",
      "Wireframe and prototype web and app experiences in Figma, applying HCI and UX principles to improve usability.",
      "Collaborate on front-end web and app development.",
    ],
  },
];

const extracurricularsData = [
  {
    title: "Philosophical Literature Reading Group (PLRG)",
    role: "General Member",
    organization: "University of Toronto",
    period: "November 2025 — Present",
    description:
      "Participate in weekly group discussions on philosophical fiction and literature, exploring objections, ideas, and different perspectives together.",
  },
  {
    title: "Digital Content Creator",
    role: "Independent Project",
    organization: "",
    period: "April 2023 – July 2024",
    description:
      "Created and translated poetry and quotes paired with visual storytelling. Built an online audience of over 15K followers.",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-14 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-accent"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Work Experience
          </h3>

          <div className="space-y-0">
            {workExperienceData.map((item, index) => (
              <div
                key={index}
                className="relative pl-6 pb-10 last:pb-0 border-l border-border animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />

                <div>
                  <h4 className="text-base font-semibold leading-snug">
                    {item.title}
                  </h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-3">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.company}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {item.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed"
                      >
                        <Circle className="w-1 h-1 fill-muted-foreground text-muted-foreground mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurriculars */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Extracurriculars
          </h3>

          <div className="space-y-0">
            {extracurricularsData.map((item, index) => (
              <div
                key={index}
                className="relative pl-6 pb-10 last:pb-0 border-l border-border animate-fade-in"
                style={{ animationDelay: `${(workExperienceData.length + index) * 80}ms` }}
              >
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />

                <div>
                  <h4 className="text-base font-semibold leading-snug">
                    {item.title}
                  </h4>
                  {item.role && (
                    <p className="text-sm text-muted-foreground mt-0.5">{item.role}</p>
                  )}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-3">
                    {item.organization && (
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {item.organization}
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
