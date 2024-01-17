import React from 'react'

async function GetFeatures() {
    const res = await fetch("http://localhost:3000/api/addFeatures", {
        cache: "no-cache"
    });

    const data = await res.json();
    console.log()

    return (
        <div>{data?.name}</div>
    )
}

export default GetFeatures