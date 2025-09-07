import { Card } from "@/components/ui/card";
import { Users, Target, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Bold Creativity",
      description: "We push boundaries and challenge conventional storytelling approaches"
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Collaboration",
      description: "Every project is built on the foundation of meaningful partnerships"
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Inclusivity",
      description: "We amplify diverse voices and create opportunities for all"
    }
  ];

  const team = [
    {
      role: "Creative Director",
      responsibility: "Shaping our storytelling voice",
      description: "Leading creative vision and narrative development across all projects"
    },
    {
      role: "Strategy Lead", 
      responsibility: "Building partnerships and opportunities",
      description: "Developing strategic relationships and growth opportunities"
    },
    {
      role: "Production & Ops Lead",
      responsibility: "Turning ideas into reality",
      description: "Overseeing production logistics and operational excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Our Story & Vision
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          </div>

          {/* Origin Story */}
          <div className="mb-20">
            <Card className="p-8 sm:p-12 shadow-elegant">
              <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-6">The Secret Power of Stories</h3>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/817f2f3c-a92a-4b48-965d-8da2783d5b69.png" 
                    alt="Oladapo reflecting on inspiring stories that transformed his perspective"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Oladapo always thought of himself as an ordinary man. He worked, paid his bills, and scrolled endlessly on his phone at night. But one evening, he stumbled upon a documentary about how a small group of young Africans had built a tech company that was bought by Stripe for $200million. It wasn't just the glossy shots or the polished interviews that caught him—it was the story. Suddenly, he saw people who looked like him doing extraordinary things. The facts of their revenue growth, market expansion, and global partnerships gave the story credibility, but it was the narrative that shifted something deep inside Oladapo: maybe this could be me too.
                </p>
                
                <p>
                  That's the secret power of stories—they don't just inform us, they reshape us. A statistic on climate change might make you frown, but a story about a farmer in Kenya who lost his crops to erratic rains makes you care. A chart about rising healthcare costs is abstract, but hearing about a single mother working two jobs just to pay for insulin connects the dots in a visceral way. Facts are the bones, but stories are the flesh that make them human.
                </p>
                
                <p>
                  History proves this over and over again. Nations have risen and fallen not just because of resources or armies, but because of the stories they told about themselves. America was built on the story of freedom and opportunity. South Africa stitched together a new identity on the story of resilience after apartheid. And in our time, movements like #MeToo and #EndSARS erupted into global consciousness because the right stories were finally told loudly enough to force change. The facts of injustice were always there—but until the stories pierced the world's conscience, nothing shifted.
                </p>
                
                <p>
                  Even in our personal lives, the stories we tell ourselves define our trajectory. Two graduates can leave university without jobs. One frames the situation as proof he's not "good enough" and spirals into despair. The other tells herself, "This is my preparation season," and eventually flourishes. The facts (joblessness) remain constant; the story transforms the meaning.
                </p>
                
                <p>
                  The same is true in business. Apple didn't just sell computers; it told the story of rebels and creators who wanted to "Think Different." Nike doesn't just make shoes; it sells the story of grit and victory—"Just Do It." The facts about materials, prices, or distribution matter, but without the right story, they're just products on a shelf.
                </p>
                
                <p>
                  This is why, at Infinity Network Studio, we exist. We are not just in the business of producing content—we are in the business of crafting narratives that move people. Behind every brand, movement, or idea lies a story waiting to be told in a way that connects. Our mission is to marry creativity with credibility, to use storytelling not as decoration but as transformation.
                </p>
                
                <p>
                  Because the world doesn't just need more information—it needs stories that inspire action, stories that ignite possibility, and stories that remind us of who we are and what we can become.
                </p>
                
                <p className="font-medium text-primary">
                  And maybe, just maybe, the right story at the right time can turn another "ordinary" Oladapo into someone who is inspired enough to transcend limits that crush most people's dreams.
                </p>
              </div>
            </Card>
          </div>


          {/* Company Culture */}
          <div>
            <h3 className="text-2xl font-semibold text-primary text-center mb-12">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="font-semibold text-primary text-lg mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're building Infinity Network Studio with values of bold creativity, collaboration, 
                and inclusivity at its core.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;