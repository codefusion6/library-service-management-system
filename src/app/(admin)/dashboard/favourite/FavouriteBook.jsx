'use client'
import React from 'react'

const FavouriteBook = ({ data: book }) => {
    console.log(book)
    return (
        <div>
            <h2>{book?.bookName}</h2>
        </div>
    )
}

export default FavouriteBook