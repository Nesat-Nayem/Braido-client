import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwOogAoCSeLW1ZZcpteQ8NnObfva0IAM2Az0nSRVxMRzd9gNaQ8II8ujVo9m1XEEHM8mdqULpyXSj2xSSbrOGLU00EmD0xFCI')

const Payment = () => {
    const {paymentId} = useParams()
    const [order, setOrder] = useState({})
    useEffect( () => {
            fetch(`http://localhost:5000/allOrders/${paymentId}`)
            .then(res => res.json())
            .then(data => setOrder(data[0]))
            // .then(data => console.log(data[0]))
    },[paymentId])
    return (
        <div>
            <h1>you need payment for: {paymentId} </h1>
            <h1>price : {order?.Price}</h1>
            <p>name : {order?.name}</p>

           { order?.Price && <Elements stripe={stripePromise}>
                 <CheckoutForm order={order} />
            </Elements>}
        </div>
    );
};

export default Payment;