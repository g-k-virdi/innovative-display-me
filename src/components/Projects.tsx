import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import FeaturedCaseStudy from "./FeaturedCaseStudy";

// Other UX projects (simplified display)
const uxProjectsData = [
  {
    title: "Redesigning BIA tool for William Osler Health System",
    team: "Team of 4 | Capstone Project",
    inProgress: true,
    description: "Collaborated on redesigning a Business Impact Analysis (BIA) system using HCI principles.",
    links: [
      { label: "Case Study available upon request", url: "#", locked: true },
    ],
  },
  {
    title: "UTESCA Portal Wireframe",
    team: "UX Designer | Club Project",
    inProgress: false,
    description: "Wireframed the UTESCA club portal for members to access events, resources, and contact information.",
    links: [{ label: "View Figma Wireframe", url: "#", locked: false }],
  },
  {
    title: "Data Joins Website Design and Development",
    team: "UX Designer & Developer | Internship Project",
    inProgress: false,
    description: "Designed and developed the company's website using Figma prototyping and front-end implementation.",
    links: [
      { label: "View Prototype", url: "#", locked: false },
    ],
  },
  {
    title: "TraceVitals",
    team: "UX Designer | Internship Project",
    inProgress: true,
    description: "Working on a healthcare visualization tool for tracking and interpreting blood vitals.",
    links: [
      { label: "View Prototype", url: "#", locked: false },
    ],
  },
  {
    title: "65Square Calendar and Events Feature",
    team: "UX Designer | Non-Profit Project",
    inProgress: true,
    description: "Wireframed a new feature for managing calendar and community events with iterative design.",
    links: [{ label: "Private project — available upon request", url: "#", locked: true }],
  },
  {
    title: "Kritik Activity Creation Module Redesign",
    team: "Team of 3 | University Project",
    inProgress: false,
    description: "Conducted cognitive walkthroughs and heuristic evaluations to propose actionable UX improvements.",
    links: [{ label: "Case Study available upon request", url: "#", locked: true }],
  },
  {
    title: "Electric Vehicle Recommendation System Design",
    team: "Back-end Developer | Team of 5 | University Project",
    inProgress: false,
    description: "Designed a user-centric web application for recommending electric vehicles with UML diagrams and use cases.",
    links: [{ label: "Case Study and code available upon request", url: "#", locked: true }],
  },
];

const dataProjectsData = [
  {
    title: "Pollution Forecasting Using Time-Series Analysis",
    team: "",
    inProgress: false,
    description: "Developed and compared Holt-Winters and SARIMA models to predict pollution levels with seasonal analysis.",
    links: [{ label: "Notebook available upon request", url: "#", locked: true }],
  },
  {
    title: "NHL Draft Prediction Using Machine Learning",
    team: "",
    inProgress: false,
    description: "Built regression and classification models to predict NHL standings and simulate draft outcomes.",
    links: [{ label: "Notebook available upon request", url: "#", locked: true }],
  },
];

const PROJECTS_PER_PAGE = 4;

// Simplified project card for non-featured projects
const SimpleProjectCard = ({ project, index }: { project: any; index: number }) => (
  <Card
    key={index}
    className="border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 animate-scale-in bg-card/50"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <CardContent className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.inProgress && (
              <Badge variant="secondary" className="text-xs">
                In Progress
              </Badge>
            )}
          </div>
          {project.team && (
            <p className="text-xs text-muted-foreground mb-2">{project.team}</p>
          )}
          <p className="text-sm text-foreground/80 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.links.map((link: any, idx: number) =>
              link.locked ? (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs text-muted-foreground cursor-not-allowed opacity-60 px-2"
                  disabled
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  {link.label}
                </Button>
              ) : (
                <Button
                  key={idx}
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs px-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <a href={link.url}>
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {link.label}
                  </a>
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Projects = () => {
  const [uxPage, setUxPage] = useState(0);
  const [dataPage, setDataPage] = useState(0);
  const [activeTab, setActiveTab] = useState("ux");
  const projectsListRef = useRef<HTMLDivElement>(null);
  const previousTabRef = useRef(activeTab);
  const hasPaginatedRef = useRef(false);

  const uxTotalPages = Math.ceil(uxProjectsData.length / PROJECTS_PER_PAGE);
  const dataTotalPages = Math.ceil(dataProjectsData.length / PROJECTS_PER_PAGE);

  const paginateProjects = (projects: any[], page: number) => {
    const start = page * PROJECTS_PER_PAGE;
    return projects.slice(start, start + PROJECTS_PER_PAGE);
  };

  useEffect(() => {
    // Scroll to first project when tab changes
    if (previousTabRef.current !== activeTab && projectsListRef.current) {
      const yOffset = -100;
      const y = projectsListRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      previousTabRef.current = activeTab;
    }
  }, [activeTab]);

  useEffect(() => {
    // Avoid scrolling on initial mount (when arriving from navbar)
    if (!hasPaginatedRef.current) {
      hasPaginatedRef.current = true;
      return;
    }

    // Scroll when changing pages within a tab
    if (projectsListRef.current) {
      const yOffset = -100;
      const y = projectsListRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [uxPage, dataPage]);

  return (
    <section id="projects" className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-secondary/30">
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

        <Tabs defaultValue="ux" className="max-w-6xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="ux">Human Factors & UX Design</TabsTrigger>
            <TabsTrigger value="data">Data Analytics & Machine Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="ux" ref={projectsListRef}>
            {/* Featured Case Study */}
            <FeaturedCaseStudy />
            
            {/* Other Projects Section */}
            <div className="mt-12">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground/80">Other Projects</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Additional work demonstrating breadth of experience
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {paginateProjects(uxProjectsData, uxPage).map((project, index) => (
                  <SimpleProjectCard key={index} project={project} index={index} />
                ))}
              </div>
              
              {uxTotalPages > 1 && (
                <div className="flex justify-center items-center gap-6 mt-8">
                  <Button
                    onClick={() => setUxPage(Math.max(0, uxPage - 1))}
                    disabled={uxPage === 0}
                    variant="outline"
                    size="sm"
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: uxTotalPages }, (_, i) => i).map((page) => (
                      <button
                        key={page}
                        onClick={() => setUxPage(page)}
                        className={`w-8 h-8 rounded-md text-sm transition-all ${
                          uxPage === page
                            ? "bg-accent text-accent-foreground font-semibold"
                            : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                        }`}
                      >
                        {page + 1}
                      </button>
                    ))}
                  </div>
                  <Button
                    onClick={() => setUxPage(Math.min(uxTotalPages - 1, uxPage + 1))}
                    disabled={uxPage === uxTotalPages - 1}
                    variant="outline"
                    size="sm"
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {paginateProjects(dataProjectsData, dataPage).map((project, index) => (
                <SimpleProjectCard key={index} project={project} index={index} />
              ))}
            </div>
            
            {dataTotalPages > 1 && (
              <div className="flex justify-center items-center gap-6 mt-8">
                <Button
                  onClick={() => setDataPage(Math.max(0, dataPage - 1))}
                  disabled={dataPage === 0}
                  variant="outline"
                  size="sm"
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: dataTotalPages }, (_, i) => i).map((page) => (
                    <button
                      key={page}
                      onClick={() => setDataPage(page)}
                      className={`w-8 h-8 rounded-md text-sm transition-all ${
                        dataPage === page
                          ? "bg-accent text-accent-foreground font-semibold"
                          : "bg-secondary text-secondary-foreground hover:bg-accent/20"
                      }`}
                    >
                      {page + 1}
                    </button>
                  ))}
                </div>
                <Button
                  onClick={() => setDataPage(Math.min(dataTotalPages - 1, dataPage + 1))}
                  disabled={dataPage === dataTotalPages - 1}
                  variant="outline"
                  size="sm"
                  className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
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
