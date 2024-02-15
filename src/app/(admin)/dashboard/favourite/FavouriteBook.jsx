'use client'
import { UserAuth } from '@/app/provider/context/AuthContext'
import { deleteFavourite } from '@/libs/actions/book.action'
import { Link } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import Swal from 'sweetalert2'

const FavouriteBook = ({ bookData }) => {
    const { user } = UserAuth()

    const handleRemove = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You will be able to see this all books page!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteFavourite(user.email, id)
            }
        });
    }
    return (
        <div className='flex gap-4 p-2 border my-3'>
            <Image className='max-w-[200px]' src={bookData?.bookCover} width={300} height={600} alt={bookData.bookName} />
            <div className='flex-1 p-4 flex flex-col justify-between'>
                <div className='space-y-3'>
                    <h2 className='sm:text-xl md:text-2xl font-semibold'>{bookData?.bookName}</h2>
                    <h3 className='font-medium'>Author: {bookData?.authorName}</h3>
                    <p className='text-sm'>{bookData.bookDescription}</p>
                    <h3 className='text-primary font-bold'>Category: {bookData?.category}</h3>
                </div>
                <div className='flex gap-5 mt-10'>
                    <Link className='py-1 px-3 md:px-5 bg-primary text-white roumded-md cursor-pointer'>View Details</Link>
                    <button onClick={() => handleRemove(bookData?._id)} className='py-1 px-3 md:px-5 bg-primary text-white roumded-md'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default FavouriteBook