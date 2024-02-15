"use client"
import { UserAuth } from '@/app/provider/context/AuthContext'
import Link from 'next/link'
import React from 'react'
import { IoMdDoneAll } from 'react-icons/io'
const PaymentSuccess = ({ payments }) => {
    const { user } = UserAuth();
    const paymentss = payments[0]
    // console.log(paymentss)
    const paymentHistory = {
        amount_received: paymentss.amount_received,
        paymentId: paymentss.id,
        userName: user?.displayName,
        email: user?.email,
        profile: user?.photoURL,
        createdAt: paymentss.created
    }
    // console.log(paymentHistory)


    return (
        <div>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='text-center border p-40 rounded-md space-y-4'>
                    <div className='mb-20 text-center flex justify-center'>
                        <IoMdDoneAll size={100} className='text-primary' />
                    </div>
                    <h1 className='text-primary text-2xl md:text-34l lg:text-5xl font-bold mb-7'>Congratulations!</h1>
                    <p>You have succesfully <span className='text-primary font-bold'>Subscribed</span></p>
                    <div className='pt-12 flex gap-8 justify-center'>
                        <Link href='/'><button className='py-2 px-4 text-white bg-primary rounded-lg'>Go Home</button></Link>
                        <Link href='/allBooks'><button className='py-2 px-4 text-white bg-primary rounded-lg'>View All Books</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess