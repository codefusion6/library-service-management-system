import { getWriter } from '@/libs/actions/writer.action';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WriterDetails =async ({params}) => {
    console.log(params)

    const singleWriter = await getWriter(params.id);
    console.log("hi", singleWriter)

    return (
        <section className='py-20'>
            <div className=' container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 py-5 md:gap-10 px-3 md:px-0'>
                    <div className='w-full mx-auto pb-10 md:pb-0'>
                        <Image src={singleWriter?.authorImg} width={300} height={300} className='w-full h-[300px] mx-auto rounded-lg' alt="" />
                    </div>
                    <div className='col-span-2'>
                        <h2 className='text-2xl font-semibold'>{singleWriter?.writerName}</h2>
                        <hr className='mb-3' />
                        <p className='flex text-left pb-1'><span className='w-1/3 md:w-1/4 font-semibold'>Address</span> <span className='w-1/3 md:w-1/4'>{singleWriter?.address}</span></p>
                        <p className='flex text-left pb-1'><span className='w-1/3 md:w-1/4 font-semibold'>Date of Birth</span> <span className='w-1/3 md:w-1/4'>{singleWriter?.dateOfBirth}</span></p>
                        <p className='flex text-left pb-1'><span className='w-1/3 md:w-1/4 font-semibold'>Date of Dead</span> <span className='w-1/3 md:w-1/4'>{singleWriter?.dateOfDeath}</span></p>
                        {/* <p className='flex text-left pb-1'><span className='w-1/3 md:w-1/4 font-semibold'>Address</span> <span className='w-1/3 md:w-1/4'>{singleWriter?.}</span></p> */}
                        <p className='text-sm text-gray-600 py-2 md:text-lg'>{singleWriter?.description}</p>
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
