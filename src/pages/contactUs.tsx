import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
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

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              GETTING IN TOUCH
            </h1>

            <div className="space-y-4 text-muted-foreground text-base md:text-lg">
              <p>
                Do you have a question or need more info? Please enter your
                information and describe your inquiry, and we'll get back to you
                as soon as possible.
              </p>

              <p>
                We do not accept job applications from this form. Please visit{" "}
                <a href="#" className="text-accent hover:underline font-medium">
                  our careers page
                </a>
                .
              </p>

              <p>
                Looking for product support?{" "}
                <a href="#" className="text-accent hover:underline font-medium">
                  Open a support ticket
                </a>
                .
              </p>

              <p>
                Need an <strong>Employment Verification</strong>?{" "}
                <a href="#" className="text-accent hover:underline font-medium">
                  Click here
                </a>
                .
              </p>
            </div>

            {/* OFFICES */}
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-semibold">Our Offices</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Pick a location to view details.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">

                {/* Canada */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Toronto"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-background rounded-md p-4 border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-semibold">Canada</h4>
                  <p className="text-sm text-muted-foreground mt-1">Toronto, ON</p>

                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>123 King St W</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+1 (416) 000-0000</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>canada@movicloud.com</span>
                    </div>
                  </div>
                </a>

                {/* Dubai */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dubai"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-background rounded-md p-4 border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-semibold">Dubai</h4>
                  <p className="text-sm text-muted-foreground mt-1">UAE</p>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>DIFC, Dubai</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+971 4 000 000</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>dubai@movicloud.com</span>
                    </div>
                  </div>
                </a>

                {/* India */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bengaluru"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-background rounded-md p-4 border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-semibold">India</h4>
                  <p className="text-sm text-muted-foreground mt-1">Bengaluru</p>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Whitefield</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+91 00000 00000</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>india@movicloud.com</span>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-card rounded-lg p-6 md:p-10 shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NORMAL INPUT FIELD */}
              {[
                ["First Name *", "firstName"],
                ["Last Name *", "lastName"],
                ["Company Name *", "companyName"],
                ["Job Function", "jobFunction"],
                ["Job Title *", "jobTitle"],
                ["Email Address *", "email"],
                ["Phone Number *", "phone"],
              ].map(([label, field]) => (
                <div key={field} className="space-y-2">
                  <label className="text-sm font-medium text-accent">{label}</label>
                  <Input
                    required={label.includes("*")}
                    value={(formData as any)[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="border-0 border-b-2 rounded-none px-0 focus:border-accent focus-visible:ring-0"
                  />
                </div>
              ))}

              {/* COUNTRY */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-accent">Country *</label>
                <Select onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger className="border-0 border-b-2 rounded-none px-0 focus:border-accent focus-visible:ring-0">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* INQUIRY TYPE */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-accent">Inquiry Type *</label>
                <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                  <SelectTrigger className="border-0 border-b-2 rounded-none px-0 focus:border-accent focus-visible:ring-0">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* COMMENTS */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-accent">Comments</label>
                <Textarea
                  value={formData.comments}
                  onChange={(e) => handleInputChange("comments", e.target.value)}
                  className="border border-border rounded-md min-h-[120px]"
                  placeholder="Describe your inquiry..."
                />
              </div>

              {/* SUBMIT */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <div className="text-sm text-muted-foreground">
                  Prefer to speak directly? Call{" "}
                  <strong className="text-foreground">+91 00000 00000</strong>
                </div>

                <Button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg font-medium rounded-full transition-all hover:scale-105"
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

export default ContactUs;
