"use client"
import { UserAuth } from '@/app/provider/context/AuthContext'
import { getFavouriteBook } from '@/libs/actions/book.action'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const FavouriteList = () => {
    const [favouritData, setFavouriteData] = useState([])
    const { user, loading } = UserAuth()
    console.log(user);
    useEffect(() => {
        const getData = (user) => {
            if (user) {
                try {
                    getFavouriteBook(user)
                        .then(data => {
                            setFavouriteData(data)
                        })
                } catch (error) {
                    console.log(error)
                }
            }
            // getData(user?.email)
        }
        if (user) {
            getData(user.email)
        }
    }, [user])

    // console.log(favouritData)
    return (
        <section className='p-2'>
            <div>
                <section className='py-2 bg-slate-600 hidden sm:block px-5 mb-5'>
                    <div className='flex justify-between'>
                        <h1 className='text-base md:text-xl lg:text-2xl font-bold text-white'>My All Favourite Books</h1>
                        <strong className='text-base md:text-xl lg:text-2xl font-bold text-white'>Total - {favouritData?.length}</strong>
                    </div>
                </section>
                <div className='grid lg:grid-cols-2 gap-5'>
                    {
                        !loading &&
                        favouritData?.map((items, idx) => (
                            <div key={idx} className='shadow-lg rounded-lg relative flex gap-2 group items-center my-3'>
                                <Image src={items?.bookCover} width={300} height={400} className='max-w-[200px]' alt={items?.bookName} />
                                <div className=''>
                                    <div className='flex-1 space-y-2 p-3'>
                                        <h2 className='font-bold text-base sm:text-xl md:text-2xl lg:text-3xl'>{items?.bookName}</h2>
                                        <h4 className='font-bold text-primary text-sm md:text-lg lg:text-xl'>Writter: {items?.authorName}</h4>
                                        <p className='text-sm md:text-md line-clamp-5'>{items?.bookDescription}</p>
                                    </div>
                                </div>
                                <div className='py-2 px-5 flex justify-center absolute gap-6 w-full duration-200 bottom-0'>
                                    <Link href={`/allBooks/${items?._id}`}>
                                        <button className='bg-pink-600 py-2 px-3 lg:px-5 text-white rounded-lg hover:bg-pink-700'>View Details</button>
                                    </Link>
                                    <button className='bg-pink-600 py-2 px-3 lg:px-5 text-white rounded-lg hover:bg-pink-700'>Remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FavouriteList