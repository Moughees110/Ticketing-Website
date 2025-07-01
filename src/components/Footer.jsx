import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
  MapPin,
  Mail,
  Phone,
  Clock
} from "lucide-react";
import logo from "../../public/img/logo5.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#263300] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Logo" className="h-12 mb-4" />
          <p className="text-sm mb-4">
            Traviazo is a Travel Company Offering Online Travel Products And
            Services. Our Customers Can Access Our Web Site For A ‘One-Stop
            Shop’ Including Access To Specially Negotiated Airfares, Hotels, Car
            Rental And Insurance.
          </p>
          <div className="flex space-x-2">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
              <a
                href="#"
                key={idx}
                className="border-2 border-[#60ba30] rounded-full p-2 text-white hover:bg-[#60ba30] hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="h-1 w-20 bg-[#60ba30] mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/privacy-policy"
                className="inline-block hover:text-[#60ba30] transition-all duration-800 ease-in-out transform hover:translate-x-3"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="inline-block hover:text-[#60ba30] transition-all duration-800 ease-in-out transform hover:translate-x-3"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/refund-policy"
                className="inline-block hover:text-[#60ba30] transition-all duration-800 ease-in-out transform hover:translate-x-3"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                to="/disclaimer"
                className="inline-block hover:text-[#60ba30] transition-all duration-800 ease-in-out transform hover:translate-x-3"
              >
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                to="/travel-tips"
                className="inline-block hover:text-[#60ba30] transition-all duration-800 ease-in-out transform hover:translate-x-3"
              >
                Travel Tips
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="inline-block hover:text-[#60ba30] transition-all duration-800 ease-in-out transform hover:translate-x-3"
              >
                Frequently Ask Questions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="h-1 w-20 bg-[#60ba30] mb-4"></div>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#60ba30] mt-1" />
              <span>
                Office 5262 182-184 High Street North East Ham London E6 2JA
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#60ba30]" />
              <span>Email: info@travel.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#60ba30]" />
              <span>Phone: +123-456-7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#60ba30]" />
              <span>Mon - Fri (10:00AM - 08:00PM)</span>
            </li>
            <li className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#60ba30]" />
              <span>Sat (10:00AM - 03:00PM)</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <div className="h-1 w-20 bg-[#60ba30] mb-4"></div>
          <p className="text-sm mb-4">
            Subscribe Our Newsletter To Get <br /> Latest Update And News
          </p>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-gray-100 rounded-md text-white transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
            />
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center space-x-2 bg-[#60ba30] text-white px-3 py-2 rounded-lg hover:bg-white hover:text-[#60ba30] transition-colors"
            >
              <Send className="w-4 h-4" /> <span>Subscribe Now</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-12 pt-6 text-center text-sm space-y-2">
        <div className="space-x-4">
          <Link to="/" className="hover:text-[#60ba30]">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-[#60ba30]">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-[#60ba30]">
            Contact support
          </Link>
        </div>

        <div>
          © Copyright 2025{" "}
          <span className="text-[#60ba30] cursor-pointer">Traviazo</span> All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
