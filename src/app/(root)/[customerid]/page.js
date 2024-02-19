
import PaymentSuccess from '@/components/paymentSuccessInfo/PaymentSuccess';
import React from 'react'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

const page = async () => {

    const payments = await stripe.paymentIntents.list({
        limit: 1, // Adjust the limit as needed
        // Add more parameters to filter payments if necessary
    });
    // console.log(payments)
    return (
        <main>
            <PaymentSuccess payments={payments.data}></PaymentSuccess>
        </main>
    )
}

export default page