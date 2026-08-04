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

const NHLCaseStudy = () => {
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
              NHL Draft Prediction Using Machine Learning
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Simulating Draft Outcomes from a Decade of League Data
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {[
                ["Role", "Independent Project"],
                ["Tools", "Python, Pandas, scikit-learn"],
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
                NHL draft outcomes depend on a mix of player performance metrics, team need, and historical draft patterns that aren't obvious from raw stats alone. The goal was to see whether structured historical data could meaningfully predict both team standings and individual draft outcomes.
              </p>
            </Section>

            <Section title="Approach">
              <Bullets
                items={[
                  "Collected and cleaned 10 years of NHL player and team performance data",
                  "Engineered features to capture player performance trends and team context rather than relying on raw season stats alone",
                  "Built both classification models (to predict draft outcomes) and regression models (to predict standings)",
                  "Compared multiple model types to identify the strongest performer, including Ridge regression",
                ]}
              />
            </Section>

            <Section title="Findings">
              <Bullets
                items={[
                  "Ridge regression outperformed other models tested, achieving an R² greater than 0.85 in predicting standings",
                  "Feature engineering meaningfully improved model accuracy over using raw statistics directly, reinforcing that the quality of inputs mattered more than model complexity for this problem",
                ]}
              />
            </Section>

            <Section title="Key Takeaways">
              <Bullets
                items={[
                  "A simpler, well-regularized model (Ridge) beat more complex approaches once features were properly engineered, a reminder that better data usually beats a fancier model",
                  "Evaluating multiple model types against the same benchmark is how you actually know if a result is good, not just how it feels",
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

export default NHLCaseStudy;
