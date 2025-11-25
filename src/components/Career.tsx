import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import { easeOut } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOut },
};


import {
  Users,
  Lightbulb,
  Handshake,
  UserCheck,
  CheckSquare,
} from "lucide-react";


// 🔥 Your images
const imagePaths = {
  hero: "/career/hero.png",
  office1: "/career/office1.png",
  office2: "/career/office2.png",
  benefits: "/career/benefits.png",
};

// 🔥 Perks list
const perks = [
  {
    title: "Teamwork",
    desc: "Our employees work in teams and share even the boldest ideas.",
    icon: <Users className="w-8 h-8 stroke-[2]" />,
  },
  {
    title: "Room for New Ideas",
    desc: "We’re always ready to listen and discuss new initiatives.",
    icon: <Lightbulb className="w-8 h-8 stroke-[2]" />,
  },
  {
    title: "Competitive Salary",
    desc: "We offer competitive salary + full benefits.",
    icon: <Handshake className="w-8 h-8 stroke-[2]" />,
  },
  {
    title: "Personal Development",
    desc: "We support training, education, and learning opportunities.",
    icon: <UserCheck className="w-8 h-8 stroke-[2]" />,
  },
];

// 🔥 Stats
const stats = [
  { value: "100+", label: "Employees worldwide" },
  { value: "12", label: "Years of work" },
  { value: "5", label: "Offices worldwide" },
  { value: "1000+", label: "Projects completed" },
];

// 🔥 Categories
const categories = [
  {
    title: "Web Development",
    count: 7,
    desc: "Full-Stack Developer, Frontend Developer, Backend Developer.",
  },
  {
    title: "Design & Creative",
    count: 5,
    desc: "UI/UX Designer, Web Designer, Creative Designer.",
  },
  {
    title: "Digital Marketing",
    count: 8,
    desc: "SEO Specialist, Content Manager, Digital Marketer.",
  },
  {
    title: "Animation & Video",
    count: 4,
    desc: "Animator, Character Artist, Video Editor.",
  },
  {
    title: "Mobile Development",
    count: 4,
    desc: "React Native Developer, Flutter Developer.",
  },
  {
    title: "Product & PM",
    count: 3,
    desc: "Product Manager, Project Lead.",
  },
];

const NewCareerPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">

      <Navigation />

      {/* ---------------------------------------------------------
        HERO SECTION
      --------------------------------------------------------- */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-center">

          {/* LEFT - TEXT */}
          <motion.div
            {...fadeUp}
            className="md:col-span-6 lg:col-span-5"
          >
            <p className="text-sm text-blue-700 font-medium mb-4">- Hello and welcome -</p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Start Your Career <br />
              <span className="text-blue-600">in MoviCloud</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              Join a team that builds intelligent digital experiences with innovation.
            </p>

            <div className="flex gap-4 items-center">

              {/* Scroll to About */}
              <a href="#about">
                <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  About us
                </Button>
              </a>

              {/* Scroll to Vacancies */}
              <a href="#vacancies">
                <Button className="border border-slate-300 text-blue-700 bg-white px-6 py-3 rounded-lg hover:bg-slate-50">
                  Vacancies
                </Button>
              </a>
            </div>

            <p className="mt-8 text-slate-500">
              <strong className="text-slate-800">Hot vacancies:</strong>{" "}
              UX Designer, JS Developer, iOS Developer, Product Manager.
            </p>
          </motion.div>

          {/* RIGHT - IMAGES */}
          <motion.div
            {...fadeUp}
            className="md:col-span-6 lg:col-span-7"
          >
            <div className="flex gap-4 items-start justify-end">

              {/* stacked small images */}
              <div className="hidden sm:flex flex-col gap-4 w-1/3">
                <div className="rounded-xl overflow-hidden shadow-lg border">
                  <img src={imagePaths.office1} className="w-full object-cover h-48" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border">
                  <img src={imagePaths.office2} className="w-full object-cover h-36" />
                </div>
              </div>

              {/* main image */}
              <div className="w-2/3 sm:w-1/2 rounded-2xl overflow-hidden shadow-xl border">
                <img src={imagePaths.hero} className="w-full object-cover h-[520px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------
        ABOUT SECTION (Perks Section with ID)
      --------------------------------------------------------- */}
      <section id="about" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-6">

          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-sm text-blue-700 font-medium mb-2">- Perk -</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Reasons Why You Should Work Here
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Being part of MoviCloud means enjoying every single working day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {perks.map((p) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                className="text-center p-6 bg-white rounded-xl border hover:shadow-md transition"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4 text-blue-600">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-500">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
        BENEFITS SECTION
      --------------------------------------------------------- */}
      <section className="bg-amber-50/50 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

          {/* LEFT */}
          <motion.div {...fadeUp} className="md:col-span-6">
            <p className="text-sm text-blue-700 font-medium mb-4">- Benefits -</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Feel and Do Your Best</h2>

            <p className="text-slate-600 mb-6">
              MoviCloud gives great work-life balance, wellbeing support, and resources for growth.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-blue-600" /> Full healthcare coverage.</li>
              <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-blue-600" /> Wellbeing reimbursement.</li>
              <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-blue-600" /> Home-office setup budget.</li>
            </ul>
          </motion.div>

          {/* RIGHT */}
          <motion.div {...fadeUp} className="md:col-span-6">
            <div className="rounded-2xl overflow-hidden border shadow-lg">
              <img src={imagePaths.benefits} className="w-full object-cover h-[460px]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------
        STATS SECTION
      --------------------------------------------------------- */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <motion.div key={s.label} {...fadeUp}>
              <div className="text-4xl font-extrabold mb-2">{s.value}</div>
              <p className="text-slate-600">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------
        VACANCIES SECTION
      --------------------------------------------------------- */}
      <section id="vacancies" className="py-20 bg-white scroll-mt-24">
    <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="flex justify-between mb-8">
            <div>
              <p className="text-sm text-blue-700 font-medium mb-2">- Vacancies -</p>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3">
                Browse Vacancies by Category
              </h3>
              <p className="text-slate-600 max-w-xl">
                Find the opportunity that suits your skillset.
              </p>
            </div>
          </motion.div>

          {/* CATEGORY CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((c) => (
              <motion.div
                key={c.title}
                {...fadeUp}
                className="border rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="text-sm text-slate-400">{c.count} vacancies</div>
                <h4 className="text-xl font-semibold my-2">{c.title}</h4>
                <p className="text-slate-600 mb-4">{c.desc}</p>
                {/* Removed More in category link */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewCareerPage;
