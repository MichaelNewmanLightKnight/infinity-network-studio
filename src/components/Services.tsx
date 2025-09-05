import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Video, Edit, Share2, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Creative Development",
      description: "Concepts, treatments, and storytelling strategy tailored to your vision and audience",
      features: ["Story conceptualization", "Treatment writing", "Creative strategy", "Content planning"]
    },
    {
      icon: <Video className="w-8 h-8 text-secondary" />,
      title: "Production Services",
      description: "Full-service film, podcast, and video execution with professional quality standards",
      features: ["Film production", "Podcast recording", "Video creation", "Location management"]
    },
    {
      icon: <Edit className="w-8 h-8 text-secondary" />,
      title: "Post-Production",
      description: "Comprehensive editing, sound design, and finishing services to perfect your content",
      features: ["Video editing", "Audio mixing", "Color grading", "Motion graphics"]
    },
    {
      icon: <Share2 className="w-8 h-8 text-secondary" />,
      title: "Distribution Support",
      description: "Strategic positioning and platform optimization for maximum reach and impact",
      features: ["Platform strategy", "Audience targeting", "Distribution planning", "Marketing support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Our Capabilities
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Infinity Network Studio offers comprehensive creative services designed to bring your stories to life. 
              As a new studio, we're flexible and collaborative, tailoring our approach to each partner's unique needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="font-bold text-xl text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80 p-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Collaboration Note */}
          <div className="text-center">
            <Card className="p-8 bg-secondary/5 border-secondary/20">
              <h3 className="font-semibold text-primary text-xl mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                As a new studio, we bring fresh perspectives and personalized attention to every project. 
                We're excited to work with partners who share our passion for authentic storytelling.
              </p>
              <Button variant="accent" size="lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;