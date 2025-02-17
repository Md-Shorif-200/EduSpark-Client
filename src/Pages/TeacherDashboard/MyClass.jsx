import React from 'react';
import SectionTitle from '../../Common/SectionTitle';
import useClass from '../../Hooks/useClass';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyClass = () => {
              const axiosSecure = useAxiosSecure();
             const [classes , refetch] = useClass()

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

            //  details button functionality
          
    return (
        <div>

              <SectionTitle  title={'my class'}></SectionTitle>
               <div> total class : {classes.length}</div>
                <div className="my_class_cards grid grid-cols-2 gap-8 mt-14">
                    {
                        classes.map((singleClass,index) => 
                            <div key={index} className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={singleClass.image}
      alt="class image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {singleClass.title} </h2>
    <h2 className="card-title"> {singleClass.name} </h2>
    <h2 className="card-title"> {singleClass.email} </h2>
    <h2 className="card-title"> {singleClass.price} </h2>
    <h2 className="card-title"> {singleClass.description} </h2>
    <h2 className="card-title"> {singleClass.status} </h2>

        <button className='btn'>update</button>
        <button className='btn' onClick={() =>  handleDeleteButton(singleClass)}>delete</button>

    <div className="card-actions justify-end">
      <Link to={`/dashboard/myClassDetails/${singleClass._id}`} className="btn btn-primary">see details </Link>
    </div>
  </div>
</div>
                        )
                    }
                </div>
        </div>
    );
};

export default MyClass;