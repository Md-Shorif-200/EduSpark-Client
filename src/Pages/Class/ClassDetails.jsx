import React, { useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const ClassDetails = () => {
     const classData = useLoaderData()

     
     
    //  const id = useParams();
    //   console.log(id);
      
    //   const axiosSecure = useAxiosSecure();

    // //  const {data} = useQuery({
    // //     queryKey : ['data'],
    // //     queryFn : async () => {
    // //          const res = await axiosSecure.get(`/classes/${id}`);
    // //          return res.data
    // //     }
    // //  })

    // try{
    //         axiosSecure.get(`/classes/${id}`)
    //         .then(result => {
                
        //              console.log(result);
        
        //         })
        // }catch(error){
            //         console.log(error);
            
            // }
            
            
            
            
            const {title, name, email ,price, description, image,status} = classData;


    return (
        <div className='class_details'>
           <div className=" bg-base-200 min-h-screen py-20">
  <div className="flex px-10">
    <img
      src={image}
      class="max-w-sm rounded-lg shadow-2xl" />
    <div className='px-14'>
      <h1 className="text-4xl font-bold">{title} </h1>
    
       <div className="class_cnt">
           <h1 className='text-xl font-semibold'> teacher  : {name} </h1>
           <h1 className='text-xl font-semibold'> course fee  : {price} $ </h1>
       </div>

       <div className="class_desc flex gap-x-2 items-center">
         <h1 className='text-xl font-semibold'>course curriculam</h1>
        <p> {description}</p>
       </div>
      
      <Link to='payment' className="btn btn-primary my-4">pay</Link>
    </div>
  </div>
</div>
             
        </div>
    );
};

export default ClassDetails;