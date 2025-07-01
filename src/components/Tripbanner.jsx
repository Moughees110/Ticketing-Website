import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TripBanner = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-[350px] bg-center bg-cover flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/img/tripp3.jpeg')" // ✅ fix: no /public prefix
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative text-center text-white px-4">
        <h2 className="text-2xl md:text-5xl font-bold">
          GET DISCOUNT <span className="text-[#60ba30]">20-35% </span> OFF ANY
          GROUP PACKAGE
        </h2>
        <p className="text-sm md:text-xl font-semibold">
          WHEN YOU PURCHASE ANY PACKAGE & GET NEXT TOUR
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="mt-4 inline-flex items-center gap-2 px-5 py-3 bg-[#60ba30] hover:bg-white  text-white hover:text-[#60ba30] text-sm font-medium rounded-full transition-all"
        >
          Start your trip now <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TripBanner;
