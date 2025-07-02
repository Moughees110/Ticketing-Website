import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import About from "./About";
import Pakage from "../components/Pakage";
import ChooseUs from "../components/Chooseus";

import Stats from "../components/Stats";
import Airlines2 from "../components/Airlines2";

import TripBanner from "../components/Tripbanner";
import Dest2 from "../components/Dest2";
import About2 from "../components/About2";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tripType, setTripType] = useState("oneway");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
  };

  const slides = [
    {
      image: "/img/home1.jpg",
      heading: "Welcome to Our Site",
      text: "Discover amazing content and visuals here."
    },
    {
      image: "/img/home2.jpg",
      heading: "Explore the Beauty",
      text: "Nature brings peace and inspiration."
    },
    {
      image: "/img/home3.jpg",
      heading: "Urban Experience",
      text: "Feel the pulse of the modern world."
    }
  ];

  return (
    <div className="relative w-full min-h-screen">
      <div className="relative w-full h-[70vh]" id="home">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <div
                className="w-full h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center text-center px-4">
                  <motion.h1
                    key={
                      currentSlide === index ? `heading-${index}` : undefined
                    }
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-lg md:text-3xl font-bold text-[#60ba30] mb-4 drop-shadow"
                  >
                    {slide.heading}
                  </motion.h1>
                  <motion.p
                    key={currentSlide === index ? `text-${index}` : undefined}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl text-white max-w-2xl drop-shadow-lg"
                  >
                    {slide.text}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-black/50 p-2 rounded-full border border-white hover:border-[#60ba30]"
          >
            <ArrowLeft className="text-white hover:text-[#60ba30]" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-black/50 p-2 rounded-full border border-white hover:border-[#60ba30]"
          >
            <ArrowRight className="text-white hover:text-[#60ba30]" />
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-2xl -mt-3 mb-20">
        <div className="flex gap-4 mb-6 justify-center">
          <button
            className={`px-6 py-2 rounded-full text-lg text-[#263300] font-semibold ${
              tripType === "oneway" ? "bg-[#60ba30] text-white" : "bg-gray-200"
            }`}
            onClick={() => setTripType("oneway")}
          >
            One Way
          </button>
          <button
            className={`px-6 py-2 rounded-full text-lg text-[#263300] font-semibold ${
              tripType === "return" ? "bg-[#60ba30] text-white" : "bg-gray-200"
            }`}
            onClick={() => setTripType("return")}
          >
            Return
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium mb-2 block text-[#263300] ">
              Departure
            </label>
            <input
              type="text"
              placeholder="Departure"
              className=" border border-[#263300] p-2 rounded-lg w-full transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
            />
          </div>
          <div>
            <label className="font-medium mb-2 block text-[#263300]">
              Destination
            </label>
            <input
              type="text"
              placeholder="Destination"
              className="border border-[#263300] p-2 rounded-lg w-full transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
            />
          </div>
          <div>
            <label className="font-medium mb-2 block text-[#263300]">
              Departure Date
            </label>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              placeholderText="Departure Date"
              className="border border-[#263300] p-2 rounded-lg w-full transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
              wrapperClassName="w-full"
            />
          </div>
          {tripType === "return" && (
            <div>
              <label className="font-medium mb-2 block text-[#263300]">
                Return Date
              </label>
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                placeholderText="Return Date"
                className="border border-[#263300] p-2 rounded-lg w-full transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
                wrapperClassName="w-full"
              />
            </div>
          )}
          <div>
            <label className="font-medium mb-2 block text-[#263300]">
              Adults
            </label>
            <select className="border border-[#263300] p-2 rounded-lg w-full  focus:border-[#60ba30] ">
              {[...Array(10)].map((_, i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-medium mb-2 block text-[#263300]">
              Kids
            </label>
            <select className="border border-[#263300] p-2 rounded-lg w-full focus:border-[#60ba30]">
              {[...Array(10)].map((_, i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-medium mb-2 block text-[#263300]">
              Infant
            </label>
            <select className="border border-[#263300] p-2 rounded-lg w-full focus:border-[#60ba30] ">
              {[...Array(10)].map((_, i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-medium mb-2 block text-[#263300]">
              Your Valid Number
            </label>
            <input
              type="text"
              placeholder="Your Valid Number"
              className="border border-[#263300] p-2 rounded-lg w-full transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
            />
          </div>
          <div className="md:col-span-2 w-full">
            <label className="font-medium mb-2 block text-[#263300]">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="border border-[#263300] p-2 rounded-lg w-full transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="flex items-center gap-3 bg-[#60ba30] border border-[#60ba30] hover:border-[#263300] text-white px-5 py-2 rounded-full text-lg font-semibold hover:bg-white hover:text-[#263300] transition">
            <Search /> Find Now
          </button>
        </div>
      </div>
      <About2 />
      <Pakage />
      <ChooseUs />
      <Dest2 />
      <Stats />
      <Airlines2 />
      <TripBanner />
    </div>
  );
};

export default Home;
