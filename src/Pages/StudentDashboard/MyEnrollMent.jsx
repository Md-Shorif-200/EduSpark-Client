import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import usePayments from '../../Hooks/usePayments';
import useAuth from '../../Hooks/useAuth';
import EnrollmentCard from './EnrollmentCard';
import SectionTitle from '../../Common/SectionTitle';
import Loading from '../../Common/Loading';
import useRole from '../../Hooks/useRole';
import CoverImg from '../../Common/CoverImg';

const MyEnrollMent = () => {
    const {user} = useAuth()
 const [payments,refetch,isLoading] = usePayments();
 const [data] = useRole()

 if(isLoading){
  return <Loading></Loading>
 }

  
const myPayments = payments.filter(payment => payment?.studentEmail === user?.email)

   console.log(myPayments);
   
    return (
           <div>

                   <div>
                                  

              <div className='grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 gap-8 md:px-14 md:py-10'>
            
            {
              myPayments.map((myPayment,index) => <EnrollmentCard key={index} myPayment={myPayment}></EnrollmentCard> )
            }
              </div>

                            </div>
           </div>
    );
};

export default MyEnrollMent;