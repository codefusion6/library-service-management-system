'use client'
import { Link } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const FavouriteBook = ({ data: book }) => {
    console.log(book)
    return (
        <div className='flex gap-4 p-2 border my-3'>
            <Image className='max-w-[200px]' src={book?.bookCover} width={300} height={600} alt={book.bookName} />
            <div className='flex-1 p-4 flex flex-col justify-between'>
                <div className='space-y-3'>
                    <h2 className='sm:text-xl md:text-2xl font-semibold'>{book?.bookName}</h2>
                    <h3 className='font-medium'>Author: {book?.authorName}</h3>
                    <p className='text-sm'>{book.bookDescription}</p>
                    <h3 className='text-primary font-bold'>Category: {book?.category}</h3>
                </div>
                <div className='flex gap-5 mt-10'>
                    <Link className='py-1 px-3 md:px-5 bg-primary text-white roumded-md cursor-pointer'>View Details</Link>
                    <button className='py-1 px-3 md:px-5 bg-primary text-white roumded-md'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default FavouriteBook