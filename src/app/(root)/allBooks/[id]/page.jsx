import {  Button, Image } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { getBook, getBooksByAuthor } from "@/libs/actions/book.action";
import { FaRegStar } from "react-icons/fa";
import Comment from "@/components/comment/Comment";
// import Image from "next/image";

const page = async ({ params, authorName }) => {
  const singleBook = await getBook(params.id);
  const authBook = await getBooksByAuthor({authorName: authorName})

  console.log(authBook);

  return (
    <main className="min-h-screen pt-32">
      <div className="container mx-auto m-5">
        <div className="md:flex flex-wrap gap-5">
          <div className=" space-y-4">
            <Image
              src={singleBook.bookCover}
              alt="Card Image"
              width={270}
              height={270}
              style={{ opacity: "1" }}
              className="w-full h-full object-cover shadow-gray-400 shadow-lg rounded-r-2xl object-center"
            />
            <Button className="w-full rounded-xl hover:bg-lime-700 bg-green-600 text-white font-bold px-5 py-2">
              <Link href={`/allBooks/${singleBook._id}/view-pdf`}>
                Went to read
              </Link>
            </Button>
            <Button className="w-full rounded-xl hover:bg-lime-700 border text-black border-green-600  hover:text-white font-bold px-5 py-2">
              <Link href="#">Price $10.32</Link>
            </Button>
            <p className="flex gap-2 items-center justify-center">
              <FaRegStar className="text-3xl" />
              <FaRegStar className="text-3xl" />
              <FaRegStar className="text-3xl" />
              <FaRegStar className="text-3xl" />
              <FaRegStar className="text-3xl" />
            </p>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-2xl uppercase font-bold">
              {singleBook.bookName}
            </div>
            <span>By</span>
            <h4 className="font-bold text-large">{singleBook.authorName}</h4>
            <p className="text-base">{singleBook.bookDescription}</p>
            <p className="text-base">
              <span className="font-semibold">Category:</span>
              {singleBook.category}
            </p>
            <div className="flex gap-2 items-center">
              <Image
                alt="author img"
                src={singleBook.authorImage}
                width={30}
                height={30}
              />
              <p className="font-semibold">{singleBook.publisherEmail}</p>
            </div>
            <hr />
            <div>
              <Comment></Comment>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

// border border-yellow-400 hover:bg-yellow-400
