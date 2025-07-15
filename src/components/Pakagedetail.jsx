import React from "react";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Stats from "./Stats";
import About2 from "./About2";
import ChooseUs from "./Chooseus";
import TripBanner from "./Tripbanner";
export default function Pakagedetail() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/pexels-freestockpro-2166553.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Packages--Details
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold text-white">
            <button
              onClick={() => navigate("/about-us")}
              className="hover:text-[#60ba30] transition duration-300"
            >
              Home
            </button>
            <ChevronsRight className="text-[#60ba30] w-5 h-5" />
            <span className="text-white">Packages Details</span>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-10 px-4 space-y-16 text-gray-700">
        {/* Package Overview */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
            Explore the World with Our Exclusive Tour Packages
          </h2>
          <p className="text-lg leading-relaxed">
            Our handpicked tour packages are designed to offer you unforgettable
            experiences, whether you're craving mountain adventures, tropical
            getaways, or cultural explorations. From luxury to budget-friendly,
            we have something for every traveler.
          </p>
        </div>

        {/* Domestic Packages */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
            Captivating Domestic Destinations
          </h2>
          <p className="text-lg leading-relaxed">
            Discover the beauty of your own country with our carefully curated
            domestic packages. Whether it’s the misty hills of Murree, the
            serene beaches of Gwadar, or the cultural charm of Lahore, our
            packages cover the best of Pakistan with all-inclusive comfort.
          </p>
        </div>

        {/* International Packages */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
            Wander Far & Wide – International Adventures
          </h2>
          <p className="text-lg leading-relaxed">
            Fly beyond borders with our international travel packages. Visit the
            enchanting streets of Paris, the shopping paradise of Dubai, the
            cultural treasures of Turkey, or the tropical paradise of Bali. Each
            package includes flights, hotels, and guided tours.
          </p>
        </div>

        {/* Honeymoon & Couple Packages */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
            Romantic Honeymoon Escapes
          </h2>
          <p className="text-lg leading-relaxed">
            Start your new journey together in style. Our honeymoon packages
            offer romantic destinations, candlelight dinners, private tours, and
            luxurious stays to make your memories last a lifetime — from
            Maldives to Murree.
          </p>
        </div>

        {/* Adventure & Nature Packages */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
            Adventure Awaits – Nature & Thrill Tours
          </h2>
          <p className="text-lg leading-relaxed">
            For thrill-seekers and nature lovers, we offer trekking in the
            Himalayas, desert safaris, river rafting, and camping under the
            stars. These packages are designed for those who want to explore
            beyond the usual.
          </p>
        </div>

        {/* Family & Group Tours */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
            Fun-Filled Family & Group Tours
          </h2>
          <p className="text-lg leading-relaxed">
            Travel together and bond over unforgettable experiences. Our group
            and family packages include kid-friendly activities, spacious
            accommodations, and guided sightseeing — so everyone, from
            grandparents to toddlers, has a blast!
          </p>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#60ba30]">
            Why Travel With Us?
          </h2>
          <p className="text-lg leading-relaxed">
            We combine expertise, customer service, and unbeatable pricing to
            give you the best travel experience possible. Every package is
            crafted with care and backed by 24/7 support, trusted partners, and
            glowing reviews from happy travelers.
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
