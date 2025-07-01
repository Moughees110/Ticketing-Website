import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const BackToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (currentScroll / documentHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(currentScroll > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    controls.start({ y: [0, -10, 0], transition: { duration: 0.4 } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      animate={controls}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full border-2 border-[#60ba30] shadow-xl flex items-center justify-center cursor-pointer overflow-hidden  bg-white"
    >
      {/* Wavy fill using SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#waveGrad)"
          d={`
            M 0 ${100 - scrollProgress}
            Q 25 ${95 - scrollProgress}, 50 ${100 - scrollProgress}
            T 100 ${100 - scrollProgress}
            V 100 H 0 Z
          `}
          transition={{
            ease: "easeInOut",
            duration: 0.5
          }}
        />
      </svg>

      <ArrowUp className="relative z-10 text-[#263300]" />
    </motion.div>
  );
};

export default BackToTop;
