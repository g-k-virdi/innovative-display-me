import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:virdigurleenkaur3@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/90">
            I'm always open to connecting, collaborating, or just chatting about design and ideas.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-border hover:shadow-xl transition-all duration-300 bg-card mb-8">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/90 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-2 border-border focus:border-accent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-2 border-border focus:border-accent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[150px] border-2 border-border focus:border-accent"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 border-2 border-accent"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="mailto:virdigurleenkaur3@gmail.com"
              className="flex flex-col items-center gap-3 p-4 bg-card border-2 border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 bg-accent/10 border-2 border-accent">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground/90 group-hover:text-accent transition-colors">
                Email
              </span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-4 bg-card border-2 border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 bg-accent/10 border-2 border-accent">
                <Linkedin className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground/90 group-hover:text-accent transition-colors">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-4 bg-card border-2 border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 bg-accent/10 border-2 border-accent">
                <Github className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground/90 group-hover:text-accent transition-colors">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
