import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  // react hook form
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();

  // get user data from authProvider
  const { creatUser,updateUserProfile } = useAuth();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    creatUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        
        // update Profile
          updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            console.log('user profile updated');
            
            reset()
            navigate('/')  
        })
        .catch(err => {
           console.log(err);
           
        })
         
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div className="sign_up">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left mb-4">
            <h1 className="text-3xl font-bold">Sign Up now!</h1>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="" onSubmit={handleSubmit(onSubmit)}>

                {/* user name */}
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 "> name is required</span>
                )}

                {/* user photo url  */}
                <label className="fieldset-label">Photo</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Your Photo Url"
                  {...register("photoUrl", { required: true })}
                />
                {errors.photoUrl && (
                  <span className="bg-red-500">This field is required</span>
                )}

                {/* user email  */}
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
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
                  className="input"
                  placeholder="Enter Your email"
                  {...register("password", { required: true })}
                />

                {/* sign Up button */}

                <button className="btn w-full common_bg_color_1 text-white my-2 ">Sign Up</button>

                <div className="my-2">
                  <p>
                    already you have an account? please{" "}
                    <Link className="text-green-700" to="/signIn">
                      Sign In
                    </Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
