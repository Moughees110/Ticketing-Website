import React from "react";
import { MapPin, ArrowRight } from "lucide-react";

const packages = [
  {
    id: 1,
    image: "/public/img/pakage8.webp",
    location: "Maldives",
    title: "Cheap Flights to Accra Testing",
    reviews: "(25 Reviews)",
    price: "$999"
  },
  {
    id: 2,
    image: "/public/img/pakage7.webp",
    location: "Switzerland",
    title: "Cheap Flights to Entebbe",
    reviews: "(40 Reviews)",
    price: "$1299"
  },
  {
    id: 3,
    image: "/public/img/home2.jpg",
    location: "Bali",
    title: "Cheap Flights to Lagos",
    reviews: "(30 Reviews)",
    price: "$899"
  },
  {
    id: 4,
    image: "/public/img/pakage5.webp",
    location: "Japan",
    title: "Cheap Flights to Dakar",
    reviews: "(18 Reviews)",
    price: "$1499"
  },
  {
    id: 5,
    image: "/public/img/pakage4.webp",
    location: "Egypt",
    title: "Cheap Flights to Harare",
    reviews: "(22 Reviews)",
    price: "$799"
  },
  {
    id: 6,
    image: "/public/img/pakage.jpg",
    location: "Australia",
    title: "Cheap Flights to Zanzibar",
    reviews: "(35 Reviews)",
    price: "$1199"
  }
];

const Pakage = () => {
  return (
    <div className="max-w-7xl text-center mx-auto px-4 py-12">
      <h2 className="text-2xl text-[#60ba30] font-bold mb-2">Top Tours</h2>
      <div className="w-25 h-1 bg-[#60ba30] mx-auto mb-4"></div>
      <h3 className="text-4xl text-[#263300] font-bold mb-2">
        Top Tour Packages
      </h3>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Special Offers & Discount on Popular Destination
      </p>

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
                <button className="flex items-center gap-2 border border-[#60ba30] text-[#60ba30]  px-4 py-2 rounded-full hover:bg-[#263300] hover:text-white hover:border-[#263300] transition">
                  Equip Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pakage;
