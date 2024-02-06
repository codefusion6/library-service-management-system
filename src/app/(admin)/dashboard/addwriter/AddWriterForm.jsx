import React from 'react'

const AddWriterForm = () => {
  return (
    <form className='flex flex-col gap-2 md:w-1/2 mx-auto'>
    <input type="text" placeholder="Enter Writer Name " className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
    <input type="text" placeholder="Date of Birth " className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
    <input type="text" placeholder="Date of Dead" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
    <input type="file"  className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
    <input type="text" placeholder="Address" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
    <textarea name="" id="" cols="30" placeholder='Description' rows="10" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2'></textarea>
    <button className='bg-green-700 py-2 rounded-md text-white text-sm font-semibold'>Create Writer</button>
  </form>
  )
}

export default AddWriterForm