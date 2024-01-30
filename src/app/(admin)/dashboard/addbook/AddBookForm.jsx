"use client"
import { addBook, getAllBooks, } from '@/libs/actions/addBook.action';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
const AddBookForm = () => {

    return (
        <form action={async (formData) => {
            const response = await addBook(formData);
            // refetch()
            if (response.success) {
                toast.success("Book added successfully")
            }
            console.log(response);

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

            {/* {/ Book Cover Image /} */}
            <div className="mb-4">
                <label htmlFor="bookCover" className="block text-gray-700 text-sm font-bold mb-2">
                    Book Cover Image:
                </label>
                <input
                    type="file"
                    name="bookCover"
                    accept="image/*"
                    className="w-full"
                />
            </div>

            {/* {/ Book PDF /} */}
            <div className="mb-4">
                <label htmlFor="bookPdf" className="block text-gray-700 text-sm font-bold mb-2">
                    Book PDF:
                </label>
                <input
                    type="file"
                    name="bookPdf"
                    accept=".pdf"
                    className="w-full"
                />
            </div>

            {/* {/ Author Image /} */}
            <div className="mb-4">
                <label htmlFor="authorImage" className="block text-gray-700 text-sm font-bold mb-2">
                    Author Image:
                </label>
                <input
                    type="file"
                    name="authorImage"
                    accept="image/*"
                    className="w-full"
                />
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
    )
}

export default AddBookForm