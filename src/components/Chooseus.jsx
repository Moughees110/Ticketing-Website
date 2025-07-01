import React from "react";
import { UsersRound, BadgeCheck, HandHeart, Headphones } from "lucide-react";

const ChooseUs = () => {
  const features = [
    {
      id: "01",
      title: "BEST PRICE GUARANTEED",
      icon: <UsersRound size={52} />,
      description:
        "Traviazo provides all the necessary means of ease to our clients and the lowest"
    },
    {
      id: "02",
      title: "AMAZING DESTINATION",
      icon: <BadgeCheck size={52} />,
      description:
        "With Traviazo more than 100 destinations which include famous cities"
    },
    {
      id: "03",
      title: "EASY PAYMENT PLANS",
      icon: <HandHeart size={52} />,
      description:
        "Airfares Flights allows its customers to pay for his/her tour by easily paying your stated"
    },
    {
      id: "04",
      title: "24/7 CUSTOMER SUPPORT",
      icon: <Headphones size={52} />,
      description:
        "Traviazo are 24 hours available for our valued customers to guide"
    }
  ];

  return (
    <div className="text-center py-12">
      <h2 className="text-4xl font-bold text-[#263300] mb-4">Why Choose Us</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Experience travel like never before with unmatched quality, support, and
        convenience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white p-6 rounded-xl shadow border border-gray-100"
          >
            <div className="flex justify-center mb-4 text-[#60ba30]">
              {feature.icon}
            </div>
            <div className="text-5xl font-bold text-gray-200  inline-block px-4 py-2 mb-4 z-10 ">
              {feature.id}
            </div>
            <h3 className="text-xl font-semibold text-[#263300] mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
