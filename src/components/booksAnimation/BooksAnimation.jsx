'use client'
import React from 'react'
import Lottie from 'lottie-react'
import booksAnimation from '../../assest/booksAnimation'
const BooksAnimation = () => {
    return (
        <div className='flex items-center max-w-[300px] gap-1 w-full justify-center mt-20 mx-auto'>
            <Lottie animationData={booksAnimation}></Lottie>
        </div>
    )
}

export default BooksAnimation