import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';
import SocialLogIn from './SocialAuth/SocialLogIn';

const SignIn = () => {
        const {signIn} = useAuth()

        // react hook form
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()

        //   
          const onSubmit = (data) => {
                signIn(data.email,data.password)
                .then(result => {
                     const loggedUser = result.user;
                     console.log(loggedUser);
                     
                })
              
          }

    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col">
<div className="text-center lg:text-left mb-4">
  <h1 className="text-3xl font-bold">sign In now!</h1>

</div>

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <div className="card-body">

    <form className="" onSubmit={handleSubmit(onSubmit)} >

      {/* user email  */}
               <label className="fieldset-label">Email</label>
      <input type="email" className="input" placeholder="Enter Your email"  {...register('email',{required : true})} />
      {errors.email && <span className='text-red-500 my-3'>This field is required</span>}

                     {/* user email password  */}
                     <label className="fieldset-label">Password</label>
      <input type="text" className="input" placeholder="Enter Your email"  {...register('password',{required : true})} />

      <button className='btn'>Sign In</button>

                        <p>or </p>

                        <div>
                            <SocialLogIn></SocialLogIn>
                        </div>


      <div>
                  <p> you have no account? please <Link className='' to='/signUp'>Sign Up</Link> </p>
            </div>

    </form>

  </div>
</div>


</div>
</div>
    </div>
    );
};

export default SignIn;