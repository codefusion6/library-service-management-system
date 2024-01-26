
// import GetFeatures from '@/components/getFeatures/GetFeatures'

import React from 'react'

async function page() {
    return (
        <div>
            <form action="" className='flex py-20 container mx-auto'>
                <div className='flex flex-col gap-6 font-semibold'>
                    <label htmlFor="">Title</label>
                    <input type="text" className='px-2 py-1 bg-slate-700 mr-4 rounded-md text-white' placeholder='Title' />
                </div>
                <div className='flex flex-col gap-6 font-semibold'>
                    <label htmlFor="">Author Name</label>
                    <input type="text" className='px-2 py-1 bg-slate-700 mr-4 rounded-md text-white' placeholder='Author name' />
                </div>
                <div className='flex flex-col gap-6 font-semibold'>
                    <label htmlFor="">Price</label>
                    <input type="text" className='px-2 py-1 bg-slate-700 mr-4 rounded-md text-white' placeholder='Price' />
                </div>
            </form>
            {/* <GetFeatures></GetFeatures> */}
        </div>
    )
}

export default page;