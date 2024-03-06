"use client";
import React from "react";
import Image from "next/image";
import { FaEye, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { UserAuth } from "@/app/provider/context/AuthContext";
import { addFavourite } from "@/libs/actions/favourite.action";
import toast from "react-hot-toast";

const AllBookCard = ({ books }) => {
  const { user } = UserAuth();

  const handleFavouriteClick = async (bookId) => {
    const favouritBook = {
      email: user.email,
      bookId: bookId,
    };

    try {
      const response = await addFavourite(favouritBook);
      if (response.success) {
        toast.success("Book added to your favourite list");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // authorName bookName
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      {books?.map((book, index) => (
        <div
          key={index}
          className="hover:border-blue-600 border-transparent rounded-lg hover:border-2 hover:shadow-inner shadow-lg text-center shadow-slate-400300 relative group py-3
          w-full
          "
        >
          <div className="space-y-1">
            <Image
              className="w-[180px] h-full rounded-r-2xl items-center text-center mx-auto"
              alt="Card Image"
              src={book.bookCover}
              width={270}
              height={270}
            />
            <h1 className="text-xl font-semibold">{book.bookName}</h1>
            <h3 className="text-xl font-light">{book.authorName}</h3>
            <div className="flex gap-2 justify-center items-center">
              <Image
                alt="author img"
                className="size-6 rounded-full"
                src={book.authorImage}
                width={30}
                height={30}
              />
              <h3 className="text-tiny font-light">{book.publisherEmail}</h3>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
          <div className="absolute top-0 left-0 w-full h-full transform flex justify-center pb-10 items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity gap-3">
            <Link href={`/allBooks/${book._id}`} className="">
              <FaEye className="text-3xl text-white hover:text-pink-600" />
              <span className="text-white">View</span>
            </Link>

            <button
              className="flex justify-center flex-col items-center"
              onClick={() => handleFavouriteClick(book._id)}
            >
              <FaHeart className="text-3xl text-white hover:text-pink-600" />
              <span className="text-white text-sm">Add to Favorite</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBookCard;
