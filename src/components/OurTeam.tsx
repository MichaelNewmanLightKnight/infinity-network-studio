import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const OurTeam = () => {
  const directors = [
    {
      role: "Director of Strategic Alliances",
      initials: "SA"
    },
    {
      role: "Director of Creative Projects",
      initials: "CP"
    },
    {
      role: "Director of Growth and Operations",
      initials: "GO"
    }
  ];

  const teamMembers = [
    {
      role: "Graphics & Animation Designer",
      initials: "GA"
    },
    {
      role: "Video & Audio Editor",
      initials: "VE"
    },
    {
      role: "Videographer/Camera Operator",
      initials: "VC"
    },
    {
      role: "Female Presenter/Host",
      initials: "FP"
    }
  ];

  return (
    <section id="our-team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Meet Our Team
            </h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The creative minds and passionate professionals behind Infinity Network Studio. Together, we're building the future of African storytelling.
            </p>
          </div>

          {/* Directors Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold text-primary text-center mb-12">Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {directors.map((director, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-32 w-32 mx-auto mb-4 bg-primary/5">
                      <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                        {director.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-primary">{director.role}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Members Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-primary text-center mb-12">Core Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4 bg-secondary/5">
                      <AvatarFallback className="text-lg bg-secondary text-secondary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-base font-semibold text-primary">{member.role}</h3>
                    <p className="text-sm text-muted-foreground mt-2">Position Available</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Vision */}
          <div className="mb-16">
            <Card className="p-8 bg-primary/5 border-primary/20 max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">Building Our Dream Team</h3>
              <p className="text-muted-foreground">
                We're assembling a world-class team of creative professionals who share our vision for transforming African storytelling. These positions represent the foundation of our growing studio.
              </p>
            </Card>
          </div>

          {/* Join Us CTA */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-primary/5 border-primary/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-4">Want to Join Our Team?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals who share our passion for storytelling and creativity. Be part of Africa's creative revolution.
              </p>
              <a 
                href="/careers" 
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
              >
                View Open Positions
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
