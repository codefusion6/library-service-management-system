"use client"
import { Image } from '@nextui-org/react'
import React from 'react'

const PaymentHistory = ({ paymentHistoryData }) => {

    return (
        <>
            {
                paymentHistoryData?.length < 1 ? <h1 className='text-xl md:text-2xl font-bold text-center mt-20'>No payment available</h1> :
                    <div className="container mx-auto mt-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border rounded-lg">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b font-bold text-lg">Photo</th>
                                        <th className="py-2 px-4 border-b font-bold text-lg">Payment ID</th>
                                        <th className="py-2 px-4 border-b font-bold text-lg">Date</th>
                                        <th className="py-2 px-4 border-b font-bold text-lg">Username</th>
                                        <th className="py-2 px-4 border-b font-bold text-lg">Email Address</th>
                                        <th className="py-2 px-4 border-b font-bold text-lg">Amount</th>
                                        <th className="py-2 px-4 border-b font-bold text-lg">Expire</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        paymentHistoryData?.map((items, idx) => (
                                            <tr key={idx} className='even:bg-slate-100'>
                                                <td className='p-2 border-b'>
                                                    <Image src={items?.userProfile} alt={`user`} width={300} height={300} className='size-16 rounded-full mx-auto' />
                                                </td>
                                                <td className="py-2 text-center px-4 border-b">{items?.paymentId}</td>
                                                <td className="py-2 text-center px-4 border-b">{items?.time}</td>
                                                <td className="py-2 text-center px-4 border-b">{items?.userName}</td>
                                                <td className="py-2 text-center px-4 border-b">{items?.email}</td>
                                                <td className="py-2 text-center px-4 border-b font-bold">$: {items?.amount_received / 100}</td>
                                                <td className="py-2 text-center px-4 border-b">{items?.subscriptionType === "plus" ? 30 : items?.subscriptionType === "elite" ? 60 : 7} Days</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </>
    )
}

export default PaymentHistory