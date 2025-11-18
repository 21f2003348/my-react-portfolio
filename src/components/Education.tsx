import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "RV College of Engineering",
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      period: "July 2024 - June 2028",
      highlights: [
        "Core courses: Web Development, C Programming",
        "Attended many hackathons and workshops related to Generative AI and web development",
        "Worked on underground parking management system leveraging OpenCV and YOLO",
        "Worked on ocean wave energy harvesting using triboelectric nanogenerators"
      ]
    },
    {
      institution: "IIT Madras",
      degree: "Bachelor of Science",
      field: "Data Science",
      period: "May 2024 - June 2026",
      highlights: [
        "Core courses: MAD (Mobile App Dev), DSA in Python, DBMS, System Command, Java",
        "Made a project for MAD1 — a quiz app that used Python with Flask as the backend and HTML, CSS, and JavaScript as the frontend"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-2xl">{edu.institution}</CardTitle>
                      <Badge variant="outline">{edu.period}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {edu.degree} in {edu.field}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
