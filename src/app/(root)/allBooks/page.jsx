import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import AllBookCard from "./AllBookCard";
import BooksSidebar from "./BooksSidebar";
import Pagination from "./Pagination";
import { getAllBooks } from "@/libs/actions/book.action";
export const dynamic = "force-dynamic";

const AllBooks = async ({ searchParams }) => {
  const pageNumber = Number(searchParams.page === undefined ? "1" : searchParams.page)
  const { books, totalPage } = await getAllBooks(pageNumber)
  return (

    <section className="min-h-screen">
      <div className="container mx-auto my-10">
        <div className="mt-28 relative">
          <Image
            src="https://i.ibb.co/3kbYLkR/allbooks.jpg"
            alt="Pricing Banner"
            width={900}
            height={250}
            className="w-full h-[450px]"
          ></Image>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <p className="absolute top-1/2 left-1/2 border-b-2 pb-2 border-white transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center">
            Choose Your Books and Enjoy
          </p>
          <div className="divider text-white text-2xl"></div>
        </div>
        <div className="flex mt-5">
          <div className="w-[300px] mt-2 md:mr-7">
            <BooksSidebar></BooksSidebar>
          </div>
          <div className="flex-1 space-y-3">
            <h1 className="text-xl font-semibold">Search Here</h1>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="search a book"
                className="rounded-lg py-2 px-3 w-full border"
              />
              <FaSearch className="text-xl"></FaSearch>
            </div>
            <h1 className="text-2xl font-semibold">All Books</h1>
            <div className="space-y-8">
              <AllBookCard books={books}></AllBookCard>
              <Pagination totalPage={totalPage} currentPage={pageNumber}></Pagination>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllBooks;
