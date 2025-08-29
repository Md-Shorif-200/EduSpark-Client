// src/components/Banner/BannerVideo.jsx
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import img_1 from "../../../assets/banner-img/happy-teacher-talking-with-her-students-online.jpg";

const BannerVideo = ({ isOpen, setIsOpen }) => {
  return (
    <div className="w-full lg:w-1/2 my-10 md:my-0" data-aos="fade-left" data-aos-delay="200">
      <div className="relative mx-auto max-w-md md:max-w-lg">
        {/* Professional glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6]/30 to-[#1D4ED8]/30 rounded-xl blur-lg opacity-60"></div>

        <div
          className="relative cursor-pointer rounded-xl overflow-hidden shadow-2xl border-4 border-white backdrop-blur-sm"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={img_1}
            alt="Video Thumbnail"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/40 via-black/40 to-black/50 flex items-center justify-center hover:from-[#3B82F6]/50 hover:via-black/50 hover:to-black/60 transition-all duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
              <FaPlayCircle className="relative text-white text-6xl md:text-7xl drop-shadow-2xl hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isOpen && (
        <dialog
          open
          className="modal modal-bottom sm:modal-middle"
          onClick={() => setIsOpen(false)}
        >
          <div className="modal-box w-full max-w-4xl aspect-video p-0 bg-black rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/l4xtqOoz3QA?si=7ZUYo-RZt__vlqmv&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className="modal-action absolute top-4 right-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="btn btn-sm btn-circle bg-white/20 hover:bg-white/30 border-none text-white backdrop-blur-sm transition-all duration-300"
              >
                ✕
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default BannerVideo;
