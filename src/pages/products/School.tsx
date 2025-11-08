import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, GraduationCap, Users2, BookOpen } from "lucide-react";
import schoolImg from "@/assets/school-dashboard.jpg";

const School = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20">
                <span className="text-sm text-orange-400 font-medium">Educational Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                School Administration <span className="text-orange-400">& Alumni</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive educational management platform with student records, attendance tracking, academic analytics, and alumni networking.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Schedule Demo
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img src={schoolImg} alt="School Dashboard" className="rounded-2xl shadow-card border border-border" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-orange-500/5 to-yellow-500/5 py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Complete Education Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-orange-500/20">
                <GraduationCap className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Student Management</h3>
                <p className="text-muted-foreground">Complete student lifecycle management from admission to graduation with AI-powered academic insights.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-yellow-500/20">
                <BookOpen className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Academic Analytics</h3>
                <p className="text-muted-foreground">Track performance trends, identify at-risk students, and optimize curriculum with intelligent analytics.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-orange-500/20">
                <Users2 className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Alumni Network</h3>
                <p className="text-muted-foreground">Build lasting relationships with graduates through integrated alumni management and networking features.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Transform Your Institution</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Traditional Systems</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Paper-based processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Fragmented data systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Limited parent communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">No alumni engagement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">MoviCloud School</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-400 mt-0.5" />
                    <span>100% digital workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-400 mt-0.5" />
                    <span>Unified data platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-400 mt-0.5" />
                    <span>Real-time parent portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-400 mt-0.5" />
                    <span>Integrated alumni network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-12 text-center border border-orange-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modernize Your School Today</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join progressive educational institutions using MoviCloud to enhance learning outcomes and operational efficiency.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8">
              Request Demo
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default School;
