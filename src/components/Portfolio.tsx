import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Mic, Camera, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "The Hustle: Africa's Creative Economy",
      type: "Documentary Series",
      status: "In Development",
      description: "An in-depth exploration of the rapidly evolving creative landscape across Africa, featuring entrepreneurs, artists, and innovators shaping the continent's cultural future.",
      icon: <Film className="w-8 h-8 text-secondary" />,
      tags: ["Documentary", "Culture", "Economics"]
    },
    {
      title: "Voices Unbound",
      type: "Original Podcast",
      status: "Upcoming",
      description: "Intimate conversations with storytellers, creators, and visionaries who are breaking barriers and redefining narratives across the African diaspora.",
      icon: <Mic className="w-8 h-8 text-secondary" />,
      tags: ["Podcast", "Interviews", "Culture"]
    },
    {
      title: "Branded Campaigns",
      type: "Creative Partnerships", 
      status: "Opening 2025",
      description: "Pilot partnerships with forward-thinking brands looking to connect authentically with diverse audiences through compelling visual storytelling.",
      icon: <Camera className="w-8 h-8 text-secondary" />,
      tags: ["Commercial", "Branding", "Strategy"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Our Work in Progress
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Since we're at the start of our journey, this section highlights works in progress 
              and concept development. Each project represents our commitment to authentic storytelling.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  <div className="mb-4">{project.icon}</div>
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full mb-3">
                    {project.status}
                  </span>
                  <h3 className="font-bold text-xl text-primary mb-2">{project.title}</h3>
                  <p className="text-secondary font-medium text-sm mb-4">{project.type}</p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Future Feature Note */}
          <div className="text-center">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-primary text-lg mb-3">Coming Soon</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                As our productions launch, this section will feature detailed case studies, 
                behind-the-scenes content, and full project breakdowns showcasing our creative process.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;