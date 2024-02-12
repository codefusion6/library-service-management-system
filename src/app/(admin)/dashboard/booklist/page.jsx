
import DashBookSlider from "@/components/dashBookSlider/DashBookSlider";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import { getAllBooks } from "@/libs/actions/book.action";
export const dynamic = "force-dynamic";

const BookListPage = async ({ searchParams }) => {

  const pageNumber = Number(searchParams?.page === undefined ? "1" : searchParams?.page)

  const searchText = (searchParams?.query) || "";

  const { books, totalPage } = await getAllBooks({ query: searchText, page: pageNumber })
  console.log(books)

  return (
    <section className="container mx-auto">
      <h2 className="text-3xl text-center my-5 font-medium text-green-700">
        Available Books List
      </h2>
      <DashBookSlider></DashBookSlider>
      <BookCard books={books} ></BookCard>
      <Pagination totalPage={totalPage} currentPage={pageNumber} />
      <button className="bg-[#18c96433] text-[#12a150] py-2 px-5 rounded-full">Test Button</button>
    </section>
  );
};

export default BookListPage;
