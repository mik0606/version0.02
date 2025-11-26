import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProcessFlow } from "@/components/ProcessFlow";
import { TransformCTA } from "@/components/TransformCTA";
/* import { MissionVision } from "@/components/MissionVision"; */
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <ProcessFlow />

      {/* Divider between Development → Mission/Vision */}
      <div className="w-full h-[1px] bg-blue-400/40 my-12"></div>

      {/* MissionVision section was here */}

      <TransformCTA />

      <Footer />
    </div>
  );
};

export default Index;
