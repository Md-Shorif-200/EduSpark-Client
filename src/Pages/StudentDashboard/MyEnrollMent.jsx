import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import usePayments from '../../Hooks/usePayments';
import useAuth from '../../Hooks/useAuth';
import EnrollmentCard from './EnrollmentCard';
import SectionTitle from '../../Common/SectionTitle';

const MyEnrollMent = () => {
    const {user} = useAuth()
 const [payments,refetch,isLoading] = usePayments();

  
const myPayments = payments.filter(payment => payment.studentEmail === user?.email)


    return (
           <div>
                        <SectionTitle title={'Your Enrollments '}></SectionTitle>
              <div className='grid grid-cols-2 gap-8 px-14 py-10'>
            
            {
              myPayments.map((myPayment,index) => <EnrollmentCard key={index} myPayment={myPayment}></EnrollmentCard> )
            }
              </div>
           </div>
    );
};

export default MyEnrollMent;