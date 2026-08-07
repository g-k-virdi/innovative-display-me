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
              Predicting Standings, Then Simulating the Draft Lottery on Top of Them
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {[
                ["Role", "Data Analyst"],
                ["Team", "Team of 3"],
                ["Type", "University Project (MIE368 — Analytics in Action)"],
                [
                  "Tools",
                  "Python, Pandas, scikit-learn, Classification & Regression Modeling, Weighted Lottery Simulation",
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
                The NHL Draft Lottery determines which struggling teams get first access to top prospects — a mechanism
                designed to keep the league competitive. But the lottery order depends on final standings, which aren't
                known until a season ends, and the actual draft outcome layers a weighted random lottery on top of
                that. Our team set out to predict which 16 teams would finish in the league's bottom tier, rank them,
                and simulate the resulting draft lottery order — then test how well that prediction held up against
                reality.
              </p>
            </Section>

            <Section title="Our Approach">
              <Steps
                items={[
                  {
                    title: "Built and cleaned a 10-season dataset",
                    body:
                      "We pulled team statistics from the NHL's official site spanning 2014–2024, removed columns that were entirely null (e.g., \"Ties,\" phased out under current rules), and engineered two features: a binary flag for whether a team finished in the bottom 16, and each team's prior-season point total — since standings predictions have to be made before a season using only what's already known.",
                  },
                  {
                    title: "Ran correlation analysis to find the real predictive signal",
                    body:
                      "Rather than throwing every stat at a model, we built a correlation heatmap against prior-season points to identify which features actually mattered. Wins, Regulation + Overtime Wins, Regulation Wins, Goals Against per Game, and Losses came out as the strongest predictors — and became the core inputs to our regression models.",
                  },
                  {
                    title: "Used time-based train/test splits, not random ones",
                    body:
                      "Because this is a forecasting problem, random splitting would leak future information into training. We trained on 2014–2016 to test on 2017–2018, and separately trained on 2019–2021 to test on 2022–2023, so every prediction was made the way a real prediction would have to be — using only prior seasons.",
                  },
                  {
                    title: "Compared 8 classification models and 7 regression models",
                    body:
                      "For classification, we tested Logistic Regression, Random Forest, SVM, KNN, Naive Bayes, Decision Tree, Gradient Boosting, and Neural Networks to predict bottom-16 status. For regression, we tested Linear, Ridge, Lasso, Random Forest, SVR, KNN, and Decision Tree to predict actual point totals. Simpler models — Logistic Regression and Ridge Regression — consistently outperformed more complex ones, reinforcing that added model complexity wasn't buying us anything on this dataset.",
                  },
                  {
                    title: "Chose regression over classification for the final ranking",
                    body:
                      "Classification gave us bottom-16 probabilities; regression gave us a specific predicted point total per team, which produces a more precise, direct ranking. Ridge Regression won on both R² and Mean Absolute Error in our most recent test split, likely because its regularization kept the model from overfitting to noise in a relatively small, high-variance dataset.",
                  },
                  {
                    title: "Simulated the actual lottery, not just the standings",
                    body:
                      "Standings alone don't determine draft order — the NHL uses a weighted random lottery favoring lower-ranked teams. We built a weighted lottery simulation using the league's real published odds table and our Ridge Regression standings to generate a simulated draft order, then compared it against what actually happened.",
                  },
                ]}
              />
            </Section>

            <Section title="Outcome">
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5">
                <p className="text-foreground/80 leading-relaxed">
                  The simulation correctly predicted the 1st, 2nd, and 4th overall draft picks, with a Mean Squared
                  Error of 12.2 between simulated and actual standings — a strong result for a system that has a
                  genuine random lottery component built into it by design. We benchmarked our model against
                  Tankathon, an established NHL draft lottery predictor, and found our simpler, points-based approach
                  captured the core trend despite not modeling league-specific mechanics like the jump limit or
                  tie-breaker rules.
                </p>
              </div>
            </Section>

            <Section title="Reflection">
              <p className="text-foreground/80 leading-relaxed">
                The most useful realization wasn't a modeling technique — it was that simpler models beat complex ones
                here, and being able to explain why (a small, noisy dataset rewards regularization over flexibility)
                mattered more than chasing marginal accuracy gains with a neural network. I also learned to separate
                "predicting the standings" from "predicting the lottery" as two distinct problems with two distinct
                sources of error — conflating them would have made it impossible to tell whether a bad prediction came
                from the model or from the lottery's inherent randomness.
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

export default NHLCaseStudy;
