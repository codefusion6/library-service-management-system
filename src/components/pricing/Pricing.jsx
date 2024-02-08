'use client'
import React from 'react'
import toast from 'react-hot-toast'
import { FaPenNib } from 'react-icons/fa'
import { FaArrowRightLong, FaArrowTrendUp } from 'react-icons/fa6'

const Pricing = () => {
    // const charge = { amount: 50 }
    const checkout = async (amount, subscriptionType) => {
        await fetch("https://library-service-management-system.vercel.app/api/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount, subscriptionType })
        }).then(res => res.json()
            .then(data => {
                const resData = data;
                toast("Payment Proccessing")
                return window.location.href = resData.url
            })
        ).catch(err => {
            console.log(err)
        })
    }
    return (
        <section className="min-h-screen">
            <div className="container mx-auto mt-32 px-5 lg:px-0">
                <h1 className="text-3xl uppercase font-bold text-center my-10 text-shadow">
                    Subscription Pricing Plans
                </h1>
                <div className="my-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* card1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 space-y-3 border">
                            <FaPenNib className="text-5xl bg-indigo-600 rounded-full p-2" />

                            <h1 className="text-2xl py-2 px-3 font-semibold text-white bg-indigo-600 mb-4 rounded-2xl">
                                Basic Subscription
                            </h1>
                            <p className="text-2xl font-bold text-indigo-600">$10.00/month</p>
                            <p className="text-gray-600 mb-4">
                                Our <strong>Basic</strong> package for user. Where user can view
                                all the books but can not download the books.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                            </ul>

                            <button onClick={() => { checkout(10, " Basic Subscription") }} className="llduraiton-200 mt-4 w-full border text-black border-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded-full transition-colors duration-300 flex gap-3 items-center font-bold">
                                Subscribe <FaArrowTrendUp />
                            </button>
                        </div>
                        {/* card2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 space-y-3 border">
                            <FaPenNib className="text-5xl bg-indigo-600 rounded-full p-2" />

                            <h1 className="text-2xl py-2 px-3 font-semibold text-white bg-indigo-600 mb-4 rounded-2xl">
                                Basic Subscription
                            </h1>
                            <p className="text-2xl font-bold text-indigo-600">$30.00/month</p>
                            <p className="text-gray-600 mb-4">
                                Our <strong>Basic</strong> package for user. Where user can view
                                all the books but can not download the books.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                            </ul>

                            <button onClick={() => { checkout(30, "Plus Subscription") }} className="mt-4 w-full border text-black border-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded-full transition-colors duration-300 flex gap-3 items-center font-bold">
                                Subscribe <FaArrowTrendUp />
                            </button>
                        </div>
                        {/* card3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 space-y-3 border">
                            <FaPenNib className="text-5xl bg-indigo-600 rounded-full p-2" />

                            <h1 className="text-2xl py-2 px-3 font-semibold text-white bg-indigo-600 mb-4 rounded-2xl">
                                Basic Subscription
                            </h1>
                            <p className="text-2xl font-bold text-indigo-600">$50.00/month</p>
                            <p className="text-gray-600 mb-4">
                                Our <strong>Basic</strong> package for user. Where user can view
                                all the books but can not download the books.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                                <li className="flex gap-2 items-center"><FaArrowRightLong className="text-lg" /> User can view our website.</li>
                            </ul>
                            <button onClick={() => { checkout(50, "Elit Subscription") }} className="mt-4 w-full border text-black border-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded-full transition-colors duration-300 flex gap-3 items-center font-bold">
                                Subscribe <FaArrowTrendUp />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing