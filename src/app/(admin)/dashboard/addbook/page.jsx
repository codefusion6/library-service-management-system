
// Import necessary components and libraries
import AddBookBanner from '@/pages/add-book/AddBookBanner';
import AddBookForm from './AddBookForm';
import { getAllBooks } from '@/libs/actions/addBook.action';
import { connectDB } from '@/libs/database/MongoConnect';
import { useState } from 'react';

// Define AddBookFormPage component
const AddBookFormPage = () => {
  // State variables for book details
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [bookCover, setBookCover] = useState(null);
  const [bookPdf, setBookPdf] = useState(null);

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
      authorImage,
      publisherEmail,
      bookAccessibilities,
    });

    // You can use this data to send a request to your backend or perform further actions.
  };

  return (
    <section>
      <AddBookBanner />
      {/* {/ Book Form /} */}
      <AddBookForm></AddBookForm>
      <div>
        {
          data.books.map((book, idx) => <p key={idx}>{book.bookName}</p>)
        }
      </div>
    </section>
  );
};

export default AddBookFormPage;
