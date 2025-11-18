import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BookOpen } from "lucide-react";

const CurrentlyLearning = () => {
  const learningTopics = [
    "Parallel, Sequential and Loop working of agents",
    "Persistence storage memory session",
    "Giving the function functionality of the agent",
    "MCP usage",
    "Context Engineering",
    "A-2-A protocol"
  ];

  return (
    <section id="current-learning" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Currently Learning
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Exploring cutting-edge AI technologies and frameworks
          </p>
        </div>

        <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in">
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <Badge variant="outline" className="mb-2">
                <BookOpen className="w-3 h-3 mr-1" />
                5-Day Bootcamp
              </Badge>
            </div>
            <CardTitle className="text-2xl">Google Agentic AI ADK Workshop</CardTitle>
            <CardDescription className="text-base">
              In collaboration with Google and Kaggle - Mastering agentic AI development
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-3 text-sm">Key Topics Covered:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {learningTopics.map((topic, idx) => (
                  <div key={idx} className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm" className="w-full mt-4" asChild>
              <a href="https://github.com/21f2003348/Google-Agentic-AI-ADK-Tutorial" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Progress on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
