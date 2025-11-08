import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Users, Target, BarChart3 } from "lucide-react";
import officeImg from "@/assets/office-dashboard.jpg";

const Office = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
                <span className="text-sm text-purple-400 font-medium">Workplace Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Office & Work <span className="text-purple-400">Management</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Empower your team with intelligent task management, seamless collaboration, and AI-driven productivity insights.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img src={officeImg} alt="Office Dashboard" className="rounded-2xl shadow-card border border-border" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Productivity Powerhouse</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-purple-500/20">
                <Users className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground">Real-time collaboration tools with AI-powered task assignments and smart notifications.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-pink-500/20">
                <Target className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Goal Tracking</h3>
                <p className="text-muted-foreground">Set and track team goals with automated progress monitoring and milestone alerts.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-purple-500/20">
                <BarChart3 className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
                <p className="text-muted-foreground">Comprehensive insights into team productivity, bottlenecks, and optimization opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Why Teams Choose MoviCloud</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Generic Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Separate tools for different tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Manual progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Limited customization options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Basic reporting features</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">MoviCloud Office</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span>All-in-one unified platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span>AI-powered progress insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span>Fully customizable workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-12 text-center border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supercharge Your Team's Productivity</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of teams using MoviCloud to work smarter, collaborate better, and achieve more.
            </p>
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-lg px-8">
              Try It Free
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Office;
