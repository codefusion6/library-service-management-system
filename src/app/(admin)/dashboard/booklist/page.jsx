
import { addManyBook, getAllBooks, getBook } from "@/libs/actions/book.action";
import { connectDB } from "@/libs/database/MongoConnect";
import DashBookSlider from "@/components/dashBookSlider/DashBookSlider";
import BookCard from "./bookCard";


const BookListPage = async ({ params }) => {
  console.log(params, "params");
  
  await connectDB();
  const res = await getBook("65b8dc882c1a2b234add17f0")
  console.log(res);
  const data = await getAllBooks();
  // console.log(data);

  return (
    <section className="container mx-auto">
      <h2 className="text-3xl text-center my-5 font-medium text-green-700">
        Available Books List
        
      </h2>
      <DashBookSlider></DashBookSlider>
      <BookCard params={params.id}></BookCard>
      
    </section>
  );
};

export default BookListPage;
