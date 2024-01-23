
import React from 'react'
import Sidebar from './Sidebar';
import SidebarItems from './SidebarItems';
<<<<<<< HEAD:src/app/dashboard/page.jsx
function page() {
    return (
        <div className="">
            <h1 className='text-5xl text-white text-center'>Welcome to Dashboard</h1>
        </div>
=======

function Dashboard() {
    return (
        <main className='min-h-screen px-1 pt-24'>
            <section>
                <div className="">
                    <div className='flex gap-2'>
                        <div className='w-3/12 border-r bg-black text-white'>
                           <Sidebar>
                            <SidebarItems></SidebarItems>
                           </Sidebar>
                        </div>
                        <div className='w-9/12 bg-white'>
                            {/* <Main/>  components */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
>>>>>>> 128ada7cc18ada2a0bc5476d89d548a057b4254a:src/app/(admin)/dashboard/page.jsx
    )
}

export default Dashboard