"use client"
import { UserAuth } from '@/app/provider/context/AuthContext'
import { addPaymentHistory, getOnePaymentHistory } from '@/libs/actions/payment.action'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { IoMdDoneAll } from 'react-icons/io'
const PaymentSuccess = ({ payments }) => {
    const { user } = UserAuth();
    const paymentss = payments[0]
    const pathName = usePathname()
    const customerId = pathName.slice(1, pathName.length)

    // useEffect(() => {
    //     const queryString = window.location.search;  //it returns query strings from url
    //     // console.log(queryString.replace("?email=", ))  // its working for getting email from url
    //     const urlParams = new URLSearchParams(queryString) // it receives an query string
    //     const userEmail = (urlParams.get('email'))
    // }, [])

    // console.log(payments)
    const time = new Date().toLocaleDateString("en-bd")
    const paymentHistory = {
        amount_received: paymentss.amount_received,
        paymentId: paymentss.id,
        userName: user?.displayName,
        email: user?.email,
        userProfile: user?.photoURL,
        time: time,
        subscriptionType: (Number(paymentss.amount_received) / 100) === 30 ? "plus" : (Number(paymentss.amount_received) / 100) === 50 ? "elite" : "basic"
    }

    const handlepaymentHistory = async (paymentHistory) => {
        const data = await getOnePaymentHistory(user?.email)
        console.log(data?.data)
        // check history data alredy exist or not
        if (data?.data?.email === user?.email && data?.data?.paymentId === paymentss.id) {
            toast.error("this Data already saved", {
                position: "bottom-right"
            })
        }
        else {
            const savePayment = await addPaymentHistory(paymentHistory)
            // console.log("add payment", savePayment.data)
            if (savePayment?.success) {
                toast.success("Payment History Saved Thank You", {
                    position: "bottom-right"
                })
            }
        }
        setPageRendered(true)
    }


    if (customerId !== paymentss?.customer) {
        return <div className='container mx-auto'> <h1 className='py-20 text-2xl text-center font-semibold'> You don&apos;t have any transation</h1></div>
    }
    if (!user) {
        return <div className='container mx-auto'> <h1 className='py-20 text-2xl text-center font-semibold'>You are not logged Out</h1></div>
    }


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
                    <p className='my-5 pt-14 text-primary'>Do You want to save payment history?</p>
                    <div className='flex gap-8 justify-center'>
                        <button onClick={() => handlepaymentHistory(paymentHistory)} className='py-1 px-4 text-white bg-slate-600 text-sm hover:bg-slate-200 duration-200 hover:text-primary rounded-lg'>Yes</button>
                        <Link href='/allBooks'><button className='py-1 px-4 text-white bg-slate-600 text-sm hover:bg-slate-200 duration-200 hover:text-primary rounded-lg'>No, thanks</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess