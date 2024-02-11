"use client"
import { addWriter } from '@/libs/actions/writer.action';
import { CldUploadWidget } from 'next-cloudinary';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import AddWritterBtn from './AddWritterBtn';

const AddWriterForm = () => {
    const [authorImg, setAuthorImg] = useState("");
    console.log(authorImg);
    return (
        <form action={async (formData) => {
            const addAuthorImg = formData.append("authorImg", authorImg)
            try {
                const response = await addWriter(formData);
                if (response?.success) {
                    toast.success("Writer added successfully")
                }
                console.log(response);
            } catch (error) {
                console.log(error);
                toast.success(`${error}`)
            }

        }} className='flex flex-col gap-2 md:w-1/2 mx-auto'>
            <input type="text" name='writerName' placeholder="Enter Writer Name " className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
            <input type="date" name='dob' placeholder="Date of Birth " className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
            <input type="date" name='dod' placeholder="Date of Dead" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
            <input type="text" name='address' placeholder="Address" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2' />
            <textarea name='description' id="" cols="30" placeholder='Description' rows="10" className='bg-gray-200 py-2 rounded-md outline-none w-full text-sm px-2'></textarea>
            <div>
                <CldUploadWidget
                    // signatureEndpoint="/api/sign-cloudinary-params"
                    uploadPreset='lms_code_fusion'
                    autoUpload={false}
                    onSuccess={(result, { widget }) => {
                        setAuthorImg(result?.info?.secure_url);
                        widget.close();
                    }}
                >
                    {({ open }) => {
                        function handleOnClick() {
                            // setBookCover(null);
                            open();
                        }
                        return (
                            <button type='button' className='w-full px-5 py-3 rounded-md text-white bg-green-400 hover:bg-green-700' onClick={handleOnClick}>
                                Upload Book Cover
                            </button>
                        );
                    }}
                </CldUploadWidget>
            </div>
            <AddWritterBtn></AddWritterBtn>
        </form>
    )
}

export default AddWriterForm