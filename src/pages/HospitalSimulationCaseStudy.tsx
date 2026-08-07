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

const Steps = ({ items }: { items: { title: string; body: string }[] }) => (
  <ol className="space-y-5">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-4">
        <span className="shrink-0 w-7 h-7 rounded-full bg-accent/10 border border-accent text-accent text-xs font-semibold flex items-center justify-center mt-0.5">
          {i + 1}
        </span>
        <div>
          <h3 className="font-semibold mb-1">{item.title}</h3>
          <p className="text-foreground/80 leading-relaxed">{item.body}</p>
        </div>
      </li>
    ))}
  </ol>
);

const HospitalSimulationCaseStudy = () => {
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
              Hospital Workflow Simulation for Process Optimization
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Finding a Hospital's Real Bottleneck with Discrete Event Simulation
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {[
                ["Role", "Industrial Engineering Student — Process Analyst"],
                ["Team", "Team of 3"],
                ["Type", "University Project"],
                [
                  "Tools",
                  "Simio (Discrete Event Simulation), Statistical Distribution Fitting, Design of Experiments, Trade-off Analysis",
                ],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="text-muted-foreground">{label}:</span>{" "}
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </header>

          <article className="space-y-14 animate-fade-in">
            <Section title="The Problem">
              <p className="text-foreground/80 leading-relaxed">
                Long wait times are a persistent challenge for Canadian hospitals. Limited rehabilitation capacity
                extends how long patients stay in acute care beds after treatment, which in turn limits how many new
                patients the hospital can admit — a compounding bottleneck that isn't visible
                department-by-department. Our team built a discrete event simulation of a hospital's full patient
                journey — acute treatment through rehabilitation to discharge — to find where the system was actually
                breaking down, and to test whether it could be fixed without adding beds or staff.
              </p>
            </Section>

            <Section title="Our Approach">
              <Steps
                items={[
                  {
                    title: "Modeled the system statistically before simulating it.",
                    body:
                      "We fit distributions to real patient data rather than assuming standard ones: arrivals followed a non-stationary Poisson process peaking around 11:30 AM, acute treatment times followed an exponential distribution, and rehabilitation times followed lognormal or exponential distributions depending on patient category.",
                  },
                  {
                    title: "Built a full-flow baseline model in Simio.",
                    body:
                      "Patients entered through acute care (Medicine or Neuro/MSK wards, sized to their real bed counts), then routed to one of four rehabilitation units across seven specialty categories, or to discharge, based on real routing probabilities.",
                  },
                  {
                    title: "Ran a statistically rigorous design of experiments.",
                    body:
                      "Identified steady state at ~7,500 hours, set warm-up accordingly, ran the simulation to 75,000 hours, and added replications until confidence interval half-width was under 5% of the mean — roughly 1,000 replications.",
                  },
                  {
                    title: "Diagnosed the real bottleneck.",
                    body:
                      "The Medicine ward showed a 9.691-day average wait and 89.264% bed utilization, right at the edge of the 90% congestion threshold, while Neuro/MSK ran comfortably at 76.734% utilization. Rehab wait times were even more severe: 42.6 days for Medically Complex patients and 73.1 days for Orthopedic patients, while Neurological and Cardiac rehab beds sat at only ~15% utilization.",
                  },
                  {
                    title: "Tested 12 patient-prioritization scenarios.",
                    body:
                      "Rather than recommend adding beds, we tested whether resequencing which patients get served first in two shared rehab units could reduce system-wide wait time using existing resources.",
                  },
                  {
                    title: "Ran trade-off analysis on the winning scenario,",
                    body:
                      "weighing the clinical cost to one patient group against system-wide efficiency gains.",
                  },
                ]}
              />
            </Section>

            <Section title="Outcome">
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5">
                <p className="text-foreground/80 leading-relaxed">
                  The optimal scenario reduced average total time in the system to 648.08 hours, down from 682.31 hours
                  in the worst-performing configurations — a ~5% system-wide reduction achieved through sequencing
                  alone, with zero added beds or staff. The trade-off: Brain Dysfunction patients waited longer under
                  this scenario, judged acceptable because Stroke and Cardiac conditions are acutely time-sensitive
                  while Brain Dysfunction cases have inherently longer recovery windows regardless of queue position.
                </p>
              </div>
            </Section>

            <Section title="Reflection">
              <p className="text-foreground/80 leading-relaxed">
                The instinctive fix for hospital wait times is "add more beds." Our simulation showed the more useful
                question is usually "are the beds we have being used well?" The harder part wasn't running the
                simulation; it was being willing to recommend a strategy that measurably helped the system overall
                while being honest about which group it made worse off, and why that trade-off was still the right
                call.
              </p>
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

export default HospitalSimulationCaseStudy;
