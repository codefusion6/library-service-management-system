
import React from 'react'
import Sidebar from './Sidebar';
import SidebarItems from './SidebarItems';

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
    )
}

export default Dashboard