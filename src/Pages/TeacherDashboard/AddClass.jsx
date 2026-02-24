import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.displayName || "",
      email: user?.email || "",
    },
  });

  // ফাইলটি সিলেক্ট করা হয়েছে কি না তা দেখার জন্য
  const selectedFile = watch("imageUrl");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", data.imageUrl[0]);

      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      if (res.data.success) {
        const classInfo = {
          name: user?.displayName,
          email: user?.email,
          time: new Date(),
          title: data.title,
          category: data.category,
          price: parseFloat(data.price),
          duration: parseFloat(data.duration),
          totalLectures: parseFloat(data.lectures),
          totalProjects: parseFloat(data.projects),
          courseCurriculam: data.curriculam
            .split(",")
            .map((item) => item.trim()),
          description: data.description,
          image: res.data.data.display_url,
          status: "pending",
        };

        const classResponse = await axiosSecure.post("/classes", classInfo);
        if (classResponse.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Class Published!",
            text: "Your class is now pending for review.",
            confirmButtonColor: "#4f46e5",
          });
          reset();
          navigate("/dashboard/myClass");
        }
      }
    } catch (error) {
      Swal.fire("Error", error.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none text-gray-700";
  const labelStyle = "block text-sm font-semibold text-gray-700 mb-1.5";
  const errorStyle = "text-red-500 text-xs mt-1 font-medium";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-8 py-10 text-white">
            <h1 className="text-3xl font-bold">Create New Course</h1>
            <p className="text-indigo-100 mt-2">
              Fill in the details below to launch your professional class.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
            {/* Instructor Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-100">
              <div>
                <label className={labelStyle}>Instructor Name</label>
                <input
                  type="text"
                  {...register("name")}
                  disabled
                  className={`${inputStyle} bg-gray-50 cursor-not-allowed`}
                />
              </div>
              <div>
                <label className={labelStyle}>Instructor Email</label>
                <input
                  type="email"
                  {...register("email")}
                  disabled
                  className={`${inputStyle} bg-gray-50 cursor-not-allowed`}
                />
              </div>
            </div>

            {/* General Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className={labelStyle}>Course Title</label>
                <input
                  placeholder="e.g. Advanced React Architecture"
                  {...register("title", { required: "Title is required" })}
                  className={inputStyle}
                />
                {errors.title && (
                  <p className={errorStyle}>{errors.title.message}</p>
                )}
              </div>

              <div>
                <label className={labelStyle}>Category</label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className={inputStyle}
                >
                  <option value="">Select Category</option>
                  <option value="web_development">Web Development</option>
                  <option value="app_development">App Development</option>
                  <option value="cyber_security">Cyber Security</option>
                  <option value="design_and_multimedia">
                    Design & Multimedia
                  </option>
                </select>
                {errors.category && (
                  <p className={errorStyle}>{errors.category.message}</p>
                )}
              </div>

              <div>
                <label className={labelStyle}>Price ($)</label>
                <input
                  type="number"
                  {...register("price", { required: true, min: 100 })}
                  className={inputStyle}
                />
                {errors.price && (
                  <p className={errorStyle}>Minimum price is $100</p>
                )}
              </div>
            </div>

            {/* Stats Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className={labelStyle}>Duration (Months)</label>
                <input
                  type="number"
                  {...register("duration", { required: true, min: 4, max: 6 })}
                  className={inputStyle}
                />
                {errors.duration && (
                  <p className={errorStyle}>4-6 months required</p>
                )}
              </div>
              <div>
                <label className={labelStyle}>Total Lectures</label>
                <input
                  type="number"
                  {...register("lectures", { required: true, min: 5 })}
                  className={inputStyle}
                />
                {errors.lectures && (
                  <p className={errorStyle}>Min 5 lectures</p>
                )}
              </div>
              <div>
                <label className={labelStyle}>Total Projects</label>
                <input
                  type="number"
                  {...register("projects", { required: true, min: 3 })}
                  className={inputStyle}
                />
                {errors.projects && (
                  <p className={errorStyle}>Min 3 projects</p>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <label className={labelStyle}>
                  Curriculum (Comma separated)
                </label>
                <textarea
                  rows="2"
                  placeholder="React Hooks, State Management, API Integration..."
                  {...register("curriculam", {
                    required: "Curriculum is required",
                  })}
                  className={inputStyle}
                />
                {errors.curriculam && (
                  <p className={errorStyle}>{errors.curriculam.message}</p>
                )}
              </div>

              <div>
                <label className={labelStyle}>Course Description</label>
                <textarea
                  rows="4"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className={inputStyle}
                />
                {errors.description && (
                  <p className={errorStyle}>{errors.description.message}</p>
                )}
              </div>
            </div>

            {/* Image Upload with Validation */}
            <div
              className={`bg-indigo-50 border-2 border-dashed ${errors.imageUrl ? "border-red-300" : "border-indigo-200"} rounded-xl p-8 text-center`}
            >
              <label className="cursor-pointer block">
                <FiUploadCloud className="mx-auto text-4xl text-indigo-500 mb-3" />
                <span className="mt-2 text-base leading-normal font-semibold text-indigo-600 block">
                  {selectedFile && selectedFile[0]
                    ? selectedFile[0].name
                    : "Upload Course Cover"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/png,image/jpg"
                  {...register("imageUrl", {
                    required: "Cover image is required",
                    validate: {
                      lessThan1MB: (files) =>
                        files[0]?.size < 1048576 ||
                        "Image size must be less than 1MB",
                      acceptedFormats: (files) =>
                        ["image/jpeg", "image/png", "image/jpg"].includes(
                          files[0]?.type,
                        ) || "Only JPG, JPEG & PNG are allowed",
                    },
                  })}
                />
              </label>

              {/* Suggestions and Warnings */}
              <div className="mt-3 space-y-1">
                <p className="text-xs text-gray-500">
                  Maximum file size: 1MB. (JPG, PNG,Webp)
                </p>
                <p className="text-xs font-medium text-indigo-600">
                  For professional output, compress the image using
                  <a
                    href="https://tinypng.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline font-bold"
                  >
                    TinyPNG
                  </a>
                  or{" "}
                  <a
                    href="https://squoosh.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline font-bold"
                  >
                    Squoosh
                  </a>
                  .
                  <span className="block text-gray-500 italic mt-0.5">
                    (Best if kept under 500 KB)
                  </span>
                </p>
              </div>

              {errors.imageUrl && (
                <p className={`${errorStyle} text-sm`}>
                  {errors.imageUrl.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-200 transform hover:-translate-y-1"}`}
            >
              {loading ? "Submitting..." : "Publish Class"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
