import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import researchInterviewImg from "@/assets/research-interview.png";
import conceptEvaluationImg from "@/assets/concept-evaluation.png";
import feasibilityMatrixImg from "@/assets/feasibility-matrix.png";
import siteMapImg from "@/assets/site-map.png";
import round1Img1 from "@/assets/round1-1.png";
import round1Img2 from "@/assets/round1-2.png";
import round1Img3 from "@/assets/round1-3.png";
import round1Img4 from "@/assets/round1-4.png";
import round1Img5 from "@/assets/round1-5.png";
import round1Img6 from "@/assets/round1-6.png";
import round2Img1 from "@/assets/round2-1.png";
import round2Img2 from "@/assets/round2-2.png";
import round2Img3 from "@/assets/round2-3.png";
import TestingCarousel from "@/components/TestingCarousel";
import { useNavigate } from "react-router-dom";

/* ── Section wrapper ─────────────────────────────── */
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="scroll-mt-24">
    <h2 className="text-lg sm:text-xl font-bold mb-4 tracking-tight">{title}</h2>
    {children}
  </section>
);

/* ── Bullet list helper ──────────────────────────── */
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

const CaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Back */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/projects")}
            className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Projects
          </Button>

          {/* ── Header ───────────────────────────── */}
          <header className="mb-14 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Urgent Care Pal
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Helping Young Adults Find the Right Care, Faster
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {[
                ["Role", "UX Researcher & Designer"],
                ["Timeline", "Sept – Dec 2025"],
                ["Tools", "Figma, Miro, Google Forms"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="text-muted-foreground">{label}:</span>{" "}
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="bg-secondary/40 rounded-lg p-5 text-sm leading-relaxed space-y-1">
              <p className="font-semibold text-foreground/90 mb-1">Contributions</p>
              <p className="text-foreground/75">
                <strong>Individual:</strong> user research, analysis, feasibility evaluation, ideation, concept selection, low-fidelity prototyping, reporting & presentations
              </p>
              <p className="text-foreground/75">
                <strong>Team:</strong> high-fidelity prototype, structured usability testing, final presentation & reporting
              </p>
            </div>
          </header>

          {/* ── Body ─────────────────────────────── */}
          <article className="space-y-14 animate-fade-in">

            {/* Problem */}
            <Section title="Problem">
              <p className="text-foreground/80 leading-relaxed mb-3">
                Young adults often struggle to decide where to go for urgent but non-emergency care. The main barriers include:
              </p>
              <Bullets
                items={[
                  "Difficulty accessing a primary care provider",
                  "Uncertainty about which care option fits their needs",
                  "Lack of reliable, real-time information (wait times, hours, services)",
                ]}
              />
              <p className="text-foreground/80 mt-3">
                This leads to confusion, hesitation, and unnecessary stress — sometimes resulting in delayed or misplaced care.
              </p>
            </Section>

            {/* Research */}
            <Section title="Research Approach">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Research was conducted with young adults in the GTA through secondary research, a survey (n = 30+), semi-structured interviews, and an experience map to understand pain points and decision-making patterns.
              </p>
              <figure>
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src={researchInterviewImg}
                    alt="Excerpt from a user interview about ER vs walk-in clinic decisions"
                    className="w-full"
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground mt-2 text-center">Fig 1 — Excerpt from a semi-structured user interview on urgent care decision-making</figcaption>
              </figure>
            </Section>

            {/* Key Findings */}
            <Section title="Key Findings">
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5">
                <Bullets
                  items={[
                    "Deciding 'where to go' is the most confusing step",
                    "Convenience, location, wait time, and trust are top decision factors",
                    "Many users feel uncertain and anxious during the process",
                    "A guided, trusted decision-support tool would fill a clear gap",
                  ]}
                />
              </div>
              <p className="text-muted-foreground text-sm mt-3">
                These insights directly shaped the solution direction.
              </p>
            </Section>

            {/* Feasibility */}
            <Section title="Feasibility & Concept Selection">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Multiple solution concepts were generated and evaluated using a concept evaluation matrix and a feasibility matrix. A <strong>digital guidance and decision-support tool</strong> was selected as the most practical, accessible, and impactful direction.
              </p>
              <div className="space-y-5">
                <figure>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <img
                      src={conceptEvaluationImg}
                      alt="Concept evaluation matrix comparing solution ideas across five criteria"
                      className="w-full"
                    />
                  </div>
                  <figcaption className="text-xs text-muted-foreground mt-2 text-center">Fig 2 — Concept evaluation matrix comparing solution ideas across key criteria</figcaption>
                </figure>
                <figure>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <img
                      src={feasibilityMatrixImg}
                      alt="Feasibility matrix evaluating technical viability and implementation cost"
                      className="w-full"
                    />
                  </div>
                  <figcaption className="text-xs text-muted-foreground mt-2 text-center">Fig 3 — Feasibility matrix evaluating viability and implementation cost</figcaption>
                </figure>
              </div>
            </Section>

            {/* Design Approach */}
            <Section title="Design Approach">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Information architecture (site maps) and low-fidelity wireframes were created in Miro and Figma to define structure, user flow, and content hierarchy before moving into visual design.
              </p>
              <figure>
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src={siteMapImg}
                    alt="Site map showing Urgent Care Website structure"
                    className="w-full"
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground mt-2 text-center">Fig 4 — Information architecture and site map for Urgent Care Pal</figcaption>
              </figure>
              <div className="mt-4">
                <Button asChild variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground">
                  <a
                    href="https://www.figma.com/design/VVToicjVhtkuclk15zx8Ui/Urgent-Care-Pal-Prototype?node-id=0-1&p=f&t=KgUbE62HGRI80FMA-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Low-Fidelity Wireframes
                  </a>
                </Button>
              </div>
            </Section>

            {/* Iterative Testing */}
            <Section title="Iterative User Testing">
              <p className="text-foreground/80 leading-relaxed mb-6">
                Two rounds of testing were completed collaboratively. Prototypes were designed based on earlier research and concept development, then tested with representative users to surface usability issues and guide improvements.
              </p>

              <div className="space-y-8 group">
                {/* Round 1 */}
                <div className="bg-secondary/30 rounded-xl p-5 sm:p-6">
                  <h3 className="font-semibold mb-1">Round 1 — Low-Fidelity Prototype</h3>
                  <p className="text-sm text-foreground/70 mb-2">
                    Identified challenges with navigation clarity, instructions, and user hesitation.
                  </p>
                  <p className="text-sm text-accent font-medium mb-4">
                    → Clearer structure, improved instructions, and better visibility
                  </p>
                  <TestingCarousel
                    slides={[
                      { image: round1Img1, label: "Before → After: Search bar clarity & instructional text" },
                      { image: round1Img2, label: "Before → After: Quiz navigation & restart button" },
                      { image: round1Img3, label: "Before → After: Clinic listing with icons & details" },
                      { image: round1Img4, label: "New: Clinic detail, waitlist sign-up & queue confirmation" },
                      { image: round1Img5, label: "New: Filter panels — location, hours & wait time" },
                      { image: round1Img6, label: "New: Home, services, and results page improvements" },
                    ]}
                  />
                </div>

                {/* Round 2 */}
                <div className="bg-secondary/30 rounded-xl p-5 sm:p-6">
                  <h3 className="font-semibold mb-1">Round 2 — Refined Low-Fidelity Prototype</h3>
                  <p className="text-sm text-foreground/70 mb-2">
                    Confirmed improvements but highlighted the need for stronger trust and transparency cues.
                  </p>
                  <p className="text-sm text-accent font-medium mb-4">
                    → Clearer explanations, rationale text, and improved information visibility
                  </p>
                  <TestingCarousel
                    slides={[
                      { image: round2Img1, label: "Waitlist form with validation & queue confirmation" },
                      { image: round2Img2, label: "Clinic search results & detailed clinic information" },
                      { image: round2Img3, label: "Matching tool results with rationale & nearby clinics" },
                    ]}
                  />
                </div>
              </div>
            </Section>

            {/* High-Fidelity */}
            <Section title="High-Fidelity Testing (Team Phase)">
              <p className="text-foreground/80 leading-relaxed mb-5">
                Structured scenario-based testing was conducted on the final high-fidelity prototype, focusing on navigation, clarity, task success, and user confidence. Results showed stronger usability and better alignment with user needs compared to earlier rounds.
              </p>
              <figure>
                <div className="overflow-hidden rounded-lg border border-border">
                  <video
                    src="/videos/urgentpalprototypehifi.mov"
                    controls
                    className="w-full"
                    preload="metadata"
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground mt-2 text-center">Fig 5 — High-fidelity prototype walkthrough</figcaption>
              </figure>
            </Section>

            {/* Final Solution */}
            <Section title="Final Solution">
              <p className="text-foreground/80 leading-relaxed mb-4">
                The final design delivers a streamlined experience that:
              </p>
              <Bullets
                items={[
                  "Guides users toward the most appropriate urgent care option",
                  "Provides clarity and emotional reassurance at each decision point",
                  "Supports faster, more confident decision-making with real-time information",
                ]}
              />
            </Section>

            {/* Key Learnings */}
            <Section title="Key Learnings">
              <Bullets
                items={[
                  "Feasibility testing prevents investment in unrealistic concepts",
                  "Iterative testing meaningfully improves clarity and user comfort",
                  "Emotional reassurance matters as much as usability in healthcare navigation",
                  "Collaborative ownership of testing and design strengthens outcomes",
                ]}
              />
            </Section>

            {/* Outcome */}
            <Section title="Outcome">
              <p className="text-foreground/80 leading-relaxed">
                Urgent Care Pal empowers young adults to make clearer, faster, and more confident urgent care decisions — grounded in research-based design and validated through iterative testing.
              </p>
            </Section>

            {/* Links */}
            <section className="pt-6 border-t border-border">
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground">
                  <a
                    href="https://www.figma.com/design/YDNN9bCQ4mKcTRRnUTyHhU/MIE344-Team-5?node-id=0-1&t=LkfLqrb0zTcChom2-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Figma Wireframes
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a
                    href="https://www.figma.com/proto/YDNN9bCQ4mKcTRRnUTyHhU/MIE344-Team-5?node-id=165-3652&p=f&t=XhOuio46aK9t00bR-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=165%3A3652"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Final Prototype
                  </a>
                </Button>
              </div>
            </section>
          </article>

          {/* Back */}
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

export default CaseStudy;
