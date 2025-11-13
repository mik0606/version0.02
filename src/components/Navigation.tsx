import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

/* ----------------------------- MAIN NAVIGATION ----------------------------- */

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/logo1.jpg"
                alt="MoviCloud Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">
                MoviCloud Labs
              </span>
              <span className="text-xs text-muted-foreground">
                Intelligent Applications
              </span>
            </div>
          </Link>

          {/* ---------------------------- Desktop Menu ---------------------------- */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>

            {/* ---------------------- Products Dropdown ---------------------- */}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* ---------------------- Products Popup ---------------------- */}
              <div
                className="absolute right-0 mt-2 w-[600px] bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 transition-all duration-300 ease-out z-50"
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("opacity-100", "visible")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("opacity-100", "visible")
                }
              >
                <div className="grid grid-cols-2 gap-4 p-5">
                  {/* Hospital Management */}
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

                  {/* Transport */}
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

                  {/* Office */}
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

                  {/* School */}
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

                  {/* Ecommerce */}
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

                  {/* Hotel */}
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

                  {/* Survey */}
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

                  {/* Marketing */}
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

            {/* ---------------------- Solutions Dropdown ---------------------- */}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Solutions Popup */}
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-background border border-border rounded-xl shadow-xl 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 transition-all duration-300 ease-out z-50"
              >
                <div className="grid grid-cols-2 gap-4 p-5">
                  <Link
                    to="/solutions/web"
                    className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
                  >
                    <img
                      src="/images/Hotel.png"
                      alt="Web"
                      className="w-8 h-8 rounded-md object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        Web Development
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        We create applications on the edge of your dreams.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/mobile"
                    className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
                  >
                    <img
                      src="/images/office.png"
                      alt="Mobile"
                      className="w-8 h-8 rounded-md object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        Mobile Development
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Insert your dream business into mobiles.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/cloud"
                    className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
                  >
                    <img
                      src="/images/survey.png"
                      alt="Cloud"
                      className="w-8 h-8 rounded-md object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        Cloud Solutions
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Choosing the Cloud Solutions Services.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/security"
                    className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
                  >
                    <img
                      src="/images/school.png"
                      alt="Security"
                      className="w-8 h-8 rounded-md object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        Security Solutions
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Your application will never be under threat.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/support"
                    className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
                  >
                    <img
                      src="/images/Hospital.png"
                      alt="Support"
                      className="w-8 h-8 rounded-md object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        Maintenance & Support
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        We are diversified and experts in our fields.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/solutions/ai"
                    className="flex items-start space-x-3 hover:bg-muted p-3 rounded-lg transition"
                  >
                    <img
                      src="/images/Ecommerce.png"
                      alt="AI"
                      className="w-8 h-8 rounded-md object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        AI & Automation
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Leverage AI to streamline and optimize operations.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/career" className="text-foreground hover:text-primary">
              Career
            </Link>

            <Button variant="outline" size="sm">
              Get a Demo
            </Button>

            <Link to="/contact">
              <Button size="sm" className="bg-gradient-primary">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* ---------------------- Mobile Menu Button ---------------------- */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ---------------------- Mobile Menu ---------------------- */}
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
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button size="sm" className="bg-gradient-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

/* ----------------------------- SIMPLE NAVIGATION (REFERENCE COPY) ----------------------------- */

export const SimpleNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            YourLogo
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" className="bg-gradient-primary">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button size="sm" className="bg-gradient-primary w-full mt-2">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
