"use client"
import { UserAuth } from '@/app/provider/context/AuthContext'
import { getFavouriteBook } from '@/libs/actions/book.action'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const FavouriteList = () => {
    const [favouritData, setFavouriteData] = useState([])
    const { user, loading } = UserAuth()

    console.log(user?.email)
    useEffect(() => {
        const getData = async (user) => {
            console.log(user)
            const data = await getFavouriteBook(user)
            setFavouriteData(data)
        }
        getData(user?.email)
    }, [user])

    console.log(favouritData)

    return (
        <section className='p-2'>
            <div>
                <section className='py-2 bg-slate-600 hidden sm:block px-5 mb-5'>
                    <div className='flex justify-between'>
                        <h1 className='text-base md:text-xl lg:text-2xl font-bold text-white'>My All Favourite Books</h1>
                        <strong className='text-base md:text-xl lg:text-2xl font-bold text-white'>Total - {favouritData?.length}</strong>
                    </div>
                </section>
                <div>
                    {
                        !loading &&
                        favouritData?.map((items, idx) => (
                            <div key={idx} className='flex gap-2 items-center'>
                                <Image src={items?.bookCover} width={300} height={400} className='max-w-[200px]' alt={items?.bookName} />
                                <div className='flex-1 space-y-2'>
                                    <h2 className='font-bold text-base sm:text-xl md:text-2xl lg:text-3xl'>{items?.bookName}</h2>
                                    <h4 className='font-bold text-primary text-sm md:text-lg lg:text-xl'>Writter: {items?.authorName}</h4>
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