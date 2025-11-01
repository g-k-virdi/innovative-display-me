import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const uxProjectsData = [
  {
    title: "Redesigning BIA tool for William Osler Health System",
    team: "Team of 4 fourth-year students",
    inProgress: true,
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
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "UTESCA Portal Wireframe",
    team: "UX Designer | Club Project",
    inProgress: false,
    description: [
      "Wireframed and prototyped the UTESCA club portal for members to access events, resources, and contact information.",
      "Designed the interface in Figma, emphasizing clarity, accessibility, and responsiveness.",
      "Used information hierarchy and interaction design principles for intuitive navigation.",
    ],
    links: [{ label: "View Figma Wireframe", url: "#" }],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Data Joins Website Design and Development",
    team: "UX Designer & Developer | Internship Project",
    inProgress: false,
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "TraceVitals",
    team: "UX Designer",
    inProgress: true,
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
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "65Square Calendar and Events Feature",
    team: "UX Designer | Non-Profit Project",
    inProgress: true,
    description: [
      "Wireframed a new feature for managing calendar and community events.",
      "Conducted research on privacy policies and implementation costs to refine the design.",
      "Designed in an iterative process, by implementing changes to earlier drafts upon feedback.",
    ],
    links: [{ label: "Private project — available upon request or when live", url: "#" }],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Young Adults Seeking Urgent Care — UX Research & Prototype",
    team: "Individual + Team Project | University Course",
    inProgress: true,
    description: [
      "Researched challenges faced by young adults seeking urgent healthcare in the GTA.",
      "Defined the problem statement, brainstormed ideas, and conducted feasibility tests.",
      "Created individual wireframes, then formed high-fidelity prototypes and performed usability testing as a group.",
    ],
    links: [
      { label: "View Wireframe", url: "#" },
      { label: "Prototype available soon", url: "#" },
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Kritik Activity Creation Module Redesign",
    team: "Team of 3",
    inProgress: false,
    description: [
      "Conducted cognitive walkthroughs and heuristic evaluations to identify design issues.",
      "Designed low-fidelity prototypes and performed usability testing.",
      "Proposed actionable UX improvements using HCI and engineering design principles.",
    ],
    links: [{ label: "Case Study available upon request", url: "#" }],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Electric Vehicle Recommendation System Design",
    team: "Back-end Developer | Team of 5",
    inProgress: false,
    description: [
      "Designed a user-centric web application for recommending electric vehicles.",
      "Created UML diagrams, use cases, and state charts to model user behavior.",
      "Collaborated on frontend and backend development with a focus on usability.",
    ],
    links: [{ label: "Case Study and code available upon request", url: "#" }],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b4?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "NHL Draft Prediction Using Machine Learning",
    description: [
      "Built regression and classification models to predict NHL standings and simulate draft outcomes.",
      "Cleaned and engineered features to improve accuracy and performance.",
      "Ridge regression achieved an R² greater than 0.85, providing robust predictive capability.",
    ],
    links: [{ label: "Notebook available upon request", url: "#" }],
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop&q=80",
  },
];

const PROJECTS_PER_PAGE = 3;

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <Card
    key={index}
    className="border-2 border-border hover:shadow-xl hover:border-accent transition-all duration-300 animate-scale-in bg-card overflow-hidden"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <div className="md:flex">
      <div className="md:w-1/3 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {project.inProgress && (
          <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
            <Badge className="bg-accent text-accent-foreground border-2 border-background">
              In Progress
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="md:w-2/3 p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.team}</p>
        <ul className="space-y-2 mb-4">
          {project.description.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-foreground text-sm">
              <span className="text-accent mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          {project.links.map((link: any, idx: number) => (
            <Button
              key={idx}
              variant="outline"
              size="sm"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
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
    </div>
  </Card>
);

const Projects = () => {
  const [uxPage, setUxPage] = useState(0);
  const [dataPage, setDataPage] = useState(0);

  const uxTotalPages = Math.ceil(uxProjectsData.length / PROJECTS_PER_PAGE);
  const dataTotalPages = Math.ceil(dataProjectsData.length / PROJECTS_PER_PAGE);

  const paginateProjects = (projects: any[], page: number) => {
    const start = page * PROJECTS_PER_PAGE;
    return projects.slice(start, start + PROJECTS_PER_PAGE);
  };

  return (
    <section id="projects" className="py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my work across different disciplines
          </p>
        </div>

        <Tabs defaultValue="ux" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="ux">Human Factors & UX Design</TabsTrigger>
            <TabsTrigger value="data">Data Analytics & Machine Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="ux" className="space-y-6">
            {paginateProjects(uxProjectsData, uxPage).map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
            
            {uxTotalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setUxPage(Math.max(0, uxPage - 1))}
                  disabled={uxPage === 0}
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </Button>
                <span className="text-foreground font-medium px-4">
                  Page {uxPage + 1} of {uxTotalPages}
                </span>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setUxPage(Math.min(uxTotalPages - 1, uxPage + 1))}
                  disabled={uxPage === uxTotalPages - 1}
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            {paginateProjects(dataProjectsData, dataPage).map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
            
            {dataTotalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setDataPage(Math.max(0, dataPage - 1))}
                  disabled={dataPage === 0}
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </Button>
                <span className="text-foreground font-medium px-4">
                  Page {dataPage + 1} of {dataTotalPages}
                </span>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setDataPage(Math.min(dataTotalPages - 1, dataPage + 1))}
                  disabled={dataPage === dataTotalPages - 1}
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
