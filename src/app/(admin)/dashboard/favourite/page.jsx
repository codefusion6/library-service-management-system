import FavouriteList from '@/components/favourite/FavouriteList'
// import { getFavouriteBook } from '@/libs/actions/book.action'
import React from 'react'

const page = () => {
    // const allBookList = await getFavouriteBook()
    // console.log(allBookList)
    return (
        <main>
            <FavouriteList></FavouriteList>
        </main>
    )
}

export default page ;