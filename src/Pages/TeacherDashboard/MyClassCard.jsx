import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ClassUpdateModal from './ClassUpdateModal';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyClassCard = ({refetch,singleClass}) => {

    const {_id,title, name, email, price ,description, image ,status } = singleClass;
 
     const axiosSecure = useAxiosSecure()
;

    
            //  delete fuctionality
            const handleDeleteButton = (singleClass) => {
                   Swal.fire({
                 title: "Are you sure?",
                 text: "You won't be able to revert this!",
                 icon: "warning",
                 showCancelButton: true,
                 confirmButtonColor: "#3085d6",
                 cancelButtonColor: "#d33",
                 confirmButtonText: "Yes, delete it!"
               }).then((result) => {
                 if (result.isConfirmed) {

                   axiosSecure.delete(`/classes/${singleClass._id}`)
                   .then(result => {
                         if(result.data.deletedCount > 0){
                           Swal.fire({
                             title: "Deleted!",
                             text: "Your file has been deleted.",
                             icon: "success"
                           });
                               refetch()
                         }
                   })

                 }
               });

         }

    return (
        <div>
              <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img className='w-full h-[180px] object-cover'
      src={image}
      alt="class image" />
  </figure>
  <div className="card-body p-4 capitalize">
    <h2 className="font-bold text-lg"> {title} </h2>
    <div className="card_cnt">
    {/* <h2 className="font-semibold  text-md my-2"> name :  <span className='text-gray-700'>{name}</span> </h2> */}
    {/* <h2 className="font-semibold  text-md my-2"> email : <span className='text-gray-700'>{email} </span> </h2> */}
    <h2 className="font-semibold  text-md"> course fee  :<span className='text-gray-700'>{price} </span> </h2>
    {/* <h2 className="font-semibold  text-md my-2" title={description}> description : <span className='text-gray-700'>{description?.slice(0,20)}.... </span> </h2> */}
    <h2 className="font-semibold  text-md my-1"> status  :<span className='text-gray-700'>{status} </span> </h2>
    </div>
     
       <div className="w-full flex justify-between">
        

     <button className='  '>
       
       <div>
       <ClassUpdateModal refetch={refetch} id={_id} title={title} image = {image} description={description} price={price}></ClassUpdateModal>
       </div>

</button>
   
         


<button className='btn mx-5 md:mx-0 w-[100px] ' onClick={() =>handleDeleteButton(singleClass)}>delete</button>

         
          
       </div>

       <div className=''>
       {
              status === 'pending'  || status === 'rejected' ? 
               <>
               <div className="tooltip w-full" >
  <div className="tooltip-content">
    <div className=" warning  text-[14px]"> The button will open when the status is approved. </div>
  </div>
  <button className="btn bg-gray-300 text-gray-400 w-full">See Details</button>
</div>
               </> : 

               <>
               <Link to={`/dashboard/myClassDetails/${singleClass._id}`} className="btn my-5 md:my-0 primary_bg_color text-white w-full">see details </Link>
               
               </>
            }
       </div>

      


  </div>
</div>
        </div>
    );
};

export default MyClassCard;