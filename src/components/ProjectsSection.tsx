import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, TrendingUp, Target } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Checkout Optimization",
      category: "Conversion Research",
      description: "Redesigned checkout flow based on user behavior analysis and usability testing, resulting in 34% increase in conversion rate.",
      impact: "34% increase in conversions",
      methods: ["User Testing", "Analytics", "A/B Testing"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      metrics: {
        users: "1,200+ users tested",
        improvement: "34% conversion lift",
        timeline: "8 weeks"
      }
    },
    {
      title: "Healthcare App User Journey",
      category: "Service Design",
      description: "Conducted comprehensive user research for a mental health platform, mapping patient journeys and identifying key pain points.",
      impact: "40% reduction in user drop-off",
      methods: ["Journey Mapping", "Interviews", "Surveys"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      metrics: {
        users: "50+ interviews conducted",
        improvement: "40% less drop-off",
        timeline: "12 weeks"
      }
    },
    {
      title: "FinTech Mobile App Research",
      category: "Product Strategy",
      description: "Led user research initiative to understand financial behaviors and redesign mobile banking experience for millennials.",
      impact: "4.8/5 app store rating",
      methods: ["Behavioral Analysis", "Personas", "Prototype Testing"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      metrics: {
        users: "300+ survey responses",
        improvement: "4.8★ rating",
        timeline: "16 weeks"
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some recent projects where research insights led to significant improvements in user experience and business outcomes.
            </p>
          </div>

          {/* Projects grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden research-glow border-card-border">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="research">{project.category}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact */}
                    <div className="flex items-center mb-6">
                      <TrendingUp className="h-5 w-5 text-success mr-2" />
                      <span className="text-success font-semibold">{project.impact}</span>
                    </div>

                    {/* Methods */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">RESEARCH METHODS</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.methods.map((method) => (
                          <Badge key={method} variant="outline" className="text-xs">
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted rounded-lg">
                      <div className="text-center">
                        <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="text-sm font-medium text-foreground">{project.metrics.users}</div>
                      </div>
                      <div className="text-center">
                        <Target className="h-5 w-5 text-secondary mx-auto mb-1" />
                        <div className="text-sm font-medium text-foreground">{project.metrics.improvement}</div>
                      </div>
                      <div className="text-center">
                        <div className="w-5 h-5 bg-accent rounded mx-auto mb-1"></div>
                        <div className="text-sm font-medium text-foreground">{project.metrics.timeline}</div>
                      </div>
                    </div>

                    <Button variant="research" className="w-fit group">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="outline-research" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;