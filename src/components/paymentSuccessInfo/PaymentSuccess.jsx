/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { UserAuth } from '@/app/provider/context/AuthContext'
import { addPaymentHistory, getOnePaymentHistory } from '@/libs/actions/payment.action'
// import { getUserMemberShip } from '@/libs/actions/user.actions'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import React, { } from 'react'
// import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { IoMdDoneAll } from 'react-icons/io'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { getUserAndBecomeMember } from '@/libs/actions/user.actions'

const PaymentSuccess = ({ payments, alredyExitData }) => {
    // const { width, height } = useWindowSize()
    // console.log(alredyExitData)
    const { user, loading } = UserAuth();
    // console.log(user)
    const paymentss = payments[0]
    const pathName = usePathname()
    const customerId = pathName.slice(1, pathName.length)

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
        const storedHistory = await getOnePaymentHistory(paymentss.id)
        // console.log()
        if (alredyExitData.data === null) {
            if (storedHistory?.data?.paymentId === paymentHistory?.paymentId) {
                toast.success('Your are alredy member of BookFlow', {
                    position: "bottom-right"
                })
            } else {
                const savePayment = await addPaymentHistory(paymentHistory)
                const result = await getUserAndBecomeMember(user?.email)
                if (savePayment?.success) {
                    if (result.success) {
                        toast.success('Your are Now member of BookFlow', {
                            position: "bottom-right"
                        })
                        redirect("/")
                    }
                }
            }
        }
        else if (alredyExitData.data.paymentId === paymentHistory.paymentId) {
            toast.success('Your are already member of BookFlow', {
                position: "bottom-right"
            })
        } else if (storedHistory?.data?.paymentId === paymentss?.id) {
            const result = await getUserAndBecomeMember(user?.email)
            if (result.success) {
                toast.success('Your are Now member of BookFlow', {
                    position: "bottom-right"
                })
            }
            redirect("/")
        }
    }
    // console.log(alredyExitData)
    if (customerId !== paymentss?.customer && !"allBooks") {
        return <div className='container mx-auto'>
            <h1 className='py-20 text-2xl text-center font-semibold'> You don&apos;t have any transation</h1>
        </div>
    }
    if (!loading && !user) {
        return <div className='container mx-auto'> <h1 className='py-20 text-2xl text-center font-semibold'>You are logged Out</h1></div>
    }
    if (alredyExitData.data !== null && alredyExitData.data?.email !== user?.email) {
        return <div className='container mx-auto'> <h1 className='py-20 text-2xl text-center font-semibold'>You are not valid user</h1></div>
    }

    return (
        <div>
            <div className='pb-10 pt-4 flex justify-center items-center'>
                <div className='text-center border p-14 rounded-md space-y-4'>
                    <div className='mb-5 text-center flex justify-center'>
                        <IoMdDoneAll size={80} className='text-primary' />
                    </div>
                    <h1 className='text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-2'>Congratulations!</h1>
                    <p>You have succesfully <span className='text-primary font-bold'>Subscribed</span></p>
                    <Confetti height="1000" width="1500" className='w-full' opacity={.4} />
                    <p className='my-5 pt-10 text-primary md:text-2xl lg:text-3xl'>You are now Member of BookFlw. <span className='text-pink-500 font-bold'>{paymentss.amount_received === 3000 ? 7 : paymentss.amount_received === 1000 ? 30 : paymentss.amount_received === 5000 ? 60 : null} Days</span></p>
                    <div className='flex gap-8 justify-center pt-10'>
                        <Link href="/">
                            <button onClick={() => handlepaymentHistory(paymentHistory)} className='py-2 px-4 md:px-7 text-white bg-pink-600 text-xl hover:bg-lime-600 duration-200 hover:text-white rounded-lg'>
                                confirm
                            </button>
                        </Link>
                        {/* {
                            <div className='flex gap-3'>
                                <Link href="/" className='py-2 px-4 md:px-7 text-white bg-pink-600 text-xl hover:bg-lime-600 duration-200 hover:text-white rounded-lg'>
                                    Home
                                </Link>
                                <Link href="/allBooks" className='py-2 px-4 md:px-7 text-white bg-pink-600 text-xl hover:bg-lime-600 duration-200 hover:text-white rounded-lg'>
                                    all Books
                                </Link>
                            </div>
                        } */}
                    </div>
                    <p className='pt-5 text-primary md:text-2xl lg:text-3xl'> Please Click confirm</p>
                </div>
            </div>
        </div>
    )


}


export default PaymentSuccess