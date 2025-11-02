import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Education = () => {
  const coursework = [
    "Human Factors Engineering",
    "Engineering Psychology",
    "Cognitive Psychology",
    "Ergonomic Design of Information Systems",
    "Workplace Ergonomics",
    "Design & Analysis of Information Systems",
    "Statistics",
    "Probability",
    "Data Science",
    "Introduction to Machine Learning",
  ];

  return (
    <div id="education" className="py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-border hover:shadow-xl transition-all duration-300 bg-card overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 border-2 border-accent rounded shrink-0">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">
                    University of Toronto
                  </h3>
                  <p className="text-lg text-foreground mb-1">
                    Bachelor of Applied Science, Industrial Engineering
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Minor in Philosophy
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    September 2022 – June 2026
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Focus: Human Factors
                    </p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      >
                        View Coursework
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Relevant Coursework</DialogTitle>
                        <DialogDescription>
                          Key courses completed during my degree
                        </DialogDescription>
                      </DialogHeader>
                      <ul className="space-y-2 mt-4">
                        {coursework.map((course, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground">
                            <span className="text-accent mt-1">•</span>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
