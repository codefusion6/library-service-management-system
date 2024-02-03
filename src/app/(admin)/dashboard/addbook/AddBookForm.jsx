"use client"
import { addBook, } from '@/libs/actions/book.action';
import toast from 'react-hot-toast';
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

const AddBookForm = () => {
    const [resource, setResource] = useState(null);
    const [bookCover, setBookCover] = useState(null);
    const [bookPdf, setBookPdf] = useState(null);
    const [authorImg, setAuthorImg] = useState(null);
    console.log(bookCover, "cover ");
    console.log(bookPdf, "pdf");
    console.log(authorImg, "author");

    return (
        <section
            className="relative min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: 'url("/images/addbook.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto p-6 relative z-10">
                <form action={async (formData) => {
                    const bookCoverField = formData.append("bookCover", bookCover)
                    const bookPdfField = formData.append("bookPdf", bookPdf)
                    const authorImageField = formData.append("authorImage", authorImg)
                    try {

                        const response = await addBook(formData);
                        if (response.success) {
                            toast.success("Book added successfully")
                        }
                        console.log(response);
                    } catch (error) {
                        console.log(error);
                        return JSON.parse(JSON.stringify(error))
                    }

                }} className="m-8 max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
                    {/* {/ Book Name /} */}
                    <div className="mb-4">
                        <label htmlFor="bookName" className="block text-gray-700 text-sm font-bold mb-2">
                            Book Name:
                        </label>
                        <input
                            type="text"
                            name="bookName"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* {/ Author Name /} */}
                    <div className="mb-4">
                        <label htmlFor="authorName" className="block text-gray-700 text-sm font-bold mb-2">
                            Author Name:
                        </label>
                        <input
                            type="text"
                            name="authorName"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* {/ Book Description /} */}
                    <div className="mb-4">
                        <label htmlFor="bookDescription" className="block text-gray-700 text-sm font-bold mb-2">
                            Book Description:
                        </label>
                        <textarea
                            name="bookDescription"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                        {/* Book Cover Image  */}
                        <div className="mb-4">
                            <CldUploadWidget
                                // signatureEndpoint="/api/sign-cloudinary-params"
                                uploadPreset='lms_code_fusion'
                                autoUpload={false}
                                onSuccess={(result, { widget }) => {
                                    setBookCover(result?.info?.secure_url);
                                    console.log(resource);
                                    widget.close();
                                }}
                            >
                                {({ open }) => {
                                    function handleOnClick() {
                                        // setBookCover(null);
                                        open();
                                    }
                                    return (
                                        <button type='button' className='px-5 py-3 rounded-md text-white bg-blue-500 hover:bg-blue-700' onClick={handleOnClick}>
                                            Upload Book Cover
                                        </button>
                                    );
                                }}
                            </CldUploadWidget>
                        </div>

                        {/* Book PDF */}
                        <div className="mb-4">
                            <CldUploadWidget
                                // signatureEndpoint="/api/sign-cloudinary-params"
                                uploadPreset='lms_code_fusion'
                                autoUpload={false}
                                onSuccess={(result, { widget }) => {
                                    setBookPdf(result?.info?.secure_url);
                                    console.log(resource);
                                    widget.close();
                                }}
                            >
                                {({ open }) => {
                                    function handleOnClick() {
                                        // setBookPdf(null);
                                        open();
                                    }
                                    return (
                                        <button type='button' className='px-5 py-3 rounded-md text-white bg-blue-500 hover:bg-blue-700' onClick={handleOnClick}>
                                            Upload Book PDF
                                        </button>
                                    );
                                }}
                            </CldUploadWidget>
                        </div>

                        {/* Author Image  */}
                        <div className="mb-4">
                            <CldUploadWidget
                                // signatureEndpoint="/api/sign-cloudinary-params"
                                uploadPreset='lms_code_fusion'
                                autoUpload={false}
                                onSuccess={(result, { widget }) => {
                                    setAuthorImg(result?.info?.secure_url);
                                    console.log(resource);
                                    widget.close();
                                }}
                            >
                                {({ open }) => {
                                    function handleOnClick() {
                                        // setAuthorImg(null);
                                        open();
                                    }
                                    return (
                                        <button type='button' className='px-5 py-3 rounded-md text-white bg-blue-500 hover:bg-blue-700' onClick={handleOnClick}>
                                            Upload Author Img
                                        </button>
                                    );
                                }}
                            </CldUploadWidget>
                        </div>
                    </div>

                    {/* {/ Publisher Email Address /} */}
                    <div className="mb-4">
                        <label htmlFor="publisherEmail" className="block text-gray-700 text-sm font-bold mb-2">
                            Publisher Email Address:
                        </label>
                        <input
                            type="email"
                            name="publisherEmail"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* {/ Book Accessibilities Dropdown /} */}
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                            Book Accessibilities:
                        </label>
                        <select
                            name="category"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="Basic">Basic</option>
                            <option value="Plus">Plus</option>
                            <option value="Elite">Elite</option>
                        </select>
                    </div>

                    {/* {/ Add Book Button /} */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Add Book
                    </button>
                </form>
                {/* <CldUploadWidget
                    // signatureEndpoint="/api/sign-cloudinary-params"
                    uploadPreset='lms_code_fusion'
                    autoUpload={false}
                    onSuccess={(result, { widget }) => {
                        setResource(result?.info);
                        console.log(resource);
                        widget.close();
                    }}
                >
                    {({ open }) => {
                        function handleOnClick() {
                            setResource(null);
                            open();
                        }
                        return (
                            <button className='px-5 py-3 rounded-md text-white bg-violet-700 hover:bg-blue-700' onClick={handleOnClick}>
                                Upload an Image
                            </button>
                        );
                    }}
                </CldUploadWidget>
                <CldUploadWidget
                    // signatureEndpoint="/api/sign-cloudinary-params"
                    uploadPreset='lms_code_fusion'
                    // onSuccess={(results) => {
                    //     console.log('Public ID', results.info.public_id);
                    //   }}
                    onSuccess={(result, { widget }) => {
                        setResource(result?.info);
                        widget.close();
                    }}
                >
                    {({ open }) => {
                        // function handleOnClick() {
                        //     setResource(undefined);
                        //     open();
                        // } 
                        return <button className='px-5 py-3 rounded-md text-white bg-violet-700 hover:bg-blue-700' onClick={() => open()}>Upload an Image</button>
                    }}
                </CldUploadWidget> */}
            </div>
        </section >
    )
}

export default AddBookForm