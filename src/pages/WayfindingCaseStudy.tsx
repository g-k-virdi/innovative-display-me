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

const WayfindingCaseStudy = () => {
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
              Wayfinding Optimization
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Improving Transit Navigation at Cedarvale Station
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {[
                ["Client", "TTC / Metrolinx — Cedarvale Station"],
                ["Role", "Human Factors Engineer (Team of 4)"],
                ["Timeline", "6 weeks"],
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
                Users experienced confusion navigating Cedarvale Station, resulting in:
              </p>
              <Bullets
                items={[
                  "Taking incorrect routes",
                  "Missing connections",
                  "Increased travel time and frustration",
                ]}
              />
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5 mt-4">
                <p className="text-foreground/80 font-medium">
                  Core challenge: How might we improve navigation in a complex transit environment to reduce user errors and cognitive load?
                </p>
              </div>
            </Section>

            <Section title="Field Research">
              <Bullets
                items={[
                  "Conducted on-site observations and photo documentation",
                  "Simulated real user journeys (entry → transfer → exit)",
                  "Identified key decision points and breakdown areas",
                ]}
              />
            </Section>

            <Section title="User & Task Analysis">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Defined key user groups:
              </p>
              <Bullets
                items={[
                  "Daily commuters (time-sensitive)",
                  "Passerby users (low familiarity)",
                  "Accessibility users (high dependency on clarity)",
                ]}
              />
              <p className="text-foreground/80 leading-relaxed mt-4 mb-4">
                Conducted:
              </p>
              <Bullets
                items={[
                  "Hierarchical Task Analysis (HTA) — step-by-step navigation flows",
                  "Human Error Analysis (HEA) — where and why users fail",
                ]}
              />
            </Section>

            <Section title="Key Insights">
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5">
                <Bullets
                  items={[
                    "Ambiguous signage → unclear destinations (e.g., \"Street\" labels)",
                    "Incorrect directional cues → misleading arrows",
                    "High cognitive load → too much information at decision points",
                    "Accessibility gaps → unclear elevator/navigation routes",
                  ]}
                />
              </div>
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5 mt-4">
                <p className="text-foreground/80 font-medium">
                  Insight: Navigation failures weren't random — they were systematic design breakdowns at decision nodes.
                </p>
              </div>
            </Section>

            <Section title="Problem Framing">
              <p className="text-foreground/80 leading-relaxed">
                Reframed the problem as: <strong>a system design issue, not a user issue</strong> — users were making "errors" because the system failed to guide them clearly.
              </p>
            </Section>

            <Section title="Solution">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Proposed system-level wayfinding improvements:
              </p>
              <Bullets
                items={[
                  "Standardized and consistent signage hierarchy",
                  "Clear destination-based labeling (not generic terms)",
                  "Improved directional accuracy at key decision points",
                  "Reduced cognitive load through simplified information",
                  "Enhanced accessibility pathways and clarity",
                ]}
              />
            </Section>

            <Section title="Key Takeaways">
              <Bullets
                items={[
                  "Wayfinding is a systems problem, not just a visual design problem",
                  "Small design inconsistencies can create large-scale user errors",
                  "Applying structured methods (HTA, HEA) reveals hidden system failures",
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

export default WayfindingCaseStudy;
