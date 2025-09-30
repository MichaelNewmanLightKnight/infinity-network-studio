import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectsHero from "@/assets/projects-hero.jpg";

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

        {/* Projects We are Working On */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Projects We're <span className="text-secondary">Working On</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              From compelling documentaries to captivating podcasts, discover the stories we're bringing to life
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-elegant animate-fade-in">
            <img 
              src={projectsHero}
              alt="Infinity Network Studio projects in production featuring film equipment and creative team"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="p-8 sm:p-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Bold Stories in Production
                </h3>
                <p className="text-white/90 text-lg mb-6 max-w-2xl">
                  Exploring untold narratives across Africa and beyond, creating content that inspires, educates, and transforms
                </p>
                <Link to="/portfolio">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                    View All Projects
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;