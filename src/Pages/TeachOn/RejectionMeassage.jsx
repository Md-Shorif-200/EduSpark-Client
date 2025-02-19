import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const RejectionMeassage = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleRequestButton = () => {
        
        const email = user.email;
        try{
                        axiosSecure.patch(`/users/reject/${email}`)
                        .then(result => {
                             console.log(result.data);
                             
                        //    if(result.data.modifiedCount > 0){
                        //               toast.success(`request sent succesfully`)
                                        
                        //             }else{
                        //               toast.warning(`something is wrong`)
                        //             }
                             
                        })
                }catch(error){
                    console.log(error);
                    
                }

    }
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
             <button className='btn' onClick={handleRequestButton}>request to another</button>
        </div>
    );
};

export default RejectionMeassage;