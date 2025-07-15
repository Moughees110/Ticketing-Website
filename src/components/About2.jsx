import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const About2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-4 py-12">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src="/img/about2.jpg"
          alt="About"
          className="rounded-2xl w-full h-auto object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#60ba30] text-white px-4 py-2 rounded-xl shadow-xl">
          10+ Years Of Experience
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-[#60ba30] text-lg font-semibold mb-2">About Us</h3>
        <div className="h-1 w-16 bg-[#60ba30] mb-4"></div>
        <h2 className="text-3xl text-[#263300] md:text-4xl font-bold mb-4">
          United Kingdom's Best Travel Agency Company For You
        </h2>
        <p className="text-gray-700 mb-6">
          Traviazo is a Travel company offering online travel products and
          services. Our customers can access our website for a ‘one-stop shop’
          including access to specially negotiated airfares, hotels, car rental,
          and insurance. As a travel solution provider, we have made our mark in
          a crowded and opaque marketplace by being what our...
        </p>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            "Safety Travel System",
            "Budget-Friendly Air Tickets",
            "24/7 customer assistance",
            "Right Solution & Guide",
            "Expert Trip Planning",
            "Fast Communication"
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="text-[#60ba30] border border-[#60ba30] rounded-full mt-1" />
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {/* About Us Button */}
          <button
            onClick={() => navigate("/about-us")}
            className="flex items-center gap-2 bg-[#60ba30] text-white px-5 py-2 rounded-lg hover:bg-[#263300] transition duration-300"
          >
            About Us
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Contact Us Button */}
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-2 border border-[#263300] text-[#263300] px-5 py-2 rounded-lg hover:bg-[#60ba30] hover:text-white hover:border-[#60ba30] transition duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About2;
