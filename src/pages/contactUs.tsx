import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobFunction: "",
    jobTitle: "",
    email: "",
    phone: "",
    country: "",
    inquiryType: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
          {/* Left Column - Header, Contact Details and Map */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              GETTING IN TOUCH
            </h1>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg">
              <p>
                Do you have a question or need more info? Please enter your information and describe your inquiry, and we'll get back to you as soon as possible. Thanks!
              </p>
              <p>
                We do not accept job applications from this form. Please visit our{" "}
                <a href="#" className="text-accent hover:underline font-medium">
                  careers page
                </a>{" "}
                for opportunities.
              </p>
              <p>
                Looking for product support? To get the fastest response,{" "}
                <a href="#" className="text-accent hover:underline font-medium">
                  please open a ticket within our support portal
                </a>
                .
              </p>
              <p>
                Need an <strong>Employment Verification</strong> for one of our employees?{" "}
                <a href="#" className="text-accent hover:underline font-medium">
                  Click here
                </a>
                .
              </p>
            </div>

            {/* Contact Details Card with Locations */}
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm animate-fade-in-up" style={{ animationDelay: "0.08s" }}>
              <h3 className="text-lg font-semibold">Our Offices</h3>
              <p className="text-sm text-muted-foreground mt-2">We operate from multiple locations to serve you better. Pick a location to view contact details and directions.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Canada */}
                <a href="https://www.google.com/maps/search/?api=1&query=Toronto" target="_blank" rel="noreferrer" aria-label="Get directions to our Toronto office" className="bg-background rounded-md p-4 border border-border transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] shadow-sm hover:shadow-glow animate-fade-in cursor-pointer group" style={{ animationDelay: "0.12s" }}>
                  <h4 className="font-semibold">Canada</h4>
                  <p className="text-sm text-muted-foreground mt-1">Toronto, ON</p>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>123 King St W, Toronto</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+1 (416) XXX-XXXX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>canada@movicloud.com</span>
                    </div>
                  </div>
                  <div className="inline-block mt-4 text-sm text-accent hover:underline">Get directions</div>
                </a>

                {/* Dubai */}
                <a href="https://www.google.com/maps/search/?api=1&query=Dubai" target="_blank" rel="noreferrer" aria-label="Get directions to our Dubai office" className="bg-background rounded-md p-4 border border-border transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] shadow-sm hover:shadow-glow animate-fade-in cursor-pointer group" style={{ animationDelay: "0.16s" }}>
                  <h4 className="font-semibold">Dubai</h4>
                  <p className="text-sm text-muted-foreground mt-1">Dubai, UAE</p>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Dubai International Financial Centre</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+971 4 XXX XXXX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>dubai@movicloud.com</span>
                    </div>
                  </div>
                  <div className="inline-block mt-4 text-sm text-accent hover:underline">Get directions</div>
                </a>

                {/* India */}
                <a href="https://www.google.com/maps/search/?api=1&query=Bengaluru" target="_blank" rel="noreferrer" aria-label="Get directions to our Bengaluru office" className="bg-background rounded-md p-4 border border-border transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] shadow-sm hover:shadow-glow animate-fade-in cursor-pointer group" style={{ animationDelay: "0.20s" }}>
                  <h4 className="font-semibold">India</h4>
                  <p className="text-sm text-muted-foreground mt-1">Bengaluru</p>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Whitefield, Bengaluru</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+91 XXX XXX XXXX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>info@movicloud.com</span>
                    </div>
                  </div>
                  <div className="inline-block mt-4 text-sm text-accent hover:underline">Get directions</div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-lg p-6 md:p-10 shadow-sm border border-border animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-accent">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="border-0 border-b-2 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent hover:border-accent/80 transition-colors transition-shadow focus:shadow-glow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-accent">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="border-0 border-b-2 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent hover:border-accent/80 transition-colors transition-shadow focus:shadow-glow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium text-accent">
                  Company Name *
                </label>
                <Input
                  id="companyName"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="border-0 border-b-2 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent hover:border-accent/80 transition-colors transition-shadow focus:shadow-glow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="jobFunction" className="text-sm font-medium text-accent">
                  Job Function
                </label>
                <Input
                  id="jobFunction"
                  value={formData.jobFunction}
                  onChange={(e) => handleInputChange("jobFunction", e.target.value)}
                  className="border-0 border-b-2 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent hover:border-accent/80 transition-colors transition-shadow focus:shadow-glow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="jobTitle" className="text-sm font-medium text-accent">
                  Job Title *
                </label>
                <Input
                  id="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                  className="border-0 border-b-2 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent hover:border-accent/80 transition-colors transition-shadow focus:shadow-glow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-accent">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-0 border-b-2 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent hover:border-accent/80 transition-colors transition-shadow focus:shadow-glow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-accent">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-0 border-b-2 border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-colors transition-shadow focus:shadow-glow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="country" className="text-sm font-medium text-accent">
                  Country *
                </label>
                <Select required onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger className="border-0 border-b-2 border-border rounded-none px-0 focus:ring-0 focus:border-accent hover:border-accent/80 transition-colors transition-shadow focus:shadow-glow">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiryType" className="text-sm font-medium text-accent">
                  Inquiry Type *
                </label>
                <Select required onValueChange={(value) => handleInputChange("inquiryType", value)}>
                  <SelectTrigger className="border-0 border-b-2 border-border rounded-none px-0 focus:ring-0 focus:border-accent hover:border-accent/80 transition-colors transition-shadow focus:shadow-glow">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="media">Media Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="comments" className="text-sm font-medium text-accent">
                  Comments
                </label>
                <Textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => handleInputChange("comments", e.target.value)}
                  className="border-2 border-border rounded-md min-h-[120px] focus-visible:ring-0 focus-visible:border-accent hover:border-accent/80 transition-colors resize-none transition-shadow focus:shadow-glow animate-fade-in-up"
                  style={{ animationDelay: "0.18s" }}
                  placeholder="Please describe your inquiry..."
                />
              </div>

              <div className="text-sm text-muted-foreground">
                <p>
                  By submitting this form, I understand we will process my personal information in accordance with their{" "}
                  <a href="#" className="text-accent hover:underline">
                    Privacy Notice
                  </a>
                  . I understand I may withdraw my consent or update my preferences{" "}
                  <a href="#" className="text-accent hover:underline">
                    here
                  </a>{" "}
                  at any time.
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 flex-col sm:flex-row">
                  <div className="text-sm text-muted-foreground">Prefer to speak with someone directly? Call <strong className="text-foreground">+91 XXX XXX XXXX</strong></div>
                <Button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: "0.20s" }}
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
