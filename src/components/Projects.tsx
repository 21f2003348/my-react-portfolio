import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Parking Tracking System",
      role: "Backend Developer",
      period: "September 2024 - December 2024",
      description: "Real-time vehicle detection and tracking system using computer vision",
      features: [
        "Detects and tracks vehicles in real-time using YOLOv5 object detection",
        "Analyzes predefined parking zones to determine slot occupancy",
        "Uses OpenCV for video processing and visualization",
        "Tested on miniature parking model with toy cars"
      ],
      technologies: ["YOLOv5", "OpenCV", "Python", "Computer Vision"],
      githubLink: "https://github.com/"
    },
    {
      title: "Quiz Management App",
      role: "Solo Developer",
      period: "January 2025 - March 2025",
      description: "Comprehensive quiz platform with admin and student portals",
      features: [
        "Admin panel to create and manage subjects, chapters, and quiz questions",
        "Student portal to take quizzes before deadlines and review past scores",
        "Automated quiz evaluation with score calculation and result storage",
        "Performance analytics dashboard for both admin and students",
        "Secure user authentication with role-based access control"
      ],
      technologies: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "DBMS"],
      githubLink: "https://github.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="mb-2">{project.role}</Badge>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
