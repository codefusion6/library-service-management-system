import React from 'react'

function Loading() {
    return (
        <div className='flex items-center gap-1 w-full justify-center bg-black h-full bg-opacity-20 fixed top-0 left-0'>Loading... <div className='w-10 h-10 bg-primary animate-spin'></div></div>
    )
}

export default Loading