import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      organization: "Innomatics Research Labs",
      title: "Data Science Internship",
      period: "October 2024",
      skills: [
        "Comprehensive internship covering data science fundamentals and practical applications"
      ]
    },
    {
      organization: "BITS Hyderabad",
      title: "Python for Data Science",
      period: "December 2023",
      skills: [
        "Intensive 2-day workshop on Python programming for data science applications"
      ]
    },
    {
      organization: "Oracle",
      title: "Java Programming",
      period: "June 2024",
      skills: [
        "Core Java programming concepts and object-oriented programming principles"
      ]
    },
    {
      organization: "GDG in partnership with Google",
      title: "Google Skills Bootcamp",
      period: "2024 - Present",
      skills: [
        "Comprehensive training program in modern development skills"
      ],
      link: "https://www.skills.google/public_profiles/f24de91e-b8c8-46ca-a86d-468590314391"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-xs">{cert.period}</Badge>
                </div>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
                <CardDescription className="font-semibold text-foreground/80">
                  {cert.organization}
                </CardDescription>
              </CardHeader>
              {cert.skills.length > 0 && (
                <CardContent className="space-y-3">
                  <ul className="space-y-2">
                    {cert.skills.map((skill, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <span className="mr-2 text-accent">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  {cert.link && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        View Profile
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
