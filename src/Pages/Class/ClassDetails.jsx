
import { Link, useLoaderData, useParams } from 'react-router-dom';



const ClassDetails = () => {
     const classData = useLoaderData()

  
            
            const {_id,title, name, email ,price, description, image,status} = classData;


    return (
        <div className='class_details capitalize'>
           <div className="hero bg-base-200 min-h-screen py-20">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      class=" w-full max-w-sm rounded-lg shadow-2xl" />
    <div className=''>
      <h1 className="text-2xl my-3  font-bold">{title} </h1>
    
       <div className="class_cnt">
           <h1 className='text-xl font-semibold'> teacher  : <span className='text-gray-600'>{name}</span> </h1>
           <h1 className='text-md font-semibold'> course fee  : <span className='text-gray-600'>{price} </span>$ </h1>
       </div>

       <div className="class_desc flex gap-x-2 items-center">
         <h1 className='text-md font-semibold'>course outline : <span className='text-gray-600'>{description}</span></h1>
       
       </div>
      
      <Link to={`/payment/${_id}`} className="btn btn-primary w-[120px] my-4">pay</Link>
    </div>
  </div>
</div>
             
        </div>
    );
};

export default ClassDetails;