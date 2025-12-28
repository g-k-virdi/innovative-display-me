import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight, Star, ArrowRight, FileText, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Featured UX projects (case studies)
const featuredProjects = [
  {
    title: "Urgent Care Pal",
    subtitle: "Helping Young Adults Find the Right Care Faster",
    team: "UX Researcher & Designer | Team of 5 | University Project",
    description: "Designed a digital tool to help young adults navigate urgent healthcare decisions with clarity and confidence. Through user research, iterative prototyping, and usability testing, created a guided experience that reduces stress and confusion.",
    wireframeUrl: "https://www.figma.com/design/YDNN9bCQ4mKcTRRnUTyHhU/MIE344-Team-5?node-id=0-1&t=LkfLqrb0zTcChom2-1",
    prototypeUrl: "https://www.figma.com/proto/YDNN9bCQ4mKcTRRnUTyHhU/MIE344-Team-5?node-id=165-3652&p=f&t=XhOuio46aK9t00bR-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=165%3A3652",
    caseStudyUrl: "/case-study/urgent-care-pal",
  },
  {
    title: "UTESCA Portal Wireframe",
    subtitle: "Streamlining Club Member Access",
    team: "UX Designer | Club Project",
    description: "Wireframed the UTESCA club portal for members to access events, resources, and contact information. Wireframed for full-access view.",
    wireframeUrl: "https://www.figma.com/design/KgNOeTITykawA93s9M4qpa/UTESCA-Portal?node-id=0-1&t=a6QzEm5TWUhAXwVc-1",
    caseStudyUrl: "/case-study/utesca-portal",
  },
];

// Other UX projects
const uxProjectsData = [
  {
    title: "Redesigning BIA tool for William Osler Health System",
    team: "Team of 4 | Capstone Project",
    inProgress: true,
    description: "Collaborated on redesigning a Business Impact Analysis (BIA) system using HCI principles.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
    links: [
      { label: "Case Study available upon request", url: "#", locked: true },
    ],
  },
  {
    title: "Datajoins Website Design and Development",
    team: "UX Designer & Developer | Internship Project",
    inProgress: false,
    description: "Designed and developed the company's website using Figma prototyping and front-end implementation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    links: [
      { label: "View Website", url: "https://www.datajoins.com", locked: false },
    ],
  },
  {
    title: "TraceVitals",
    team: "UX Designer | Internship Project",
    inProgress: true,
    description: "Working on a healthcare visualization tool for tracking and interpreting blood vitals.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    links: [
      { label: "App Prototype", url: "https://www.figma.com/make/E40MoJRV6fTp7JLWyHvNuB/TraceVitals-App-Prototype?fullscreen=1&t=4TvqwFpykU51hxgr-1", locked: false },
      { label: "Web Prototype", url: "https://www.figma.com/make/LUqBZwezp2c7CmpUKBUnlF/TraceVitals-Web-Prototype?fullscreen=1&t=WHCn4Yq3IYPnfuS0-1", locked: false },
    ],
  },
  {
    title: "65square Calendar and Events Feature",
    team: "UX Designer | Non-Profit Project",
    inProgress: true,
    description: "Wireframed a new feature for managing calendar and community events with iterative design.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop",
    links: [{ label: "Private project", url: "#", locked: true }],
  },
  {
    title: "Kritik Activity Creation Module Redesign",
    team: "Team of 3 | University Project",
    inProgress: false,
    description: "Conducted cognitive walkthroughs and heuristic evaluations to propose actionable UX improvements.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
    links: [{ label: "Project Report and Design available upon request", url: "#", locked: true }],
  },
  {
    title: "Electric Vehicle Recommendation System Design",
    team: "Back-end Developer | Team of 5 | University Project",
    inProgress: false,
    description: "Designed a user-centric web application for recommending electric vehicles with UML diagrams and use cases.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=250&fit=crop",
    links: [{ label: "Project Report and code available upon request", url: "#", locked: true }],
  },
];

const dataProjectsData = [
  {
    title: "Pollution Forecasting Using Time-Series Analysis",
    team: "",
    inProgress: false,
    description: "Developed and compared Holt-Winters and SARIMA models to predict pollution levels with seasonal analysis.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop",
    links: [{ label: "Notebook available upon request", url: "#", locked: true }],
  },
  {
    title: "NHL Draft Prediction Using Machine Learning",
    team: "",
    inProgress: false,
    description: "Built regression and classification models to predict NHL standings and simulate draft outcomes.",
    image: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=400&h=250&fit=crop",
    links: [{ label: "Notebook available upon request", url: "#", locked: true }],
  },
];

const PROJECTS_PER_PAGE = 6;

// Featured project card with hover effect
const FeaturedProjectCard = ({ project, onClick }: { project: typeof featuredProjects[0]; onClick: () => void }) => {
  const navigate = useNavigate();
  
  return (
    <Card
      className="group relative border-2 border-accent/30 hover:border-accent bg-gradient-to-br from-accent/5 to-transparent hover:shadow-xl transition-all duration-500 overflow-hidden animate-scale-in"
    >
      {/* Featured Badge */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
        <Badge className="bg-accent text-accent-foreground gap-1 px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm">
          <Star className="w-3 h-3 fill-current" />
          <span className="hidden xs:inline">Featured</span> Case Study
        </Badge>
      </div>

      <CardContent className="p-4 pt-12 sm:p-6 sm:pt-14 md:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Left: Content */}
          <div className="flex-1">
            <h3 
              onClick={onClick}
              className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-accent transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 mb-2 sm:mb-3">{project.subtitle}</p>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{project.team}</p>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 sm:mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Button
                onClick={onClick}
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
              >
                View Case Study
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
              </Button>
              {project.wireframeUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
                >
                  <a href={project.wireframeUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Wireframes
                  </a>
                </Button>
              )}
              {project.prototypeUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
                >
                  <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer">
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Prototype
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Right: Hover Preview */}
          <div 
            onClick={onClick}
            className="hidden lg:flex items-center justify-center w-64 cursor-pointer"
          >
            <div className="relative w-full h-40 bg-secondary/30 rounded-lg overflow-hidden border border-border group-hover:border-accent/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2 group-hover:bg-accent/30 transition-colors">
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Click to explore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </Card>
  );
};

// Regular project card
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const navigate = useNavigate();
  
  return (
    <Card
      key={index}
      className="border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 animate-scale-in bg-card/50 overflow-hidden"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Project Image */}
      {project.image && (
        <div className="h-32 sm:h-36 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-2 mb-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-semibold leading-tight">{project.title}</h3>
              {project.inProgress && (
                <Badge variant="secondary" className="text-[10px] sm:text-xs shrink-0">
                  In Progress
                </Badge>
              )}
            </div>
            {project.team && (
              <p className="text-[11px] sm:text-xs text-muted-foreground mb-2">{project.team}</p>
            )}
            <p className="text-xs sm:text-sm text-foreground/80 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.hasCaseStudy && (
                <Button
                  onClick={() => navigate(project.caseStudyUrl)}
                  size="sm"
                  className="h-8 sm:h-7 text-[10px] sm:text-xs px-2 sm:px-3 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <ArrowRight className="w-3 h-3 mr-1" />
                  View Case Study
                </Button>
              )}
              {project.links.map((link: any, idx: number) =>
                link.locked ? (
                  <Button
                    key={idx}
                    variant="ghost"
                    size="sm"
                    className="h-8 sm:h-7 text-[10px] sm:text-xs text-muted-foreground cursor-not-allowed opacity-60 px-2"
                    disabled
                  >
                    {link.label}
                  </Button>
                ) : (
                  <Button
                    key={idx}
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-8 sm:h-7 text-[10px] sm:text-xs px-2 sm:px-3 hover:bg-accent hover:text-accent-foreground"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
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
};

const Projects = () => {
  const navigate = useNavigate();
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
    if (previousTabRef.current !== activeTab && projectsListRef.current) {
      const yOffset = -100;
      const y = projectsListRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      previousTabRef.current = activeTab;
    }
  }, [activeTab]);

  useEffect(() => {
    if (!hasPaginatedRef.current) {
      hasPaginatedRef.current = true;
      return;
    }

    if (projectsListRef.current) {
      const yOffset = -100;
      const y = projectsListRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [uxPage, dataPage]);

  return (
    <section id="projects" className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-accent mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-foreground max-w-2xl mx-auto px-2">
            A selection of projects that showcase my work across different disciplines
          </p>
        </div>

        <Tabs defaultValue="ux" className="max-w-6xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-6 sm:mb-8 md:mb-12 h-auto">
            <TabsTrigger value="ux" className="text-xs sm:text-sm py-2.5 sm:py-2 px-2 sm:px-4 leading-tight">
              Human Factors & UX Design
            </TabsTrigger>
            <TabsTrigger value="data" className="text-xs sm:text-sm py-2.5 sm:py-2 px-2 sm:px-4 leading-tight">
              Data Analytics & Machine Learning
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ux" ref={projectsListRef} className="space-y-8">
            {/* Featured Case Studies */}
            <div className="space-y-6">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard
                  key={index}
                  project={project}
                  onClick={() => navigate(project.caseStudyUrl)}
                />
              ))}
            </div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {paginateProjects(uxProjectsData, uxPage).map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            {uxTotalPages > 1 && (
              <div className="flex justify-center items-center gap-3 sm:gap-6 mt-6 sm:mt-8">
                <Button
                  onClick={() => setUxPage(Math.max(0, uxPage - 1))}
                  disabled={uxPage === 0}
                  variant="outline"
                  size="sm"
                  className="disabled:opacity-50 disabled:cursor-not-allowed h-9 sm:h-10 px-2 sm:px-4 text-xs sm:text-sm"
                >
                  <ChevronLeft className="w-4 h-4 sm:mr-1" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {Array.from({ length: uxTotalPages }, (_, i) => i).map((page) => (
                    <button
                      key={page}
                      onClick={() => setUxPage(page)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md text-xs sm:text-sm transition-all ${
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
                  className="disabled:opacity-50 disabled:cursor-not-allowed h-9 sm:h-10 px-2 sm:px-4 text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4 sm:ml-1" />
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {paginateProjects(dataProjectsData, dataPage).map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            {dataTotalPages > 1 && (
              <div className="flex justify-center items-center gap-3 sm:gap-6 mt-6 sm:mt-8">
                <Button
                  onClick={() => setDataPage(Math.max(0, dataPage - 1))}
                  disabled={dataPage === 0}
                  variant="outline"
                  size="sm"
                  className="disabled:opacity-50 disabled:cursor-not-allowed h-9 sm:h-10 px-2 sm:px-4 text-xs sm:text-sm"
                >
                  <ChevronLeft className="w-4 h-4 sm:mr-1" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {Array.from({ length: dataTotalPages }, (_, i) => i).map((page) => (
                    <button
                      key={page}
                      onClick={() => setDataPage(page)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md text-xs sm:text-sm transition-all ${
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
                  className="disabled:opacity-50 disabled:cursor-not-allowed h-9 sm:h-10 px-2 sm:px-4 text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4 sm:ml-1" />
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
