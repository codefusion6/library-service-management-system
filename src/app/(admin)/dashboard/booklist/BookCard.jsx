"use server";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

import { getAllBooks,} from "@/libs/actions/book.action";
import { connectDB } from "@/libs/database/MongoConnect";
import BookDeleteBtn from "./bookDeleteBtn";

const BookCard = async ({searchParams}) => {
  const pageNumber = Number(searchParams?.page === undefined ? "1" : searchParams?.page)
  const searchText = (searchParams?.query) || "";
  const { books, totalPage } = await getAllBooks({ query: searchText, pageNumber })
  console.log(books);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
        {books?.map((book, index) => (
          <Card
            key={index}
            className="p-6 border hover:border-green-500 hover:border-2 text-center shadow-xl rounded-lg relative overflow-hidden group"
          >
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card Image"
                className="object-cover rounded-xl"
                src={book.bookCover}
                width={270}
                height={270}
              />
            </CardBody>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity gap-3">
              <Link href={`/dashboard/booklist/${book._id}`}>
                <FaEye className="text-3xl text-white" />
                <span className="text-white">View</span>
              </Link>

              <Link href={`/dashboard/booklist/${book._id}`}>
                <FaEdit className="text-3xl text-white" />
                <span className="text-white">Edit</span>
              </Link>
              <BookDeleteBtn id={book._id}></BookDeleteBtn>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default BookCard;
