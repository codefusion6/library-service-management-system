'use client'
import { getAllBooks } from '@/libs/actions/book.action'
import React from 'react'

const FavouriteBooks = () => {
    const books = getAllBooks()
    console.log(books)
    return (
        <div>FavouriteBooks</div>
    )
}

export default FavouriteBooks