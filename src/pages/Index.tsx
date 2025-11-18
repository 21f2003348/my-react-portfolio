import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Skills />
      <CurrentlyLearning />
      <Projects />
      <Hackathons />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
