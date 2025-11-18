import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ansh M Patel
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            Full Stack Developer & Computer Science Student
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building innovative web applications with modern technologies. 
            Specializing in Vue.js, JavaScript, and backend development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Bangalore</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:ansh.16461646@gmail.com" className="hover:text-primary transition-colors">
                ansh.16461646@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <a href="tel:9860135882" className="hover:text-primary transition-colors">
                9860135882
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
