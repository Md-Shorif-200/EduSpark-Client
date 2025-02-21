import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const stripePromise = loadStripe('')

const Payment = () => {
    return (
            <Elements stripe={stripePromise}>

            </Elements>
    );
};

export default Payment;