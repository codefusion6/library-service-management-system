
import DashBookSlider from "@/components/dashBookSlider/DashBookSlider";
import BookCard from "./BookCard";

const BookListPage = async () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl text-center my-5 font-medium text-green-700">
        Available Books List
      </h2>
      <DashBookSlider></DashBookSlider>
      <BookCard></BookCard>
    </section>
  );
};

export default BookListPage;
