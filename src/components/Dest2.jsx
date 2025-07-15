import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const destinations = [
  {
    image: "/img/destination1.webp",
    title: "Cheap Flights to Mountain Escape ",
    location: "Maldives"
  },
  {
    image: "/img/destination.webp",
    title: " Cheap Flights to Beautiful Beach",
    location: "Switzerland"
  },
  {
    image: "/img/destination2.webp",
    title: " Cheap Flights to City Lights",
    location: "New York"
  },
  {
    image: "/img/destination3.webp",
    title: "Cheap Flights to Desert Adventure",
    location: "Qatar"
  },
  {
    image: "/img/destination4.webp",
    title: "Cheap Flights to Historic Wonders",
    location: "Rome"
  },
  {
    image: "/img/destination.webp",
    title: "Cheap Flights to Tropical Paradise",
    location: "Bali"
  }
];

const Dest2 = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl text-[#60ba30] font-bold mb-2">Destination</h2>
        <div className="w-25 h-1 bg-[#60ba30] mx-auto mb-4" />
        <h3 className="text-4xl text-[#263300] font-bold mb-2">
          Top Destinations
        </h3>
        <p className="max-w-xl mx-auto text-gray-500">
          Explore our curated selection of destinations, where adventure and
          relaxation meet to create unforgettable memories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <motion.img
              src={dest.image}
              alt={dest.title}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-84 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-white p-2">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-lg font-bold text-[#263300] hover:text-[#60ba30] transition-colors duration-700 cursor-pointer">
                  {dest.title}
                </h4>
                <MapPin className="text-[#60ba30] w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 text-gray-600 relative">
                <MapPin className="w-4 h-4" />
                <span>{dest.location}</span>
                <ArrowRight  
                onClick={() => navigate("/ddetail")}
                className="ml-auto bg-[#60ba30] text-white rounded-full p-1 w-8 h-8 hover:bg-[#263300]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dest2;
