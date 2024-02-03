"use server";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import { getAllBooks } from "@/libs/actions/book.action";

const AllBookCard = async () => {
  const data = await getAllBooks();
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
          <div className="absolute top-0 left-0 w-full h-full transform flex justify-center pb-10 items-end space-x-4 opacity-0 group-hover:opacity-100 transition-opacity gap-3">
            <Link href={`/allBooks/${book._id}`} className="">
              <FaEye className="text-3xl text-white" />
              <span className="text-white">View</span>
            </Link>

            <Link href="#">
              <FaEdit className="text-3xl text-white" />
              <span className="text-white">Edit</span>
            </Link>

            <Link href="#">
              <AiFillDelete className="text-3xl text-red-700" />
              <span className="text-white">Delete</span>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllBookCard;
