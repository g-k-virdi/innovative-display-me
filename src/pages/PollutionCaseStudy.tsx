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
              Comparing Holt-Winters and SARIMA — and Finding Their Shared Blind Spot
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {[
                ["Role", "Independent Project"],
                ["Type", "University Project"],
                [
                  "Tools",
                  "Python, Pandas, statsmodels, Holt-Winters (Triple Exponential Smoothing), SARIMA",
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
                Forecasting pollution levels matters for public health planning and policy — but pollution data is
                notoriously messy: it trends, it moves seasonally, and it's prone to sudden spikes that have nothing to
                do with historical patterns. I set out to build and rigorously compare two classical time-series
                forecasting approaches on real climate data, to determine which one held up better and understand why.
              </p>
            </Section>

            <Section title="My Approach">
              <Steps
                items={[
                  {
                    title: "Diagnosed the series before modeling it",
                    body:
                      "Before choosing a method, I confirmed what the data actually contained: a rolling mean and seasonal decomposition plot showed a clear upward trend, and a repeating 7-day pattern in the seasonal component confirmed weekly seasonality. I also flagged major outliers in the raw data early — spikes large enough to distort a model if left unexamined — and made a deliberate call to keep them in the analysis rather than remove them, since they appeared to reflect real events rather than data errors.",
                  },
                  {
                    title: "Selected two methods suited to trend + seasonality",
                    body:
                      "Given a series with both a trend and a 7-day seasonal cycle, I selected Holt-Winters (Triple Exponential Smoothing) and SARIMA — two of the few classical methods built to handle both components simultaneously, rather than defaulting to a single technique.",
                  },
                  {
                    title: "Ran a sensitivity analysis before trusting either model",
                    body:
                      "Rather than fitting each model once and moving on, I deliberately perturbed each model's parameters and measured how much the forecast shifted. Adjusting Holt-Winters' smoothing parameters (level, trend, and seasonal smoothing) dropped the average forecast difference from 24.82 to 18.93 — meaning the tuned model was meaningfully more stable. SARIMA was already highly stable by comparison, showing only a 2.59 average difference under the same test — evidence it was less sensitive to parameter choice on this data.",
                  },
                  {
                    title: "Chose an error metric deliberately, not by default",
                    body:
                      "I evaluated both models using Mean Absolute Error rather than Mean Squared Error, specifically because MSE over-penalizes the outlier spikes I'd already decided to keep in the dataset — MAE gave a truer read on typical-day accuracy without letting a handful of extreme days dominate the comparison.",
                  },
                ]}
              />
            </Section>

            <Section title="Outcome">
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5">
                <p className="text-foreground/80 leading-relaxed">
                  On held-out test data, Holt-Winters achieved a Mean Absolute Error of 124.78 ppm versus SARIMA's
                  133.88 ppm — making Holt-Winters the more accurate model overall, consistent with its stronger
                  showing in the earlier sensitivity analysis. Both models, however, badly missed a real December
                  pollution spike (actual: ~650 ppm; both models predicted ~300 ppm), which I attributed to
                  holiday-season demand and increased industrial activity — factors no purely historical time-series
                  model can anticipate without external data.
                </p>
              </div>
            </Section>

            <Section title="Reflection">
              <p className="text-foreground/80 leading-relaxed">
                The gap between the two models' accuracy was real but modest — the more important finding was why
                Holt-Winters won: it handles seasonal and trend components more flexibly, while SARIMA's more rigid
                structure struggled with a series this irregular. Equally important was recognizing what neither model
                could do: without external variables like weather, industrial activity, or policy data, any purely
                historical model will be blind to the kind of one-off event that actually matters most for public
                health response. Knowing a model's blind spot is as valuable as knowing its accuracy number.
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

export default PollutionCaseStudy;
