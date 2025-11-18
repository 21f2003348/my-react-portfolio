import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const Hackathons = () => {
  const hackathons = [
    {
      name: "Bitathon",
      achievement: "Participated & Earned Badge",
      description: "Competed in the Bitathon hackathon and earned recognition badge",
      year: "2024",
      badgeLink: "https://www.credly.com/badges/ea519381-d168-406e-b3b5-c425445ced59/public_url"
    },
    {
      name: "BITS Hyderabad 2-Day Hackathon",
      achievement: "Semi-Finalist (2nd Last Round)",
      description: "Developed complete frontend UI/UX for the project. Reached the semi-final round competing against numerous teams",
      year: "2024"
    },
    {
      name: "BMS Hackathon",
      achievement: "Participant",
      description: "First year participation - Developed agriculture-themed web application with HTML and CSS, focusing on linking multiple pages and basic web development",
      year: "2023",
      theme: "Agriculture"
    },
    {
      name: "IBM z Datathon",
      achievement: "Participant",
      description: "First-time datathon experience. Gained valuable insights into data analysis and IBM Z platform",
      year: "2024"
    }
  ];

  return (
    <section id="hackathons" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hackathons & Competitions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Participating in competitive coding events and building innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((hackathon, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="mb-2">
                    <Award className="w-3 h-3 mr-1" />
                    {hackathon.year}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{hackathon.name}</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  {hackathon.achievement}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{hackathon.description}</p>
                
                {hackathon.theme && (
                  <Badge variant="secondary" className="text-xs">
                    Theme: {hackathon.theme}
                  </Badge>
                )}

                {hackathon.badgeLink && (
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={hackathon.badgeLink} target="_blank" rel="noopener noreferrer">
                      <Award className="w-4 h-4 mr-2" />
                      View Badge
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
