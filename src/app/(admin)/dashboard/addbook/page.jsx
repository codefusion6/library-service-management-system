"use client"
import AddBookBanner from '@/pages/add-book/AddBookBanner';
import { useState } from 'react';

const AddBookFormPage = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookCover, setBookCover] = useState(null);
  const [bookPdf, setBookPdf] = useState(null);
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log({
      bookName,
      authorName,
      bookCover,
      bookPdf,
      email,
    });
    // You can use this data to send a request to your backend or perform further actions.
  };

  return (
    <>
      <AddBookBanner></AddBookBanner>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md my-8">
        <div className="mb-4">
          <label htmlFor="bookName" className="block text-gray-700 text-sm font-bold mb-2">
            Book Name:
          </label>
          <input
            type="text"
            id="bookName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="authorName" className="block text-gray-700 text-sm font-bold mb-2">
            Author Name:
          </label>
          <input
            type="text"
            id="authorName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bookCover" className="block text-gray-700 text-sm font-bold mb-2">
            Book Cover Image:
          </label>
          <input
            type="file"
            id="bookCover"
            accept="image/*"
            onChange={(e) => setBookCover(e.target.files[0])}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bookPdf" className="block text-gray-700 text-sm font-bold mb-2">
            Book PDF:
          </label>
          <input
            type="file"
            id="bookPdf"
            accept=".pdf"
            onChange={(e) => setBookPdf(e.target.files[0])}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Add Book
        </button>
      </form>
    </>

  );
};

export default AddBookFormPage;
