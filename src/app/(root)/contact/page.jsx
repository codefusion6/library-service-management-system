/* eslint-disable @next/next/no-img-element */
import Feedback from '@/components/feedback-client/Feedback'
import ContactBanner from '@/pages/contact/ContactBanner'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {
    return (
        <>
            <ContactBanner></ContactBanner>
            <section className='bg-slate-100'>
                <div className='max-w-5xl mx-auto md:flex justify-between items-center flex-row-reverse py-10 px-3'>
                    <div>
                        <Image src="https://i.ibb.co/9nmjqK9/choose-best-teacher-online-1946856-1648375-1.webp" alt="contact page"
                            className='opacity-100 w-full'
                            height={500}
                            width={300}
                        />
                    </div>
                    <div className='flex-1 space-y-5'>
                        <h3 className='text-5xl font-bold'>Book<span className='text-blue-600'>Flow</span></h3>
                        <p className='text-sm text-gray-500 md:w-2/3'>Elevate your reading experience with BookFlow, your premier online library. Immerse yourself in a vast collection of diverse genres, seamlessly accessible from anywhere. Discover, read, and enjoy literary treasures effortlessly.</p>
                        <Link href="/about"><button className='bg-blue-700 py-1 px-3 text-white rounded-md mt-3'>Learn More</button></Link>
                    </div>
                </div>

            </section>
            <div className='container mx-auto'>
                <div className='mx-auto py-10 px-3 '>
                    <div>
                        <h2 className='text-4xl font-bold mb-2 text-center'>Library Service Management System</h2>
                        <p className='text-sm md:w-2/3 text-center mx-auto'> Unleash the world of literature at your fingertips with our online library. Dive into a diverse collection of books, seamlessly accessible from anywhere. Explore, read, and elevate your reading journey with BookFlow.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 items-center justify-center'>
                        <div className='flex flex-col gap-2 justify-center md:w-3/4 mx-auto'>
                            <Feedback />
                        </div>
                        <div className=''>
                            <div>
                                <div className='mb-3 font-semibold'>
                                    <p className='py-1'>codefusion@gmail.com</p>
                                    <p>+8801736232333</p>
                                </div>
                                <div className='mt-10 space-y-3 font-medium'>
                                    <h2>BookFlow</h2>
                                    <address>424-Dhaka, Surma</address>
                                    <address>Dhaka, Bangladesh</address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default page