import React from 'react';
// import { Elements } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
// import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

console.log(import.meta.env.VITE_STRIPE_API_KEY  )

const Payment = () => {




    return (
        <div>
           <h1> pls payment  </h1>
            <Elements stripe={stripePromise}>
                {/* <CheckoutForm></CheckoutForm> */}
      <CheckoutForm />
    </Elements>
        
        </div>
    );
};

export default Payment;