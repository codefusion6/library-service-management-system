
import React from "react";
import "./card.styles.css";
import Cards from "./Cards";
import { getRecommandedBooks } from "@/libs/actions/book.action";

const RecommendedBooks = async () => {
  const books = await getRecommandedBooks()
  // console.log(books)
  return (
    <section className="py-20 bg-sky-100">
      <div className="container mx-auto">
        <p className="text-3xl font-bold pb-2 pl-5 lg:pl-0">Recommenced Book&apos;s </p>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-5 lg:p-0">
          <Cards books={books}></Cards>
        </div>
      </div>
    </section>
  );
};

export default RecommendedBooks;
