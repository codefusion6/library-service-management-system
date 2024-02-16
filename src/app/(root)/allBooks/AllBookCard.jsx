"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FaEye, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { UserAuth } from "@/app/provider/context/AuthContext";
import { addFavourite } from "@/libs/actions/favourite.action";
import toast from "react-hot-toast";

const AllBookCard = ({ books }) => {
  const { user } = UserAuth();

  const handleFavouriteClick = async (bookId) => {
    console.log(bookId);
    const favouritBook = {
      email: user.email,
      bookId: bookId,
    }
    try {
      const response = await addFavourite(favouritBook)
      // console.log(favouritBook)
      if (response.success) {
        toast.success("Book added to your favourite list")
        // console.log(response)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {books?.map((book, index) => (
        <Card
          key={index}
          className="border hover:border-green-500 hover:border-2 text-center shadow-xl rounded-lg relative overflow-hidden group">
          <CardBody className="overflow-visible">
            <Image
              alt="Card Image"
              src={book.bookCover}
              width={270}
              height={270} />
          </CardBody>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
          <div className="absolute top-0 left-0 w-full h-full transform flex justify-center pb-10 items-end space-x-4 opacity-0 group-hover:opacity-100 transition-opacity gap-3">
            <Link href={`/allBooks/${book._id}`} className="">
              <FaEye className="text-3xl text-white hover:text-pink-600" />
              <span className="text-white">View</span>
            </Link>

            <button className="flex justify-center flex-col items-center" onClick={() => handleFavouriteClick(book._id)}>
              <FaHeart className="text-3xl text-white hover:text-pink-600" />
              <span className="text-white text-sm">Add to favourit</span>
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllBookCard;
