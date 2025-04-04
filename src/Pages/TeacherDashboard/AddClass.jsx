import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// lottie files

import lottie_animation from '../../assets/lottie react/add_class.json'
import Lottie from "lottie-react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import Loading from "../../Common/Loading";

// image hosting 
const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

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

  const axiosPublic = useAxiosPublic();
 
  const [loading, setLoading] = useState(false);


  const onSubmit = async(data) => {
   console.log(data);
   setLoading(true);

    const courseCurriculam = String(data.curriculam);

   

    
    // image upload to imagebb and get url 

    if (!data.imageUrl || data.imageUrl.length === 0) {
      console.error("No image selected!");
      return;
    }
    const imageFile = { image: data.imageUrl[0] };

   const res = await axiosPublic.post(image_hosting_api,imageFile,{
      headers : {
        'content-type' : 'multipart/form-data'
      }
    });

    if(res.data.success){
      // get input data and set to the classInfo
        const classInfo = {
          name : data.name,
          email : data.email,
      time : new Date(),
        title : data.title,
        category : data.category,
        price : parseFloat(data.price),
        duration : parseFloat(data.duration),
        totalLectures :parseFloat( data.lectures),
        totalProjects : parseFloat(data.projects),
        courseCurriculam : courseCurriculam.split(',').map(item => item.trim()),
        description : data.description,
        image : res.data.data.display_url,
        status : 'pending'
    }

    
    try{
            // post req. to server 
            const classResponse = await axiosSecure.post('/classes',classInfo);
            if(classResponse.data.insertedId){
              // show success popup
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
          }catch(error){
             console.log(error);
             
          }finally{
            setLoading(false)
          }
   

    }
    
   

   



// post req.  to server 

    // axiosSecure.post('/classes',classInfo)
    // .then(result => {
    //   
    // })
    // .catch(error => {
    //    console.log(error);
       
    // })


  }


  if(loading){
     return <Loading></Loading>
  }

    return (
         <div className="add_class_form block lg:flex items-center my-12 px-2 lg:px-10">

         
            
            <div className="form_animation p-8">
                  <Lottie animationData={lottie_animation}></Lottie>
            </div>

      <div className=" w-full lg:w-[70%] ">
        <div className="w-full">
      

          <div className=" bg-base-100 shrink-0 shadow-2xl">
            <div className="px-4 pt-6 pb-1">
              <form className="grid grid-cols-1  sm:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>

                
           

                 {/*  name */}
               <div className="px-4 capitalize sm:col-span-2 ">
                 <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Your Name"
                  {...register("name")}
                  value={user?.displayName}
                />
               </div>
           

            
                {/* user email  */}
                 <div className="px-4 capitalize  sm:col-span-2">
                  
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter Your email"
                  {...register("email",)}
                  value={user?.email}
                />

                 </div>

                      {/* title */}
              <div className="px-4 capitalize ">
              <label className="fieldset-label">course title</label>
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
              </div>


                   {/* category */}
                   <div className="px-4 capitalize">
              <label className="fieldset-label mb-2">course catagory</label>
        
              <select defaultValue="select a category" className="select capitalize w-full" 
               {...register("category",{required : true})} >

    <option    disabled={true}>select a category</option>
    <option value='web&web & software'  >web & softawre</option>
    <option value='design & multimedia'  >design & multimedia</option>
    <option value='digital marketing'  >digital marketing</option>
    <option value='office management'  >office management</option>
  </select>


                {errors.category && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}
              </div>




                  {/* price */}
               <div className="px-4 capitalize ">
                  <label className="fieldset-label">price</label>
                <input
                  type="number"
                  className="input"
                  placeholder="Enter course price"
                  {...register("price",{required : true, min: 100,valueAsNumber : true})}
                  step='1'
                  min= '1'
                    style={{ appearance: "textfield" }} 
                
                />

                {errors.price && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}
               </div>


                    {/* duration */}
                    <div className="px-4 capitalize ">
                  <label className="fieldset-label"> Duration</label>
                <input
                  type="number"
                  className="input"
                  placeholder="Enter course duration"
                  {...register("duration",{required : true, min: 4,max: 6 ,valueAsNumber : true})}
                  step='1'
                  min= '3'
                  max='6'
                    style={{ appearance: "textfield" }} 
                
                />

                {errors.duration && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}
               </div>


               {/* lectures */}
               <div className="px-4 capitalize ">
                  <label className="fieldset-label"> lectures</label>
                <input
                  type="number"
                  className="input"
                  placeholder="course total lectures"
                  {...register("lectures",{required : true, min: 5,valueAsNumber : true})}
                  step='1'
                  min= '5'
             
                    style={{ appearance: "textfield" }} 
                
                />

                {errors.lectures && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}
               </div>


 {/* projects */}
 <div className="px-4 capitalize ">
                  <label className="fieldset-label"> projects</label>
                <input
                  type="number"
                  className="input"
                  placeholder="total projects"
                  {...register("projects",{required : true, min: 3 ,valueAsNumber : true})}
                  step='1'
                  min= '3'
          
                    style={{ appearance: "textfield" }} 
                
                />

                {errors.projects && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}
               </div>

              


                 {/* curriculam */}
             <div className="px-4 capitalize">
              
                 <label className="fieldset-label">curriculam</label>
                <textarea
                  type="text"
                  className="textarea w-full"
                  placeholder="Enter course curriculum (e.g. HTML, CSS, JS, React)"
                  {...register("curriculam", { required: true })}
                
                />

                {errors.curriculam && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}

             </div>


                {/* descriptions */}
                <div className="px-4 capitalize">
              
              <label className="fieldset-label">description</label>
             <textarea
               type="text"
               className="textarea w-full"
               placeholder="Enter course description"
               {...register("description",{required : true})}
             
             />

             {errors.description && (
               <span className="text-red-500 my-3">
                 This field is required
               </span>
             )}

          </div>


            {/* cover image */}
            <div className="px-4 capitalize">
                 {/* <label className="fieldset-label">image</label>
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
                )} */}

<input type="file" className="file-input"       {...register("imageUrl",{required : true})} />
{errors.imageUrl && (
                  <span className="text-red-500 my-3">
                    This field is required
                  </span>
                )}
                       </div>

                
                       

                {/* sign Up button */}

            <div className="pl-4">
            <button className="btn w-full primary_bg_color text-white my-8  p-3 capitalize ">add class</button>

            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddClass;