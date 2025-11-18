import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const CareerPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      {/* NAVIGATION */}
      <Navigation />

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <h1 className="text-5xl font-bold mb-4 leading-tight text-blue-700">
            Intelligent Enterprise Solutions
          </h1>
          <p className="text-lg text-slate-600 mb-6 max-w-md">
            We deliver smart, AI-powered solutions that intelligently optimize
            your entire enterprise.
          </p>

          <a
            href="#open-roles"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
          >
            View Products
          </a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl border bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center p-12">
            {/* ⭐ REPLACED TEXT WITH LOGO */}
            <img
              src="/logo1.jpg"
              alt="MoviCloud Labs Logo"
              className="w-52 md:w-64 lg:w-72 object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>
      </section>

      {/* VALUES SECTION */}
      <section className="container mx-auto px-6 py-20">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Values</h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Discover how our intelligent application development process drives
            the future of digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          {[
            {
              title: "Requirements Gathering",
              desc: "We understand your goals, vision, and technical needs.",
              icon: <Zap className="w-7 h-7 text-blue-600" />,
            },
            {
              title: "Development",
              desc: "We build strong, scalable digital solutions.",
              icon: <TrendingUp className="w-7 h-7 text-blue-600" />,
            },
            {
              title: "Testing & QA",
              desc: "We ensure quality through thorough testing.",
              icon: <Shield className="w-7 h-7 text-blue-600" />,
            },
            {
              title: "Production & Support",
              desc: "We maintain, monitor, and continuously improve.",
              icon: <ArrowRight className="w-7 h-7 text-blue-600" />,
            },
          ].map((v) => (
            <motion.div
              key={v.title}
              {...fadeUp}
              className="p-8 rounded-2xl border shadow-sm hover:shadow-lg transition hover:border-blue-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-blue-700">
                {v.title}
              </h3>
              <p className="text-slate-600 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="bg-slate-50 py-20 px-6">
        <motion.div className="container mx-auto text-center mb-14" {...fadeUp}>
          <h2 className="text-4xl font-bold text-blue-700 mb-2">Solutions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our full suite of enterprise-grade solutions built with the
            latest technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
          {[
            "Cloud Solutions",
            "AI & Automation",
            "Maintenance & Support",
            "Security Solutions",
            "Web Development",
            "Mobile Development",
          ].map((perk) => (
            <motion.div
              key={perk}
              {...fadeUp}
              className="bg-white p-6 rounded-xl border shadow-sm hover:border-blue-300 hover:shadow-md transition"
            >
              <span className="text-xl font-semibold text-blue-700">
                {perk}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="container mx-auto px-6 py-20">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-4xl font-bold text-blue-700">Meet the Team</h2>
          <p className="text-slate-600 max-w-xl mx-auto mt-2">
            A passionate team building the future of enterprise AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {["AP", "RM", "PS", "YOU"].map((name) => (
            <motion.div key={name} {...fadeUp} className="text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-sky-600 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                {name}
              </div>
              <p className="font-semibold text-sm text-blue-700">
                {name === "YOU" ? "Your Role" : "Team Member"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="open-roles" className="bg-white py-20 px-6">
        <motion.div className="container mx-auto max-w-3xl" {...fadeUp}>
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Products</h2>
          <p className="text-slate-600 mb-10">
            Explore our suite of AI-powered products and digital solutions.
          </p>

          <div className="space-y-6">
  {[
    { title: "Hospital Management System", details: "AI • Full Stack", link: "/products/hospital" },
    { title: "Transport Automation Suite", details: "Smart Routing", link: "/products/transport" },
    { title: "Office Workflow Manager", details: "Automation", link: "/products/office" },
    { title: "School ERP Platform", details: "Education", link: "/products/school" },
    { title: "E-Commerce Engine", details: "Online Retail", link: "/products/ecommerce" },
    { title: "Hotel Operations Software", details: "Hospitality", link: "/products/hotel" },
    { title: "Survey & Insights Tool", details: "Analytics", link: "/products/survey" },
    { title: "Marketing Automation Suite", details: "Growth", link: "/products/marketing" },
  ].map((item) => (
    <motion.div
      key={item.title}
      {...fadeUp}
      className="p-6 border rounded-xl shadow-sm flex items-center justify-between hover:shadow-lg hover:border-blue-300 transition"
    >
      <div>
        <h3 className="font-semibold text-xl text-blue-700">{item.title}</h3>
        <p className="text-sm text-slate-600 mt-1">{item.details}</p>
      </div>

      <Link to={item.link}>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">View</Button>
      </Link>
    </motion.div>
  ))}
</div>

        </motion.div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default CareerPage;
