import React, { useState } from "react";
import { FaUsers, FaCheckCircle, FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import BannerVideo from "./BannerVideo";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Track which stat is counting

  const stats = [
    { icon: <FaUsers className="text-2xl text-[#3B82F6]" />, number: 10000, suffix: "+", label: "Students" },
    { icon: <FaCheckCircle className="text-2xl text-green-500" />, number: 95, suffix: "%", label: "Success Rate" },
    { icon: <FaStar className="text-2xl text-yellow-500" />, number: 4.9, suffix: "/5", label: "Rating" },
  ];

  return (
    <div className="w-full common_padding lg:min-h-screen relative">
      <div className="absolute inset-0 banner_bg"></div>

      <div className="relative w-full flex flex-col lg:flex-row justify-between items-center gap-6 py-10 md:py-16 lg:py-30">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left" data-aos="fade-right">
          <h1 className="title_color text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            Education Creates <br /> a Better{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          <p className="paragraph_color text-base md:text-lg leading-relaxed">
            Join 6000+ companies actively hiring our students.
          </p>

          {/* Stats with Serial Counter */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 py-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="  flex items-center gap-3 bg_main backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-2 bg-gray-50 rounded-lg">{stat.icon}</div>
                <div>
          <p className="font-bold text-lg text-gray-800">
  {index === currentIndex ? (
    <CountUp
      end={stat.number}
      duration={2.5}
      decimals={stat.number % 1 !== 0 ? 1 : 0}
      onEnd={() => setCurrentIndex((prev) => prev + 1)}
      suffix={stat.suffix} // CountUp এ সরাসরি suffix দিন
    />
  ) : index < currentIndex ? (
    stat.number + stat.suffix
  ) : (
    0
  )}
</p>

                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="banner_btn flex gap-4 flex-wrap justify-center lg:justify-start">
            <div className="primary_btn btn uppercase p-6 ">start learning</div>
            <div className="secondary_btn btn uppercase p-6">join free seminar</div>
          </div>
        </div>

        {/* Right Side - Video Section */}
        <BannerVideo isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Banner;
