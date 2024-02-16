import { NextResponse } from "next/server";
import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
export const POST = async (request) => {
    try {
        const data = await request.json();
        // console.log(data.userName)
        const customer = await stripe.customers.create({
            name: data?.userName,
            email: data?.email,
            address: {
                city: "Mymensingh",
                country: "Bangladesh",
            },
        });
        // create a session for stripe

        const checkOutSession = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            customer: customer.id,
            mode: "payment",
            // "https://library-service-management-system.vercel.app"
            success_url: "http://localhost:3000/successPyment",
            cancel_url: "http://localhost:3000/pricing",
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        product_data: {
                            name: data?.subscriptionType
                        },
                        currency: "usd",
                        unit_amount: data?.amount * 100,
                    }
                }
            ]
        })
        // const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
        // const paymentIntents = await stripe.paymentIntents.list({
        //     limit: 1,
        // });
        // const paymentDetails = paymentIntents.data[0];

        // console.log(paymentDetails)
        return NextResponse.json({ checkOutSession, url: checkOutSession.url, status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error.message, status: 500 })
    }
}