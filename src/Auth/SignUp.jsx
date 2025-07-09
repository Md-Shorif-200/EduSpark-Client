import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { IoEyeSharp } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";

import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


import { yupResolver } from "@hookform/resolvers/yup";
import Loading from "../Common/Loading";
import CoverImg from "../Common/CoverImg";

// regex password validation
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

// Yup validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
  .string()
  .matches(passwordRegex, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.")
  .required("Password is required"),
  image: yup.mixed().required("Profile image is required"),
});

const SignUp = () => {
  const { register, handleSubmit , reset, formState: { errors ,isSubmitting} } = useForm({
    resolver: yupResolver(schema),
  });

  const { creatUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle Form Submission
  const onSubmit = async (data) => {

    try {
      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "your_cloudinary_preset");

      // Upload Image to Cloudinary
      const imageRes = await fetch("https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload", {
        method: "POST",
        body: formData,
      });

      const imageData = await imageRes.json();
      const imageUrl = imageData.secure_url;

      // Create User
      const result = await creatUser(data.email, data.password);
      await updateUserProfile(data.name, imageUrl);

      // Store user info in DB
      const userInfo = {
        name: data.name,
        email: data.email,
        image: imageUrl,
        role: "student",
        registrationTime : new Date().toLocaleString()
      };

      const response = await axiosSecure.post("/users", userInfo);
      if (response.data.insertedId) {
        reset();
        toast.success("Sign up successfully!");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {

    }
  };

  return (
    <div className="sign_up ">
              {/* <CoverImg title={'Sign Up'}></CoverImg> */}
      <div className="py-10">
          

          {/* SignUp Form */}
          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[35%] mx-auto mt-20 px-6 lg:px-0">

              <h1 className="text-2xl font-semibold capitalize mb-6 mt-8"> Sign Up now! </h1>

             <form onSubmit={handleSubmit(onSubmit)}>
                
                {/* Name Input */}
                <div className="mb-3">
                  <label className="fieldset-label">Name</label>
                  <input type="text" className=" sign_up_input" placeholder="Enter Your Name" {...register("name")} />
                  {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>

                {/* Image Upload */}
                <div className="mb-3">
                  <label className="fieldset-label">Profile Image</label>
                  <input type="file" accept="image/*" className="file-input file-input-ghost my-2" {...register("image")} />
                  {errors.image && <span className="text-red-500">{errors.image.message}</span>}
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <label className="fieldset-label">Email</label>
                  <input type="email" className=" sign_up_input" placeholder="Enter Your Email" {...register("email")} />
                  {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>

                {/* Password Input with Toggle */}
                <div className="mb-3 relative">
                  <label className="fieldset-label">Password</label>
                  <input 
                    type={showPassword ? "text" : "password"}
                    className=" pr-10 sign_up_input"
                    placeholder="Enter Your Password"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-12 text-black"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoIosEyeOff size={20} /> : <IoEyeSharp size={20} />}
                  </button>
                  {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                </div>

                {/* Sign Up Button */}

                    {
                      isSubmitting ? <>

                      <button className="btn w-full ">
  <span className="loading loading-spinner"></span>
  Submitting
</button>
               
                      
                      </> 
                      :
                       <>
                      <button className="btn w-full  primary_bg_color text-white my-2">
                        Sign Up
                </button>
                       </>
                    }

                {/* log In Redirect */}
                <div className="my-2 text-center">
                  <p className="my-2 text-xl">Already have an account? <Link className="text-green-700 font-bold" to="/signIn">log In</Link></p>
                </div>
              </form>
          </div>

        </div>
    </div>
  );
};

export default SignUp;
