import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useClass from "../../Hooks/useClass";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "../../Common/Loading";
import { Link } from "react-router-dom";




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
                                   Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: ` class is approved  now!`,
                                        showConfirmButton: false,
                                        timer: 1500
                                      });
                                      
              
                                    //   refetch api 
                                    refetch()
                        }else if( result.data.modifiedCount === 0 && result.data.matchedCount === 1){

                          toast.error('class is already approved')
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
         
         if(result.data.modifiedCount > 1){
           toast.success('class is reject');
          
          //  refetch
          refetch();
         }
      } )

     }catch(error){
      console.log(error);
      
     }
      
    }
  

    return (
          <div>
      
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>title</th>
              <th>image</th>
              <th>email</th>
              <th>description</th>
              <th></th>
              <th>action</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
    
            {
                classes.map((singleClass,index) =>
                    <tr key={index}>
                <th> {index + 1}</th>
                <td> {singleClass.title} </td>
                <td> {singleClass.image} </td>
                <td> {singleClass.email} </td>
                <td> {singleClass.description} </td>
                <td>  <button className="btn" onClick={() => handleApproveBtn(singleClass._id)}>approve</button>  </td>
                <td>  <button className="btn" onClick={() =>  handleRejectBtn(singleClass._id)}>reject</button>  </td>
                   <td>
                   {
                      singleClass.status === 'approved' ? 
                      <>
                 <Link to={`/dashboard/class-progress/${singleClass._id}`} className="btn" >progress</Link>  
                      
                      </>  
                       : 
                      <>
<button className="btn" disabled>progess</button>

                      </>
                    }
         
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