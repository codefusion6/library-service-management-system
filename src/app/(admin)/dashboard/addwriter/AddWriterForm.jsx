"use client"
import { addWriter } from '@/libs/actions/writer.action';
import React from 'react'
import toast from 'react-hot-toast';

const AddWriterForm = () => {
  return (
    <form action={async (formData) => {
        
        try {
            const response = await addWriter(formData);
            if (response?.success) {
                toast.success("Writer added successfully")
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }} className='flex flex-col gap-2 md:w-1/2 mx-auto'>
    <input type="text" name='writerName' placeholder="Enter Writer Name " className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
    <input type="date" name='dob' placeholder="Date of Birth " className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
    <input type="date" name='dod' placeholder="Date of Dead" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
    <input type="file" name='writerImage'  className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
    <input type="text" name='address' placeholder="Address" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
    <textarea name='description' id="" cols="30" placeholder='Description' rows="10" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2'></textarea>
    <button type="submit" className='bg-green-700 py-2 rounded-md text-white text-sm font-semibold'>Create Writer</button>
  </form>
  )
}

export default AddWriterForm