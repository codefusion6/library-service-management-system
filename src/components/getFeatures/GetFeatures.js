import React from 'react'

async function GetFeatures() {
    const res = await fetch("http://localhost:3000/api/addFeatures", {
        cache: "no-cache"
    });

    const data = await res.json();
    // console.log()

    return (
        <div className='container mx-auto'>
            <h1 className='mt-20 text-3xl font-bold'>{data?.message}</h1>
        </div>
    )
}

export default GetFeatures