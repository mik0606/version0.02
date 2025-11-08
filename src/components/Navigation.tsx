import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
  <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
    <img
      src="/logo1.jpg"
      alt="MoviCloud Logo"
      className="w-full h-full object-contain"
    />
  </div>
  <div className="flex flex-col">
    <span className="font-bold text-lg leading-none">MoviCloud Labs</span>
    <span className="text-xs text-muted-foreground">Intelligent Applications</span>
  </div>
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
<div className="relative group">
  <button className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
    <span>Products</span>
    <svg
      className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {/* Products Popup */}
  <div
    className="absolute right-0 mt-2 w-[600px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 transition-all duration-300 ease-out z-50"
    onMouseEnter={(e) =>
      e.currentTarget.classList.add('opacity-100', 'visible')
    }
    onMouseLeave={(e) =>
      e.currentTarget.classList.remove('opacity-100', 'visible')
    }
  >
    <div className="grid grid-cols-2 gap-4 p-5">
      {/* Hospital Management System */}
      <Link
        to="/products/hospital"
        className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
      >
        <img
          src="/images/Hospital.png"
          alt="Hospital"
          className="w-8 h-8 rounded-md object-contain"
        />
        <div>
          <h3 className="font-semibold text-foreground text-sm">
            Hospital Management System
          </h3>
          <p className="text-xs text-muted-foreground">
            AI-powered patient management
          </p>
        </div>
      </Link>

      {/* Transport Management System */}
      <Link
        to="/products/transport"
        className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
      >
        <img
          src="/images/transport.png"
          alt="Transport"
          className="w-8 h-8 rounded-md object-contain"
        />
        <div>
          <h3 className="font-semibold text-foreground text-sm">
            Transport Management System
          </h3>
          <p className="text-xs text-muted-foreground">
            Optimize fleet operations with real-time GPS tracking
          </p>
        </div>
      </Link>

      {/* Office / Work Management */}
      <Link
        to="/products/office"
        className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
      >
        <img
          src="/images/office.png"
          alt="Office"
          className="w-8 h-8 rounded-md object-contain"
        />
        <div>
          <h3 className="font-semibold text-foreground text-sm">
            Office / Work Management
          </h3>
          <p className="text-xs text-muted-foreground">
            Empower your team with intelligent task management
          </p>
        </div>
      </Link>

      {/* School Administration & Alumni */}
      <Link
        to="/products/school"
        className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
      >
        <img
          src="/images/school.png"
          alt="School"
          className="w-8 h-8 rounded-md object-contain"
        />
        <div>
          <h3 className="font-semibold text-foreground text-sm">
            School Administration & Alumni
          </h3>
          <p className="text-xs text-muted-foreground">
            Attendance tracking and alumni
          </p>
        </div>
      </Link>

      {/* E-Commerce Inventory Management */}
      <Link
        to="/products/Ecommerce"
        className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
      >
        <img
          src="/images/Ecommerce.png"
          alt="Ecommerce"
          className="w-8 h-8 rounded-md object-contain"
        />
        <div>
          <h3 className="font-semibold text-foreground text-sm">
            E-Commerce Inventory Management
          </h3>
          <p className="text-xs text-muted-foreground">
            Automated stock replenishment and analytics
          </p>
        </div>
      </Link>

      {/* Hotel & Hospitality Management */}
      <Link
        to="/products/Hotel"
        className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
      >
        <img
          src="/images/Hotel.png"
          alt="Hotel"
          className="w-8 h-8 rounded-md object-contain"
        />
        <div>
          <h3 className="font-semibold text-foreground text-sm">
            Hotel & Hospitality Management
          </h3>
          <p className="text-xs text-muted-foreground">
            Comprehensive guest services
          </p>
        </div>
      </Link>

      {/* Survey & Feedback System */}
      <Link
        to="/products/survey"
        className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
      >
        <img
          src="/images/survey.png"
          alt="Survey"
          className="w-8 h-8 rounded-md object-contain"
        />
        <div>
          <h3 className="font-semibold text-foreground text-sm">
            Survey & Feedback System
          </h3>
          <p className="text-xs text-muted-foreground">
            Real-time analytics and insights
          </p>
        </div>
      </Link>

      {/* Digital Marketing Suite */}
      <Link
        to="/products/Marketing"
        className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
      >
        <img
          src="/images/Marketting.png"
          alt="Marketing"
          className="w-8 h-8 rounded-md object-contain"
        />
        <div>
          <h3 className="font-semibold text-foreground text-sm">
            Digital Marketing Suite
          </h3>
          <p className="text-xs text-muted-foreground">
            Comprehensive campaign tools
          </p>
        </div>
      </Link>
    </div>
  </div>
  
</div>
{/* Solutions Dropdown */}
<div className="relative group">
  <button className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
    <span>Solutions</span>
    <svg
      className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {/* Solutions Popup */}
  <div
  className="absolute left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-background border border-border rounded-xl shadow-xl 
  opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 transition-all duration-300 ease-out z-50"
>

    <div className="grid grid-cols-2 gap-4 p-5">

      {/* Web Development */}
      <Link to="/solutions/web" className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition">
        <img src="/images/Hotel.png" alt="Web" className="w-8 h-8 rounded-md object-contain" />
        <div>
          <h3 className="font-semibold text-foreground text-sm">Web Development</h3>
          <p className="text-xs text-muted-foreground">We create applications on the edge of your dreams.</p>
        </div>
      </Link>

      {/* Mobile Development */}
      <Link to="/solutions/mobile" className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition">
        <img src="/images/office.png" alt="Mobile" className="w-8 h-8 rounded-md object-contain" />
        <div>
          <h3 className="font-semibold text-foreground text-sm">Mobile Development</h3>
          <p className="text-xs text-muted-foreground">Insert your dream business into mobiles.</p>
        </div>
      </Link>

      {/* Cloud Solutions */}
      <Link to="/solutions/cloud" className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition">
        <img src="/images/survey.png" alt="Cloud" className="w-8 h-8 rounded-md object-contain" />
        <div>
          <h3 className="font-semibold text-foreground text-sm">Cloud Solutions</h3>
          <p className="text-xs text-muted-foreground">Choosing the Cloud Solutions Services.</p>
        </div>
      </Link>

      {/* Security Solutions */}
      <Link to="/solutions/security" className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition">
        <img src="/images/school.png" alt="Security" className="w-8 h-8 rounded-md object-contain" />
        <div>
          <h3 className="font-semibold text-foreground text-sm">Security Solutions</h3>
          <p className="text-xs text-muted-foreground">Your application will never be under threat.</p>
        </div>
      </Link>

      {/* Maintenance & Support */}
      <Link to="/solutions/support" className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition">
        <img src="/images/Hospital.png" alt="Support" className="w-8 h-8 rounded-md object-contain" />
        <div>
          <h3 className="font-semibold text-foreground text-sm">Maintenance & Support</h3>
          <p className="text-xs text-muted-foreground">We are diversified and experts in our fields.</p>
        </div>
      </Link>

      {/* AI & Automation */}
      <Link to="/solutions/ai" className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition">
        <img src="/images/Ecommerce.png" alt="AI" className="w-8 h-8 rounded-md object-contain" />
        <div>
          <h3 className="font-semibold text-foreground text-sm">AI & Automation</h3>
          <p className="text-xs text-muted-foreground">Leverage AI to streamline and optimize operations.</p>
        </div>
      </Link>

    </div>
  </div>
</div>

<Link to="/career">
   
    Career
  
</Link>



            <Button variant="outline" size="sm">
              Get a Demo
            </Button>
            

            <Button size="sm" className="bg-gradient-primary">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 animate-fade-in">
            <Link 
              to="/" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Button variant="outline" size="sm" className="w-full">
              Get a Demo
            </Button>
            <a href="#contact">
  <Button size="sm" className="bg-gradient-primary">
    Contact Us
  </Button>
</a>

          </div>
        )}
      </div>
    </nav>
  );
};
