import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// react aos animation
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaStar } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

// react icons
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useWhisList from "../../Hooks/useWhisList";

const ClassCard = ({ approvedClass }) => {
  //  get student feedback data
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [feedback, setFeedback] = useState([]);
  const [whislists, refetch, isLoading] = useWhisList();

  useEffect(() => {
    axiosSecure
      .get("/feedback")
      .then((res) => {
        setFeedback(res.data);
      })
      .catch((error) => {
        console.log("Error fetching feedback:", error);
      });
  }, []);

  const studentFeedback = feedback.find(
    (data) => data.title == approvedClass.title
  );

  // get class data
  const {
    _id,
    title,
    name,
    email,
    price,
    description,
    status,
    image,
    duration,
    totalEnrollments,
    totalLectures,
    totalProjects,
    courseCurriculam,
  } = approvedClass;

  // post wishList data to database

  const handleAddToWhisList = async (id) => {
    const wishListData = {
      wishListId: id,
      courseTitle: title,
      studentEmail: user?.email,
      teacherName: name,
      teacherEmail: email,
      totalLectures: totalLectures,
      totalProjects: totalProjects,
      image: image,
      time: new Date(),
    };

    try {
      const response = await axiosPublic.post("/api/whislists", wishListData);

      if (response.data.acknowledged == true) {
        toast.success("added to whislist");
        // refresh data
        refetch();
      } else {
        toast.error(response.data.meassage || "something went wrong");
      }
    } catch (error) {
      // console.log(error);

      toast.error("faild add to whislist");
    }
  };

  return (
    // course card
    <div className="populer_course_card" data-aos="fade-up">
      <div className="class_card bg-base-100 w-full shadow-sm ">
        <figure>
          <img
            src={image}
            className="w-full h-[230px] sm:h-[200px] rounded-t-md"
            alt="class image "
          />
        </figure>
        <div className=" card_cnt capitalize px-2 py-4 rounded-b-md">
          <h2 className="text-xl lg:text-2xl mt-2  font-semibold ">
            {" "}
            {title}{" "}
          </h2>
          <ul className="flex gap-1 text-lg mt-3 mb-4">
            <li className="text-[#FEBC2F]">
              {" "}
              <FaStar></FaStar>{" "}
            </li>
            <li className="text-[#FEBC2F]">
              {" "}
              <FaStar></FaStar>{" "}
            </li>
            <li className="text-[#FEBC2F]">
              {" "}
              <FaStar></FaStar>{" "}
            </li>
            <li className="text-[#FEBC2F]">
              {" "}
              <FaStar></FaStar>{" "}
            </li>
            <li className="text-[#FEBC2F]">
              {" "}
              <FaStarHalfAlt></FaStarHalfAlt>{" "}
            </li>
          </ul>

          <div className="flex justify-between my-4">
            <h1 className="text-lg  secondary_text_color ">
              <span className="text-gray-600">$ {price} </span>{" "}
            </h1>
            <ul className="flex items-center gap-x-1">
              <li>
                {" "}
                <IoTimeOutline></IoTimeOutline>{" "}
              </li>
              <li className="text-lg  secondary_text_color">
                <span className="text-gray-600">{duration} month </span>{" "}
              </li>
            </ul>

            <ul className="flex items-center gap-x-1">
              <li>
                {" "}
                <GoProjectSymlink></GoProjectSymlink>{" "}
              </li>
              <li className="text-lg  secondary_text_color">
                <span className="text-gray-600">
                  {totalProjects}+ projects{" "}
                </span>{" "}
              </li>
            </ul>
          </div>

          <div className="card-actions justify-end">
            <Link to={`/allClass/classDetails/${_id}`}>
              <button className="btn-sm primary_btn capitalize">
                <span> Course Details </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
