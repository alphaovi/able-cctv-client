import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckoutForm = ({ servicesBooking }) => {

    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");


    const stripe = useStripe();
    const elements = useElements();
    const { price, email, customerName, _id } = servicesBooking;

    // useEffect(() => {

    //     // Create PaymentIntent as soon as the page loads

    //     fetch("https://cctv-service-server.vercel.app/create-payment-intent", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             authorization: `bearer ${localStorage.getItem("accessToken")}`
    //         },
    //         body: JSON.stringify({ price }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setClientSecret(data.clientSecret));
    // }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: card
        })

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError("");
        }

        setSuccess("")
        setProcessing(true);

        const { paymentIntent, confirmRelatedError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        name: customerName,
                        email,
                        bookingId: _id
                    },
                },
            },
        );

        if (confirmRelatedError) {
            setCardError(confirmRelatedError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            setSuccess("Congrates Your payment completed");
            setTransactionId(paymentIntent.id);

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,

            };
            fetch("https://cctv-service-server.vercel.app/payments", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify({ payment })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess("Congrates Your payment completed");
                        setTransactionId(paymentIntent.id);
                    }
                })
        };
        setProcessing(false);


        console.log("paymentIntent", paymentIntent);


    };


    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary mt-5" disabled={processing}>Pay</button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className="text-green-500">{success}</p>
                    <p>Your Transaction id: <span className="font-bold">{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;