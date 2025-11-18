import { Mail, Phone, MapPin, Github, Linkedin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/21f2003348", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ansh-patel-164332338/", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/ansh1646/", label: "LeetCode", isReactIcon: true },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
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

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.isReactIcon ? (
                    <link.icon className="h-5 w-5" />
                  ) : (
                    <link.icon className="h-5 w-5" />
                  )}
                </a>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform"
            >
              <a href="https://www.credly.com/users/ansh1646" target="_blank" rel="noopener noreferrer" aria-label="Credly">
                <Award className="h-5 w-5" />
              </a>
            </Button>
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
