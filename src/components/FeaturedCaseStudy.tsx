import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const FeaturedCaseStudy = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <Badge className="bg-accent/10 text-accent border border-accent/30 mb-4">
          Featured Case Study
        </Badge>
      </div>
      
      <Card className="border-2 border-accent bg-card overflow-hidden shadow-lg">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-accent/5 border-b border-accent/20 p-6 lg:p-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              Urgent Care Pal — Helping Young Adults Navigate Urgent Healthcare
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
              <div>
                <span className="font-semibold text-foreground">Role:</span> UX Researcher, UX Designer
              </div>
              <div>
                <span className="font-semibold text-foreground">Timeline:</span> September — December 2025
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Figma", "User Interviews", "Usability Testing", "Affinity Mapping", "Iterative Prototyping"].map((tool) => (
                <Badge key={tool} variant="secondary" className="text-xs">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8 space-y-8">
            {/* Problem */}
            <section>
              <h4 className="text-lg font-semibold text-accent mb-3">Problem</h4>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Young adults in the GTA often experience stress, confusion, and uncertainty when seeking urgent healthcare. Many:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>do not know where to go (ER vs urgent care vs walk-in)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>struggle to understand what level of care they actually need</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>feel overwhelmed during time-sensitive health situations</span>
                </li>
              </ul>
              <p className="text-foreground/80 mt-3">
                This leads to delayed care, unnecessary ER visits, and anxiety.
              </p>
            </section>

            {/* Goal */}
            <section>
              <h4 className="text-lg font-semibold text-accent mb-3">Goal</h4>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Design a digital tool to:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>guide users in understanding what kind of care they need</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>help them quickly find appropriate urgent care options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>provide clarity and reassurance during stressful health situations</span>
                </li>
              </ul>
            </section>

            {/* Research */}
            <section>
              <h4 className="text-lg font-semibold text-accent mb-3">Research</h4>
              <p className="text-foreground/90 leading-relaxed mb-4">
                I conducted user research focusing on young adults to understand how they currently make urgent healthcare decisions, what information they look for, and what causes hesitation or confusion.
              </p>
              <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                <h5 className="font-semibold mb-3">Key Insights</h5>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Users want clear guidance, not medical jargon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>They struggle with decision confidence ("Am I overreacting?" "Is this serious?")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>They want speed and simplicity during stressful moments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Trust and reassurance are critical to engagement</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Defining the Problem */}
            <section>
              <h4 className="text-lg font-semibold text-accent mb-3">Defining the Problem</h4>
              <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/90">
                "How might we help young adults confidently determine the level of care they need and access appropriate urgent healthcare quickly and with less stress?"
              </blockquote>
            </section>

            {/* Ideation */}
            <section>
              <h4 className="text-lg font-semibold text-accent mb-3">Ideation</h4>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Individually, I explored multiple directions through brainstorming and concept sketching. I then translated the strongest ideas into low-fidelity wireframes, focusing on:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>a clear, guided decision tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>simple language and supportive tone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>a clean, step-by-step experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>a direct path to nearby care options</span>
                </li>
              </ul>
            </section>

            {/* Iterative Prototyping */}
            <section>
              <h4 className="text-lg font-semibold text-accent mb-3">Iterative Prototyping & Testing</h4>
              <p className="text-foreground/90 leading-relaxed mb-4">
                I created an initial low-fidelity prototype, then refined it through two structured usability testing rounds.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <h5 className="font-semibold mb-2">Round 1 Findings</h5>
                  <ul className="space-y-1 text-sm text-foreground/80 mb-3">
                    <li>• Users hesitated at certain wording</li>
                    <li>• Felt unsure at key decision points</li>
                    <li>• Found some steps unclear</li>
                  </ul>
                  <h5 className="font-semibold mb-2 text-accent">Improvements</h5>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    <li>• Simplified language for clarity</li>
                    <li>• Improved labeling</li>
                    <li>• Adjusted flow to reduce hesitation</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <h5 className="font-semibold mb-2">Round 2 Findings</h5>
                  <ul className="space-y-1 text-sm text-foreground/80 mb-3">
                    <li>• Users wanted clearer guidance on urgency</li>
                    <li>• Needed stronger reassurance</li>
                    <li>• Still expressed uncertainty at outcomes</li>
                  </ul>
                  <h5 className="font-semibold mb-2 text-accent">Improvements</h5>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    <li>• Refined the decision tool experience</li>
                    <li>• Added clearer messaging</li>
                    <li>• Strengthened confidence-building scaffolding</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final Design */}
            <section>
              <h4 className="text-lg font-semibold text-accent mb-3">Final Design (Team Phase)</h4>
              <p className="text-foreground/90 leading-relaxed mb-3">
                As a team, we developed the high-fidelity prototype, combining previous research insights, iterative findings, and group collaboration.
              </p>
              <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                <h5 className="font-semibold mb-2">My Key Contributions</h5>
                <ul className="space-y-1 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Co-designed high-fidelity interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Developed usability testing method & scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Participated in broader testing sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Analyzed findings collaboratively</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Final Solution */}
            <section>
              <h4 className="text-lg font-semibold text-accent mb-3">Final Solution</h4>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Urgent Care Pal provides:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>a friendly, guided decision tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>simple, confidence-building recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>access to appropriate urgent care options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>reduced confusion and stress during critical moments</span>
                </li>
              </ul>
              <p className="text-foreground/80 mt-3">
                The experience supports both functional needs (figuring out where to go) and emotional needs (confidence, reassurance).
              </p>
            </section>

            {/* What I Learned */}
            <section>
              <h4 className="text-lg font-semibold text-accent mb-3">What I Learned</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Iteration meaningfully improves clarity — every testing round revealed important usability shifts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Emotional experience matters as much as functional correctness in healthcare design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Collaboration strengthens outcomes while individual ownership builds deep thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Clear communication is essential in stressful user contexts</span>
                </li>
              </ul>
            </section>

            {/* Outcome */}
            <section className="bg-accent/5 -mx-6 lg:-mx-8 px-6 lg:px-8 py-6 border-t border-accent/20">
              <h4 className="text-lg font-semibold text-accent mb-3">Outcome</h4>
              <p className="text-foreground/90 leading-relaxed">
                Urgent Care Pal supports young adults in making safer, faster, and more confident urgent healthcare decisions through research-driven design, iterative refinement, and thoughtful UX strategy.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-2 border-accent/50 text-muted-foreground cursor-not-allowed opacity-60"
                  disabled
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Prototype in progress
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="#">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Wireframe
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturedCaseStudy;
