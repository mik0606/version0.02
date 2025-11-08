import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Package, LineChart, Zap } from "lucide-react";
import ecommerceImg from "@/assets/ecommerce-dashboard.jpg";

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-teal-500/10 rounded-full border border-teal-500/20">
                <span className="text-sm text-teal-400 font-medium">E-Commerce Innovation</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                E-Commerce Inventory <span className="text-teal-400">Management</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Advanced inventory tracking with AI-powered demand forecasting, automated stock replenishment, and real-time analytics.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img src={ecommerceImg} alt="E-Commerce Dashboard" className="rounded-2xl shadow-card border border-border" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-teal-500/5 to-cyan-500/5 py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Intelligent Inventory Control</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-teal-500/20">
                <Package className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Tracking</h3>
                <p className="text-muted-foreground">Real-time inventory tracking across multiple warehouses with automated alerts for low stock levels.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-cyan-500/20">
                <LineChart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Demand Forecasting</h3>
                <p className="text-muted-foreground">AI predicts demand patterns with 92% accuracy, preventing stockouts and reducing overstock.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-teal-500/20">
                <Zap className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Auto-Replenishment</h3>
                <p className="text-muted-foreground">Automated purchase orders based on AI-driven forecasts and customizable reorder points.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Why E-Commerce Businesses Choose Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Basic Solutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Manual stock counting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Reactive ordering approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Limited multi-channel support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Basic reporting only</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl p-6 border border-teal-500/30">
                <h3 className="text-2xl font-bold mb-4 text-teal-400">MoviCloud E-Commerce</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                    <span>Automated real-time tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                    <span>AI-powered demand forecasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                    <span>Seamless multi-channel integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-400 mt-0.5" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl p-12 text-center border border-teal-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Scale Your E-Commerce Business</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join successful e-commerce businesses using MoviCloud to optimize inventory and maximize profitability.
            </p>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg px-8">
              Get Started Free
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ecommerce;
