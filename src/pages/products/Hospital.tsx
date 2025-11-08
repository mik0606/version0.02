import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";
import hospitalImg from "@/assets/hospital-dashboard.jpg";

const features = [
  {
    icon: <Sparkles className="w-12 h-12 text-blue-400 mb-4" />,
    title: "Intelligent Scheduling",
    desc: "AI optimizes appointment scheduling, reducing wait times by up to 40% and maximizing resource utilization."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />,
    title: "Predictive Analytics",
    desc: "Machine learning models predict patient admissions, bed requirements, and staff needs with 95% accuracy."
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-400 mb-4" />,
    title: "HIPAA Compliant",
    desc: "Enterprise-grade security with full HIPAA compliance and advanced patient data protection."
  }
];

const Hospital = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative w-full h-[600px] flex items-center bg-center bg-cover"
        style={{ backgroundImage: `url(${hospitalImg})` }}
      >
        <div className="absolute inset-0 bg-blue-500/30"></div>
        <div className="relative text-left px-12 md:px-24">
          <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-4">
            <span className="text-sm text-blue-200 font-medium">Healthcare Innovation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hospital Management <span className="text-blue-200">System</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-lg">
            Transform healthcare delivery with AI-powered patient management.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-blue-400 hover:bg-blue-500">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <main className="pt-16 pb-12">
   {/* AI Features - Stacked to Equal Distance on Hover */}
<section className="py-16">
  <h2 className="text-4xl font-bold text-center mb-12">AI-Powered Features</h2>
  <div
    className="relative w-full flex justify-center items-center h-80"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    {features.map((feature, idx) => {
      const isActive = idx === activeIndex;

      // Hover: spread cards evenly (-distance, 0, +distance)
      const distance = 250; // distance between each card
      const xOffset = hovered ? (idx - 1) * distance : 0;
      const zIndex = isActive ? 50 : 10 + idx;

      return (
        <motion.div
          key={idx}
          className="absolute w-72 h-80 bg-white rounded-xl p-6 border border-blue-100 shadow-lg cursor-pointer flex flex-col items-center justify-center"
          animate={{
            x: xOffset,
            scale: isActive ? 1.05 : 1,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ zIndex }}
          onClick={() => setActiveIndex(idx)}
        >
          {feature.icon}
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground text-center">{feature.desc}</p>
        </motion.div>
      );
    })}
  </div>
</section>


        {/* Comparison Section */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose MoviCloud?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Traditional Systems</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Manual scheduling and resource allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Limited analytics and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Reactive rather than predictive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Disconnected modules and data silos</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">MoviCloud HMS</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                    <span>AI-powered intelligent scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                    <span>Advanced predictive analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                    <span>Proactive insights and recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                    <span>Unified platform with seamless integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-12 text-center border border-blue-200 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Healthcare?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading healthcare providers using MoviCloud HMS to improve patient outcomes and operational efficiency.
            </p>
            <Button size="lg" className="bg-blue-400 hover:bg-blue-500 text-lg px-8">
              Schedule a Demo
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hospital;
