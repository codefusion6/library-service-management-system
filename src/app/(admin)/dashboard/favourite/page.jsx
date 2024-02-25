import FavouriteList from '@/components/favourite/FavouriteList'
import { getFavouriteBook } from '@/libs/actions/book.action'
import React from 'react'

const page = async () => {
    const allBookList = await getFavouriteBook()
    return (
        <main>
            <FavouriteList allBookList={allBookList}></FavouriteList>
        </main>
    )
}

export default page