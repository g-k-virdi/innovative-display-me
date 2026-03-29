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

const UHNCaseStudy = () => {
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
              UHN Inventory Optimization
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Streamlining Clinical Inventory for Interventional Radiology
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {[
                ["Client", "University Health Network (UHN) — Interventional Radiology"],
                ["Role", "Industrial Engineering Student (Team of 4)"],
                ["Timeline", "8 weeks"],
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
                The IR department faced recurring inventory issues:
              </p>
              <Bullets
                items={[
                  "Missing or misplaced supplies",
                  "Expired products",
                  "Delays in patient procedures",
                ]}
              />
              <p className="text-foreground/80 mt-3">
                These issues were caused by mismatches between physical and digital inventory, leading to unreliable ordering and workflow disruptions.
              </p>
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5 mt-4">
                <p className="text-foreground/80 font-medium">
                  Core challenge: How might we design a system that ensures accurate, efficient, and reliable inventory tracking in a high-pressure clinical environment?
                </p>
              </div>
            </Section>

            <Section title="System Understanding">
              <Bullets
                items={[
                  "Mapped current inventory workflows across multiple hospital sites",
                  "Analyzed roles (inventory specialist, technicians) and dependencies",
                  "Identified gaps between digital system (QSight) and real-world usage",
                ]}
              />
            </Section>

            <Section title="Root Cause Analysis">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Used structured analysis (fishbone + workflow mapping) to identify key issues:
              </p>
              <Bullets
                items={[
                  "Reliance on human behavior → inconsistent scanning",
                  "Unstandardized processes → variability across sites",
                  "Limited technology integration → manual, error-prone tracking",
                  "Manual ordering decisions → based on experience, not data",
                ]}
              />
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5 mt-4">
                <p className="text-foreground/80 font-medium">
                  Insight: The problem wasn't just "bad tracking" — it was a system-level failure across people, process, and technology.
                </p>
              </div>
            </Section>

            <Section title="Solution Exploration">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Researched and developed multiple solution pathways:
              </p>
              <Bullets
                items={[
                  "RFID-based automated tracking",
                  "Mandatory scanning enforcement",
                  "Demand-based inventory forecasting",
                  "Procedure-based ordering",
                ]}
              />
            </Section>

            <Section title="Evaluation Framework">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Used a weighted decision matrix to compare solutions based on:
              </p>
              <Bullets
                items={[
                  "Feasibility",
                  "Impact",
                  "Cost",
                  "Implementation complexity",
                ]}
              />
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5 mt-4">
                <p className="text-foreground/80 font-medium">
                  This ensured decisions were data-driven, not opinion-based.
                </p>
              </div>
            </Section>

            <Section title="Solution">
              <p className="text-foreground/80 leading-relaxed mb-3">
                <strong>Recommended: RFID-based inventory tracking system</strong>
              </p>
              <Bullets
                items={[
                  "Eliminates reliance on manual scanning",
                  "Improves real-time inventory accuracy",
                  "Reduces human error in fast-paced environments",
                ]}
              />
            </Section>

            <Section title="Implementation Plan">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Developed an 18-week rollout plan, including:
              </p>
              <Bullets
                items={[
                  "System planning and integration",
                  "RFID installation and testing",
                  "Staff training and adoption",
                  "Full deployment across sites",
                ]}
              />
            </Section>

            <Section title="Key Takeaways">
              <Bullets
                items={[
                  "Complex operational problems require system-level thinking, not isolated fixes",
                  "Balancing human behavior, process, and technology is critical in healthcare systems",
                  "Structured decision frameworks improve both clarity and stakeholder alignment",
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

export default UHNCaseStudy;
