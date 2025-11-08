import { ClipboardList, Palette, Code, TestTube, Rocket, Settings } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Requirements Gathering", description: "Understanding your vision" },
  { icon: Palette, title: "UI/UX Design", description: "Creating beautiful interfaces" },
  { icon: Code, title: "Development", description: "Building robust solutions" },
  { icon: TestTube, title: "Testing", description: "Ensuring quality" },
  { icon: Rocket, title: "Phased Deployments", description: "Smooth rollouts" },
  { icon: Settings, title: "Production & Support", description: "Continuous excellence" },
];

export const ProcessFlow = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-glow group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <step.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="mt-4 text-4xl font-bold text-primary/20">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
