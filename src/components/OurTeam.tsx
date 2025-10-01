import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";

const OurTeam = () => {
  const managementTeam = [
    {
      name: "Samantha Chen",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in media and entertainment, driving strategic growth across African creative markets.",
      initials: "SC",
      email: "samantha@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Marcus Okonkwo",
      role: "Chief Creative Officer",
      bio: "Award-winning filmmaker and storyteller with a passion for amplifying authentic African narratives on the global stage.",
      initials: "MO",
      email: "marcus@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Aisha Rahman",
      role: "Chief Operating Officer",
      bio: "Operations expert specializing in scaling creative enterprises, with deep expertise in production management and logistics.",
      initials: "AR",
      email: "aisha@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "David Thompson",
      role: "Chief Technology Officer",
      bio: "Tech innovator integrating AI and Web3 solutions to revolutionize content creation and distribution.",
      initials: "DT",
      email: "david@infinitynetwork.studio",
      linkedin: "#"
    }
  ];

  const teamMembers = [
    {
      name: "Kwame Mensah",
      role: "Senior Video Editor",
      department: "Post-Production",
      initials: "KM",
      email: "kwame@infinitynetwork.studio"
    },
    {
      name: "Zara Williams",
      role: "Lead Cinematographer",
      department: "Production",
      initials: "ZW",
      email: "zara@infinitynetwork.studio"
    },
    {
      name: "Thandiwe Nkosi",
      role: "Creative Director",
      department: "Creative Development",
      initials: "TN",
      email: "thandiwe@infinitynetwork.studio"
    },
    {
      name: "Omar Hassan",
      role: "Sound Designer",
      department: "Post-Production",
      initials: "OH",
      email: "omar@infinitynetwork.studio"
    },
    {
      name: "Leila Adeyemi",
      role: "Content Strategist",
      department: "Strategy",
      initials: "LA",
      email: "leila@infinitynetwork.studio"
    },
    {
      name: "Rafael Santos",
      role: "Motion Graphics Designer",
      department: "Post-Production",
      initials: "RS",
      email: "rafael@infinitynetwork.studio"
    },
    {
      name: "Amara Okafor",
      role: "Producer",
      department: "Production",
      initials: "AO",
      email: "amara@infinitynetwork.studio"
    },
    {
      name: "Jamal Amin",
      role: "Colorist",
      department: "Post-Production",
      initials: "JA",
      email: "jamal@infinitynetwork.studio"
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

          {/* Management Team Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold text-primary text-center mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {managementTeam.map((member, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-32 w-32 mx-auto mb-4">
                      <AvatarImage src="" alt={member.name} />
                      <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-secondary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 min-h-[80px]">{member.bio}</p>
                    <div className="flex justify-center gap-3">
                      <a 
                        href={`mailto:${member.email}`} 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a 
                        href={member.linkedin} 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                        aria-label={`${member.name} LinkedIn profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Members Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-primary text-center mb-12">Our Creative Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src="" alt={member.name} />
                      <AvatarFallback className="text-lg bg-secondary text-secondary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-secondary mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-3">{member.department}</p>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-secondary transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-primary/5 border-primary/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-4">Want to Join Our Team?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals who share our passion for storytelling and creativity.
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
