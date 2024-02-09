import FavouriteBooks from '@/components/favouriteBooks/FavouriteBooks'
import React from 'react'

const page = () => {
    return (
        <main>
            <section>
                <div className="container mx-auto">
                    <FavouriteBooks></FavouriteBooks>
                </div>
            </section>
        </main>
    )
}

export default page