import { Card } from "@/components/ui/card";
import { Users, Target, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Bold Creativity",
      description: "We push boundaries and challenge conventional storytelling approaches"
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Collaboration",
      description: "Every project is built on the foundation of meaningful partnerships"
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Inclusivity",
      description: "We amplify diverse voices and create opportunities for all"
    }
  ];

  const team = [
    {
      role: "Creative Director",
      responsibility: "Shaping our storytelling voice",
      description: "Leading creative vision and narrative development across all projects"
    },
    {
      role: "Strategy Lead", 
      responsibility: "Building partnerships and opportunities",
      description: "Developing strategic relationships and growth opportunities"
    },
    {
      role: "Production & Ops Lead",
      responsibility: "Turning ideas into reality",
      description: "Overseeing production logistics and operational excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Our Story & Vision
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          </div>

          {/* Origin Story */}
          <div className="mb-20">
            <Card className="p-8 sm:p-12 shadow-elegant">
              <h3 className="text-2xl font-semibold text-primary mb-6">Origin Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Infinity Network Studio was founded by three storytellers who believe Africa's creative economy 
                deserves a new wave of platforms. Our journey is just beginning — but our vision is bold: to create 
                documentaries, podcasts, and video content that travel beyond borders.
              </p>
              <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                <h4 className="font-semibold text-primary mb-2">Our Vision</h4>
                <p className="text-muted-foreground">
                  We aim to become a creative hub where stories are born, crafted, and shared with the world — 
                  balancing cultural authenticity with global appeal.
                </p>
              </div>
            </Card>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-primary text-center mb-12">Leadership Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-primary text-lg mb-2">{member.role}</h4>
                    <p className="text-secondary font-medium text-sm mb-3">{member.responsibility}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Culture */}
          <div>
            <h3 className="text-2xl font-semibold text-primary text-center mb-12">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="font-semibold text-primary text-lg mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're building Infinity Network Studio with values of bold creativity, collaboration, 
                and inclusivity at its core.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;