import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineShieldCheck } from "react-icons/hi";
import toast from "react-hot-toast";

import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogIn from "./SocialAuth/SocialLogIn";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const { creatUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    if (!data.image || data.image.length === 0) {
      return toast.error("Profile photo is required");
    }

    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const imageRes = await axiosPublic.post(image_hosting_api, formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      if (!imageRes.data.success) {
        return toast.error("Image upload failed");
      }

      const imageUrl = imageRes.data.data.display_url;

      // ২. Create user in Firebase
      const userCredential = await creatUser(data.email, data.password);

      // ৩. Update Firebase profile
      await updateUserProfile(data.name, imageUrl);

      // ৪. Explicitly set user state after updateProfile
      // (if you are using a context, it will auto-update onAuthStateChanged)

      // ৫. Insert user in your DB
      const userInfo = {
        name: data.name,
        email: data.email,
        image: imageUrl,
        role: "student",
        registrationTime: new Date().toLocaleString(),
      };

      const res = await axiosSecure.post("/users", userInfo);
      if (res.data.insertedId) {
        reset();
        toast.success("Sign up successfully!");
        navigate("/");
      }

    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-200 
     ${hasError
      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
      : "border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
    }`;

  const features = [
    {
      icon: HiOutlineAcademicCap,
      title: "Expert-Led Courses",
      desc: "Learn from industry professionals with real-world experience",
    },
    {
      icon: HiOutlineLightBulb,
      title: "Interactive Learning",
      desc: "Hands-on projects and assignments to solidify your skills",
    },
    {
      icon: HiOutlineUserGroup,
      title: "Vibrant Community",
      desc: "Connect with thousands of learners and grow together",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Verified Certificates",
      desc: "Earn recognized certificates to boost your career",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 py-10 px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

        {/* Left — Branding Panel */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white p-10 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold leading-tight">
              Start Your Learning <br /> Journey with{" "}
              <span className="text-yellow-300">EduSpark</span>
            </h2>
            <p className="mt-4 text-indigo-100 text-sm leading-relaxed max-w-sm">
              Join a platform trusted by thousands of students and educators.
              Unlock world-class courses, earn certificates, and accelerate your career — all in one place.
            </p>
          </div>

          <div className="relative z-10 space-y-5 mt-10">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <f.icon className="text-yellow-300" size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{f.title}</h4>
                  <p className="text-xs text-indigo-200 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="relative z-10 text-xs text-indigo-300 mt-10">
            Trusted by <span className="text-white font-semibold">10,000+</span> learners worldwide
          </p>
        </div>

        {/* Right — Form Panel */}
        <div className="p-8 sm:p-10">

          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-500 text-sm mt-1">Join EduSpark and start learning today</p>
          </div>

          {/* Social Login — Top */}
          <SocialLogIn />

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400 uppercase tracking-wide">or sign up with email</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Profile Image Upload */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Profile Photo <span className="text-red-500">*</span>
              </label>
              <div className="cursor-pointer rounded-xl border-2 border-dashed p-4 text-center transition-all duration-200
                border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/20"
                onClick={() => document.getElementById("imageInput").click()}
              >
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  className="hidden"
                  {...register("image", { required: "Profile photo is required" })}
                />
                <FiUploadCloud className="mx-auto text-indigo-400 mb-1.5" size={24} />
                <p className="text-sm font-medium text-gray-600">Click to upload photo</p>
                <p className="text-xs text-gray-400 mt-0.5">PNG, JPG or WEBP (max 5MB)</p>
              </div>
              {errors.image && <p className="text-red-500 text-xs mt-1.5">{errors.image.message}</p>}
            </div>

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className={inputClass(errors.name)}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className={inputClass(errors.email)}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
                })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className={`${inputClass(errors.password)} pr-11`}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                      message: "Must include uppercase, lowercase, number & special char",
                    },
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoIosEyeOff size={20} /> : <IoEyeSharp size={20} />}
                </button>
              </div>
              {errors.password ? (
                <p className="text-red-500 text-xs mt-1.5">{errors.password.message}</p>
              ) : (
                <p className="text-gray-400 text-xs mt-1.5">
                  Min 6 chars · uppercase · lowercase · number · special char
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-500 mt-5">
            Already have an account?{" "}
            <Link to="/signIn" className="text-indigo-600 font-semibold hover:text-indigo-700">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;