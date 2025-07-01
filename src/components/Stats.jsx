import React, { useEffect } from "react";
import { User, CheckCircle, Globe, Award } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const data = [
    {
      icon: <User className="w-10 h-10" />,
      value: 150,
      suffix: "+",
      text: "Tour Guide"
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      value: 500,
      suffix: "+",
      text: "Tour Completed"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      value: 50,
      suffix: "+",
      text: "Travel Experience"
    },
    {
      icon: <Award className="w-10 h-10" />,
      value: 20,
      suffix: "+",
      text: "Win Award"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9 // 20% visible
  });

  return (
    <div ref={ref} className="bg-[#60ba30] py-12 w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl w-full">
        {data.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="bg-[#60ba30] border-2 border-white rounded-xl text-center p-6"
          >
            <div className="mb-4 text-white flex justify-center">
              {item.icon}
            </div>
            <div className="text-3xl text-white font-bold mb-2">
              {inView && <CountUp end={item.value} duration={2} />}{" "}
              {item.suffix}
            </div>
            <div className="text-white text-lg">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
