import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto md:flex justify-between items-center flex-row-reverse py-10 px-3'>
                <div className='flex-1'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/choose-best-teacher-online-1946856-1648375.png" alt="contact page" />
                </div>
                <div className='flex-1'>
                    <h3 className='text-5xl font-bold'>Book<span className='text-blue-600'>Flow</span></h3>
                    <p className='text-sm text-gray-500 md:w-2/3'>Elevate your reading experience with BookFlow, your premier online library. Immerse yourself in a vast collection of diverse genres, seamlessly accessible from anywhere. Discover, read, and enjoy literary treasures effortlessly.</p>
                    <Link href="/about"><button className='bg-blue-700 py-1 px-3 text-white rounded-md mt-3'>Learn More</button></Link>
                </div>

            </div>
            <div className='max-w-7xl mx-auto py-10 px-3 '>
                <div>
                    <h2 className='text-4xl font-bold mb-2 text-center'>Library Service Management System</h2>
                    <p className='text-sm md:w-2/3 text-center mx-auto'> Unleash the world of literature at your fingertips with our online library. Dive into a diverse collection of books, seamlessly accessible from anywhere. Explore, read, and elevate your reading journey with BookFlow.</p>
                </div>
                <div className='md:flex justify-around items-center mt-10'>
                    <div className='flex flex-col gap-2 justify-center'>
                        <input type="text" placeholder='Name' className=' md:max-w-sm py-1 w-full px-2 bg-gray-200 rounded-md text-gray-600 font-semibold outline-none' />
                        <input type="email" placeholder='Email' className='md:max-w-sm py-1 px-2 bg-gray-200 rounded-md text-gray-600 font-semibold outline-none' />
                        <textarea type="text" name="message" placeholder='Your Massage' cols="30" rows="10" className='md:max-w-sm py-1 px-2 bg-gray-200 rounded-md text-gray-600 font-semibold outline-none'></textarea>
                        <button className='bg-blue-500 py-1 rounded-md'>Send</button>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <p className='py-1'>codefusion@gmail.com</p>
                            <p>+8801736232333</p>
                        </div>
                        <div>
                            <h2>BookFlow</h2>
                            <p>424-Dhaka, Surma</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page