import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Hotel as HotelIcon, Star, DollarSign } from "lucide-react";
import hotelImg from "@/assets/hotel-dashboard.jpg";

const Hotel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20">
                <span className="text-sm text-amber-400 font-medium">Luxury Hospitality</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Hotel & Hospitality <span className="text-amber-400">Management</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Premium hospitality platform with booking management, guest services, revenue optimization, and AI-driven guest experience.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
                  Book a Demo
                </Button>
                <Button size="lg" variant="outline">
                  Explore Features
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img src={hotelImg} alt="Hotel Dashboard" className="rounded-2xl shadow-card border border-border" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Elevate Guest Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-amber-500/20">
                <HotelIcon className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Booking</h3>
                <p className="text-muted-foreground">Intelligent reservation system with dynamic pricing and channel management across all platforms.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-orange-500/20">
                <Star className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Guest Personalization</h3>
                <p className="text-muted-foreground">AI learns guest preferences to provide personalized experiences and recommendations.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-amber-500/20">
                <DollarSign className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Revenue Optimization</h3>
                <p className="text-muted-foreground">Dynamic pricing algorithms maximize revenue based on demand, seasonality, and market trends.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Premium Hospitality Solution</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Traditional PMS</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Fixed pricing models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Limited guest insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Manual channel updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Basic reporting features</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/30">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">MoviCloud Hotel</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>AI-powered dynamic pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Comprehensive guest profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Automated channel management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-400 mt-0.5" />
                    <span>Advanced revenue analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl p-12 text-center border border-amber-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Hospitality Business</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join luxury hotels using MoviCloud to deliver exceptional guest experiences and maximize revenue.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-lg px-8">
              Schedule Demo
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hotel;
