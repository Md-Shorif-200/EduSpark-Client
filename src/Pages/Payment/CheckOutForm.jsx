import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";




const CheckOutForm = () => {

 const [error,setError] = useState('')
  const stripe = useStripe();
  const elements = useElements()
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
          console.log('payment details : ' , paymentMethod);
            setError('') 
        }
}

    return (
     <form className="mt-10" onSubmit ={handleSubmit}>
     <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {/*  */}
      <button type="submit" className="btn btn-sm text-white common_bg_color_1 my-4" disabled={!stripe}>
        Pay
      </button>
        <p className="text-red-700 my-4">  {error} </p>
     </form>
    );
};

export default CheckOutForm;