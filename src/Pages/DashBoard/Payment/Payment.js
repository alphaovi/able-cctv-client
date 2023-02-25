import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const servicesBooking = useLoaderData();
    const { serviceName, price, date } = servicesBooking;

    return (
        <div className="mt-5">
            <h3 className="text-3xl">Pay Your Bill for <span className="text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">CCTV {serviceName}</span></h3>
            <p className="text-3xl p-5">Please Pay: <span className="text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-pink-500">${price}</span> for your appointment on <span className="text-red-500">{date}</span></p>

            <div className="w-96 m-5 p-6">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    servicesBooking={servicesBooking}
                     />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;