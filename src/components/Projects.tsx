import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const uxProjectsData = [
  {
    title: "Redesigning BIA tool for William Osler Health System",
    team: "Team of 3 fourth-year students (in progress)",
    description: [
      "Collaborated on redesigning the hospital's Business Impact Analysis (BIA) system.",
      "Conducted user research and problem definition to identify pain points.",
      "Developed project requirements and ideated potential design solutions.",
      "Working on building wireframes and high-fidelity prototypes for conceptual development.",
    ],
    links: [
      { label: "Case Study available upon request", url: "#" },
      { label: "Prototype in progress", url: "#" },
    ],
  },
  {
    title: "UTESCA Portal Wireframe",
    team: "UX Designer | Club Project",
    description: [
      "Wireframed and prototyped the UTESCA club portal for members to access events, resources, and contact information.",
      "Designed the interface in Figma, emphasizing clarity, accessibility, and responsiveness.",
      "Used information hierarchy and interaction design principles for intuitive navigation.",
    ],
    links: [{ label: "View Figma Wireframe", url: "#" }],
  },
  {
    title: "Data Joins Website Design and Development",
    team: "UX Designer & Developer | Internship Project",
    description: [
      "Designed the company's website.",
      "Wireframed and prototyped layouts on Figma, applying HCI principles.",
      "Collaborated with developers to implement the front-end structure.",
    ],
    links: [
      { label: "Figma Wireframe", url: "#" },
      { label: "Prototype", url: "#" },
      { label: "Live Website", url: "#" },
      { label: "GitHub Repo", url: "#" },
    ],
  },
  {
    title: "TraceVitals (In progress)",
    team: "UX Designer",
    description: [
      "Working on a healthcare visualization tool that helps users track and interpret blood vitals effectively.",
      "Brainstormed features and site map.",
      "Designed prototypes for both web and application interfaces.",
      "Researched accessible color schemes and created visual hierarchy for data readability.",
    ],
    links: [
      { label: "Web Prototype", url: "#" },
      { label: "App Prototype", url: "#" },
      { label: "Ongoing Project so website will be available soon", url: "#" },
    ],
  },
  {
    title: "65Square Calendar and Events Feature (In Progress)",
    team: "UX Designer | Non-Profit Project",
    description: [
      "Wireframed a new feature for managing calendar and community events.",
      "Conducted research on privacy policies and implementation costs to refine the design.",
      "Designed in an iterative process, by implementing changes to earlier drafts upon feedback.",
    ],
    links: [{ label: "Private project — available upon request or when live", url: "#" }],
  },
  {
    title: "Young Adults Seeking Urgent Care — UX Research & Prototype (In progress)",
    team: "Individual + Team Project | University Course",
    description: [
      "Researched challenges faced by young adults seeking urgent healthcare in the GTA.",
      "Defined the problem statement, brainstormed ideas, and conducted feasibility tests.",
      "Created individual wireframes, then formed high-fidelity prototypes and performed usability testing as a group.",
    ],
    links: [
      { label: "View Wireframe", url: "#" },
      { label: "Prototype available soon", url: "#" },
    ],
  },
  {
    title: "Kritik Activity Creation Module Redesign",
    team: "Team of 3",
    description: [
      "Conducted cognitive walkthroughs and heuristic evaluations to identify design issues.",
      "Designed low-fidelity prototypes and performed usability testing.",
      "Proposed actionable UX improvements using HCI and engineering design principles.",
    ],
    links: [{ label: "Case Study available upon request", url: "#" }],
  },
  {
    title: "Electric Vehicle Recommendation System Design",
    team: "Back-end Developer | Team of 5",
    description: [
      "Designed a user-centric web application for recommending electric vehicles.",
      "Created UML diagrams, use cases, and state charts to model user behavior.",
      "Collaborated on frontend and backend development with a focus on usability.",
    ],
    links: [{ label: "Case Study and code available upon request", url: "#" }],
  },
];

const dataProjectsData = [
  {
    title: "Pollution Forecasting Using Time-Series Analysis",
    description: [
      "Developed and compared Holt-Winters and SARIMA models to predict pollution levels.",
      "Analyzed seasonal patterns and historical data to improve accuracy.",
      "Evaluated models using Mean Absolute Error (MAE); Holt-Winters achieved greater stability.",
    ],
    links: [{ label: "Notebook available upon request", url: "#" }],
  },
  {
    title: "NHL Draft Prediction Using Machine Learning",
    description: [
      "Built regression and classification models to predict NHL standings and simulate draft outcomes.",
      "Cleaned and engineered features to improve accuracy and performance.",
      "Ridge regression achieved an R² greater than 0.85, providing robust predictive capability.",
    ],
    links: [{ label: "Notebook available upon request", url: "#" }],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a selection of projects that showcase my work across UX Design, Human Factors, and Data Analytics.
          </p>
        </div>

        <Tabs defaultValue="ux" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="ux">Human Factors & UX Design</TabsTrigger>
            <TabsTrigger value="data">Data Analytics & Machine Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="ux" className="space-y-6">
            {uxProjectsData.map((project, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:shadow-xl transition-all duration-300 animate-scale-in bg-card"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.team}</p>
                  <ul className="space-y-2 mb-4">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        className="border-border hover:bg-accent hover:text-accent-foreground"
                        asChild
                      >
                        <a href={link.url} className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            {dataProjectsData.map((project, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:shadow-xl transition-all duration-300 animate-scale-in bg-card"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        className="border-border hover:bg-accent hover:text-accent-foreground"
                        asChild
                      >
                        <a href={link.url} className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
