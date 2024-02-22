"use client";
import React from "react";
import Image from "next/image";

const SimilarAuthor = ({ authorBook }) => {
  console.log(authorBook);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {authorBook.map((author, index) => (
        <div
          key={index}
          className="border-2 hover:border-green-500 hover:border-2 text-center shadow-xl rounded-lg group flex gap-3 p-3"
        >
          <div>
            <Image
              alt="Author Image"
              src={author.bookCover}
              width={270}
              height={270}
              className="rounded-sm shadow-md h-[150px] w-[150px] object-fit"
            />
          </div>
          <div className="text-left space-y-2">
            <h2 className=" font-semibold">  {author.bookName}</h2>
            <p > By <br /> <span className=" font-bold">{author.authorName}</span></p>
            <p className="text-tiny"> Publisher Email: <br /> <span className="text-base font-bold"> {author.publisherEmail}</span> </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimilarAuthor;
