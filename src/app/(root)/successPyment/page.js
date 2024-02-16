import PaymentSuccess from '@/components/paymentSuccessInfo/PaymentSuccess';
import React from 'react'

const page = async () => {

    return (
        <main>
            <PaymentSuccess paymentDetails={paymentDetails}></PaymentSuccess>
        </main>
    )
}

export default page