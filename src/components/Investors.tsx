import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import africaCreativeScene from "@/assets/investors-creative-scene.jpg";
import africaTechGrowth from "@/assets/investors-tech-growth.jpg";
import africaFilmProduction from "@/assets/investors-film-production.jpg";

const Investors = () => {
  return (
    <section id="investors" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Africa's Creative Economy: Present & Accelerating
            </h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          </div>

          {/* Market Overview */}
          <div className="mb-16">
            <Card className="p-8 shadow-elegant">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  Africa's creative and cultural industries are no longer an emerging idea—they are one of the fastest-growing economic sectors in the world. From Lagos to Johannesburg to Nairobi, creativity is fueling GDP, job creation, and cultural exports that are resonating globally.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong className="text-primary">Music:</strong> Nigerian Afrobeats dominates global playlists. In 2024, Sub-Saharan Africa recorded the highest global growth in music revenues—22.6% year-on-year—driven by streaming adoption and international collaborations.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong className="text-primary">Film:</strong> Nollywood is the second-largest film industry by volume, with productions distributed on Netflix, Amazon Prime, and Showmax, reaching over 190 countries. South Africa's film industry alone attracted $132M in foreign investment in 2024, with projections to exceed $260M by 2025.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong className="text-primary">Fashion:</strong> Ghanaian and Nigerian fashion houses are showcased in Paris, Milan, and New York, while African luxury brands are scaling into billion-dollar valuations.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong className="text-primary">Gaming & Digital IP:</strong> Africa's gaming industry is forecast to exceed $1B by 2025, fueled by mobile adoption, esports, and youth demographics.
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong className="text-primary">Web3 & Digital Creators:</strong> Nigeria contributed 4% of all new global Web3 developers in 2024, underscoring Africa's role in shaping the next digital frontier.
                </p>
                <p className="text-muted-foreground mb-6">
                  The continent is young (over 60% under 25), connected (600M+ internet users), and culturally magnetic. Global demand for African stories is rising, but the capital, infrastructure, and platforms to scale them are still underdeveloped. 
                </p>
                <p className="text-primary font-semibold text-lg">
                  For investors, this is a once-in-a-generation convergence of talent, technology, and unmet demand.
                </p>
              </div>
            </Card>
          </div>

          {/* Image 1 - Creative Scene */}
          <div className="mb-16 rounded-lg overflow-hidden shadow-elegant">
            <img 
              src={africaCreativeScene} 
              alt="African creative professionals collaborating in a modern studio environment"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* The Numbers */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary text-center mb-12">The Numbers Speak</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">$58B</div>
                <p className="text-sm text-muted-foreground">Current value of Africa's creative & cultural industries (World Bank, UNESCO)</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">$134B</div>
                <p className="text-sm text-muted-foreground">Projected market size by 2030</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">20M+</div>
                <p className="text-sm text-muted-foreground">Estimated new jobs created by creative sectors by 2030</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">22.6%</div>
                <p className="text-sm text-muted-foreground">Annual growth in Sub-Saharan Africa's music revenues in 2024 (IFPI)</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">$4.32B</div>
                <p className="text-sm text-muted-foreground">Africa's OTT video revenue in 2025, projected to exceed $6.27B by 2030 (Statista)</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">$400M+</div>
                <p className="text-sm text-muted-foreground">Netflix investment into African productions (2022–23)</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">$200M</div>
                <p className="text-sm text-muted-foreground">Nigerian government investment targeting 2.5M creative economy jobs by 2030</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">617M+</div>
                <p className="text-sm text-muted-foreground">Africans projected to be streaming video content by 2030</p>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-primary">These numbers confirm: this is not philanthropy—it is data-backed, high-growth investment.</p>
            </div>
          </div>

          {/* Image 2 - Tech Growth */}
          <div className="mb-16 rounded-lg overflow-hidden shadow-elegant">
            <img 
              src={africaTechGrowth} 
              alt="Modern African city skyline symbolizing technological and economic growth"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Vision Section */}
          <div className="mb-16">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-semibold text-primary mb-6">The Infinity Network Studio Vision</h3>
              <p className="text-muted-foreground mb-6">
                Infinity Network Studio is Africa's integrated creative powerhouse—developing, financing, and distributing music, films, digital IP, and cultural brands to global audiences. We operate at the intersection of culture, technology, and capital, designed to scale content while amplifying Africa's influence worldwide.
              </p>
              <p className="text-muted-foreground mb-6 font-semibold">We are:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong className="text-primary">A Talent Incubator</strong> <span className="text-muted-foreground">– discovering, training, and launching Africa's next global creative stars.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong className="text-primary">A Global Bridge</strong> <span className="text-muted-foreground">– structuring partnerships with Hollywood, London, Dubai, and beyond to export African content at scale.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong className="text-primary">A Digital Innovator</strong> <span className="text-muted-foreground">– using AI, data, and Web3 to distribute and monetize intellectual property with fairness and scalability.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <div>
                    <strong className="text-primary">A Cultural Brand</strong> <span className="text-muted-foreground">– positioning Infinity Network Studio as the definitive "gateway" for investors, brands, and distributors entering Africa's creative economy.</span>
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
                <p className="text-muted-foreground">Africa is the world's last frontier for global content scale.</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-primary text-lg mb-3">Global Demand</h4>
                <p className="text-muted-foreground">Audiences are actively seeking authentic African voices and stories.</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-primary text-lg mb-3">First-Mover Advantage</h4>
                <p className="text-muted-foreground">Few structured studios exist that aggregate African talent and IP under one investable entity.</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-primary text-lg mb-3">Diversified Revenue Streams</h4>
                <p className="text-muted-foreground">Film, music, streaming, licensing, merchandise, gaming, live events, and digital IP ensure multiple paths to profitability.</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-primary text-lg mb-3">Government & Policy Momentum</h4>
                <p className="text-muted-foreground">Countries are investing heavily in creative industries (e.g., Nigeria's $200M initiative, South Africa's tax incentives for film).</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-primary text-lg mb-3">Technology Leapfrogging</h4>
                <p className="text-muted-foreground">Africa's young population is mobile-first, digitally savvy, and ready to monetize content via new platforms.</p>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Infinity Network Studio is positioned to scale fast and capture outsized value by building the infrastructure and brand that unites talent, technology, and global capital.
              </p>
            </div>
          </div>

          {/* Investor Opportunity */}
          <div className="mb-16">
            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-primary mb-6">The Investor Opportunity</h3>
              <p className="text-muted-foreground mb-6">
                Your investment in Infinity Network Studio will:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground"><strong className="text-primary">Scale Content Production</strong> – Expand pipelines across film, music, and digital storytelling, creating a robust IP library with long-tail value.</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground"><strong className="text-primary">Secure Global Distribution</strong> – Build partnerships with streaming giants, broadcasters, and digital platforms to bring African content to billions worldwide.</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground"><strong className="text-primary">Fund Talent Accelerators</strong> – Unlock new stars across Africa by providing training, mentorship, and platforms to monetize creativity.</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground"><strong className="text-primary">Build Digital Infrastructure</strong> – Leverage AI, data, and Web3 to ensure fair monetization, transparent rights management, and new revenue models.</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                  <span className="text-muted-foreground"><strong className="text-primary">Establish a Cultural Brand</strong> – Position Infinity Network Studio as the central gateway for brands, investors, and distributors seeking African content.</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-primary text-lg mb-4">Projected Investor Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                    <span className="text-muted-foreground">Access to high-growth creative IP markets with 15–20%+ potential IRR depending on project scale and distribution.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                    <span className="text-muted-foreground">Participation in diversified revenue streams across music, film, streaming, licensing, and Web3 monetization.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></div>
                    <span className="text-muted-foreground">Long-term equity value as Infinity Network Studio grows into a continent-leading creative brand and global cultural authority.</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Roadmap */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary text-center mb-12">Our Roadmap</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="text-xl font-bold text-secondary mb-4">2025–2026</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2"></div>
                    <span className="text-sm text-muted-foreground">Launch of flagship music & film projects across three core markets (Nigeria, South Africa, Kenya).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2"></div>
                    <span className="text-sm text-muted-foreground">Establishment of two Talent Accelerators (Lagos & Johannesburg).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2"></div>
                    <span className="text-sm text-muted-foreground">Strategic partnerships with two global streaming platforms.</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <div className="text-xl font-bold text-secondary mb-4">2027–2028</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2"></div>
                    <span className="text-sm text-muted-foreground">Expansion into fashion and gaming verticals.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2"></div>
                    <span className="text-sm text-muted-foreground">Acquisition of digital distribution platforms and licensing partnerships.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2"></div>
                    <span className="text-sm text-muted-foreground">Rollout of Web3-enabled fan engagement and IP monetization models.</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <div className="text-xl font-bold text-secondary mb-4">2029–2030</div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2"></div>
                    <span className="text-sm text-muted-foreground">Pan-African creative hubs operational in 5+ countries.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2"></div>
                    <span className="text-sm text-muted-foreground">Infinity Network Studio brand positioned as the definitive gateway into Africa's creative economy.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-2"></div>
                    <span className="text-sm text-muted-foreground">IPO / liquidity event potential.</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="font-bold text-primary text-2xl mb-6">Closing Thought</h3>
              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-lg text-muted-foreground mb-4">
                  Stories shape economies. Facts shape decisions. Africa's creative industries combine both.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Infinity Network Studio stands ready to channel that power—profitably and sustainably—onto the global stage. With the right capital and partners, we will transform Africa's creative potential into global influence, cultural infrastructure, and exponential growth.
                </p>
                <p className="text-xl font-semibold text-primary">
                  Now is the moment. The frontier is open.
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