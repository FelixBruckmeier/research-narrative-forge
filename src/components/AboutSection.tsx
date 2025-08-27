import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Brain, BarChart3, Target } from "lucide-react";

const AboutSection = () => {
  const expertise = [
    "User Interviews",
    "Usability Testing",
    "Survey Design",
    "Personas & Journey Mapping",
    "A/B Testing",
    "Analytics & Data Analysis",
    "Competitive Research",
    "Information Architecture"
  ];

  const values = [
    {
      icon: Users,
      title: "Human-Centered",
      description: "Every decision starts with understanding real user needs and behaviors."
    },
    {
      icon: Brain,
      title: "Evidence-Based",
      description: "Research findings drive design decisions, not assumptions or trends."
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Combining quantitative metrics with qualitative insights for complete understanding."
    },
    {
      icon: Target,
      title: "Impact-Focused",
      description: "Research that translates into measurable business and user outcomes."
    }
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About My Research Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I believe great products are built on deep user understanding. My research methodology combines rigorous analysis with creative problem-solving to uncover insights that truly matter.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Story */}
            <Card className="p-8 research-glow border-card-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">My Research Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With a background in psychology and 5+ years in UX research, I've helped startups and Fortune 500 companies make data-driven decisions that improve both user satisfaction and business metrics.
                </p>
                <p>
                  My passion lies in translating complex user behaviors into clear, actionable insights. I've conducted over 50 research studies across industries including fintech, healthcare, and e-commerce.
                </p>
                <p>
                  When I'm not interviewing users or analyzing data, you'll find me reading about behavioral economics or experimenting with new research methodologies.
                </p>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-8 research-glow border-card-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Research Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill) => (
                  <Badge key={skill} variant="research" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-foreground mb-4">Tools & Platforms</h4>
                <p className="text-muted-foreground">
                  Figma, Miro, UserInterviews, Maze, Hotjar, Google Analytics, SPSS, R, Notion, Airtable
                </p>
              </div>
            </Card>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="p-6 text-center research-glow border-card-border">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;