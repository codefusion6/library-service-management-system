import React from "react";

import { getBook } from "@/libs/actions/book.action";
import BooksList from "@/components/bookList/BooksList";


const BookDetails = async ({ params }) => {
  const singleBook = await getBook(params?.id);
  return (
    <div>
      <BooksList singleBookData={singleBook}></BooksList>
    </div>
  );
};

export default BookDetails;
