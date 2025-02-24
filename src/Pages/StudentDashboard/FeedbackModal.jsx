import React from 'react';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import ReactStars from "react-rating-stars-component";
import { CiStar } from "react-icons/ci";


 

const FeedbackModal = () => {

      // react hook form
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    let [isOpen, setIsOpen] = useState(false);
    const axiosSecure = useAxiosSecure();
    const [Rating,setRating ] = useState(0)

    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }
// manage feedback form submission
    const onSubmit = (data) => {
      
        // try{
        // axiosSecure.post('/feedback')
        // }catch(error){
        //     console.log(error);
            
        // }
         
    }
    const handleRatingChange = (newRating) => {
        setRating(newRating);
        console.log("New Rating:", newRating);
      };
  
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
                <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                  Payment successful
                </DialogTitle>


           
                   <main>
                                <div>
                                  <div className=" bg-base-200">
                                    <div className=" flex-col">
                                      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                                        <div className="card-body relative">
                                          {/* form  */}
                                          <form className="" onSubmit={handleSubmit(onSubmit)}>
                                     
                                            {/* assignment description  */}
                
                                            <fieldset className="fieldset">
                                              <legend className="fieldset-legend">
                                                Description
                                              </legend>
                
                                              <textarea
                                                className="textarea h-24"
                                                placeholder="Assignment Description"
                                                {...register("description", { required: true })}
                                              ></textarea>
                
                                              {errors.description && (
                                                <span className="text-red-500 my-3">
                                                  This field is required
                                                </span>
                                              )}
                                            </fieldset>
                
                                                {/* react rating component  */}

                                                <legend className="fieldset-legend">
                                                rating
                                              </legend>
                                                <ReactStars
        count={5} // Number of stars
        value={Rating} // Current rating
        onChange={handleRatingChange} // Function to handle rating change
        size={40} // Size of stars
        activeColor="#ffd700" // Color of active stars (gold)
        isHalf={true} // Allow half stars
        emptyIcon={ <CiStar></CiStar> } // Icon for empty stars
        // halfIcon={<i className="fa fa-star-half-alt"></i>} // Icon for half stars
        // filledIcon={<i className="fa fa-star"></i>} // Icon for filled stars
      />
  
                                           
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