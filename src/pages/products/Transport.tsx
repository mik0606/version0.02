import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, MapPin, Gauge, Battery } from "lucide-react";
import transportImg from "@/assets/transport-dashboard.jpg";

const Transport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                <span className="text-sm text-green-400 font-medium">Smart Fleet Management</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Transport Management <span className="text-green-400">System</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Optimize fleet operations with real-time GPS tracking, intelligent route planning, and predictive maintenance powered by advanced AI.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  Request a Demo
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img src={transportImg} alt="Transport Dashboard" className="rounded-2xl shadow-card border border-border" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">AI-Powered Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-green-500/20">
                <MapPin className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Route Optimization</h3>
                <p className="text-muted-foreground">AI analyzes traffic patterns, weather, and delivery windows to create optimal routes, reducing fuel costs by 30%.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-emerald-500/20">
                <Gauge className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
                <p className="text-muted-foreground">Real-time dashboards track KPIs like fuel efficiency, on-time deliveries, and driver performance.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-green-500/20">
                <Battery className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Predictive Maintenance</h3>
                <p className="text-muted-foreground">Machine learning predicts vehicle maintenance needs before breakdowns occur, reducing downtime by 45%.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Traditional vs. MoviCloud</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Legacy Solutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Basic GPS tracking only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Manual route planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Reactive maintenance approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Limited analytics insights</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-2xl font-bold mb-4 text-green-400">MoviCloud TMS</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Real-time tracking with AI insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Intelligent route optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Predictive maintenance alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Comprehensive performance analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-12 text-center border border-green-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimize Your Fleet Today</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Reduce costs, improve efficiency, and provide better service with MoviCloud's intelligent transport management.
            </p>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
              Get Started
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Transport;
