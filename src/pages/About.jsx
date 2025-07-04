import React from "react";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import About2 from "../components/About2";
import Traviazo from "../components/Traviazo";
import TripBanner from "../components/Tripbanner";
import ChooseUs from "../components/Chooseus";
import Stats from "../components/Stats";

const AboutUs = () => {
  const navigate = useNavigate();

  // 👇 Hero section background image object
  const heroImage = {
    url: "/public/img/about.jpg", // ✅ should be in public/img folder
    alt: "About Us Banner"
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url('${heroImage.url}')` }} // 👈 used from object
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            About Us
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold text-white">
            <button
              onClick={() => navigate("/")}
              className="hover:text-[#60ba30] transition duration-300"
            >
              Home
            </button>
            <ChevronsRight className="text-[#60ba30] w-5 h-5" />
            <span className="text-white">About Us</span>
          </div>
        </div>
      </div>

      <About2 />
      <Traviazo />
      <TripBanner />
      <ChooseUs />
      <Stats />
    </div>
  );
};

export default AboutUs;
