import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-secondary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm mb-8 animate-fade-in">
            🌐 Launching 2025 • First slate in development
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Every idea deserves a{" "}
            <span className="text-secondary">stage</span>
          </h1>

          {/* Dynamic Tagline */}
          <div className="text-xl sm:text-2xl text-primary-foreground/90 font-light mb-4 animate-fade-in">
            Where Stories Become{" "}
            <span className="text-secondary font-semibold">Infinite</span>
          </div>

          {/* Subheadline */}
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
            We are Infinity Network Studio — creating bold stories across film, podcasts, and documentaries. 
            We may be new, but our mission is boundless: to build a studio that amplifies voices, inspires audiences, 
            and creates opportunities for talent, partners, and investors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Button variant="secondary" size="lg" className="font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Vision
            </Button>
            <Button variant="outline" size="lg" className="font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20">
              Explore Our Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">2025</div>
              <div className="text-primary-foreground/70 text-sm">Launching with first slate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">3</div>
              <div className="text-primary-foreground/70 text-sm">Founders united by passion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">∞</div>
              <div className="text-primary-foreground/70 text-sm">Global Outlook</div>
            </div>
          </div>
        </div>

        {/* Audience Pathways */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-primary-foreground text-center mb-12">Choose Your Journey</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Investors",
                subtitle: "See the Opportunity",
                description: "Be part of Africa's creative future from day one",
                href: "#investors"
              },
              {
                title: "Talent",
                subtitle: "Be Part of Our Beginning",
                description: "Join our network of creative professionals",
                href: "#talent"
              },
              {
                title: "Partners",
                subtitle: "Let's Build Together",
                description: "Collaborate on groundbreaking projects",
                href: "#partnerships"
              },
              {
                title: "Clients",
                subtitle: "Explore What We Can Do",
                description: "Discover our creative capabilities",
                href: "#services"
              }
            ].map((pathway, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;