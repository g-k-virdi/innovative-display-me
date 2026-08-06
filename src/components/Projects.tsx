import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight, ArrowRight, Target, MousePointer2, BarChart3 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import wayfindingImage from "@/assets/wayfinding-station.jpg";

const wayfindingProject = {
  title: "Wayfinding Optimization",
  team: "Human Factors Engineer | Team of 4 | University Project",
  inProgress: false,
  description:
    "Conducted field research and human error analysis to identify systematic wayfinding failures at a TTC station, then proposed system-level signage and navigation improvements.",
  image: wayfindingImage,
  hasCaseStudy: true,
  caseStudyUrl: "/case-study/wayfinding",
  links: [],
};


// Tab 1 — Business & Process Analysis
const businessProjectsData = [
  {
    title: "UHN Inventory Optimization",
    team: "Industrial Engineering Student | Team of 4 | University Project",
    inProgress: false,
    description:
      "Analyzed and redesigned inventory tracking workflows for UHN's Interventional Radiology department. Through root cause analysis and structured evaluation, recommended an RFID-based system to eliminate manual errors and improve real-time accuracy.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=250&fit=crop",
    hasCaseStudy: true,
    caseStudyUrl: "/case-study/uhn-inventory",
    links: [],
  },
  {
    title: "BIA Tool Redesign for William Osler Health System",
    team: "Systems & UX Design | Team of 4 | Capstone Project",
    inProgress: false,
    description:
      "Redesigned a Business Impact Analysis tool for a hospital's Business Continuity Management team — making cross-departmental dependencies visible and replacing a manual, interview-driven data process.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
    hasCaseStudy: true,
    caseStudyUrl: "/case-study/bia-tool-redesign",
    links: [],
  },
];

// Tab 2 — UX Research & Design
const uxProjectsData = [
  {
    title: "Urgent Care Pal",
    team: "UX Researcher & Designer | Team of 5 | University Project",
    inProgress: false,
    description:
      "Designed a digital tool to help young adults navigate urgent healthcare decisions with clarity and confidence, through user research, iterative prototyping, and usability testing.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=250&fit=crop",
    hasCaseStudy: true,
    caseStudyUrl: "/case-study/urgent-care-pal",
    links: [
      {
        label: "Wireframes",
        url: "https://www.figma.com/design/YDNN9bCQ4mKcTRRnUTyHhU/MIE344-Team-5?node-id=0-1&t=LkfLqrb0zTcChom2-1",
        locked: false,
      },
      {
        label: "Prototype",
        url: "https://www.figma.com/proto/YDNN9bCQ4mKcTRRnUTyHhU/MIE344-Team-5?node-id=165-3652&p=f&t=XhOuio46aK9t00bR-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=165%3A3652",
        locked: false,
      },
    ],
  },
  {
    title: "Wayfinding Optimization",
    team: "Human Factors Engineer | Team of 4 | University Project",
    inProgress: false,
    description:
      "Conducted field research and human error analysis to identify systematic wayfinding failures at a TTC station, then proposed system-level signage and navigation improvements.",
    image: "https://images.unsplash.com/photo-1517940310602-26535839fe84?w=400&h=250&fit=crop",
    hasCaseStudy: true,
    caseStudyUrl: "/case-study/wayfinding",
    links: [],
  },
  {
    title: "UTESCA Portal Wireframe",
    team: "UX Designer | Club Project",
    inProgress: false,
    description:
      "Wireframed the UTESCA club portal for members to access events, resources, and contact information. Wireframed for full-access view.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    links: [
      {
        label: "Wireframes",
        url: "https://www.figma.com/design/KgNOeTITykawA93s9M4qpa/UTESCA-Portal?node-id=0-1&t=a6QzEm5TWUhAXwVc-1",
        locked: false,
      },
    ],
  },
  {
    title: "Datajoins Website Design and Development",
    team: "UX Designer & Developer | Internship Project",
    inProgress: false,
    description: "Designed and developed the company's website using Figma prototyping and front-end implementation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    links: [{ label: "View Website", url: "https://www.datajoins.com", locked: false }],
  },
  {
    title: "TraceVitals",
    team: "UX Designer | Internship Project",
    inProgress: false,
    description:
      "Designed a healthcare visualization tool by translating user needs into a structured site map and first-iteration web and app prototypes for tracking and interpreting blood vitals.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    links: [
      {
        label: "App Prototype",
        url: "https://www.figma.com/make/E40MoJRV6fTp7JLWyHvNuB/TraceVitals-App-Prototype?fullscreen=1&t=4TvqwFpykU51hxgr-1",
        locked: false,
      },
      {
        label: "Web Prototype",
        url: "https://www.figma.com/make/LUqBZwezp2c7CmpUKBUnlF/TraceVitals-Web-Prototype?fullscreen=1&t=WHCn4Yq3IYPnfuS0-1",
        locked: false,
      },
    ],
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
    description:
      "Designed a user-centric web application for recommending electric vehicles with UML diagrams and use cases.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=250&fit=crop",
    links: [{ label: "Project Report and code available upon request", url: "#", locked: true }],
  },
];

// Tab 3 — Data & Predictive Analytics
const dataProjectsData = [
  {
    title: "NHL Draft Prediction Using Machine Learning",
    team: "Independent Project | Python, Pandas, scikit-learn",
    inProgress: false,
    description:
      "Cleaned and engineered features from 10 years of NHL data, then compared regression and classification models. Ridge regression achieved an R² above 0.85 in predicting standings.",
    image: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=400&h=250&fit=crop",
    hasCaseStudy: true,
    caseStudyUrl: "/case-study/nhl-draft-prediction",
    links: [],
  },
  {
    title: "Pollution Forecasting Using Time-Series Analysis",
    team: "Independent Project | Python, Pandas, statsmodels",
    inProgress: false,
    description:
      "Built and compared Holt-Winters and SARIMA forecasting models on seasonal pollution data, benchmarked with MAE. Holt-Winters delivered higher prediction stability.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop",
    hasCaseStudy: true,
    caseStudyUrl: "/case-study/pollution-forecasting",
    links: [],
  },
];

const PROJECTS_PER_PAGE = 8;

const tabConfig = [
  {
    value: "business",
    icon: Target,
    label: "Business & Process Analysis",
    subtitle: "Root cause analysis, decision frameworks, stakeholder-driven design",
  },
  {
    value: "ux",
    icon: MousePointer2,
    label: "UX Research & Design",
    subtitle: "User research, wireframing, and human-centered prototyping",
  },
  {
    value: "data",
    icon: BarChart3,
    label: "Data & Predictive Analytics",
    subtitle: "Forecasting, modeling, and data-driven evaluation",
  },
];

// Links row
const ProjectLinks = ({ project }: { project: any }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {project.hasCaseStudy && (
        <Button
          onClick={() => navigate(project.caseStudyUrl)}
          size="sm"
          className="h-8 text-xs px-3 bg-accent text-accent-foreground hover:bg-accent/90"
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
            className="h-8 text-[10px] sm:text-xs text-muted-foreground cursor-not-allowed opacity-60 px-2"
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
            className="h-8 text-[10px] sm:text-xs px-2 sm:px-3 hover:bg-accent hover:text-accent-foreground"
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3 mr-1" />
              {link.label}
            </a>
          </Button>
        )
      )}
    </div>
  );
};

const ProjectHeading = ({ project, large }: { project: any; large?: boolean }) => (
  <>
    <div className="flex items-start gap-2 mb-2 flex-wrap">
      <h3 className={`font-semibold leading-tight ${large ? "text-lg sm:text-xl" : "text-base"}`}>
        {project.title}
      </h3>
      {project.inProgress && (
        <Badge variant="secondary" className="text-[10px] sm:text-xs shrink-0">
          In Progress
        </Badge>
      )}
    </div>
    {project.team && (
      <p className="text-[11px] sm:text-xs text-muted-foreground mb-2">{project.team}</p>
    )}
    <p className="text-xs sm:text-sm text-foreground/80 mb-4 leading-relaxed">{project.description}</p>
  </>
);

// Wide, horizontal card for case studies
const CaseStudyCard = ({ project, index }: { project: any; index: number }) => (
  <Card
    className="group border border-border hover:border-accent/60 hover:shadow-lg transition-all duration-300 animate-fade-in bg-card overflow-hidden"
    style={{ animationDelay: `${index * 60}ms` }}
  >
    <div className="flex flex-col sm:flex-row">
      {project.image && (
        <div className="sm:w-2/5 lg:w-1/3 h-40 sm:h-auto overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <CardContent className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
        <ProjectHeading project={project} large />
        <ProjectLinks project={project} />
      </CardContent>
    </div>
  </Card>
);

// Compact, near-square card for other projects
const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <Card
    className="group border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 animate-scale-in bg-card/50 overflow-hidden flex flex-col"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    {project.image && (
      <div className="h-32 sm:h-36 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    )}
    <CardContent className="p-4 sm:p-5 flex flex-col flex-1">
      <ProjectHeading project={project} />
      <div className="mt-auto">
        <ProjectLinks project={project} />
      </div>
    </CardContent>
  </Card>
);


const Pagination = ({
  page,
  totalPages,
  setPage,
}: {
  page: number;
  totalPages: number;
  setPage: (p: number) => void;
}) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center gap-3 sm:gap-6 mt-6 sm:mt-8">
      <Button
        onClick={() => setPage(Math.max(0, page - 1))}
        disabled={page === 0}
        variant="outline"
        size="sm"
        className="disabled:opacity-50 disabled:cursor-not-allowed h-9 sm:h-10 px-2 sm:px-4 text-xs sm:text-sm"
      >
        <ChevronLeft className="w-4 h-4 sm:mr-1" />
        <span className="hidden sm:inline">Previous</span>
      </Button>
      <div className="flex items-center gap-1.5 sm:gap-2">
        {Array.from({ length: totalPages }, (_, i) => i).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md text-xs sm:text-sm transition-all ${
              page === p
                ? "bg-accent text-accent-foreground font-semibold"
                : "bg-secondary text-secondary-foreground hover:bg-accent/20"
            }`}
          >
            {p + 1}
          </button>
        ))}
      </div>
      <Button
        onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
        disabled={page === totalPages - 1}
        variant="outline"
        size="sm"
        className="disabled:opacity-50 disabled:cursor-not-allowed h-9 sm:h-10 px-2 sm:px-4 text-xs sm:text-sm"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4 sm:ml-1" />
      </Button>
    </div>
  );
};

const Projects = () => {
  const [businessPage, setBusinessPage] = useState(0);
  const [uxPage, setUxPage] = useState(0);
  const [dataPage, setDataPage] = useState(0);
  const projectsListRef = useRef<HTMLDivElement>(null);
  const hasPaginatedRef = useRef(false);

  const paginateProjects = (projects: any[], page: number) => {
    const start = page * PROJECTS_PER_PAGE;
    return projects.slice(start, start + PROJECTS_PER_PAGE);
  };

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
  }, [businessPage, uxPage, dataPage]);

  const tabs: Record<string, { data: any[]; page: number; setPage: (p: number) => void }> = {
    business: { data: businessProjectsData, page: businessPage, setPage: setBusinessPage },
    ux: { data: uxProjectsData, page: uxPage, setPage: setUxPage },
    data: { data: dataProjectsData, page: dataPage, setPage: setDataPage },
  };

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

        <Tabs defaultValue="business" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-1 sm:grid-cols-3 gap-2 mb-6 sm:mb-8 md:mb-12 h-auto bg-transparent p-0">
            {tabConfig.map(({ value, icon: Icon, label, subtitle }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex flex-col items-center gap-1 text-center py-3 px-3 h-auto rounded-lg border border-border bg-card/50 whitespace-normal data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent data-[state=active]:shadow-md transition-colors"
              >
                <span className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold leading-snug">
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                </span>
                <span className="text-[10px] sm:text-[11px] leading-snug opacity-80">{subtitle}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabConfig.map(({ value }, tabIdx) => {
            const { data, page, setPage } = tabs[value];
            const totalPages = Math.ceil(data.length / PROJECTS_PER_PAGE);
            return (
              <TabsContent
                key={value}
                value={value}
                ref={tabIdx === 0 ? projectsListRef : undefined}
                className="space-y-4 min-h-[600px]"
              >
                {(() => {
                  const items = paginateProjects(data, page);
                  const featured = items.filter((p) => p.hasCaseStudy);
                  const rest = items.filter((p) => !p.hasCaseStudy);
                  return (
                    <div className="space-y-4 sm:space-y-6">
                      {featured.length > 0 && (
                        <div className="space-y-4">
                          {featured.map((project, index) => (
                            <CaseStudyCard key={index} project={project} index={index} />
                          ))}
                        </div>
                      )}
                      {rest.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          {rest.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })()}

                <Pagination page={page} totalPages={totalPages} setPage={setPage} />
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
