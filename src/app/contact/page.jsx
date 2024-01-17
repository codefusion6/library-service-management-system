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
        </div>
    )
}

export default page