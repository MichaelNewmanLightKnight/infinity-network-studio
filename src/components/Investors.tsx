import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Globe, Users, Download, ArrowRight } from "lucide-react";

const Investors = () => {
  const opportunities = [
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "First-mover Advantage",
      description: "Enter at ground level with a lean, ambitious team positioned for growth"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Proven Expertise",
      description: "Founders with demonstrated creative and strategic expertise in their respective fields"
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Scalable Potential",
      description: "Business model designed for expansion across multiple content formats and markets"
    }
  ];

  const roadmapPhases = [
    {
      phase: "2025-2026",
      title: "Foundation & Launch",
      goals: [
        "Launch first slate of projects (documentary + podcast)",
        "Build early partnerships and client base", 
        "Secure seed investment",
        "Establish brand presence"
      ]
    },
    {
      phase: "2026-2028", 
      title: "Growth & Expansion",
      goals: [
        "Expand production capacity",
        "Develop branded content division",
        "Pilot pan-African co-productions",
        "Scale revenue streams"
      ]
    },
    {
      phase: "2028+",
      title: "Market Leadership",
      goals: [
        "Scale internationally",
        "Build Infinity into recognized African creative brand",
        "Explore acquisition opportunities",
        "Establish market leadership position"
      ]
    }
  ];

  const revenueStreams = [
    "Commissioned Productions (NGOs, brands, institutions)",
    "Licensing & Distribution (platforms and broadcasters)", 
    "Original Content Monetization (ad-supported podcasts, sponsorships)",
    "Future: IP development, events, workshops"
  ];

  return (
    <section id="investors" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Africa's Creative Economy
            </h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          </div>

          {/* Market Overview */}
          <div className="mb-16">
            <Card className="p-8 shadow-elegant">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  Africa's creative economy is no longer a promise—it's a present reality reshaping music, film, fashion, gaming, and digital storytelling worldwide. Nigerian Afrobeats dominate Spotify charts. Nollywood films stream on Netflix in over 190 countries. South Africa's Amapiano fuels global dance floors. Ghanaian fashion houses grace Paris and Milan.
                </p>
                <p className="text-muted-foreground mb-6">
                  The continent is young (over 60% under 25), digital (600M+ internet users), and culturally magnetic. Global audiences are already buying in. Yet, the capital, infrastructure, and platforms to scale African creativity remain massively underdeveloped.
                </p>
                <p className="text-primary font-semibold text-lg">
                  For investors, this means a rare convergence of talent, technology, and unmet demand—a frontier market where early movers can capture exponential value.
                </p>
              </div>
            </Card>
          </div>

          {/* The Numbers */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary text-center mb-12">The Numbers Speak</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">$58B</div>
                <p className="text-sm text-muted-foreground">Africa's creative & cultural industries current value</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">$134B</div>
                <p className="text-sm text-muted-foreground">Projected size by 2030 (World Bank, UNESCO)</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">2.4M</div>
                <p className="text-sm text-muted-foreground">Jobs created annually by creative sectors</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">$400M+</div>
                <p className="text-sm text-muted-foreground">Netflix committed to African productions 2022–23</p>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-primary">This is not charity. It is smart, data-backed investment.</p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mb-16">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-semibold text-primary mb-6">The Infinity Network Studio Vision</h3>
              <p className="text-muted-foreground mb-6">
                At Infinity Network Studio, we are building Africa's creative powerhouse—an integrated studio that develops, finances, and distributes stories, music, films, and digital IP to global audiences.
              </p>
              <p className="text-muted-foreground mb-6">We are more than content producers. We are:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong className="text-primary">A talent incubator:</strong> <span className="text-muted-foreground">discovering and empowering Africa's next creative stars.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong className="text-primary">A global bridge:</strong> <span className="text-muted-foreground">connecting African content to Hollywood, London, Dubai, and beyond.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong className="text-primary">A digital innovator:</strong> <span className="text-muted-foreground">leveraging AI, data, and Web3 to distribute and monetize IP fairly and scalably.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong className="text-primary">A cultural brand:</strong> <span className="text-muted-foreground">positioning Infinity Network Studio as the "gateway" to Africa's creative economy.</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Why Now */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary text-center mb-12">Why Now? Why Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-semibold text-primary text-lg mb-3">Untapped Market</h4>
                <p className="text-muted-foreground">Africa is the last frontier for global content scale.</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-primary text-lg mb-3">Global Demand</h4>
                <p className="text-muted-foreground">Audiences crave authentic African stories and sounds.</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-primary text-lg mb-3">First-Mover Advantage</h4>
                <p className="text-muted-foreground">Few structured studios are aggregating talent and IP under one investable entity.</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-primary text-lg mb-3">Diversified Revenue</h4>
                <p className="text-muted-foreground">Film, music, streaming, merchandise, licensing, live events, gaming.</p>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Infinity Network Studio sits at the intersection of culture, technology, and capital—with a model designed to capture multiple revenue streams while amplifying Africa's global influence.
              </p>
            </div>
          </div>

          {/* Investor Opportunity */}
          <div className="mb-16">
            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-primary mb-6">The Investor Opportunity</h3>
              <p className="text-muted-foreground mb-6">
                We invite you to join us in shaping the future of culture. Your investment will:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground">Scale content production pipelines across film, music, and digital storytelling.</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground">Build distribution partnerships with global platforms.</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground">Fund talent accelerators to unlock new stars across Africa.</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground">Position Infinity Network Studio as the definitive gateway for investors, brands, and distributors entering Africa's creative economy.</span>
                </div>
              </div>
              <p className="text-lg font-semibold text-primary">
                This is more than an investment in content. It is an investment in cultural infrastructure, global influence, and exponential growth.
              </p>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="font-bold text-primary text-2xl mb-6">Closing Thought</h3>
              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-lg text-muted-foreground mb-4">
                  Stories shape economies. Facts shape decisions. Africa's creative industries combine both. 
                  Infinity Network Studio stands ready to channel that power—profitably and sustainably—onto the global stage.
                </p>
                <p className="text-xl font-semibold text-primary">
                  Now is the moment. The frontier is open. Will you move with us?
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="accent" size="lg">
                  Schedule Meeting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Executive Summary
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;