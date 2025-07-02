import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  MapPin,
  Plane,
  Info,
  Headphones,
  Menu,
  X,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import logoDark from "../../public/img/logo5.png";
import BackToTop from "./Backtotop";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  // Hide top bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 50); // Adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = ({ isActive }) =>
    `flex items-center space-x-2 font-bold transition-colors ${
      isActive ? "text-[#60ba30]" : "text-[#263300]"
    } hover:text-[#60ba30]`;

  return (
    <div className="relative">
      {/* 🔽 Top header (email & social icons) */}
      <div
        className={`w-full bg-[#60ba30] text-white px-4 py-2 flex justify-between items-center transition-all duration-500 ease-in-out ${
          hideTopBar ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
        }`}
      >
        <div className="flex items-center space-x-2 hover:text-[#60ba30] transition-colors duration-700 ease-in-out cursor-pointer">
          <Mail className="w-4 h-4" />
          <span className="text-sm">info@travel.com</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:text-[#60ba30] transition-colors duration-700 ease-in-out"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="hover:text-[#60ba30] transition-colors duration-700 ease-in-out"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="hover:text-[#60ba30] transition-colors duration-700 ease-in-out"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="hover:text-[#60ba30] transition-colors duration-700 ease-in-out"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 🔽 Navbar */}
      <nav
        className={`w-full h-20 px-4 bg-white shadow-md fixed z-50 duration-500 ease-in-out transition-[top] ${
          hideTopBar ? "top-0" : "top-[44px]"
        }`}
      >
        <div className="flex justify-between items-center">
          <img
            src={logoDark}
            alt="logo-dark"
            className="max-h-20 object-contain cursor-pointer"
          />

          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={linkClasses}>
              <Home className="w-4 h-4" /> <span>Home</span>
            </NavLink>
            <NavLink to="/destination" className={linkClasses}>
              <MapPin className="w-4 h-4" /> <span>Destinations</span>
            </NavLink>
            <NavLink to="/airlines" className={linkClasses}>
              <Plane className="w-4 h-4" /> <span>Airlines</span>
            </NavLink>
            <NavLink to="/about-us" className={linkClasses}>
              <Info className="w-4 h-4" /> <span>About Us</span>
            </NavLink>
          </div>

          <NavLink
            to="/contact"
            className="hidden md:flex items-center space-x-2 bg-[#60ba30] text-white font-semibold px-3 py-2 rounded-md hover:bg-[#263300] transition-colors"
          >
            <Headphones className="w-4 h-4" /> <span>Support & Contact</span>
          </NavLink>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden bg-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 🔽 Mobile menu */}
       {isOpen && (
  <div className="flex flex-col space-y-4 mt-0 md:hidden bg-white p-4 shadow-md rounded-md z-50">

            <NavLink to="/" className={linkClasses}>
              <Home className="w-4 h-4" /> <span>Home</span>
            </NavLink>
            <NavLink to="/destination" className={linkClasses}>
              <MapPin className="w-4 h-4" /> <span>Destinations</span>
            </NavLink>
            <NavLink to="/airlines" className={linkClasses}>
              <Plane className="w-4 h-4" /> <span>Airlines</span>
            </NavLink>
            <NavLink to="/about-us" className={linkClasses}>
              <Info className="w-4 h-4" /> <span>About Us</span>
            </NavLink>
            <NavLink
              to="/contact"
              className="flex items-center space-x-2 bg-[#60ba30] text-white px-3 py-2 rounded-md hover:bg-[#263300] transition-colors"
            >
              <Headphones className="w-4 h-4" /> <span>Support & Contact</span>
            </NavLink>
          </div>
        )}
      </nav>
      <BackToTop />
    </div>
  );
};

export default Navbar;
