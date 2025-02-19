
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TeachOnApplyForm = () => {
  // react hook form
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();


  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()


  

// form submit functionality
  const onSubmit = (data) => {
    console.log(data);
  
    const skills = {
      // name : data.name,
      // image : data.photoUrl,
      // email : data.email,
      experience : data.experience,
      title : data.title,
      catagory : data.catagory,
      // status : 'pending'
    }

    // post data to database
    // axiosSecure.post('/teachers', teacherInfo)
    // .then(result => {
    //      console.log(result.data);

    //      if(result.data.insertedId){
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Your form succesfully submited",
    //         showConfirmButton: false,
    //         timer: 1500
    //       });
    //       // form reset
    //       reset()
    //         navigate('/')
    //      }
         
    // })

          try{
            axiosSecure.patch(`/users/${user.email}`,skills)
            .then(result => {
              
              if(result.data.insertedId){
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your form succesfully submited",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      reset()
                      navigate('/')
                    }
               
            })
          }catch(error){
             console.log(error);
             
          }

    
  }
  return (
    <div className="teach_on_apply_form">
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left mb-4">
            <h1 className="text-3xl font-bold">Become a teacher!</h1>
          </div>

          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="" onSubmit={handleSubmit(onSubmit)}>

                {/* user name */}
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Your Name"
                  {...register("name")}
                  value={user?.displayName}
                />
           

                {/* user photo url  */}
                <label className="fieldset-label">Photo</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Your Photo Url"
                  {...register("photoUrl")}
                  value={user?.photoURL}
                />
            

                {/* user email  */}
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter Your email"
                  {...register("email",)}
                  value={user?.email}
                />
            

                {/* experience with dropdown */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Experience</legend>
  <select defaultValue="" className="select"{...register('experience',{required : true})} >
    <option disabled={true}></option>
    <option>biginer</option>
    <option>mid-level</option>
    <option>experienced</option>
  </select>

</fieldset>

{errors.experience && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}


{/* title */}

     <label className="fieldset-label">title</label>
                <input
                  type="text"
                  className="input"
                  placeholder="your professional title"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}


                {/* catagory */}

                <fieldset className="fieldset">
  <legend className="fieldset-legend">catagory</legend>
  <select defaultValue="" className="select"{...register('catagory',{required : true})} >
    <option disabled={true}></option>
    <option>web development</option>
    <option>grapics design</option>
    <option>digital marketing</option>
    <option>video editing</option>
    <option>ui/ux design</option>
  </select>

</fieldset>

{errors.catagory && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}
                {/* sign Up button */}

                <button className="btn w-full common_bg_color_1 text-white my-8 p-3 ">submit for review</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachOnApplyForm;
