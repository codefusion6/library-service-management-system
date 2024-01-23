import React from 'react'
import Sidebar from './dashboard/Sidebar'
import SidebarItems from './dashboard/SidebarItems'


function dashboardLayout({ children }) {
    return (
        <>
            <div className='flex gap-2'>
                navbar
                <div className='w-3/12 border-r bg-black text-white'>
                    <Sidebar>
                        <SidebarItems></SidebarItems>
                    </Sidebar>
                </div>
                <div className='w-9/12 bg-slate-500'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default dashboardLayout