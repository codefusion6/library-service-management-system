
// Import necessary components and libraries
import AddBookBanner from '@/pages/add-book/AddBookBanner';
import AddBookForm from './AddBookForm';
import { getAllBooks } from '@/libs/actions/addBook.action';
import { connectDB } from '@/libs/database/MongoConnect';

// Define AddBookFormPage component
const AddBookFormPage = async () => {
  await connectDB();
  const data = await getAllBooks();
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