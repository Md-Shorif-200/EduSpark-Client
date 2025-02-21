import { CardElement } from "@stripe/react-stripe-js";



const  handleSubmit = async (e) => {

}

const CheckOutForm = () => {
    return (
     <form onSubmit ={handleSubmit}>
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
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
     </form>
    );
};

export default CheckOutForm;