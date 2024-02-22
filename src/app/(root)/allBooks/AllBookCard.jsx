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
  console.log(books)
  const { user } = UserAuth();
  const handleFavouriteClick = async (bookId) => {
    const favouritBook = {
      email: user.email,
      bookId: bookId,
    }

    try {
      const response = await addFavourite(favouritBook)
      if (response.success) {
        toast.success("Book added to your favourite list")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
// authorName bookName
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {books?.map((book, index) => (
        <div
          key={index}
          className="border hover:border-green-500 hover:border-2 text-center shadow-xl rounded-lg relative group py-5">
          <div className="overflow-visible">
            <Image
              className="[130px] rounded-md items-center text-center mx-auto"
              alt="Card Image"
              src={book.bookCover}
              width={270}
              height={270} />
              <h1 className="text-2xl font-semibold">{book.bookName}</h1>
              <h3 className="text-xl font-light">{book.authorName}</h3>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
          <div className="absolute top-0 left-0 w-full h-full transform flex justify-center pb-10 items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity gap-3">
            <Link href={`/allBooks/${book._id}`} className="">
              <FaEye className="text-3xl text-white hover:text-pink-600" />
              <span className="text-white">View</span>
            </Link>

            <button className="flex justify-center flex-col items-center" onClick={() => handleFavouriteClick(book._id)}>
              <FaHeart className="text-3xl text-white hover:text-pink-600" />
              <span className="text-white text-sm">Add to favourit</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBookCard;
