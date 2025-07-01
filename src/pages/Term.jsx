import React from "react";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactBody from "../components/Contactbody";
import TermTraviazo from "../components/Termtraviazo";
import TripBanner from "../components/Tripbanner";
import ChooseUs from "../components/Chooseus";
import Stats from "../components/Stats";

const Term = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/img/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Terms & Conditions
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold text-white">
            <button
              onClick={() => navigate("/")}
              className="hover:text-[#60ba30] transition duration-300"
            >
              Home
            </button>
            <ChevronsRight className="text-[#60ba30] w-5 h-5" />
            <span className="text-white">Terms & Conditions</span>
          </div>
        </div>
      </div>

      <TermTraviazo />
      <TripBanner />
      <ChooseUs />
      <Stats />
    </div>
  );
};

export default Term;
