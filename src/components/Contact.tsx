import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ansh.16461646@gmail.com",
      link: "mailto:ansh.16461646@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9860135882",
      link: "tel:9860135882"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-full mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline"
                size="lg"
                className="gap-2"
                asChild
              >
                <a href="mailto:ansh.16461646@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 text-sm text-muted-foreground animate-fade-in">
          <p>© 2025 Ansh M Patel. Built with React & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
