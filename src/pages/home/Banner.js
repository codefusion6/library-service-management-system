import React from 'react'

const Banner = () => {
    return (
        <div className='text-white flex h-screen items-center ' style={{ backgroundImage: 'url("https://images.alphacoders.com/132/1326370.png")' }}>
            <div className='bg-black bg-opacity-60 w-full h-full'>
                <div className='px-2 max-w-7xl flex flex-col justify-center mx-auto w-full h-screen text-left'>
                    <h2 className='text-4xl mb-2 font-bold'>Library management <br /> Service is our best project</h2>
                    <p className='text-sm text-gray-300'>Lorem ipsum dolor sit amet, consectetur  adipisicing elit. <br /> Minus voluptates autem eligendi? Natus veritatis facere <br /> eaque mollitia sunt velit aut.</p>
                    <div className='pt-4'>
                    <button className='bg-green-500 py-1 px-3 mr-3 text-sm rounded-lg'>Explore</button>
                    <button className='bg-orange-500 py-1 px-3 mr-3 text-sm rounded-lg'>Buy Book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner