
import PaymentSuccess from '@/components/paymentSuccessInfo/PaymentSuccess';
import { getOnePaymentHistory } from '@/libs/actions/payment.action';
import React from 'react'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

const page = async () => {

    const payments = await stripe.paymentIntents.list({
        limit: 1, // Adjust the limit as needed
        // Add more parameters to filter payments if necessary
    });

    const alredyExitData = await getOnePaymentHistory(payments.data[0].id)
    // console.log(payments.data[0].id)
    return (
        <main>
            <PaymentSuccess payments={payments.data} alredyExitData={alredyExitData}></PaymentSuccess>
        </main>
    )

}

export default page;