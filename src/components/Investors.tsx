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
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Invest in Africa's Creative Future
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Infinity Network Studio is a newly established creative studio producing documentaries, podcasts, 
              and video content. We are at the start of our journey — inviting early investors to grow with us 
              as we build a scalable creative platform.
            </p>
            <Button variant="accent" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download Investor Overview
            </Button>
          </div>

          {/* Investment Thesis */}
          <div className="mb-16">
            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-primary mb-6">Our Investment Thesis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Market Opportunity</h4>
                  <p className="text-sm text-muted-foreground">
                    Africa's creative industries are underfinanced but growing fast with increasing global demand
                  </p>
                </div>
                <div className="text-center">
                  <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Platform Demand</h4>
                  <p className="text-sm text-muted-foreground">
                    Streaming platforms and brands are hungry for authentic African stories and content
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Growth Potential</h4>
                  <p className="text-sm text-muted-foreground">
                    Early investors have the chance to enter at ground level with significant upside potential
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Why Invest in Us */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary text-center mb-12">Why Infinity Network Studio</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="mb-4">{opportunity.icon}</div>
                    <h4 className="font-semibold text-primary text-lg mb-3">{opportunity.title}</h4>
                    <p className="text-muted-foreground text-sm">{opportunity.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Revenue Model */}
          <div className="mb-16">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Revenue Model</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-4">Current Revenue Streams</h4>
                  <ul className="space-y-3">
                    {revenueStreams.map((stream, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                        {stream}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary/5 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">Multi-format Focus</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our diversified approach across film, podcast, branded content, and experimental media 
                    creates multiple revenue opportunities and reduces market risk.
                  </p>
                  <p className="text-sm text-secondary font-medium">Scalable • Sustainable • Strategic</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Growth Roadmap */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary text-center mb-12">Growth Roadmap</h3>
            <div className="space-y-8">
              {roadmapPhases.map((phase, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-48 flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-semibold text-sm">
                        {phase.phase}
                      </span>
                      <h4 className="font-bold text-primary text-lg mt-3">{phase.title}</h4>
                    </div>
                    <div className="flex-1">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="font-bold text-primary text-2xl mb-4">Join Our Journey</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Infinity Network Studio is more than a company — it's a movement at its beginning. 
                By partnering with us now, you're not just investing in projects, you're helping build 
                one of Africa's future creative powerhouses.
              </p>
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