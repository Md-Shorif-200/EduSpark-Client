import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddClass = () => {

      // react hook form
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();

  const {user} = useAuth()
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const onSubmit = (data) => {

    console.log(data);
    const classInfo = {
        title : data.title,
        name : data.name,
        email : data.email,
        price : data.price,
        description : data.description,
        image : data.image,
        status : 'pending'
    }

    axiosSecure.post('/classes',classInfo)
    .then(result => {
        if(result.data.insertedId){
              Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your class added succesfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      // form reset
                      reset();
                      navigate('/dashboard/myClass')
        }
    })

  }


    return (
         <div className="add_class_form">
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left mb-4">
            <h1 className="text-3xl font-bold">add class</h1>
          </div>

          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="" onSubmit={handleSubmit(onSubmit)}>

                
                {/* title */}
                <label className="fieldset-label">title</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter class title"
                  {...register("title",{required : true})}
                 />

                {errors.title && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}

                {/*  name */}
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Your Name"
                  {...register("name")}
                  value={user?.displayName}
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

                 {/* price */}
                 <label className="fieldset-label">price</label>
                <input
                  type="number"
                  className="input"
                  placeholder="Enter course price"
                  {...register("price",{required : true})}
                
                />

                {errors.price && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}


                 {/* description */}
                 <label className="fieldset-label">description</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter course description"
                  {...register("description",{required : true})}
                
                />

                {errors.description && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}


                
                 {/* cover image */}
                 <label className="fieldset-label">image</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter course cover image"
                  {...register("image",{required : true})}
                
                />

                {errors.image && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}
            

                {/* sign Up button */}

                <button className="btn w-full primary_bg_color text-white my-8 p-3 ">add class</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddClass;