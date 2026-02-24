import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "./SocialAuth/SocialLogIn";
import toast from "react-hot-toast";
import Loading from "../Common/Loading";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAuth from "../Hooks/useAuth";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const SignIn = () => {
  const { signIn, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        toast.success("Logged in successfully");
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong");
      });
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-200 
     ${hasError
      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
      : "border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col gap-6">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Log In</h1>
          <p className="text-gray-500 mt-1 text-sm">Enter your credentials to access your account</p>
        </div>

        {/* Form */}
        {loading ? (
          <Loading />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className={inputClass(errors.email)}
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`${inputClass(errors.password)} pr-11`}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
             
              <Link to="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-200"
            >
              Log In
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400 uppercase">or continue with</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-3">
          <SocialLogIn />
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-500">
          New to EduSpark?{" "}
          <Link to="/signUp" className="text-indigo-600 font-semibold hover:text-indigo-700">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;