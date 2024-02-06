"use server";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FaEye, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { getAllBooks } from "@/libs/actions/book.action";

const AllBookCard = async ({ searchParams }) => {
  const data = await getAllBooks();

  // console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {data?.books?.map((book, index) => (
        <Card
          key={index}
          className="border hover:border-green-500 hover:border-2 text-center shadow-xl rounded-lg relative overflow-hidden group"
        >
          <CardBody className="overflow-visible">
            <Image
              alt="Card Image"
              src={book.bookCover}
              width={270}
              height={270}
            />
          </CardBody>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
          <div className="absolute top-0 left-0 w-full h-full transform">
            <p className="text-xl font-bold text-center text-white">
              {book.bookName}
            </p>

            <div className=" flex justify-center pb-10 items-end space-x-4  gap-3">
              <Link href={`/allBooks/${book._id}`} className="">
                <FaEye className="text-3xl text-white" />
                <span className="text-white">View</span>
              </Link>

              <Link href="#">
                <FaRegHeart className="text-3xl text-white" />
                <span className="text-white">Add Favorite</span>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllBookCard;
