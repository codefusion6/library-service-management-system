"use client"
import { UserAuth } from '@/app/provider/context/AuthContext'
import { getFavouriteBook } from '@/libs/actions/book.action'
import { removeFavouriteBooks } from '@/libs/actions/favourite.action'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const FavouriteList = () => {
    const [favouritData, setFavouriteData] = useState([])
    const [dataLoading, setDataLoading] = useState(true)
    const { user, loading } = UserAuth()
    useEffect(() => {
        const getData = (user) => {
            if (user) {
                try {
                    getFavouriteBook(user)
                        .then(data => {
                            setFavouriteData(data)
                            setDataLoading(false)
                        })
                } catch (error) {
                    console.log(error)
                    setDataLoading(false)
                }
            }
        }
        if (user) {
            getData(user.email)
        }
    }, [user])

    // console.log(favouritData)
    const handleRemove = async (id) => {
        const email = user?.email;
        if (email) {
            const removeResponse = await removeFavouriteBooks(id, email)
            if (removeResponse) {
                toast.success("Books deleted from favourite list")
            }
        }
    }
    if (loading && dataLoading) {
        <h2 className='mt-10 text-center font-bold text-xl md:text-3xl'>Loading...</h2>
    }
    return (
        <>{
            favouritData?.length < 1 && !dataLoading ? <h1 className='text-center font-bold text-xl md:text-2xl mt-20'>No Favourite books available</h1>
                :
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
                                    <div key={idx} className='shadow-lg relative rounded-lg group flex gap-2 group items-center my-3 overflow-hidden'>
                                        <Image src={items?.bookCover} width={300} height={400} className='max-w-[200px]' alt={items?.bookName} />
                                        <div className=''>
                                            <div className='flex-1 space-y-2 p-3'>
                                                <h2 className='font-bold text-base sm:text-xl md:text-2xl lg:text-3xl'>{items?.bookName}</h2>
                                                <h4 className='font-bold text-primary text-sm md:text-lg lg:text-xl'>Writter: {items?.authorName}</h4>
                                                <p className='text-sm md:text-md line-clamp-5'>{items?.bookDescription}</p>
                                            </div>
                                        </div>
                                        <div className='py-2 px-5 flex justify-center absolute gap-6 w-full duration-200 group-hover:bottom-0 -bottom-full'>
                                            <Link href={`/allBooks/${items?._id}`}>
                                                <button className='bg-pink-600 py-1 px-2 lg:px-4 text-white rounded-lg hover:bg-pink-700'>View Details</button>
                                            </Link>
                                            <button onClick={() => handleRemove(items._id)} className='bg-pink-600 py-1 px-2 lg:px-4 text-white rounded-lg hover:bg-pink-700'>Remove</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
        }
        </>
    )
}

export default FavouriteList