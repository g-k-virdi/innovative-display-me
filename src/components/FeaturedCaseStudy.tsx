import { useState, useEffect } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "goal", label: "Goal" },
  { id: "research", label: "Research", subsections: ["Key Insights"] },
  { id: "ideation", label: "Ideation" },
  { id: "prototyping", label: "Prototyping & Testing", subsections: ["Round 1", "Round 2"] },
  { id: "final-design", label: "Final Design" },
  { id: "solution", label: "Solution" },
  { id: "learnings", label: "What I Learned" },
  { id: "outcome", label: "Outcome" },
];

const FeaturedCaseStudy = () => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-16">
      {/* Hero Section */}
      <div className="mb-12">
        {/* Title area */}
        <div className="mb-8">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Urgent Care Pal
          </h3>
          <p className="text-lg text-foreground/80 max-w-xl">
            Helping Young Adults Navigate Urgent Healthcare
          </p>
        </div>

        {/* Hero banner with accent background */}
        <div className="relative rounded-2xl overflow-hidden bg-accent/20 p-8 lg:p-12 min-h-[300px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10"></div>
          
          {/* Placeholder for project mockups - will be replaced with actual images later */}
          <div className="relative z-10 flex items-center justify-center w-full">
            <div className="flex gap-4 items-end">
              <div className="w-48 h-64 bg-card rounded-lg shadow-lg transform -rotate-6 border border-border flex items-center justify-center text-muted-foreground text-sm">
                Wireframe Preview
              </div>
              <div className="w-56 h-72 bg-card rounded-lg shadow-xl transform rotate-3 border border-border flex items-center justify-center text-muted-foreground text-sm z-10">
                Prototype Preview
              </div>
              <div className="w-44 h-60 bg-card rounded-lg shadow-lg transform -rotate-3 border border-border flex items-center justify-center text-muted-foreground text-sm">
                App Screen
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Column Layout */}
      <div className="grid lg:grid-cols-[200px_1fr_220px] gap-8 lg:gap-12">
        {/* Left Navigation */}
        <nav className="hidden lg:block">
          <div className="sticky top-28 space-y-1">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left py-1.5 text-sm transition-colors ${
                    activeSection === section.id
                      ? "text-accent font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.label}
                </button>
                {section.subsections && (
                  <div className="ml-4 space-y-1">
                    {section.subsections.map((sub) => (
                      <span
                        key={sub}
                        className="block py-1 text-xs text-muted-foreground"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Overview */}
          <section id="overview">
            <h4 className="text-2xl font-bold mb-1">Overview</h4>
            <div className="w-12 h-1 bg-accent mb-6"></div>
            <p className="text-foreground/90 leading-relaxed">
              Young adults in the GTA often experience stress, confusion, and uncertainty when seeking urgent healthcare. This project focused on understanding their challenges and designing a digital tool that provides clarity, guidance, and reassurance during stressful health situations.
            </p>
          </section>

          {/* Problem */}
          <section id="problem">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">The Problem</p>
            <h4 className="text-xl font-bold mb-4">
              Young adults struggle to navigate urgent healthcare decisions.
            </h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Many young adults:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Do not know where to go (ER vs urgent care vs walk-in)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Struggle to understand what level of care they actually need</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Feel overwhelmed during time-sensitive health situations</span>
              </li>
            </ul>
            <p className="text-foreground/80 mt-4">
              This leads to delayed care, unnecessary ER visits, and anxiety.
            </p>
          </section>

          {/* Goal */}
          <section id="goal">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">The Goal</p>
            <h4 className="text-xl font-bold mb-4">
              Design a digital tool to reduce stress and confusion.
            </h4>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Guide users in understanding what kind of care they need</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Help them quickly find appropriate urgent care options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Provide clarity and reassurance during stressful health situations</span>
              </li>
            </ul>
          </section>

          {/* Research */}
          <section id="research">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Research</p>
            <h4 className="text-xl font-bold mb-4">
              Understanding how young adults make healthcare decisions.
            </h4>
            <p className="text-foreground/80 leading-relaxed mb-6">
              I conducted user research focusing on young adults to understand how they currently make urgent healthcare decisions, what information they look for, and what causes hesitation or confusion.
            </p>
            
            <div className="bg-secondary/50 rounded-lg p-6 border-l-4 border-accent">
              <h5 className="font-semibold mb-4">Key Insights</h5>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Users want clear guidance, not medical jargon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>They struggle with decision confidence ("Am I overreacting?" "Is this serious?")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>They want speed and simplicity during stressful moments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Trust and reassurance are critical to engagement</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Problem Statement */}
          <section>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Defining the Problem</p>
            <blockquote className="text-lg italic text-foreground/90 border-l-4 border-accent pl-6 py-2">
              "How might we help young adults confidently determine the level of care they need and access appropriate urgent healthcare quickly and with less stress?"
            </blockquote>
          </section>

          {/* Ideation */}
          <section id="ideation">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Ideation</p>
            <h4 className="text-xl font-bold mb-4">
              Exploring directions through brainstorming and sketching.
            </h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Individually, I explored multiple directions through brainstorming and concept sketching. I then translated the strongest ideas into low-fidelity wireframes, focusing on:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>A clear, guided decision tool</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Simple language and supportive tone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>A clean, step-by-step experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>A direct path to nearby care options</span>
              </li>
            </ul>
          </section>

          {/* Prototyping */}
          <section id="prototyping">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Iterative Prototyping & Testing</p>
            <h4 className="text-xl font-bold mb-4">
              Refining through two structured usability testing rounds.
            </h4>
            
            <div className="space-y-6">
              <div className="bg-secondary/30 rounded-lg p-6">
                <h5 className="font-semibold mb-3">Round 1 Findings</h5>
                <ul className="space-y-2 text-sm text-foreground/80 mb-4">
                  <li>• Users hesitated at certain wording</li>
                  <li>• Felt unsure at key decision points</li>
                  <li>• Found some steps unclear</li>
                </ul>
                <h5 className="font-semibold mb-2 text-accent text-sm">Improvements Made</h5>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Simplified language for clarity</li>
                  <li>• Improved labeling</li>
                  <li>• Adjusted flow to reduce hesitation</li>
                </ul>
              </div>
              
              <div className="bg-secondary/30 rounded-lg p-6">
                <h5 className="font-semibold mb-3">Round 2 Findings</h5>
                <ul className="space-y-2 text-sm text-foreground/80 mb-4">
                  <li>• Users wanted clearer guidance on urgency</li>
                  <li>• Needed stronger reassurance</li>
                  <li>• Still expressed uncertainty at outcomes</li>
                </ul>
                <h5 className="font-semibold mb-2 text-accent text-sm">Improvements Made</h5>
                <ul className="space-y-1 text-sm text-foreground/80">
                  <li>• Refined the decision tool experience</li>
                  <li>• Added clearer messaging</li>
                  <li>• Strengthened confidence-building scaffolding</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final Design */}
          <section id="final-design">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Final Design (Team Phase)</p>
            <h4 className="text-xl font-bold mb-4">
              Developing the high-fidelity prototype collaboratively.
            </h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              As a team, we developed the high-fidelity prototype, combining previous research insights, iterative findings, and group collaboration.
            </p>
            <div className="bg-secondary/30 rounded-lg p-6">
              <h5 className="font-semibold mb-3">My Key Contributions</h5>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Co-designed high-fidelity interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Developed usability testing method & scenarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Participated in broader testing sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Analyzed findings collaboratively</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Solution */}
          <section id="solution">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Final Solution</p>
            <h4 className="text-xl font-bold mb-4">
              Urgent Care Pal: A friendly, guided healthcare decision tool.
            </h4>
            <ul className="space-y-2 text-foreground/80 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>A friendly, guided decision tool</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Simple, confidence-building recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Access to appropriate urgent care options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Reduced confusion and stress during critical moments</span>
              </li>
            </ul>
            <p className="text-foreground/80">
              The experience supports both functional needs (figuring out where to go) and emotional needs (confidence, reassurance).
            </p>
          </section>

          {/* Learnings */}
          <section id="learnings">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">What I Learned</p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Iteration meaningfully improves clarity — every testing round revealed important usability shifts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Emotional experience matters as much as functional correctness in healthcare design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Collaboration strengthens outcomes while individual ownership builds deep thinking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Clear communication is essential in stressful user contexts</span>
              </li>
            </ul>
          </section>

          {/* Outcome */}
          <section id="outcome">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Outcome</p>
            <h4 className="text-xl font-bold mb-4">
              Supporting safer, faster, and more confident healthcare decisions.
            </h4>
            <p className="text-foreground/80 leading-relaxed">
              Urgent Care Pal supports young adults in making safer, faster, and more confident urgent healthcare decisions through research-driven design, iterative refinement, and thoughtful UX strategy.
            </p>
          </section>
        </div>

        {/* Right Metadata Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6">
            <div>
              <h5 className="font-bold text-sm mb-1">Role</h5>
              <p className="text-sm text-foreground/80">UX Researcher, UX Designer</p>
            </div>
            
            <div>
              <h5 className="font-bold text-sm mb-1">Timeline</h5>
              <p className="text-sm text-foreground/80">Sept 2025 — Dec 2025</p>
            </div>
            
            <div>
              <h5 className="font-bold text-sm mb-1">Tools</h5>
              <p className="text-sm text-foreground/80">Figma, User Interviews, Usability Testing, Affinity Mapping, Iterative Prototyping</p>
            </div>
            
            <div>
              <h5 className="font-bold text-sm mb-1">Team</h5>
              <p className="text-sm text-foreground/80">Individual: Research + Ideation + Low-Fidelity Prototyping</p>
              <p className="text-sm text-foreground/80 mt-1">Team: High-Fidelity Prototype + Final Usability Testing</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile metadata - visible on smaller screens */}
      <div className="lg:hidden mt-8 p-6 bg-secondary/30 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="font-bold text-sm mb-1">Role</h5>
            <p className="text-sm text-foreground/80">UX Researcher, UX Designer</p>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-1">Timeline</h5>
            <p className="text-sm text-foreground/80">Sept 2025 — Dec 2025</p>
          </div>
          <div className="col-span-2">
            <h5 className="font-bold text-sm mb-1">Tools</h5>
            <p className="text-sm text-foreground/80">Figma, User Interviews, Usability Testing, Affinity Mapping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;
