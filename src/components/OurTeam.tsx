import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";
import samanthaChen from "@/assets/team/samantha-chen.jpg";
import marcusOkonkwo from "@/assets/team/marcus-okonkwo.jpg";
import aishaRahman from "@/assets/team/aisha-rahman.jpg";
import davidThompson from "@/assets/team/david-thompson.jpg";
import kwameMensah from "@/assets/team/kwame-mensah.jpg";
import zaraWilliams from "@/assets/team/zara-williams.jpg";
import thandiweNkosi from "@/assets/team/thandiwe-nkosi.jpg";
import omarHassan from "@/assets/team/omar-hassan.jpg";
import leilaAdeyemi from "@/assets/team/leila-adeyemi.jpg";
import rafaelSantos from "@/assets/team/rafael-santos.jpg";
import amaraOkafor from "@/assets/team/amara-okafor.jpg";
import jamalAmin from "@/assets/team/jamal-amin.jpg";
import saraTekle from "@/assets/team/sara-tekle.jpg";
import youssefAlami from "@/assets/team/youssef-alami.jpg";
import chiomaMpofu from "@/assets/team/chioma-mpofu.jpg";
import amadouDiop from "@/assets/team/amadou-diop.jpg";

const OurTeam = () => {
  const managementTeam = [
    {
      name: "Samantha Chen",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in media and entertainment, driving strategic growth across African creative markets.",
      image: samanthaChen,
      initials: "SC",
      experience: "15+ years",
      education: "MBA, Stanford Graduate School of Business",
      achievements: "Led $50M+ media ventures, Forbes 40 Under 40",
      email: "samantha@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Marcus Okonkwo",
      role: "Chief Creative Officer",
      bio: "Award-winning filmmaker and storyteller with a passion for amplifying authentic African narratives on the global stage.",
      image: marcusOkonkwo,
      initials: "MO",
      experience: "12+ years",
      education: "MFA Film Production, NYU Tisch",
      achievements: "3x AMVCA Winner, Sundance Fellow",
      email: "marcus@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Aisha Rahman",
      role: "Chief Operating Officer",
      bio: "Operations expert specializing in scaling creative enterprises, with deep expertise in production management and logistics.",
      image: aishaRahman,
      initials: "AR",
      experience: "10+ years",
      education: "MS Operations Management, MIT",
      achievements: "Scaled 5+ creative studios to profitability",
      email: "aisha@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "David Thompson",
      role: "Chief Technology Officer",
      bio: "Tech innovator integrating AI and Web3 solutions to revolutionize content creation and distribution.",
      image: davidThompson,
      initials: "DT",
      experience: "14+ years",
      education: "MS Computer Science, Carnegie Mellon",
      achievements: "Built tech for Netflix & Amazon Studios",
      email: "david@infinitynetwork.studio",
      linkedin: "#"
    }
  ];

  const teamMembers = [
    {
      name: "Kwame Mensah",
      role: "Senior Video Editor",
      department: "Post-Production",
      image: kwameMensah,
      initials: "KM",
      experience: "8 years",
      specialty: "Documentary & Commercial Editing",
      email: "kwame@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Zara Williams",
      role: "Lead Cinematographer",
      department: "Production",
      image: zaraWilliams,
      initials: "ZW",
      experience: "7 years",
      specialty: "Cinematic Storytelling & Lighting",
      email: "zara@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Thandiwe Nkosi",
      role: "Creative Director",
      department: "Creative Development",
      image: thandiweNkosi,
      initials: "TN",
      experience: "9 years",
      specialty: "Brand Strategy & Visual Identity",
      email: "thandiwe@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Omar Hassan",
      role: "Sound Designer",
      department: "Post-Production",
      image: omarHassan,
      initials: "OH",
      experience: "6 years",
      specialty: "Audio Mixing & Soundscapes",
      email: "omar@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Leila Adeyemi",
      role: "Content Strategist",
      department: "Strategy",
      image: leilaAdeyemi,
      initials: "LA",
      experience: "5 years",
      specialty: "Digital Content & Audience Growth",
      email: "leila@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Rafael Santos",
      role: "Motion Graphics Designer",
      department: "Post-Production",
      image: rafaelSantos,
      initials: "RS",
      experience: "6 years",
      specialty: "Animation & Visual Effects",
      email: "rafael@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Amara Okafor",
      role: "Producer",
      department: "Production",
      image: amaraOkafor,
      initials: "AO",
      experience: "10 years",
      specialty: "Film & Series Production Management",
      email: "amara@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Jamal Amin",
      role: "Colorist",
      department: "Post-Production",
      image: jamalAmin,
      initials: "JA",
      experience: "7 years",
      specialty: "Color Grading & Cinema Look Development",
      email: "jamal@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Sara Tekle",
      role: "Lead Photographer",
      department: "Production",
      image: saraTekle,
      initials: "ST",
      experience: "5 years",
      specialty: "Portrait & Commercial Photography",
      email: "sara@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Youssef Alami",
      role: "Production Manager",
      department: "Production",
      image: youssefAlami,
      initials: "YA",
      experience: "8 years",
      specialty: "Set Management & Logistics",
      email: "youssef@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Chioma Mpofu",
      role: "Social Media Manager",
      department: "Marketing",
      image: chiomaMpofu,
      initials: "CM",
      experience: "4 years",
      specialty: "Community Building & Digital Campaigns",
      email: "chioma@infinitynetwork.studio",
      linkedin: "#"
    },
    {
      name: "Amadou Diop",
      role: "Scriptwriter",
      department: "Creative Development",
      image: amadouDiop,
      initials: "AD",
      experience: "6 years",
      specialty: "Screenwriting & Story Development",
      email: "amadou@infinitynetwork.studio",
      linkedin: "#"
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
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-32 w-32 mx-auto mb-4 ring-2 ring-primary/10 group-hover:ring-secondary/30 transition-all">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-secondary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    
                    {/* Additional Info */}
                    <div className="space-y-2 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <Award className="h-3 w-3 text-secondary" />
                        <span>{member.experience}</span>
                      </div>
                      <div className="flex items-start justify-center gap-2">
                        <GraduationCap className="h-3 w-3 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-left">{member.education}</span>
                      </div>
                      <p className="text-xs font-medium text-primary">{member.achievements}</p>
                    </div>

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
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4 ring-2 ring-secondary/10 group-hover:ring-secondary/30 transition-all">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-lg bg-secondary text-secondary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-secondary mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-2">{member.department}</p>
                    
                    {/* Experience & Specialty */}
                    <div className="space-y-1 text-xs text-muted-foreground mb-3">
                      <p className="font-medium">{member.experience} experience</p>
                      <p className="italic">{member.specialty}</p>
                    </div>

                    <div className="flex justify-center gap-3">
                      <a 
                        href={`mailto:${member.email}`} 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a 
                        href={member.linkedin} 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                        aria-label={`${member.name} LinkedIn profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center bg-primary/5 border-primary/20">
              <div className="text-3xl font-bold text-secondary mb-2">16+</div>
              <p className="text-sm text-muted-foreground">Team Members</p>
            </Card>
            <Card className="p-6 text-center bg-primary/5 border-primary/20">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Years Combined Experience</p>
            </Card>
            <Card className="p-6 text-center bg-primary/5 border-primary/20">
              <div className="text-3xl font-bold text-secondary mb-2">8</div>
              <p className="text-sm text-muted-foreground">African Countries Represented</p>
            </Card>
            <Card className="p-6 text-center bg-primary/5 border-primary/20">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Passion for Storytelling</p>
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
