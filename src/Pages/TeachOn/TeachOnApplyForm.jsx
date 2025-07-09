import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TeachOnApplyForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const skills = {
      experience: data.experience,
      title: data.title,
      catagory: data.catagory,
      phone: data.phone,
      address: data.address,
      description: data.description,
    };

    try {
      const result = await axiosSecure.patch(`/users/${user?.email}`, skills);
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your form has been successfully submitted",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data);
      } else {
        toast.error("Something went wrong. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Apply to Teach
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              value={user?.displayName}
              disabled
              {...register("name")}
              className="w-full border border-gray-300 px-4 py-2 rounded-md bg-gray-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              value={user?.email}
              disabled
              {...register("email")}
              className="w-full border border-gray-300 px-4 py-2 rounded-md bg-gray-100"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Ex: Frontend Developer"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">Title is required</p>
            )}
          </div>

              {/* */}

                <div className="sm:grid grid-cols-2 gap-4">
                  {/* Experience */}
          <div>
            <label className="block font-semibold mb-1">Experience</label>
            <select
              {...register("experience", { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select experience level
              </option>
              <option value="beginner">Beginner (0 - 1 year)</option>
              <option value="mid-level">Mid-level (1 - 3 year) </option>
              <option value="experienced">Experienced (3 - 5 year)</option>
            </select>
            {errors.experience && (
              <p className="text-red-500 text-sm mt-1">
                Experience is required
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              {...register("catagory", { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="web_development">Web Development</option>
              <option value="app_development">App Development</option>
              <option value="cyber_security">Cyber Security</option>
              <option value="design_and_multimedia">Design & Multimedia</option>
              <option value="digital_marketing">Digital Marketing</option>
              <option value="office_management">Office Management</option>
            </select>
            {errors.catagory && (
              <p className="text-red-500 text-sm mt-1">
                Category is required
              </p>
            )}
          </div>
                </div>

                            {/* phone and adress */}

                  <div className="sm:grid grid-cols-2 gap-4">
                         {/* Phone */}
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              {...register("phone", { required: true })}
              placeholder="Your phone number"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">Phone number is required</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold mb-1">Address</label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Your address"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">Address is required</p>
            )}
          </div>
                  </div>
          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              {...register("description", { required: true })}
              rows={4}
              placeholder="Tell us more about yourself"
              className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                Description is required
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              {loading ? "Submitting..." : "Submit for Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeachOnApplyForm;
