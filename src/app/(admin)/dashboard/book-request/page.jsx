import DisplayBookRequest from "@/components/bookRequest/DisplayBookRequest";
import { getRequestBook } from "@/libs/actions/requestBook.action";
import React from "react";

const RequestBook = async () => {
  const result = await getRequestBook();
  // console.log(result)
  return (
    <>
      <DisplayBookRequest requestedBooks={result}></DisplayBookRequest>
    </>
  );
};

export default RequestBook;
