import React from "react";
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-4 py-1 bg-[#60ba30] shadow-md">
      <div className="flex items-center mx-25 space-x-2 text-white  hover:text-[#60ba30] transition-colors duration-700 ease-in-out">
        <Mail className="w-5 h-5" />
        <span className="text-sm">info@travel.com</span>
      </div>

      <div className="flex mx-44 space-x-4">
        <a
          href="#"
          className="text-white hover:text-[#60ba30] transition-colors duration-500 ease-in-out"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="text-white hover:text-[#60ba30] transition-colors duration-500 ease-in-out"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="text-white hover:text-[#60ba30] transition-colors duration-500 ease-in-out"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="text-white hover:text-[#60ba30] transition-colors duration-500 ease-in-out"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
