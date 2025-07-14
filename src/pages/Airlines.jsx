import React from "react";
import { ChevronsRight, MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Packages data
const packages = [
  {
    id: 1,
    image: "/public/img/british.jpg",
    location: "Maldives",
    title: "Cheap Flights with British airway",
    reviews: "(25 Reviews)",
    price: "$999"
  },
  {
    id: 2,
    image: "/public/img/brussels.jpeg",
    location: "Switzerland",
    title: "Cheap Flights with Brussels airway",
    reviews: "(40 Reviews)",
    price: "$1299"
  },
  {
    id: 3,
    image: "/public/img/canada.jpg",
    location: "Bali",
    title: "Cheap Flights with canada airway",
    reviews: "(30 Reviews)",
    price: "$899"
  },
  {
    id: 4,
    image: "/public/img/egypt.jpg",
    location: "Japan",
    title: "Cheap Flights with Egypt airway",
    reviews: "(18 Reviews)",
    price: "$1499"
  },
  {
    id: 5,
    image: "/public/img/emirates.jpg",
    location: "Egypt",
    title: "Cheap Flights with Emirates airway",
    reviews: "(22 Reviews)",
    price: "$799"
  },
  {
    id: 6,
    image: "/public/img/ethiopian.jpg",
    location: "Australia",
    title: "Cheap Flights with Ethiopion airway",
    reviews: "(35 Reviews)",
    price: "$1199"
  },
  {
    id: 7,
    image: "/public/img/etihad.jpg",
    location: "Egypt",
    title: "Cheap Flights with Etihad airway",
    reviews: "(32 Reviews)",
    price: "$797"
  },
  {
    id: 8,
    image: "/public/img/flare.jpg",
    location: "Egypt",
    title: "Cheap Flights with Flare airway",
    reviews: "(43 Reviews)",
    price: "$709"
  },
  {
    id: 9,
    image: "/public/img/france.jpg",
    location: "Egypt",
    title: "Cheap Flights with France airway",
    reviews: "(30 Reviews)",
    price: "$420"
  },
  {
    id: 10,
    image: "/public/img/kenya.jpg",
    location: "Egypt",
    title: "Cheap Flights with Kenya airway",
    reviews: "(19 Reviews)",
    price: "$506"
  },
  {
    id: 11,
    image: "/public/img/lynax.jpg",
    location: "Egypt",
    title: "Cheap Flights with Leynax airway",
    reviews: "(27 Reviews)",
    price: "$360"
  },
  {
    id: 12,
    image: "/public/img/peace.jpg",
    location: "Egypt",
    title: "Cheap Flights with Peace airway",
    reviews: "(28 Reviews)",
    price: "$370"
  },
  {
    id: 13,
    image: "/public/img/porter.jpg",
    location: "Egypt",
    title: "Cheap Flights with Porter airway",
    reviews: "(27 Reviews)",
    price: "$355"
  },
  {
    id: 14,
    image: "/public/img/transat.jpg",
    location: "Egypt",
    title: "Cheap Flights with Transat airway",
    reviews: "(38 Reviews)",
    price: "$499"
  },
  {
    id: 15,
    image: "/public/img/turkish.jpg",
    location: "Egypt",
    title: "Cheap Flights with Turkish airway",
    reviews: "(25 Reviews)",
    price: "$599"
  }
];

const Airlines = () => {
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
            Airlines
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold text-white">
            <button
              onClick={() => navigate("/")}
              className="hover:text-[#60ba30] transition duration-300"
            >
              Home
            </button>
            <ChevronsRight className="text-[#60ba30] w-5 h-5" />
            <span className="text-white">Airlines</span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 bg-[#60ba30] text-white px-3 py-1 rounded-full w-max mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{item.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#263300] mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#60ba30]">
                      ★
                    </span>
                  ))}
                  <span className="text-gray-600 text-sm">{item.reviews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-[#dc3545]">
                    {item.price}{" "}
                    <span className="text-sm font-normal text-gray-400">
                      per/Person
                    </span>
                  </p>
                  <button
                    onClick={() => navigate("/airdetal")}
                    className="flex items-center gap-2 border border-[#60ba30] text-[#60ba30] px-4 py-2 rounded-full hover:bg-[#263300] hover:text-white hover:border-[#263300] transition"
                  >
                    Equip Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Airlines;
