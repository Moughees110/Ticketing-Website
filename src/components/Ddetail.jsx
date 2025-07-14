import React from "react";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Stats from "./Stats";
import About2 from "./About2";
import ChooseUs from "./Chooseus";
import TripBanner from "./Tripbanner";

export default function Ddetail() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('public/img/pexels-freestockpro-2070485.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Destinations--Detail
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold text-white">
            <button
              onClick={() => navigate("/")}
              className="hover:text-[#60ba30] transition duration-300"
            >
              Home
            </button>
            <ChevronsRight className="text-[#60ba30] w-5 h-5" />
            <span className="text-white">Destinations Detail</span>
          </div>
        </div>
      </div>

      {/* Destination Detail Sections */}
      <div className="max-w-6xl mx-auto py-16 px-4 space-y-16">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/public/img/destination1.webp"
            alt="Beach Escape"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#60ba30] mb-4">
              Beach Bliss in the Maldives
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover untouched white-sand beaches and crystal-clear turquoise
              waters. The Maldives offers the perfect romantic getaway or
              peaceful solo retreat. Dive into coral gardens, enjoy luxury water
              villas, and feel the ocean breeze every morning.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#60ba30] mb-4">
              Historic Beauty of Rome
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Step back in time in the heart of Rome. Walk among ancient ruins,
              marvel at the Colosseum, and toss a coin into the Trevi Fountain.
              Every street tells a story, and every meal is a celebration of
              flavor and tradition.
            </p>
          </div>
          <img
            src="/public/img/destination4.webp"
            alt="Rome History"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/public/img/destination2.webp"
            alt="City Lights"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#60ba30] mb-4">
              Vibrant Energy of New York
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From Times Square to Central Park, New York City never sleeps.
              Enjoy world-class entertainment, iconic landmarks, and endless
              culinary delights in the city that defines ambition and
              excitement.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#60ba30] mb-4">
              Adventure in the Qatar Desert
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience the thrill of dune bashing, camel rides, and golden
              sunsets over endless sand dunes. Qatar combines rich cultural
              heritage with modern luxury, offering a unique desert adventure
              you’ll never forget.
            </p>
          </div>
          <img
            src="/public/img/destination3.webp"
            alt="Qatar Desert"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
        </div>

        {/* Outro */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-semibold text-[#60ba30] mb-4">
            Let Your Journey Begin
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            No matter where your heart desires to go — be it tropical islands,
            ancient cities, or bustling metropolises — our destinations promise
            experiences that will stay with you forever. Travel not just to see
            the world, but to feel it.
          </p>
        </div>
      </div>
      <Stats/>
      <About2/>
      <ChooseUs/>
      <TripBanner/>
    </div>
  );
}
