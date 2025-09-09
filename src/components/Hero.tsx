import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-secondary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              We Craft Compelling Content and{" "}
              <span className="text-secondary">Scintillating Stories</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in">
              At Infinity Network Studio we create bold, inspiring, educational, life-changing (even fun) stories across videos, podcasts, and documentaries. 
              Our studio amplifies voices, inspires audiences, and creates opportunities for a myriad of people.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-8 animate-fade-in">
              <Link to="/about">
                <Button variant="outline" size="lg" className="font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Explore Our Story
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <img 
              src="/lovable-uploads/53747711-4a3b-44e2-a035-061ac26b2b38.png" 
              alt="Infinity Network Studio creative team collaborating with professional video and audio equipment"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

        </div>

        {/* Audience Pathways */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-primary-foreground text-center mb-12">Choose Your Journey</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Investors",
                subtitle: "See the Opportunity",
                description: "Be part of Africa's creative future from day one",
                href: "/investors"
              },
              {
                title: "Careers",
                subtitle: "Be Part of Our Beginning",
                description: "Join our network of creative professionals",
                href: "/careers"
              },
              {
                title: "Services",
                subtitle: "Explore What We Can Do",
                description: "Discover our creative capabilities",
                href: "/services"
              }
            ].map((pathway, index) => (
              pathway.href.startsWith('/') ? (
                <Link
                  key={pathway.title}
                  to={pathway.href}
                  className="group p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h4 className="font-semibold text-primary-foreground mb-1">{pathway.title}</h4>
                  <div className="text-secondary text-sm font-medium mb-2">{pathway.subtitle}</div>
                  <p className="text-primary-foreground/70 text-sm">{pathway.description}</p>
                  <ArrowRight className="w-4 h-4 text-secondary mt-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <a
                  key={pathway.title}
                  href={pathway.href}
                  className="group p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h4 className="font-semibold text-primary-foreground mb-1">{pathway.title}</h4>
                  <div className="text-secondary text-sm font-medium mb-2">{pathway.subtitle}</div>
                  <p className="text-primary-foreground/70 text-sm">{pathway.description}</p>
                  <ArrowRight className="w-4 h-4 text-secondary mt-3 group-hover:translate-x-1 transition-transform" />
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;