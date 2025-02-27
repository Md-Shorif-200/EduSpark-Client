import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "./SocialAuth/SocialLogIn";
import { toast } from "react-toastify";
import Loading from "../Common/Loading";

const SignIn = () => {
  const { signIn, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        if (loading) {
          return <Loading></Loading>;
        }

        toast.success("log in succesfully");
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.code, "try again");
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left mb-4">
            <h1 className="text-3xl font-bold">sign In now!</h1>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                {/* user email  */}
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input my-4"
                  placeholder="Enter Your email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}

                {/* user email password  */}
                <label className="fieldset-label">Password</label>
                <input
                  type="text"
                  className="input my-4"
                  placeholder="Enter Your email"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}

                <button className="btn common_bg_color_1 text-white w-full my-2">
                  Sign In
                </button>

                <div className="my-3">
                  <p>
                    {" "}
                    new to academix{" "}
                    <Link className="text-red-600" to="/signUp">
                      creat account
                    </Link>{" "}
                  </p>
                </div>
              </form>

              <p className="text-center capitalize my-4">or sign in with </p>

              <div>
                <SocialLogIn></SocialLogIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
