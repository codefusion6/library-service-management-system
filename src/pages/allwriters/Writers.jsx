import React from 'react'
import AddWriter from './AddWriter'
import Image from 'next/image'

const Writers = () => {
    const writers = [
        {
            id: 1,
            name: "Robidrdonath Takur"
        },
        {
            id: 2,
            name: "Kazi Najrul"
        },
        {
            id: 3,
            name: "Robisrdonath Takur"
        },
        {
            id: 4,
            name: "Josim Uddin"
        },
        {
            id: 5,
            name: "Robisrdonath Takur"
        },
        {
            id: 6,
            name: "Ahsan"
        },
        {
            id: 7,
            name: "Robisrdonath Takur"
        },
        {
            id: 8,
            name: "Sukano Bottacarjo"
        },
        {
            id: 9,
            name: "Sufia Kamal"
        },
        {
            id: 10,
            name: "Anisul Islam"
        },

    ]
    return (
        <section className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-3 px-2'>
            {
                writers.map((writer, idx) => (
                    <div key={idx} className='border-2 p-2 rounded-md'>
                        <Image height={200} width={300} className='h-[200px] w-full rounded-t-md' src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" alt="writer" />
                        <h3 className='mt-2 text-xl font-bold'>{writer?.name}</h3>
                        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis esse quidem distinctio unde!</p>
                    </div>
                ))
            }
            <AddWriter />
        </section>
    )
}

export default Writers