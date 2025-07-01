import React from "react";
import { MapPin, Mail, Clock, Send } from "lucide-react";

const ContactBody = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      {/* Map & Form */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
        {/* Left: Map */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9152077011733!2d-122.0842496846929!3d37.42199997982539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0cae94a18a3%3A0x7c940e4fa3dc5f1f!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633385947800!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="min-h-[400px] border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-3xl font-bold text-[#263300] mb-6 text-center">
            Get In Touch
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-md transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-3 rounded-md transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-md transition duration-700 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#60ba30] focus:border-[#60ba30] focus:scale-95"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#60ba30] text-white px-6 py-3 rounded-full hover:bg-[#263300] transition"
            >
              Send <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom orange Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#60ba30] text-white p-6 rounded-xl shadow-md text-center">
          <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/70 bg-[#60ba30] shadow-inner shadow-white/30">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Office Address</h4>
          <p>123 Main Street, Your City, Country</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#60ba30] text-white p-6 rounded-xl shadow-md text-center">
          <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/70 bg-[#60ba30] shadow-inner shadow-white/30">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Email Us</h4>
          <p>info@traviazo.com</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#60ba30] text-white p-6 rounded-xl shadow-md text-center">
          <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/70 bg-[#60ba30] shadow-inner shadow-white/30">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Office Open</h4>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat (10:00AM - 03:00PM)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
