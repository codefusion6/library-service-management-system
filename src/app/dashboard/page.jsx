"use client";
import React from 'react'
import Sidebar from './Sidebar';

function page() {
    return (
        <main className='min-h-screen px-1 pt-24'>
            <section>
                <div className="">
                    <div className='flex gap-2'>
                        <div className='w-4/12 border-r border-black bg-white'>
                           <Sidebar></Sidebar>
                           
                        </div>
                        <div className='w-8/12 bg-white'>
                            {/* <Main/>  components */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page