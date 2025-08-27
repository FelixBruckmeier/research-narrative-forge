import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Sarah Chen</h3>
            <p className="text-background/80 mb-4">
              UX Researcher passionate about transforming insights into meaningful digital experiences.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-background/80 hover:text-background transition-colors">
                About
              </a>
              <a href="#projects" className="block text-background/80 hover:text-background transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-background/80 hover:text-background transition-colors">
                Contact
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Resume
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-background/80">
              <p>sarah.researcher@email.com</p>
              <p>San Francisco Bay Area</p>
              <p>Available for new opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Sarah Chen. All rights reserved.
          </p>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="text-background hover:bg-background/10 mt-4 md:mt-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;