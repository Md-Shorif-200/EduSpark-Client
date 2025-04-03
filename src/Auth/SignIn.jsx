import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "./SocialAuth/SocialLogIn";
import toast from "react-hot-toast";
import Loading from "../Common/Loading";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAuth from "../Hooks/useAuth";
import CoverImg from "../Common/CoverImg";



// Yup validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),

});

const SignIn = () => {
  const { signIn, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // পাসওয়ার্ড দেখানোর জন্য স্টেট

  const from = location.state?.from?.pathname || "/";

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // SignIn ফর্ম সাবমিট করার জন্য হ্যান্ডলার
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        toast.success("Logged in successfully");
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong");
      });
  };

  return (
    <div className=" mb-14">
                <CoverImg title={'Sign In'}></CoverImg>
      <div className="w-[35%] mx-auto mt-20">
      <h1 className="text-2xl font-semibold capitalize mb-6 mt-8"> Sign In Now! </h1>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* User Email */}
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="sign_up_input"
                placeholder="Enter Your email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 my-3">{errors.email.message}</span>
              )}

              {/* User Password */}
              <label className="fieldset-label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="sign_up_input pr-10"
                  placeholder="Enter Your Password"
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute right-3 top-7 text-black"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 my-3">{errors.password.message}</span>
              )}
                    {/* forgot password */}
                <div className="flex items-center justify-between my-2 ">
                    <div className="text-base text-gray-600">
                    <input type="checkbox"  className=" text-sm mr-2 " />
                    Remember me
                    </div>
              <Link className="text-blue-600">Forgot Password ? </Link>
                </div>

              {/* SignIn Button */}
              <button className="btn primary_bg_color text-white w-full my-2">
                Sign In
              </button>

              <div className="text-end">
                <p className="secondary_text_color">
              
                  New to Academix ?
                  <Link className="text-blue-700 ml-2" to="/signUp">
                    Create Account
                  </Link>
                </p>
              </div>
            </form>

            {/* Loading Spinner */}
            {loading && <Loading />}

            {/* Social LogIn */}
            <p className="text-center capitalize font-bold mb-2 mt-6">or </p>
            <div>
              <SocialLogIn />
            </div>
          </div>
   
      </div>
    </div>
  );
};

export default SignIn;
