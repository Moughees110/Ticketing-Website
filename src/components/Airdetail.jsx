import React from "react";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import About2 from "./About2";
import ChooseUs from "./Chooseus";
import Stats from "./Stats";
import TripBanner from "./Tripbanner";
export default function Airdetail() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/img/I2S4JYNUS5BZFFJR4XPBN2V2IQ (1).jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Air--Details
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold text-white">
            <button
              onClick={() => navigate("/")}
              className="hover:text-[#60ba30] transition duration-300"
            >
              Home
            </button>
            <ChevronsRight className="text-[#60ba30] w-5 h-5" />
            <span className="text-white">Air Details</span>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-10 px-4 space-y-16 text-gray-700">
        {/* Airline Overview */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/img/takeof.webp"
            alt="Airline Overview"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
              About {name}
            </h2>
            <p className="text-lg leading-relaxed">
              {name} is one of the world’s leading airlines, offering luxury,
              comfort, and exceptional service in the skies. With a global
              network and modern fleet, it has redefined the flying experience.
            </p>
          </div>
        </div>

        {/* History */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src="/img/takeof2.jpg"
            alt="History"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
              A Legacy of Excellence
            </h2>
            <p className="text-lg leading-relaxed">
              Founded with a vision to transform air travel, {name} has grown
              from a small regional carrier to a global powerhouse. Its
              commitment to innovation and customer satisfaction has earned it
              countless awards over the years.
            </p>
          </div>
        </div>

        {/* Fleet */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/img/takeof3.jpg"
            alt="Fleet"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
              Modern & Efficient Fleet
            </h2>
            <p className="text-lg leading-relaxed">
              {name} operates one of the youngest and most technologically
              advanced fleets in the world. From the ultra-efficient Airbus A350
              to the luxurious Boeing 787 Dreamliner, every aircraft is designed
              for performance and passenger comfort.
            </p>
          </div>
        </div>

        {/* In-Flight Experience */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src="/img/I2S4JYNUS5BZFFJR4XPBN2V2IQ (1).jpg"
            alt="In-Flight Experience"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
              Unforgettable In-Flight Experience
            </h2>
            <p className="text-lg leading-relaxed">
              Indulge in gourmet cuisine, world-class entertainment, and
              spacious seating onboard. Whether you're flying Economy or First
              Class, {name} ensures every moment in the sky is a memorable one.
            </p>
          </div>
        </div>

        {/* Global Reach */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/img/air12.jpeg"
            alt="Global Connectivity"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
              Global Connectivity
            </h2>
            <p className="text-lg leading-relaxed">
              With hundreds of destinations across continents, {name} connects
              travelers to the world’s most exciting cities and serene getaways.
              Its strategic alliances ensure seamless travel across every corner
              of the globe.
            </p>
          </div>
        </div>

        {/* Sustainability */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src="/img/air11.png"
            alt="Sustainability"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
              Commitment to Sustainability
            </h2>
            <p className="text-lg leading-relaxed">
              Sustainability is at the heart of {name}'s operations. From
              fuel-efficient aircraft to eco-friendly in-flight products, the
              airline is committed to reducing its environmental footprint.
            </p>
          </div>
        </div>

        {/* Awards */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/img/air13.jpg"
            alt="Award-Winning Service"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
              Award-Winning Service
            </h2>
            <p className="text-lg leading-relaxed">
              {name} has been honored with numerous accolades for its
              outstanding service, punctuality, and innovation. Passengers
              around the world trust {name} for both business and leisure
              travel.
            </p>
          </div>
        </div>
      </div>
      <Stats />
      <About2 />
      <ChooseUs />
      <TripBanner />
    </div>
  );
}
