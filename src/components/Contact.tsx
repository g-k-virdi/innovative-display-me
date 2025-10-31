import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            I'm always open to connecting, collaborating, or just chatting about design and ideas.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-6">
            <a
              href="mailto:virdigurleenkaur3@gmail.com"
              className="flex items-center gap-4 p-6 bg-card border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-3 bg-accent/10 border-2 border-accent">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                  virdigurleenkaur3@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-3 bg-accent/10 border-2 border-accent">
                <Linkedin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                  Connect on LinkedIn
                </p>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-3 bg-accent/10 border-2 border-accent">
                <Github className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                  View GitHub Profile
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
