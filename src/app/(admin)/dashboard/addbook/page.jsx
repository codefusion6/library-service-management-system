
import AddBookBanner from '@/pages/add-book/AddBookBanner';
import AddBookForm from './AddBookForm';



const AddBookFormPage = async () => {
  return (
    <section>
      <AddBookBanner />
      {/* Book Form  */}
      <AddBookForm></AddBookForm>
    </section>
  );
};

export default AddBookFormPage;
