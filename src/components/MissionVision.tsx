import { Target, Eye } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all shadow-card animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower businesses with intelligent, scalable applications that leverage the latest in AI and analytics technology. We transform complex challenges into elegant solutions that drive measurable business outcomes and foster sustainable growth.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all shadow-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the leading innovator in enterprise software development, recognized globally for creating transformative applications that set new standards in user experience, performance, and intelligent automation across all industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
