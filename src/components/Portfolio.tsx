import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Mic, Camera, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Our Work in Progress
            </h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're at the start our journey, this section will highlight works in progress 
              and concept development. Each project represents our commitment to authentic and inspirational storytelling.
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