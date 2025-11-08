import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, BarChart, Brain, MessageSquare } from "lucide-react";
import surveyImg from "@/assets/survey-dashboard.jpg";

const Survey = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                <span className="text-sm text-indigo-400 font-medium">Intelligent Insights</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Survey & Feedback <span className="text-indigo-400">System</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Intelligent feedback collection with AI-powered sentiment analysis, real-time analytics, and actionable insights.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  See Examples
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img src={surveyImg} alt="Survey Dashboard" className="rounded-2xl shadow-card border border-border" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-indigo-500/5 to-blue-500/5 py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">AI-Powered Feedback Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-indigo-500/20">
                <Brain className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Sentiment Analysis</h3>
                <p className="text-muted-foreground">AI automatically detects emotions and sentiments in responses with 94% accuracy.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-blue-500/20">
                <BarChart className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-Time Analytics</h3>
                <p className="text-muted-foreground">Live dashboards track responses, trends, and insights as they come in.</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-indigo-500/20">
                <MessageSquare className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Recommendations</h3>
                <p className="text-muted-foreground">AI suggests actions based on feedback patterns and sentiment trends.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Beyond Traditional Surveys</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Basic Survey Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Manual data analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">No sentiment detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Limited question types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5" />
                    <span className="text-muted-foreground">Static reports</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl p-6 border border-indigo-500/30">
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">MoviCloud Survey</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-400 mt-0.5" />
                    <span>AI-powered analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-400 mt-0.5" />
                    <span>Advanced sentiment detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-400 mt-0.5" />
                    <span>Dynamic question logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-400 mt-0.5" />
                    <span>Interactive live dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl p-12 text-center border border-indigo-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Collecting Smarter Feedback</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join organizations using MoviCloud to gain deeper insights from their audience feedback.
            </p>
            <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-lg px-8">
              Try It Free
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Survey;
