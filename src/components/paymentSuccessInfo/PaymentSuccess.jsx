"use client"
import { UserAuth } from '@/app/provider/context/AuthContext'
import { addPaymentHistory, getOnePaymentHistory } from '@/libs/actions/payment.action'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { IoMdDoneAll } from 'react-icons/io'
const PaymentSuccess = ({ payments }) => {

    const pathName = usePathname()
    const customerId = pathName.slice(1, pathName.length)

    const { user } = UserAuth();
    const paymentss = payments[0]
    // console.log(payments)
    const time = new Date().toLocaleDateString("en-bd")
    const paymentHistory = {
        amount_received: paymentss.amount_received,
        paymentId: paymentss.id,
        userName: user?.displayName,
        email: user?.email,
        userProfile: user?.photoURL,
        time: time
    }
    // console.log(paymentHistory)
    const handlepaymentHistory = async (paymentHistory) => {
        // const validatePayment = await getOnePaymentHistory(user?.email)
        const savePayment = await addPaymentHistory(paymentHistory)
        // console.log(validatePayment)
        if (savePayment?.success) {
            toast.success("Payment History Saved Thank You", {
                position: "bottom-right"
            })
        }
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
                        <Link href='/'><button onClick={() => handlepaymentHistory(paymentHistory)} className='py-1 px-4 text-white bg-slate-600 text-sm hover:bg-slate-200 duration-200 hover:text-primary rounded-lg'>Yes</button></Link>
                        <Link href='/allBooks'><button className='py-1 px-4 text-white bg-slate-600 text-sm hover:bg-slate-200 duration-200 hover:text-primary rounded-lg'>No, thanks</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess