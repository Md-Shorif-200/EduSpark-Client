import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";




const CheckOutForm = () => {

 const [error,setError] = useState('');
 const [clientSecret,setClientSecret] = useState('');
 const [transectionId, setTransectionId] = useState('')
//  stripe payments 
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate()

   
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  
const classData = useLoaderData()
const {_id,title, name ,price,image} = classData;
const totalPrice = price;

// send payment data to server
  useEffect(() => {
          if(totalPrice > 0){
            axiosSecure.post('/creat-payment-intent',{courseFee : totalPrice})
            .then(res => {
            //  console.log(res.data.clientSecret);
             setClientSecret(res.data.clientSecret)
             
            })
            .catch(err => {
             console.log(err);
             
            })
          }
  },[])
// manage checkout form
  const  handleSubmit = async (e) => {
    e.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);

        if(card == null){
          return
        }

        // user card element with other stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type : 'card',
          card
        });

        if(error){
          console.log('error',error);
          setError(error.message)
          
        }else{
          console.log('payment method : ' , paymentMethod);
            setError('') 
        }

        // confirm payment
        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret , {
          payment_method : {
            card : card,
            billing_details : {
              name : user?.displayName || 'anonumous',
              email : user?.email || 'anonymous',
              
            } 
          }
        })


        if(confirmError){
            console.log('payment intent ', confirmError);
            
        }else{
     
          //  console.log('payment intent ', paymentIntent);
           if(paymentIntent.status === 'succeeded'){
            // console.log('transection id : ', paymentIntent.id);
            setTransectionId(paymentIntent.id)
                // save the payment in the database

                const payment = {
                      TeacherName : name,
                      studentEmail : user.email,
                      courseTitle : title,
                      courseFee : totalPrice,
                      courseBanner : image,
                       date : new Date(),
                      transectionId : paymentIntent.id ,
                      paymentId : _id,
                      status : 'pending',

                }

                    try{
                      const res = await axiosSecure.post('/payments', payment)
                 
                      if(res.data.insertedId){
                        // setTotalEnrollments(totalEnrollments + 1)
                         
                        
                        navigate('/dashboard/myEnrollMent')
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "your payment succesfull",
                          showConfirmButton: false,
                          timer: 1500
                        });



                        // update class totalEnrollments 
                        axiosSecure.patch(`/classes/${_id}`) 
                        
                        .then(response => {
                          
                          console.log(response.data);
                          //  setTotalEnrollments(totalEnrollments + 1)
                          
                        })
                    
                      }
                      
                    }catch(error){
                        console.log(error);
                        
                    }
            
           }
           
        }
        
}

    return (
     <form className="mt-10" onSubmit ={handleSubmit}>
     <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: ' #292865',
              '::placeholder': {
                color: '#292865',
              },
            
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {/*  */}
      <button type="submit" className="btn w-[100px] text-white primary_bg_color my-4" disabled={!stripe || !clientSecret}>
        Pay
      </button>
        <p className="text-red-700 my-4">  {error} </p>

     </form>
    );
};

export default CheckOutForm;