import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      organization: "Innomatics Research Labs",
      title: "Web Development Workshop",
      period: "April 28, 2025 - May 2, 2025",
      skills: [
        "Completed workshop covering HTML, CSS, JavaScript, and responsive web design",
        "Gained practical experience in front-end and basic back-end development",
        "Learned version control (Git) and deployment fundamentals for modern web applications"
      ]
    },
    {
      organization: "BITS Hyderabad TechXcelerate",
      title: "AI/ML Foundations",
      period: "March 22, 2025 - November 8, 2025",
      skills: []
    },
    {
      organization: "Oracle",
      title: "Fundamentals of AI and Machine Learning using Python",
      period: "2025",
      skills: [
        "Data pre-processing, analysis, and visualization techniques",
        "Supervised & Unsupervised learning (Regression, Classification, Clustering)",
        "Basics of Neural Networks and model evaluation methods",
        "Basics of modern Agentic AI, theory of different methods used to build such models"
      ]
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
                <CardContent>
                  <ul className="space-y-2">
                    {cert.skills.map((skill, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <span className="mr-2 text-accent">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
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
