
// Import necessary components and libraries
import AddBookBanner from '@/pages/add-book/AddBookBanner';
import AddBookForm from './AddBookForm';
import { getAllBooks } from '@/libs/actions/addBook.action';
import { connectDB } from '@/libs/database/MongoConnect';

// Define AddBookFormPage component
const AddBookFormPage = async () => {
  return (
    <section>
      <AddBookBanner />
      {/* {/ Book Form /} */}
      <AddBookForm></AddBookForm>
    </section>
  );
};

export default AddBookFormPage;
