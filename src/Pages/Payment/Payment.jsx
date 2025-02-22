import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
 console.log(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
 

const Payment = () => {
    return (

            <Elements stripe={stripePromise}>
                        <CheckOutForm></CheckOutForm>
            </Elements>
    );
};

export default Payment;