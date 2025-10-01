import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Clapperboard, Wand2, TrendingUp, ArrowRight } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      emoji: "🎭",
      icon: <Palette className="w-10 h-10 text-secondary" />,
      title: "Creative Development",
      subtitle: "Where imagination meets strategy",
      description: "Turn fleeting ideas into compelling narratives that captivate your audience from the first frame to the final fade.",
      features: [
        "Story Architecture - Building narratives that grip and don't let go",
        "Treatment Mastery - Translating vision into vivid, actionable blueprints", 
        "Strategic Storytelling - Aligning creative vision with audience psychology",
        "Content DNA - Developing your unique voice across all platforms"
      ],
      cta: "Explore Creative Development"
    },
    {
      emoji: "🎬",
      icon: <Clapperboard className="w-10 h-10 text-secondary" />,
      title: "Production Excellence",
      subtitle: "Professional craft meets creative passion",
      description: "From intimate podcasts to cinematic productions, we deliver Hollywood-quality results with boutique studio care and attention.",
      features: [
        "Cinematic Production - Feature-quality filming with artistic vision",
        "Podcast Perfection - Studio-grade recording that makes voices shine",
        "Video Virtuosity - Dynamic content that stops the scroll",
        "Location Alchemy - Transforming any space into the perfect backdrop"
      ],
      cta: "Discover Production Services"
    },
    {
      emoji: "✨",
      icon: <Wand2 className="w-10 h-10 text-secondary" />,
      title: "Post-Production Magic",
      subtitle: "Where good content becomes unforgettable",
      description: "In the digital cutting room, stories find their soul. Our post-production team doesn't just edit—they elevate, refine, and polish until your content gleams.",
      features: [
        "Editorial Artistry - Cutting with rhythm, pacing, and emotional intelligence",
        "Sonic Landscapes - Audio mixing that immerses and enchants",
        "Color Storytelling - Grading that sets mood and amplifies narrative",
        "Motion Poetry - Graphics that dance, inform, and dazzle"
      ],
      cta: "Experience Post-Production"
    },
    {
      emoji: "🚀",
      icon: <TrendingUp className="w-10 h-10 text-secondary" />,
      title: "Strategic Distribution",
      subtitle: "Getting your story into the right hands",
      description: "Creating amazing content is just the beginning. We ensure your stories find their perfect audience and make maximum impact in the crowded digital landscape.",
      features: [
        "Platform Mastery - Optimizing for every channel's unique algorithm and audience",
        "Precision Targeting - Finding your tribe in the vast digital wilderness",
        "Launch Strategies - Orchestrating releases for maximum momentum",
        "Growth Amplification - Marketing that feels authentic, not intrusive"
      ],
      cta: "Maximize Your Reach"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="mb-16 rounded-lg overflow-hidden shadow-elegant">
            <img 
              src={servicesHero} 
              alt="Creative professionals collaborating in modern studio workspace"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Hero Header */}
          <div className="text-center mb-20">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Transform Ideas Into 
              <span className="gradient-hero bg-clip-text text-transparent block mt-2">
                Extraordinary Stories
              </span>
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Infinity Network Studio, we don't just create content—we craft experiences that resonate, inspire, and leave lasting impressions. 
              As an agile creative partner, we combine cutting-edge innovation with intimate collaboration to bring your boldest visions to life.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="group p-8 hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{service.emoji}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl text-primary mb-2 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-secondary font-medium mb-4 italic">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">Our {service.title.split(' ')[0]} Arsenal:</h4>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/30">
                  <p className="text-secondary font-medium mb-4 text-center italic">
                    {index === 0 && "Transform abstract concepts into stories that matter."}
                    {index === 1 && "Every frame, every sound, every moment crafted to perfection."}
                    {index === 2 && "Transforming raw footage into cinematic gold."}
                    {index === 3 && "Because the best stories deserve the biggest stages."}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                    {service.cta} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="p-12 bg-gradient-accent border-secondary/30 shadow-elegant">
              <h2 className="font-bold text-primary text-3xl mb-6">Ready to Create Something Extraordinary?</h2>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                As a fresh voice in the creative landscape, we bring unbounded curiosity, personalized attention, and innovative approaches to every collaboration. 
                We're not just service providers—we're creative partners who invest in your success. And we practice what we preach, we also have our video and podcast channels.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { title: "Boutique Focus", desc: "Your project gets our full attention, not just a slice of it" },
                  { title: "Agile Innovation", desc: "Quick pivots, fresh ideas, zero creative bureaucracy" },
                  { title: "Collaborative Spirit", desc: "Your vision + our expertise = extraordinary results" },
                  { title: "Authentic Passion", desc: "We only take on projects that genuinely excite us" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg font-medium text-secondary">Ready to turn your vision into reality?</p>
                <Button variant="accent" size="lg" className="text-lg px-8 py-4 shadow-glow">
                  Start Your Journey With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <blockquote className="text-primary font-medium text-xl italic border-l-4 border-secondary pl-6 mt-8">
                "Your story is waiting to be told. We're here to make sure the world can't look away."
              </blockquote>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;