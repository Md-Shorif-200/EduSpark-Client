import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineAcademicCap,
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineBriefcase,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlinePencilSquare,
  HiOutlineSparkles,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const inputBase =
  "w-full border border-slate-200 bg-white px-4 py-3 rounded-xl text-slate-700 placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent";

const labelBase = "block text-sm font-semibold text-slate-700 mb-1.5";

const errorBase = "text-red-500 text-xs mt-1";

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
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-400 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-4">
            <HiOutlineAcademicCap className="text-3xl text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Apply to Teach
          </h2>
          <p className="text-slate-500 mt-2 max-w-md mx-auto">
            Share your expertise with thousands of learners. Fill out the form
            below to get started.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">
        

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <div>
              <label className={labelBase}>
                <HiOutlineBriefcase className="inline mr-1.5 -mt-0.5" />
                Professional Title
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="e.g. Senior Frontend Developer"
                className={inputBase}
              />
              {errors.title && (
                <p className={errorBase}>Title is required</p>
              )}
            </div>

            {/* Experience & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelBase}>Experience Level</label>
                <select
                  {...register("experience", { required: true })}
                  className={inputBase}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select level
                  </option>
                  <option value="beginner">Beginner (0–1 year)</option>
                  <option value="mid-level">Mid-level (1–3 years)</option>
                  <option value="experienced">Experienced (3–5 years)</option>
                </select>
                {errors.experience && (
                  <p className={errorBase}>Experience is required</p>
                )}
              </div>

              <div>
                <label className={labelBase}>Category</label>
                <select
                  {...register("catagory", { required: true })}
                  className={inputBase}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="web_development">Web Development</option>
                  <option value="app_development">App Development</option>
                  <option value="cyber_security">Cyber Security</option>
                  <option value="design_and_multimedia">
                    Design & Multimedia
                  </option>
                  <option value="digital_marketing">Digital Marketing</option>
                  <option value="office_management">Office Management</option>
                </select>
                {errors.catagory && (
                  <p className={errorBase}>Category is required</p>
                )}
              </div>
            </div>

            {/* Phone & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelBase}>
                  <HiOutlinePhone className="inline mr-1.5 -mt-0.5" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="e.g. +880 1XXX-XXXXXX"
                  className={inputBase}
                />
                {errors.phone && (
                  <p className={errorBase}>Phone number is required</p>
                )}
              </div>

              <div>
                <label className={labelBase}>
                  <HiOutlineMapPin className="inline mr-1.5 -mt-0.5" />
                  Address
                </label>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="City, Country"
                  className={inputBase}
                />
                {errors.address && (
                  <p className={errorBase}>Address is required</p>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className={labelBase}>
                <HiOutlinePencilSquare className="inline mr-1.5 -mt-0.5" />
                About You
              </label>
              <textarea
                {...register("description", { required: true })}
                rows={4}
                placeholder="Briefly describe your teaching experience, skills, and what you'd like to teach..."
                className={`${inputBase} resize-none`}
              />
              {errors.description && (
                <p className={errorBase}>Description is required</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit for Review
                  <HiOutlineArrowRight className="text-lg" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            Our team reviews applications within 24–48 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeachOnApplyForm;
