import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import img_1 from "../../assets/banner-img/happy-teacher-talking-with-her-students-online.jpg";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-br from-[#39b8ae41] via-transparent to-transparent common_padding">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center gap-6 py-10 md:py-16 lg:py-24">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left" data-aos="fade-right">
          <h3 className="text-lg font-medium primary_text_color">33% off today</h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Education Creates <br /> a Better <span className="primary_text_color">Future</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Join 500+ companies actively hiring our students.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <button className="primary_btn w-full sm:w-auto px-6  uppercase">
              <span>Start learning</span>
            </button>
            <button className="secondary_btn w-full sm:w-auto px-6  uppercase">
              <span>Join Free Seminar</span>
            </button>
          </div>
        </div>

        {/* Right Side - Video Section */}
        <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
          <div className="relative mx-auto max-w-md md:max-w-lg cursor-pointer rounded-xl overflow-hidden shadow-md" onClick={() => setIsOpen(true)}>
            <img
              src={img_1}
              alt="Video Thumbnail"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition">
              <FaPlayCircle className="text-white text-6xl md:text-7xl" />
            </div>
          </div>

          {isOpen && (
            <dialog
              open
              className="modal modal-bottom sm:modal-middle"
              onClick={() => setIsOpen(false)}
            >
              <div className="modal-box w-full max-w-4xl aspect-video p-0">
                <iframe
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/l4xtqOoz3QA?si=7ZUYo-RZt__vlqmv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
                <div className="modal-action absolute top-2 right-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn btn-sm btn-circle btn-ghost text-white bg-black/50 hover:bg-black/70"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
