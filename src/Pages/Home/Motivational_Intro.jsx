import React from "react";
import img_1 from "../../assets/Motivational_Intro/img-1.jpg";
import img_2 from "../../assets/Motivational_Intro/img-2.jpg";
import img_3 from "../../assets/Motivational_Intro/img-3.jpg";
const Motivational_Intro = () => {
  return (
    <div className="motivational_intro w-full secondary_bg_color common_padding py-20">
      <div className="section_heading text-center mb-24 ">
        <h1 className="section_title">Explore How can I help you</h1>
        <p className="text-lg text-slate-600 my-2 capitalize">
          the ultimate planning solution for busy women who want to reach their
          personal goals
        </p>
      </div>

      <div className="img_section grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
        {/* card-1 */}
        <div
          className="card w-[90%] md:w-full mx-auto  h-[280px] sm:h-[300px] md:h-[350px] relative  "
          data-aos="fade-up"
        >
          <img
            src={img_1}
            className="w-full h-full object-cover rounded-lg "
            alt=""
          />

          <div className="absolute inset-0 bg-black/5 z-10"></div>
          <p className="absolute top-0 left-0 right-0 bottom-0  w-fit h-fit m-auto text-white text-4xl capitalize font-bold  ">
            coaching
          </p>
          {/* overlay info */}
          <div className="overlay_info  bg-white p-2  flex justify-center items-center absolute bottom-0">
            <button className="primary_btn uppercase">
              {" "}
              <span> appointment</span>{" "}
            </button>
          </div>
        </div>

        {/* card-2 */}
        <div
          className="card w-[90%] md:w-full mx-auto  h-[280px] sm:h-[300px] md:h-[350px] relative"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src={img_2}
            className="w-full h-full object-cover rounded-lg "
            alt=""
          />
          <div className="absolute inset-0 bg-black/5 z-10"></div>
          <p className="absolute top-0 left-0 right-0 bottom-0  w-fit h-fit m-auto text-white text-4xl capitalize font-semibold">
            consulting
          </p>

          {/* overlay info */}
          <div className="overlay_info  bg-white p-2  flex justify-center items-center absolute bottom-0">
            <button className="primary_btn uppercase">
              {" "}
              <span> appointment</span>{" "}
            </button>
          </div>
        </div>

        {/* card -3 */}
        <div
          className="card w-[90%] md:w-full mx-auto  h-[280px] sm:h-[300px] md:h-[350px] relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            src={img_3}
            className="w-full h-full object-cover rounded-lg "
            alt=""
          />
          <div className="absolute inset-0 bg-black/5 z-10"></div>
          <p className="absolute top-0 left-0 right-0 bottom-0  w-fit h-fit m-auto text-white text-4xl capitalize font-semibold">
            courses
          </p>

          {/* overlay info */}
          <div className="overlay_info  bg-white p-2  flex justify-center items-center absolute bottom-0">
            <button className="primary_btn uppercase">
              {" "}
              <span> appointment</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivational_Intro;
