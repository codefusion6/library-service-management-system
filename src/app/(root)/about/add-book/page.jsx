"use client"
<<<<<<< HEAD
import AddBookBanner from '@/pages/add-book/AddBookBanner';
import { useState } from 'react';

const AddBookFormPage = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookCover, setBookCover] = useState(null);
  const [bookPdf, setBookPdf] = useState(null);
  const [email, setEmail] = useState('');
  const [test, setTest] = useState(true)
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
=======
// Import necessary components and libraries
import AddBookBanner from '@/pages/add-book/AddBookBanner';
import { useState } from 'react';

// Define AddBookFormPage component
const AddBookFormPage = () => {
  // State variables for book details
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [bookCover, setBookCover] = useState(null);
  const [bookPdf, setBookPdf] = useState(null);
  const [email, setEmail] = useState('');

  // State variables for author details
  const [authorImage, setAuthorImage] = useState(null);
  const [publisherEmail, setPublisherEmail] = useState('');

  // State variable for book accessibilities dropdown
  const [bookAccessibilities, setBookAccessibilities] = useState('Basic');

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Log form data (you can replace this with your form submission logic)
    console.log({
      bookName,
      authorName,
      bookDescription,
      bookCover,
      bookPdf,
      email,
      authorImage,
      publisherEmail,
      bookAccessibilities,
    });

>>>>>>> 59c628dc8a3deb07fbe8840f550dc9d44a38a58c
    // You can use this data to send a request to your backend or perform further actions.
  };

  return (
    <>
<<<<<<< HEAD
      <AddBookBanner></AddBookBanner>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
=======
      <AddBookBanner />

      {/* Book Form */}
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        {/* Book Name */}
>>>>>>> 59c628dc8a3deb07fbe8840f550dc9d44a38a58c
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
<<<<<<< HEAD
          <button
            onClick={() => setTest(!test)}
            className="px-5 py-2 bg-green-500 rounded-md mt-3 text-white">{test ?  "Test Function" : "Working"}</button>
        </div>

=======
        </div>

        {/* Author Name */}
>>>>>>> 59c628dc8a3deb07fbe8840f550dc9d44a38a58c
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

<<<<<<< HEAD
=======
        {/* Book Description */}
        <div className="mb-4">
          <label htmlFor="bookDescription" className="block text-gray-700 text-sm font-bold mb-2">
            Book Description:
          </label>
          <textarea
            id="bookDescription"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
          />
        </div>

        {/* Book Cover Image */}
>>>>>>> 59c628dc8a3deb07fbe8840f550dc9d44a38a58c
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

<<<<<<< HEAD
=======
        {/* Book PDF */}
>>>>>>> 59c628dc8a3deb07fbe8840f550dc9d44a38a58c
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

<<<<<<< HEAD
=======
        {/* Email */}
>>>>>>> 59c628dc8a3deb07fbe8840f550dc9d44a38a58c
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

<<<<<<< HEAD
=======
        {/* Author Image */}
        <div className="mb-4">
          <label htmlFor="authorImage" className="block text-gray-700 text-sm font-bold mb-2">
            Author Image:
          </label>
          <input
            type="file"
            id="authorImage"
            accept="image/*"
            onChange={(e) => setAuthorImage(e.target.files[0])}
            className="w-full"
          />
        </div>

        {/* Publisher Email Address */}
        <div className="mb-4">
          <label htmlFor="publisherEmail" className="block text-gray-700 text-sm font-bold mb-2">
            Publisher Email Address:
          </label>
          <input
            type="email"
            id="publisherEmail"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={publisherEmail}
            onChange={(e) => setPublisherEmail(e.target.value)}
          />
        </div>

        {/* Book Accessibilities Dropdown */}
        <div className="mb-4">
          <label htmlFor="bookAccessibilities" className="block text-gray-700 text-sm font-bold mb-2">
            Book Accessibilities:
          </label>
          <select
            id="bookAccessibilities"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={bookAccessibilities}
            onChange={(e) => setBookAccessibilities(e.target.value)}
          >
            <option value="Basic">Basic</option>
            <option value="Plus">Plus</option>
            <option value="Elite">Elite</option>
          </select>
        </div>

        {/* Add Book Button */}
>>>>>>> 59c628dc8a3deb07fbe8840f550dc9d44a38a58c
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Add Book
        </button>
      </form>
    </>
<<<<<<< HEAD

=======
>>>>>>> 59c628dc8a3deb07fbe8840f550dc9d44a38a58c
  );
};

export default AddBookFormPage;
