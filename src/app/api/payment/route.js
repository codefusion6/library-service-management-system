
import { NextResponse } from "next/server";
import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
export const POST = async (request) => {
    try {
        const data = await request.json();
        const customer = await stripe.customers.create({
            email: 'sumonpaul3217@gmail.com',
            address: {
                city: "Mymensingh",
                country: "Bangladesh",
            },
            name: "sumon paul",
            phone: "01628883217"
        });
        // create a session for stripe
        const checkOutSession = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            customer: customer.id,
            mode: "payment",
            success_url: "https://library-service-management-system.vercel.app/successPyment",
            cancel_url: "https://library-service-management-system.vercel.app/cancel?token" + customer.id,
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
        // checkout url
        return NextResponse.json({ message: checkOutSession, url: checkOutSession.url, status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error.message, status: 500 })
    }
}