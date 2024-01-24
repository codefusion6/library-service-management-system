
import React from 'react'

function Dashboard({ children }) {
    return (
        <main className='min-h-screen px-1 pt-24 p-4 md:p-10'>
            {children}
        </main>
    )
}

export default Dashboard