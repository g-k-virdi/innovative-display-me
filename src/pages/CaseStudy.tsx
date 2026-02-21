import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import researchInterviewImg from "@/assets/research-interview.png";
import { useNavigate } from "react-router-dom";

const CaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          {/* Header */}
          <header className="mb-12 animate-fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              Urgent Care Pal
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Helping Young Adults Find the Right Care Faster
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-foreground/80 mb-8">
              <div>
                <span className="text-muted-foreground">Role:</span>{" "}
                <span className="font-medium">UX Researcher & Designer</span>
              </div>
              <div>
                <span className="text-muted-foreground">Timeline:</span>{" "}
                <span className="font-medium">Sept – Dec 2025</span>
              </div>
              <div>
                <span className="text-muted-foreground">Tools:</span>{" "}
                <span className="font-medium">Figma, Miro, Google Forms, Docs</span>
              </div>
            </div>

            {/* Contributions */}
            <div className="bg-secondary/30 rounded-lg p-5 text-sm">
              <p className="font-medium mb-2">Contributions</p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>Individual:</strong> user research, analysis, feasibility evaluation, ideation, concept selection, low-fidelity prototyping, reporting and presentations
              </p>
              <p className="text-foreground/80 leading-relaxed mt-1">
                <strong>Team:</strong> high-fidelity prototype, structured usability testing, final presentation and reporting
              </p>
            </div>
          </header>

          {/* Content */}
          <article className="space-y-12 animate-fade-in">
            {/* Problem */}
            <section>
              <h2 className="text-xl font-bold mb-4">Problem</h2>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Young adults struggle to decide where to seek urgent but non-emergency care due to:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Difficulty accessing primary care</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Uncertainty about the right care option</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Lack of reliable, real-time information</span>
                </li>
              </ul>
              <p className="text-foreground/80 mt-3">
                This results in confusion, hesitation, and stress.
              </p>
            </section>

            {/* Research Approach */}
            <section>
              <h2 className="text-xl font-bold mb-4">Research Approach</h2>
              <p className="text-foreground/80 leading-relaxed">
                Research was conducted with young adults in the GTA using secondary research, a survey, interviews, and an experience map.
              </p>
              
              {/* Visual Placeholder */}
              <div className="mt-6">
                <img 
                  src={researchInterviewImg} 
                  alt="Excerpt from an interview showing a question about ER vs walk-in clinic usage" 
                  className="rounded-lg w-full"
                />
              </div>
            </section>

            {/* Key Findings */}
            <section>
              <h2 className="text-xl font-bold mb-4">Key Findings</h2>
              <div className="bg-secondary/50 rounded-lg p-5 border-l-4 border-accent">
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Choosing "where to go" is confusing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Convenience, location, wait time, and trust strongly influence decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Many users feel uncertain and anxious</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>A guided, trusted support tool would be valuable</span>
                  </li>
                </ul>
              </div>
              <p className="text-foreground/80 mt-4 text-sm">
                These findings shaped the direction of the solution.
              </p>
            </section>

            {/* Feasibility Testing & Concept Selection */}
            <section>
              <h2 className="text-xl font-bold mb-4">Feasibility Testing & Concept Selection</h2>
              <p className="text-foreground/80 leading-relaxed">
                Multiple solution ideas were developed and evaluated using a concept evaluation and feasibility matrix. A digital guidance and decision-support tool was selected as the most practical, accessible, and useful direction.
              </p>
              
              {/* Visual Placeholder */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-secondary/30 rounded-lg p-8 border-2 border-dashed border-border flex items-center justify-center text-muted-foreground text-sm min-h-[160px]">
                  Concept Evaluation Matrix
                </div>
                <div className="bg-secondary/30 rounded-lg p-8 border-2 border-dashed border-border flex items-center justify-center text-muted-foreground text-sm min-h-[160px]">
                  Shortlisted Idea Visual
                </div>
              </div>
            </section>

            {/* Design Approach */}
            <section>
              <h2 className="text-xl font-bold mb-4">Design Approach</h2>
              <p className="text-foreground/80 leading-relaxed">
                Site maps and low-fidelity wireframes were created in Miro and Figma to define structure, flow, and clarity before visual design.
              </p>
              
              {/* Visual Placeholder */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-secondary/30 rounded-lg p-8 border-2 border-dashed border-border flex items-center justify-center text-muted-foreground text-sm min-h-[160px]">
                  Site Map
                </div>
                <div className="bg-secondary/30 rounded-lg p-8 border-2 border-dashed border-border flex items-center justify-center text-muted-foreground text-sm min-h-[160px]">
                  Low-Fidelity Wireframes
                </div>
              </div>
            </section>

            {/* Iterative User Testing */}
            <section>
              <h2 className="text-xl font-bold mb-4">Iterative User Testing</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                User testing was completed in a team, with defined responsibilities. The prototypes used in testing were designed based on earlier research and concept development. Testing was completed collaboratively, and findings were analyzed to guide improvements.
              </p>
              
              <div className="space-y-6">
                {/* Round 1 */}
                <div className="bg-secondary/30 rounded-lg p-5">
                  <h3 className="font-semibold mb-3">Round 1 — Low-Fidelity Prototype</h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    Testing identified challenges with navigation clarity, instructions, and hesitation.
                  </p>
                  <p className="text-sm text-accent font-medium">
                    → Improvements: clearer structure, improved instructions, and better visibility.
                  </p>
                  
                  {/* Visual Placeholder */}
                  <div className="bg-secondary/50 rounded-lg p-6 border-2 border-dashed border-border flex items-center justify-center text-muted-foreground text-sm min-h-[120px] mt-4">
                    Before vs After (Round 1)
                  </div>
                </div>

                {/* Round 2 */}
                <div className="bg-secondary/30 rounded-lg p-5">
                  <h3 className="font-semibold mb-3">Round 2 — Refined Low-Fidelity Prototype</h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    Testing confirmed improvements but highlighted the need for stronger trust and transparency.
                  </p>
                  <p className="text-sm text-accent font-medium">
                    → Improvements: clearer explanations, rationale text, and stronger information visibility.
                  </p>
                  
                  {/* Visual Placeholder */}
                  <div className="bg-secondary/50 rounded-lg p-6 border-2 border-dashed border-border flex items-center justify-center text-muted-foreground text-sm min-h-[120px] mt-4">
                    Before vs After (Round 2)
                  </div>
                </div>
              </div>
            </section>

            {/* High-Fidelity Testing */}
            <section>
              <h2 className="text-xl font-bold mb-4">High-Fidelity Testing (Team Phase)</h2>
              <p className="text-foreground/80 leading-relaxed">
                Structured scenario-based testing was conducted on the final prototype, focusing on navigation, clarity, task success, and confidence. Testing showed stronger usability and better support for user needs.
              </p>
            </section>

            {/* Final Solution */}
            <section>
              <h2 className="text-xl font-bold mb-4">Final Solution</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The final design:
              </p>
              <ul className="space-y-2 text-foreground/80 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Guides users toward appropriate urgent care options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Improves clarity and reassurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Supports faster and more confident decision-making</span>
                </li>
              </ul>
              
              {/* Visual Placeholder */}
              <div className="bg-accent/10 rounded-lg p-8 border-2 border-dashed border-accent/30 flex items-center justify-center text-muted-foreground text-sm min-h-[200px]">
                High-Fidelity Prototype Screens (Home → Triage → Result)
              </div>
            </section>

            {/* Key Learnings */}
            <section>
              <h2 className="text-xl font-bold mb-4">Key Learnings</h2>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Feasibility testing helps avoid unrealistic concepts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Iteration meaningfully improves clarity and comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Emotional reassurance is important in healthcare navigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Collaboration strengthens outcomes</span>
                </li>
              </ul>
            </section>

            {/* Outcome */}
            <section>
              <h2 className="text-xl font-bold mb-4">Outcome</h2>
              <p className="text-foreground/80 leading-relaxed">
                Urgent Care Pal helps young adults make clearer, faster, and more confident urgent care decisions through research-based design and iterative testing.
              </p>
            </section>

            {/* Figma Links */}
            <section className="pt-6 border-t border-border">
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                  <a
                    href="https://www.figma.com/design/YDNN9bCQ4mKcTRRnUTyHhU/MIE344-Team-5?node-id=0-1&t=LkfLqrb0zTcChom2-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Figma Wireframes
                  </a>
                </Button>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a
                    href="https://www.figma.com/proto/YDNN9bCQ4mKcTRRnUTyHhU/MIE344-Team-5?node-id=165-3652&p=f&t=XhOuio46aK9t00bR-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=165%3A3652"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Final Prototype
                  </a>
                </Button>
              </div>
            </section>
          </article>

          {/* Back to Projects */}
          <div className="mt-16 pt-8 border-t border-border">
            <Button
              variant="ghost"
              onClick={() => navigate("/projects")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
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
