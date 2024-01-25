"use client";
// Import necessary components and libraries
import AddBookBanner from '@/pages/add-book/AddBookBanner';
// Define AddBookFormPage component
const AddBookFormPage = () => {
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
      authorImage,
      publisherEmail,
      category,
    });

    // You can use this data to send a request to your backend or perform further actions.
  };

  return (
    <section>
      <AddBookBanner />
      {/* {/ Book Form /} */}
      <form action={async (formData) => {

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
    </section>
  );
};

export default AddBookFormPage;