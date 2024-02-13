import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WriterDetails = () => {
    return (
        <section className='py-20'>
            <div className='pt-28 container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 py-5 md:gap-10 px-3 md:px-0'>
                    <div className='w-full mx-auto pb-10 md:pb-0'>
                        <Image src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" width={300} height={300} className='w-full h-[300px] mx-auto rounded-lg' alt="" />
                    </div>
                    <div className='col-span-2'>
                        <h2 className='text-2xl font-semibold'>Writer Name Here</h2>
                        <hr className='mb-3' />
                        <p className='flex text-left pb-1'><span className='w-1/3 md:w-1/4 font-semibold'>Address</span> <span className='w-1/3 md:w-1/4'>Dhaka, Newmarket</span></p>
                        <p className='flex text-left pb-1'><span className='w-1/3 md:w-1/4 font-semibold'>Date of Birth</span> <span className='w-1/3 md:w-1/4'>10 july, 1950</span></p>
                        <p className='flex text-left pb-1'><span className='w-1/3 md:w-1/4 font-semibold'>Date of Dead</span> <span className='w-1/3 md:w-1/4'>09 Auguest, 2000</span></p>
                        <p className='flex text-left pb-1'><span className='w-1/3 md:w-1/4 font-semibold'>Address</span> <span className='w-1/3 md:w-1/4'>Dhaka, Newmarket</span></p>
                        <p className='text-sm text-gray-600 py-2 md:text-lg'>William Shakespeare, an iconic figure in English literature, is renowned for his timeless plays and sonnets. His works explore the depths of human nature, love, ambition, and tragedy, captivating audiences for centuries. Shakespeare&apos;s mastery of language and storytelling continues to inspire generations of readers, scholars, and theater enthusiasts worldwide. With classics like&apos;, Romeo and Juliet, &apos; Hamlet,&apos; and &apos; Macbeth &apos; he remains one of the most celebrated playwrights in history, immortalizing the human experience through his unparalleled artistry.</p>
                    </div>
                </div>
                <h4 className='text-2xl font-semibold'>All Books</h4>
                <hr />
                <div className='py-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <Link href={`/allBooks/65bfa933af1ffaa34152a763`}><Image src="https://res.cloudinary.com/dta6mwmlx/image/upload/v1707058235/etgigdythcot34wdwmvc.jpg" width={300} height={300} className='w-full h-[300px] mx-auto rounded-md' alt="" /></Link>
                    <Link href={`/allBooks/65bfa933af1ffaa34152a763`}><Image src="https://res.cloudinary.com/dta6mwmlx/image/upload/v1707058235/etgigdythcot34wdwmvc.jpg" width={300} height={300} className='w-full h-[300px] mx-auto rounded-md' alt="" /></Link>
                    <Link href={`/allBooks/65bfa933af1ffaa34152a763`}><Image src="https://res.cloudinary.com/dta6mwmlx/image/upload/v1707058235/etgigdythcot34wdwmvc.jpg" width={300} height={300} className='w-full h-[300px] mx-auto rounded-md' alt="" /></Link>
                    <Link href={`/allBooks/65bfa933af1ffaa34152a763`}><Image src="https://res.cloudinary.com/dta6mwmlx/image/upload/v1707058235/etgigdythcot34wdwmvc.jpg" width={300} height={300} className='w-full h-[300px] mx-auto rounded-md' alt="" /></Link>
                    <Link href={`/allBooks/65bfa933af1ffaa34152a763`}><Image src="https://res.cloudinary.com/dta6mwmlx/image/upload/v1707058235/etgigdythcot34wdwmvc.jpg" width={300} height={300} className='w-full h-[300px] mx-auto rounded-md' alt="" /></Link>
                    <Link href={`/allBooks/65bfa933af1ffaa34152a763`}><Image src="https://res.cloudinary.com/dta6mwmlx/image/upload/v1707058235/etgigdythcot34wdwmvc.jpg" width={300} height={300} className='w-full h-[300px] mx-auto rounded-md' alt="" /></Link>
                    <Link href={`/allBooks/65bfa933af1ffaa34152a763`}><Image src="https://res.cloudinary.com/dta6mwmlx/image/upload/v1707058235/etgigdythcot34wdwmvc.jpg" width={300} height={300} className='w-full h-[300px] mx-auto rounded-md' alt="" /></Link>
                    <Link href={`/allBooks/65bfa933af1ffaa34152a763`}><Image src="https://res.cloudinary.com/dta6mwmlx/image/upload/v1707058235/etgigdythcot34wdwmvc.jpg" width={300} height={300} className='w-full h-[300px] mx-auto rounded-md' alt="" /></Link>
                </div>

            </div>
        </section>
    )
}

export default WriterDetails
