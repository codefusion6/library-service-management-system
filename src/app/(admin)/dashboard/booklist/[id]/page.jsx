import React from "react";

import { getBook } from "@/libs/actions/book.action";
import BooksList from "@/components/bookList/BooksList";


const BookDetails = async ({ params }) => {
  // console.log(params.id);

  const singleBook = await getBook(params.id);
  // console.log(singleBook);

  return (
    <div>
      <BooksList singleBookData={singleBook}></BooksList>
    </div>
  );
};

export default BookDetails;
