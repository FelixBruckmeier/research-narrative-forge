import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Calendar, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your product with user-centered research? I'd love to hear about your challenges and explore how we can create meaningful solutions together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <Card className="p-8 research-glow border-card-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">sarah.researcher@email.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-muted-foreground">San Francisco Bay Area</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Availability</div>
                    <div className="text-muted-foreground">Open for new projects</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-card-border">
                <h4 className="text-lg font-medium text-foreground mb-4">Connect Online</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="p-8 research-glow border-card-border bg-gradient-secondary">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Ready to Start?</h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-card rounded-lg border border-card-border">
                  <h4 className="font-semibold text-foreground mb-2">Research Consultation</h4>
                  <p className="text-muted-foreground mb-4">
                    30-minute discovery call to discuss your research needs and explore potential collaboration.
                  </p>
                  <Button variant="research" className="w-full">
                    Schedule a Call
                  </Button>
                </div>

                <div className="p-6 bg-card rounded-lg border border-card-border">
                  <h4 className="font-semibold text-foreground mb-2">Project Inquiry</h4>
                  <p className="text-muted-foreground mb-4">
                    Send me details about your project and I'll get back to you within 24 hours.
                  </p>
                  <Button variant="outline-research" className="w-full">
                    Send Project Details
                  </Button>
                </div>

                <div className="p-6 bg-card rounded-lg border border-card-border">
                  <h4 className="font-semibold text-foreground mb-2">Download Portfolio</h4>
                  <p className="text-muted-foreground mb-4">
                    Get a comprehensive PDF with detailed case studies and research samples.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Download PDF
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Have a specific research question? Let's discuss how I can help.
            </p>
            <Button variant="research" size="lg" className="group">
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Get In Touch Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;