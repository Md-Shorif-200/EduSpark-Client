
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const ClassUpdateModal = ({refetch,id,title, image ,description ,price}) => {
   
   
    let [isOpen, setIsOpen] = useState(false);
    const axiosSecure = useAxiosSecure()

    function open() {
      setIsOpen(true)
    }
  
    
    // get updated data
    const [Title,setTitle]= useState(title);
    const [coursePhoto,setCoursePhoto]= useState(image);
    const [courseFee,setCourseFee]= useState(price);
    const [courseDescription,setCourseDescription]= useState(description);
    
  
  const classUpdateData = {
           title : Title,
           image : coursePhoto,
           price : courseFee,
           description : courseDescription
    }
   
    function close() {
      try{
        axiosSecure.patch(`/classes/update/${id}`,classUpdateData)
        .then(result => {
           console.log(result.data);
              if(result.data.modifiedCount > 0){
                  toast.success('update successfull');
                  // call refetch
                  refetch();
                  setIsOpen(false)
              }
            
        })
            
      }catch(error){
         console.log(error);
         
      }finally{
        
        setIsOpen(false)
      }
    }
    
    

    return (
      <>
        {/* <Button
          onClick={open}
          className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          update
        </Button> */}

<div
          onClick={open}
          className="rounded-md btn"
        >
          update
        </div>
  
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex  items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full  rounded-xl max-w-xl p-0  md:p-10 lg:p-14  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                      {/* className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0" */}

               {/* update form */}

               <div className="hero bg-base-200 w-full">
              
  <div className="hero-content flex-col lg:flex-row-reverse w-full">

    <div className=" bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
      <div className="card-body">
                    <h1 className="text-xl font-semibold text-center my-4">Update Your Class Data</h1>   
        <form  className="fieldset">

          <label className="fieldset-label">title</label>
          <input type="text" className="input" placeholder="title" name='Title' value={Title} onChange={(e) => setTitle(e.target.value)}  />

          
          <label className="fieldset-label">course photo</label>
          <input type="text" className="input" placeholder="photo" name='coursePhoto' value={coursePhoto} onChange={(e) => setCoursePhoto(e.target.value)} />

          
          <label className="fieldset-label">price</label>
          <input type="number" className="input" placeholder="course fee" name='courseFee' value={courseFee} onChange={(e) => setCourseFee(e.target.value)} />

          
          <label className="fieldset-label">description</label>
          <textarea type="text" className="input" placeholder="course description" name='courseDescription' value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />

                            {/*update button  */}
                <div className="mt-4">
                  
                     <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
               
                  >
                  update
                  </Button>
                </div>
        </form>

                        <div>
                          <button onClick={close} className='btn common_bg_color_1 text-white'>cencel</button>
                        </div>
      </div>
    </div>
  </div>
</div>



              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    )
};

export default ClassUpdateModal;



// export default function MyModal() {

// }