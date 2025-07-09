import React from "react";
import banner_img from "../../assets/banner-img/banner_1.jpg";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { PlayCircle } from "lucide-react";

import img_1 from "../../assets/banner-img/happy-teacher-talking-with-her-students-online.jpg";
import img_3 from "../../assets/banner-img/banner_img_3.jpg";
import { MdPlayCircle } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="banner_section w-full h-[100vh] lg:h-[95vh] xl:h-[80vh]  common_padding bg-gradient-to-br from-[#39b8ae41] via-transparent to-transparent">
      <div className=" w-full h-full  pt-10  lg:pt-0 lg:flex gap-x-3 items-center   ">
        {/* banner info section  */}
        <div className="banner_info w-full lg:w-[50%] " data-aos="fade-right">
          <h3 className="common_section_intro"> 33% off today </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold my-6">
            Education is Create <br /> Better <span>Future</span>
          </h1>
          <p className="secondary_text_color capitalize text-lg">
            {" "}
            Join 500+ of companies actively hiring our students.
          </p>

          <div className="banner_btn  md:flex  gap-x-3   my-3 ">
            <button className=" primary_btn w-[70%] md:w-[40%] xl:w-[30%] my-2 uppercase">
              {" "}
              <span>Start learning</span>{" "}
            </button>
            <button className="secondary_btn w-[70%] md:w-[40%] xl:w-[30%] my-2 uppercase  ">
              {" "}
              <span>join free seminer</span>{" "}
            </button>
          </div>
        </div>

        {/* banner video section  */}
        <div
          className="banner_video w-full lg:w-[50%] "
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="text-center my-10">
            {/* Video Thumbnail */}
            <div
              className="relative max-w-xl mx-auto cursor-pointer rounded-xl overflow-hidden shadow-lg"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={img_1}
                alt="video thumbnail"
                className="w-full h-auto object-cover"
              />
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition">
                <FaPlayCircle className="text-white text-6xl" />
              </div>
            </div>

            {/* DaisyUI Modal */}
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
    </div>
  );
};

export default Banner;
