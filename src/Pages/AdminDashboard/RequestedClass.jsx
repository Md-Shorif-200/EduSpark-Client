import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useClass from "../../Hooks/useClass";
import Swal from "sweetalert2";
import toast from 'react-hot-toast';

import { useState } from "react";
import Loading from "../../Common/Loading";
import { Link } from "react-router-dom";

// react icons
import { FcApproval, FcDeleteColumn } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import { MdDelete } from "react-icons/md";





const RequestedClass = () => {
    const axiosSecure = useAxiosSecure()

    const [classes,refetch,isLoading] = useClass();
   

    if(isLoading){
      return <Loading></Loading>
    }

// approve class request
    const handleApproveBtn = (id) => {

      
      axiosSecure.patch(`/classes/approve/${id}`)
      .then(result => {
          console.log(result.data);
          
             if(result.data.modifiedCount > 0) {
                                toast.success('class is approve now!')
                                      
              
                                    //   refetch api 
                                    refetch()
                        }else if( result.data.modifiedCount === 0 && result.data.matchedCount === 1){

                          toast.error("This class is already approved. You can't approve it again!")
                        }
                       
                        

           
      })
      .catch(err => {
        console.log(err);
        
      })
    }
// reject class request
    const handleRejectBtn = (id) => {

       
     try{
      axiosSecure.patch(`/classes/reject/${id}`)
      .then(result => {
         console.log(result.data);
         
         if(result.data.modifiedCount > 0){
           toast.success('The class was successfully rejected');
          
          //  refetch
          refetch();
         }else if( result.data.modifiedCount === 0 && result.data.matchedCount > 0){

          toast.error("This class is already rejected.")
        }
      } )

     }catch(error){
      console.log(error);
      
     }
      
    }

    // delete class

    const handleDeleteBtn = (id) => {
       console.log(id);
       
      toast(
          (t) => (
              <div>
                  <p className="font-semibold">Are you sure you want to delete this class?</p>
                  <div className="flex gap-2 mt-2">
                      <button
                          className="px-3 py-1 bg-red-500 text-white rounded"
                          onClick={() => {
                              toast.dismiss(t.id);
                              deleteClass(id);
                          }}
                      >
                          Yes, Delete
                      </button>
                      <button
                          className="px-3 py-1 bg-gray-300 text-black rounded"
                          onClick={() => toast.dismiss(t.id)}
                      >
                          Cancel
                      </button>
                  </div>
              </div>
          ),
          { duration: 6000 }
      );
  };
  
  const deleteClass = async (id) => {
      const deleteToast = toast.loading("Deleting class...");
      
      try {
          const response = await axiosSecure.delete(`/classes/${id}`);
          console.log(response);
          
          if (response.data.deletedCount > 0) {
              toast.success("Class deleted successfully", { id: deleteToast });
         await     refetch(); // Refresh data after deletion
          } else {
              toast.error("Failed to delete class", { id: deleteToast });
          }
      } catch (error) {
          console.error("Delete error:", error);
          toast.error("An error occurred while deleting", { id: deleteToast });
      }
  };
  
  

    return (
          <div>
      
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">

              <h1 className="text-2xl font-semibold mx-16 mt-14 mb-6"> Total  Classes: {classes.length}  </h1>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>title</th>
              <th>teacher name</th>
              <th className="lowercase">teacher email</th>
              <th>status</th>
              <th></th>
              <th>Action</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
    
            {
                classes.map((singleClass,index) =>
                    <tr key={index}>
                <th> {index + 1}</th>
                <td> <img src={singleClass?.image} alt="" className="w-[40px] h-[40px] rounded-full" /> </td>
                <td> {singleClass?.title} </td>
                <td> {singleClass?.name} </td>
                <td> {singleClass?.email} </td>
                <td>   <span className={
                  `
                  ${singleClass.status === 'pending' ? 'bg-orange-300 py-1 px-2 rounded-md' : ''}
                  ${singleClass.status === 'approved' ? 'bg-green-200 py-1 px-2 rounded-md' : ''}
                  ${singleClass.status === 'rejected' ? 'bg-red-300 py-1 px-2 rounded-md' : ''}
                  `
                }>   {singleClass?.status}  </span> </td>

                <td>  <button className='btn btn-sm' title="approve button" onClick={() => handleApproveBtn(singleClass._id)}><FcApproval className="text-xl"></FcApproval> </button>  </td>
                
                <td>  <button className="btn btn-sm" title="reject  button" onClick={() =>  handleRejectBtn(singleClass._id)}> <FcDisapprove className="text-xl"></FcDisapprove></button>  </td>

                <td>  <button className="btn btn-sm" title="delete  button" onClick={() =>  handleDeleteBtn(singleClass._id)}> <MdDelete className="text-xl text-red-500"></MdDelete></button>  </td>

                   <td>
                     <Link to={`/dashboard/class-progress/${singleClass._id}`} className="btn btn-sm btn-neutral btn-outline" >Details</Link>  
                   {/* {
                      singleClass.status === 'approved' ? 
                      <>
                      
                      </>  
                       : 
                      <>
<button className="btn" disabled>progess</button>

                      </>
                    } */}
         
                   </td>
              </tr>)
            }
       
          </tbody>
        </table>
      </div>
          </div>
    );
};

export default RequestedClass;