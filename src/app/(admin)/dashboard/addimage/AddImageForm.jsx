'use client'
import React from 'react'

function AddImageForm() {
    return (
        <form action={(formData) => {
            const name = formData.get("name")
            const image = formData.get("image")
            console.log(name, image)

        }} className='max-w-[600px] mx-auto shadow p-5 rounded-md border space-y-5'>
            <input type="text" name="name" className='w-full py-2 border p-2 rounded-md outline-none' placeholder='Image Name' />
            <input type="file" name='image' className='w-full py-2' />
            <button type="submit" className='py-2 px-4 bg-green-600 text-white'>Submit</button>
        </form>
    )
}

export default AddImageForm