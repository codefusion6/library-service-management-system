
// import AddBookBanner from '@/pages/add-book/AddBookBanner';
import AddBookForm from './AddBookForm';



const AddBookFormPage = async () => {
  return (
    <section>
      {/* <AddBookBanner /> */}
      <h2 className='text-4xl py-10 text-center '>Add Book</h2>
      {/* Book Form  */}
      <AddBookForm></AddBookForm>
    </section>
  );
};

export default AddBookFormPage;
