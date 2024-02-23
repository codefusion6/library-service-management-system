import Image from "next/image";
import React from "react";

const SimilarWriterBooks = ({ authorBook }) => {
  console.log(authorBook);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
      {authorBook.map((similarBook, index) => (
        <div
          key={index}
          className="border-2 hover:border-green-500 hover:border-2 text-center shadow-xl rounded-lg group flex gap-3 p-3"
        >
          <div>
            <Image
              alt="Author Image"
              src={similarBook.bookCover}
              width={270}
              height={270}
              className="rounded-sm shadow-md h-[200px] w-[200px] object-fit"
            />
          </div>
          <div className="text-left space-y-2">
            <h2 className=" font-semibold"> {similarBook.bookName}</h2>
            <p>
              By <br />
              <span className=" font-bold">{similarBook.authorName}</span>
            </p>
            <p className="text-tiny">
              Publisher Email: <br />
              <span className="text-base font-bold">
                {similarBook.publisherEmail}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimilarWriterBooks;
