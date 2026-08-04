import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="scroll-mt-24">
    <h2 className="text-lg sm:text-xl font-bold mb-4 tracking-tight">{title}</h2>
    {children}
  </section>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
        <span className="text-accent mt-1.5 text-xs">●</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const BIACaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/projects")}
            className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Projects
          </Button>

          <header className="mb-14 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              BIA Tool Redesign for William Osler Health System
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Making Business Continuity Planning Visible, Fast, and Usable
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {[
                ["Client", "William Osler Health System — Business Continuity Management Team"],
                ["Role", "Systems & UX Design (Team of 4) — Capstone Project"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="text-muted-foreground">{label}:</span>{" "}
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </header>

          <article className="space-y-14 animate-fade-in">
            <Section title="Problem">
              <p className="text-foreground/80 leading-relaxed mb-3">
                The BIA tool used by WOHS's Business Continuity Management team to prepare for and respond to
                disruptions had two core failures:
              </p>
              <Bullets
                items={[
                  "A spreadsheet-based interface with no way to visualize dependencies between departments, making it nearly impossible to understand how a disruption in one area would ripple through others",
                  "A manual process of intensive form reviews and manager interviews for data input and validation, which was slow, error-prone, and difficult for the people actually using it",
                ]}
              />
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5 mt-4">
                <p className="text-foreground/80 font-medium">
                  Core challenge: How might we redesign a business-critical planning tool so that dependencies are
                  visible at a glance and data entry doesn't rely on a manual, interview-driven process?
                </p>
              </div>
            </Section>

            <Section title="System Understanding & Requirements Gathering">
              <Bullets
                items={[
                  "Conducted virtual and physical environmental scans to understand how the tool was actually being used, not just how it was designed to be used",
                  "Performed stakeholder analysis to identify who was affected by the redesign and how",
                  "Developed a list of measurable functions and constraints the design had to meet, along with guiding objectives, continuously reassessed throughout the project to stay aligned with the team's direction",
                  "Focused requirements on usability, reducing manual work, easier navigation, and technical feasibility on WOHS's existing platforms",
                ]}
              />
            </Section>

            <Section title="Solution">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Designed a high-fidelity prototype in Figma with three components:
              </p>
              <Bullets
                items={[
                  "BIA Dashboard — pagination, persistent filters, summary and detailed views, and search functionality to navigate large datasets; users can add and edit entries directly within the system instead of routing through manual forms",
                  "Intake Form — information grouped into relevant sections to support chunking and reduce cognitive load, built to be implementable on the organization's existing Microsoft Forms platform",
                  "Dependency Mapping Tool (previously absent entirely) — a hub-and-node representation of system dependencies, with filters, full and function views, color-coding, search, and zoom/hover interactions, so managers can visually assess how departments and functions rely on one another instead of piecing it together from a spreadsheet",
                ]}
              />
            </Section>

            <Section title="Iteration">
              <p className="text-foreground/80 leading-relaxed mb-4">
                The design went through three structured rounds:
              </p>
              <Bullets
                items={[
                  "An initial round grounded in human-factors principles",
                  "A second round based on direct client feedback",
                  "A third round based on a focus group with primary stakeholders",
                ]}
              />
              <p className="text-foreground/80 leading-relaxed mt-4">
                Use cases and next steps were developed after incorporating third-round feedback, translating what
                stakeholders told us into concrete scenarios the redesigned tool needed to support.
              </p>
            </Section>

            <Section title="Outcome">
              <p className="text-foreground/80 leading-relaxed">
                The proposed solution improved usability, efficiency, and clarity in analyzing cross-departmental
                dependencies, and met all defined functions and constraints. The design was built with an eye toward
                implementation on WOHS's existing Microsoft 365 environment, though further review from technical
                stakeholders would be needed to confirm full feasibility.
              </p>
            </Section>

            <Section title="Key Takeaways">
              <Bullets
                items={[
                  "Fragmented data isn't just a data problem, it's a communication problem between the people who hold different pieces of the picture",
                  "Structured, iterative stakeholder feedback (not just one round of \"does this look right?\") is what turns a redesign into something people will actually trust and use",
                  "A dependency map is only useful if it's built for the person reading it under pressure, not the person who already knows the system",
                ]}
              />
            </Section>
          </article>

          <div className="mt-14 pt-6 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/projects")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Projects
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BIACaseStudy;
