import { getFavouriteBook } from '@/libs/actions/book.action'
import React from 'react'
import FavouriteBook from './FavouriteBook'

const page = async () => {
    const data = await getFavouriteBook("sumonpaul3217@gmail.com")
    // console.log(data)
    return (
        <main className='bg-slate-50 p-2'>
            <section>
                <div className="container mx-auto">
                    {/* <FavouriteBooks></FavouriteBooks> */}
                    <div className='p-2 bg-slate-800 rounded-lg'>
                        <div className='flex justify-evenly text-white'>
                            <h1 className='text-center font-bold sm:text-xl md:text-xl'>My Favourite book list</h1>
                            <h1 className='text-center font-bold sm:text-xl md:text-xl'>Total = {data.length}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-8'>
                <div className="container mx-auto">
                    <div>
                        {
                            data?.map((books, idx) => (
                                <FavouriteBook key={idx} data={books}></FavouriteBook>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page