import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import usePayments from '../../Hooks/usePayments';
import useAuth from '../../Hooks/useAuth';
import EnrollmentCard from './EnrollmentCard';
import SectionTitle from '../../Common/SectionTitle';
import Loading from '../../Common/Loading';
import useRole from '../../Hooks/useRole';

const MyEnrollMent = () => {
    const {user} = useAuth()
 const [payments,refetch,isLoading] = usePayments();
 const [data] = useRole()

 if(isLoading){
  return <Loading></Loading>
 }

  
const myPayments = payments.filter(payment => payment.studentEmail === user.email)

   console.log(myPayments);
   
    return (
           <div>
                   

                          {
                            data?.role === 'user' ? 
                            <div className=' w-full min-h-screen flex justify-center items-center '>
                            <div className="card bg-base-100 w-[70%] h-[200px] mx-auto shadow-sm">
          <div className="card-body flex justify-center  items-center">
            <h1 className='text-xl md:text-3xl font-bold '>  please Enroll a course. thank you </h1>
            <p className='text-3xl'>😍</p>
          </div>
        </div>
                   </div>
                            : 
                            <div>
                                   <SectionTitle title={'Your Enrollments '}></SectionTitle>

              <div className='grid grid-cols-1  sm:grid-cols-2 gap-8 md:px-14 md:py-10'>
            
            {
              myPayments.map((myPayment,index) => <EnrollmentCard key={index} myPayment={myPayment}></EnrollmentCard> )
            }
              </div>

                            </div>
                          }
           </div>
    );
};

export default MyEnrollMent;