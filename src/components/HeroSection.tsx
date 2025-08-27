import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-secondary">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-card-border mb-8 fade-in">
            <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
            <span className="text-sm text-muted-foreground font-medium">Available for new opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 slide-up">
            UX Research
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              That Drives Impact
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed slide-up">
            I transform user insights into actionable design strategies, bridging the gap between human behavior and digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 slide-up">
            <Button variant="research" size="lg" className="group">
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Let's Connect
            </Button>
            <Button variant="outline-research" size="lg" className="group">
              <FileText className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              View My Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Research Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Products Improved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;