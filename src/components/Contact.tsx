import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-secondary" />,
      title: "Email",
      details: "info@infinityns.com.ng",
      description: "We'd love to hear from you"
    },
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      title: "Phone", 
      details: "08156783478",
      description: "Available Mon-Fri, 9AM-6PM"
    },
    {
      icon: <MapPin className="w-6 h-6 text-secondary" />,
      title: "Location",
      details: "Low-Cost Housing Estate, Ikorodu, Lagos, Nigeria",
      description: "Africa-focused, globally minded"
    }
  ];

  const audienceTypes = [
    { label: "I'm an Investor", value: "investor" },
    { label: "I'm a Creative/Talent", value: "talent" },
    { label: "I'm a Potential Partner", value: "partner" },
    { label: "I'm a Client", value: "client" },
    { label: "I'm a Supporter", value: "supporter" },
    { label: "Other", value: "other" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Let's Start Something New Together
            </h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We'd love to hear from you — whether you're an investor, a creative, a client, or a supporter. 
              Every great story begins with a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div>
                  <label htmlFor="audienceType" className="block text-sm font-medium text-foreground mb-2">
                    I am...
                  </label>
                  <select 
                    id="audienceType"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select your category</option>
                    {audienceTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, ideas, or how we can work together..."
                    rows={6}
                  />
                </div>

                <Button variant="accent" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-elegant transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium mb-1">{info.details}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Links */}
              <Card className="p-6 bg-secondary/5 border-secondary/20">
                <h4 className="font-semibold text-primary mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    Download Investor Deck
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    View Open Opportunities
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    Schedule a Call
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    Join Our Newsletter
                  </Button>
                </div>
              </Card>

              {/* Infinity Quote */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <blockquote className="text-primary italic">
                  "Infinity is built on collaboration. Let's start something new together."
                </blockquote>
                <div className="mt-3 text-sm text-muted-foreground">
                  — Infinity Network Studio Team
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;