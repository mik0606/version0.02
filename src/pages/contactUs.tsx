import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ContactUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("americas");

  return (
    <>
      {/* NAVIGATION ALWAYS ON TOP */}
      <Navigation />

      {/* TOP CONTACT SECTION */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GETTING IN TOUCH
            </h1>

            <p className="text-gray-600 mb-4">
              Do you have a question or need more details? Please enter your
              information and detailed message, and we'll get back to you as
              soon as possible. Thanks!
            </p>

            <p className="text-gray-600 mb-4">
              We are not accepting job applications from this form. Please visit
              our careers page for available positions.
            </p>

            <p className="text-gray-600 mb-4">
              For product support, please open a ticket through the support
              portal.
            </p>

            <p className="text-gray-600">
              Need employment verification for a team member? Click here.
            </p>
          </div>

          {/* RIGHT FORM (Snowflake style) */}
          <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-200">

  <form className="space-y-6">

    <div>
      <label className="contactLabel">First Name *</label>
      <input className="contactLineInput" />
    </div>

    <div>
      <label className="contactLabel">Last Name *</label>
      <input className="contactLineInput" />
    </div>

    <div>
      <label className="contactLabel">Company Name *</label>
      <input className="contactLineInput" />
    </div>

    <div>
      <label className="contactLabel">Job Function</label>
      <input className="contactLineInput" />
    </div>

    <div>
      <label className="contactLabel">Job Title *</label>
      <input className="contactLineInput" />
    </div>

    <div>
      <label className="contactLabel">Email Address *</label>
      <input className="contactLineInput" />
    </div>

    <div>
      <label className="contactLabel">Phone Number *</label>
      <input className="contactLineInput" />
    </div>

    <div>
      <label className="contactLabel">Country *</label>
      <select className="contactLineInput selectArrow appearance-none pr-10">
        <option>Select</option>
      </select>
    </div>

    <div>
      <label className="contactLabel">Inquiry Type *</label>
      <select className="contactLineInput selectArrow appearance-none pr-10">
        <option>Select</option>
      </select>
    </div>

    <div>
      <label className="contactLabel">Comments</label>
      <textarea className="w-full border border-[#0b4779] rounded-md p-3 text-sm h-24"></textarea>
    </div>

    <p className="text-xs text-gray-500 leading-relaxed">
      By submitting this form, I understand Snowflake will process my personal
      information in accordance with their Privacy Notice. I may withdraw my
      consent or update preferences at any time.
    </p>

    <button
      type="submit"
      className="mt-2 bg-[#00a1e0] text-white px-9 py-2 rounded-full text-sm font-semibold hover:bg-[#0b91cb] transition"
    >
      SUBMIT
    </button>

  </form>

</div>
        </div>
      </section>

      {/* OFFICE LOCATIONS SECTION */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-xl font-semibold tracking-wide mb-10">
            OFFICE LOCATIONS
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-8">
            {["americas", "emea", "apj"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase tracking-wider text-sm pb-1 ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Office Cards */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {officeData[activeTab].map((office, index) => (
              <div
                key={index}
                className="bg-white p-5 shadow-md rounded-xl border text-center"
              >
                <h3 className="font-semibold text-gray-800">{office.city}</h3>
                <p className="text-blue-600 text-sm mb-2">{office.region}</p>
                <p className="text-gray-600 text-sm">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

/* ---------------- OFFICE DATA ---------------- */
const officeData = {
  americas: [
    { city: "Bozeman", region: "MONTANA, US", address: "529 Emoil Street, Bozeman, MT 59715" },
    { city: "Menlo Park", region: "CALIFORNIA, US", address: "232 Constitution Drive, Menlo Park, CA" },
    { city: "Bellevue", region: "WASHINGTON, US", address: "10404 NE 8th Street, Bellevue, WA 98004" },
    { city: "New York City", region: "NEW YORK, US", address: "120 West 45th Street, NY 10036" },
    { city: "Denver", region: "COLORADO, US", address: "1700 Broadway, Denver, CO 80290" },
    { city: "Boston", region: "MASSACHUSETTS, US", address: "87 Seaport Blvd, Boston, MA 02210" },
    { city: "Atlanta", region: "GEORGIA, US", address: "525 Spring Street NW, Atlanta, GA 30308" },
    { city: "McLean", region: "VIRGINIA, US", address: "8300 Boone Blvd #500, McLean, VA 22102" },
    { city: "Chicago", region: "ILLINOIS, US", address: "800 W Madison Street, Chicago, IL" },
    { city: "Toronto", region: "CANADA", address: "120 Adelaide St W Suite 200, Toronto, ON" },
  ],
  emea: [],
  apj: [],
};



