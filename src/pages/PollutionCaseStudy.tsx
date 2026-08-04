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

const PollutionCaseStudy = () => {
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
              Pollution Forecasting Using Time-Series Analysis
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Comparing Forecasting Methods to Predict Seasonal Pollution Trends
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {[
                ["Role", "Independent Project"],
                ["Tools", "Python, Pandas, statsmodels"],
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
              <p className="text-foreground/80 leading-relaxed">
                Air pollution levels follow seasonal and historical patterns, but different forecasting methods handle
                that seasonality differently. The goal was to build and compare two established time-series approaches
                to determine which produced more reliable forecasts.
              </p>
            </Section>

            <Section title="Approach">
              <Bullets
                items={[
                  "Developed forecasting models using both Holt-Winters exponential smoothing and SARIMA methods",
                  "Analyzed seasonal trends, outliers, and historical patterns in the data to inform model design and identify where each method might struggle",
                  "Evaluated both models using Mean Absolute Error (MAE) as the benchmark",
                ]}
              />
            </Section>

            <Section title="Findings">
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5">
                <Bullets
                  items={[
                    "Holt-Winters achieved higher prediction stability than SARIMA on this dataset",
                    "Seasonal patterns were strong enough that a simpler, seasonally-aware smoothing method outperformed the more complex SARIMA approach",
                  ]}
                />
              </div>
            </Section>

            <Section title="Key Takeaways">
              <Bullets
                items={[
                  "Model choice should be driven by the actual structure of the data (strong seasonality, in this case) rather than defaulting to the more sophisticated-sounding method",
                  "Comparing methods head-to-head on the same error metric is what makes a forecasting result defensible rather than just plausible",
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

export default PollutionCaseStudy;
