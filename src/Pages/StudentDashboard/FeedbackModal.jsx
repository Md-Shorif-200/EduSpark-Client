import React from 'react';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import ReactStars from "react-rating-stars-component";
// import { CiStar } from "react-icons/ci";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import '@smastrom/react-rating/style.css'
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';


 

const FeedbackModal = ({classData}) => {

      // react hook form
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    let [isOpen, setIsOpen] = useState(false);  // modal initial value
    const [rating, setRating] = useState(0) // rating Initial value
    const {user} = useAuth(); // get user information form authProvider
     console.log(user);
     
    const axiosSecure = useAxiosSecure();

   
    // manage handleRatingChange functions
    const handleRatingChange = (newRating) => {
        setRating(newRating);

      };

    
// manage feedback form submission
  const onSubmit = (data) => {

       const feedbackInfo = {
              studentName : user?.displayName,
              studentEmail : classData.studentEmail,
              studentImage : user?.photoURL,
              courseTitle : classData.courseTitle,
              teacherName : classData.TeacherName,
              date : new Date(),
              feedbackDescription : data.description,
              feedbackStar : rating
       }
   
      
        try{
        axiosSecure.post('/feedback',feedbackInfo)
        .then(response => {
                  const feedbackSuccessfull = response.data.insertedId;

                  if(feedbackSuccessfull){
                    Swal.fire({
                      title: "feedback given successfullyh",
                      icon: "success",
                      draggable: true
                    });

                    reset()  // reset form
                    setRating(0);
                    setIsOpen(false) // close modal
                    
                  }
        })
        }catch(error){
            console.log(error);
            
        }finally{
          setIsOpen(false)
        }
         
      }


      function open() {
        setIsOpen(true)
      }
    
      function close() {
        setIsOpen(false)
      }

      
      return (
        <>
        <Button
          onClick={open}
          className="rounded-md btn mt-4 w-30 "
          >
        TER
          </Button>
  
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
             

           
                   <main>
                                <div>
                                  
                               
                                  <div className=" bg-base-200">
                                    <div className=" flex-col">
                                      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                                        <div className="card-body relative">
                                                <h1 className='text-lg capitalize font-semibold'>teaching evalutation report</h1>
                                          {/* form  */}
                                          <form className="" onSubmit={handleSubmit(onSubmit)}>
                                     
                                            {/* assignment description  */}
                
                                            <fieldset className="fieldset">
                                              <legend className="fieldset-legend">
                                                Description
                                              </legend>
                
                                              <textarea
                                                className="textarea h-24"
                                                placeholder="write your opinion"
                                                {...register("description", { required: true })}
                                              ></textarea>
                
                                              {errors.description && (
                                                <span className="text-red-500 my-3">
                                                  This field is required
                                                </span>
                                              )}
                                            </fieldset>
                
                                                {/* react rating component  */}

                                        
                                                <h1 className='text-md capitalize font-semibold my-4'>give your feedback</h1>
                                        
                                              {/* react rating */}
                                              <Rating style={{ maxWidth: 200 }} value={rating} onChange={setRating} />
                                               
                                           
                                            {/* form button */}
                
                                            <Button
                                              type="submit"
                                              className="btn  mt-4 common_bg_color_1 text-white"
                                            >
                                              send
                                            </Button>
                                          </form>
                                          <div
                                            className="absolute bottom-8 right-12"
                                            onClick={close}
                                          >
                                            <button className="btn  common_bg_color_1 text-white">
                                              {" "}
                                              cencel
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </main>

           

               
    
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    )
};

export default FeedbackModal;