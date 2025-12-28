import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UTESCACaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="mb-8 hover:bg-accent/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              UTESCA Portal Wireframe
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              Designing a member portal for the University of Toronto Engineering Science Club Association
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="bg-secondary px-3 py-1 rounded-full">UX Designer</span>
              <span className="bg-secondary px-3 py-1 rounded-full">Club Project</span>
              <span className="bg-secondary px-3 py-1 rounded-full">Figma</span>
            </div>
          </div>

          {/* Placeholder Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
            <section className="bg-secondary/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Case Study Coming Soon</h2>
              <p className="text-muted-foreground mb-6">
                The detailed case study for this project is being prepared. Check back soon for the full breakdown of the research, design process, and outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="outline">
                  <a 
                    href="https://www.figma.com/design/KgNOeTITykawA93s9M4qpa/UTESCA-Portal?node-id=0-1&t=a6QzEm5TWUhAXwVc-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Figma Wireframe
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UTESCACaseStudy;
