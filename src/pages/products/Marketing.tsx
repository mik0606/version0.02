import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Megaphone, Palette, Search } from "lucide-react";
import marketingImg from "@/assets/marketing-dashboard.jpg";

const Marketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-pink-500/10 rounded-full border border-pink-500/20">
                <span className="text-sm text-pink-400 font-medium">Marketing Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Digital Marketing <span className="text-pink-400">Suite</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Complete marketing platform with AI-powered SEO tools, social media management, content creation, animation, and comprehensive campaign analytics.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  Watch Overview
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img src={marketingImg} alt="Marketing Dashboard" className="rounded-2xl shadow-card border border-border" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-pink-500/5 to-purple-500/5 py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">All-in-One Marketing Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-pink-500/20">
                <Search className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">AI-Powered SEO</h3>
                <p className="text-muted-foreground">Intelligent keyword research, content optimization, and rank tracking with actionable recommendations.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-purple-500/20">
                <Palette className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Creative Studio</h3>
                <p className="text-muted-foreground">Built-in graphics editor, animation tools, and AI-assisted content generation for stunning visuals.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-pink-500/20">
                <Megaphone className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Campaign Management</h3>
                <p className="text-muted-foreground">Multi-channel campaign orchestration with AI-optimized scheduling and performance tracking.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Complete Marketing Solution</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Fragmented Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Multiple separate subscriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">No unified analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Manual content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Limited automation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-pink-500/30">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">MoviCloud Marketing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-pink-400 mt-0.5" />
                    <span>Unified platform for all channels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-pink-400 mt-0.5" />
                    <span>Comprehensive analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-pink-400 mt-0.5" />
                    <span>AI-assisted content generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-pink-400 mt-0.5" />
                    <span>Advanced automation workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-12 text-center border border-pink-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supercharge Your Marketing</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join forward-thinking marketers using MoviCloud to create, manage, and optimize campaigns that deliver results.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-lg px-8">
              Get Started Free
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Marketing;
