import React from "react";
import { ChevronsRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="h-[50vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: "url('/public/img/about.jpg')" }} // Replace image if needed
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Destinations
        </h1>

        {/* Button with icon on right side and extra text after icon */}
        <div className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold text-white">
          <button className="hover:text-[#60ba30] transition duration-300">
            Home
          </button>
          <ChevronsRight className="text-[#60ba30] w-5 h-5" />
          <span className="text-white">Destinations</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
