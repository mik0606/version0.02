import { Button } from "@/components/ui/button";
import Popup from "@/components/Popup";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const cards = [
    {
      icon: <Zap className="w-8 h-8 text-primary mb-2 mx-auto" />,
      title: "AI-Powered",
      description: "Advanced analytics and intelligent automation",
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary mb-2 mx-auto" />,
      title: "Enterprise-Grade",
      description: "Secure, scalable, and reliable solutions",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary mb-2 mx-auto" />,
      title: "Results-Driven",
      description: "Measurable impact on business outcomes",
    },
  ];

  return (
    <>
      {/* 🧠 Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden pt-16 bg-background">
        <Popup />

        {/* Left Side */}
        <div className="relative md:w-1/2 flex flex-col justify-center px-6 md:px-16 z-20 text-center md:text-left space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building the Future of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Enterprise Software
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            MoviCloud Labs delivers cutting-edge mobile and web applications
            powered by advanced AI and analytics, transforming how businesses
            operate and grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 pt-4">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-gradient-primary text-lg px-8 shadow-glow hover:scale-105 transition-transform"
              >
                Explore Our Products
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Get a Demo
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-cover bg-center animate-slide-in-right"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ✅ Feature Cards Section (Rectangle Flip Cards) */}
      <section className="relative z-10 bg-background py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {cards.map((card, index) => (
            <div key={index} className="flip-card w-full h-64">
              <div className="flip-inner w-full h-full">
                {/* Front — Logo */}
                <div className="flip-front bg-card rounded-2xl shadow-md flex items-center justify-center border border-border">
                  <img
                    src="/logo1.jpg" // Replace with your logo path
                    alt="Company Logo"
                    className="w-28 h-28 object-contain"
                  />
                </div>

                {/* Back — Feature Info */}
                <div className="flip-back bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border border-border">
                  {card.icon}
                  <h3 className="text-xl font-semibold mt-2">{card.title}</h3>
                  <p className="text-muted-foreground mt-2 px-4">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
