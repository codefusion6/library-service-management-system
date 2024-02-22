import { Button, Image } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { getBook, getBooksByAuthor } from "@/libs/actions/book.action";
import { FaRegHandPointDown, FaRegStar } from "react-icons/fa";
import Comment from "@/components/bookDetailsPage/comment/Comment";
import SimilarAuthor from "@/components/bookDetailsPage/similarAuthor/SimilarAuthor";
import AllComments from "@/components/bookDetailsPage/comment/AllComments";
import { getComment } from "@/libs/actions/comment.action";

const page = async ({ params }) => {
  const singleBook = await getBook(params.id);
  const authorBook = await getBooksByAuthor(singleBook.authorName);
  const allComments = await getComment();

  return (
    <main className="min-h-screen lg:p-0 p-10">
      <div className="container mx-auto m-5">
        <div className="md:flex flex-wrap gap-5">
          <div className=" space-y-4">
            <Image
              src={singleBook?.bookCover}
              alt="Card Image"
              width={270}
              height={270}
              style={{ opacity: "1" }}
              className="w-full h-full object-cover shadow-gray-400 shadow-lg rounded-r-2xl object-center"
            />
            <Button className="w-[80%] rounded-xl hover:bg-lime-700 bg-green-600 text-white font-bold px-5 py-2">
              <Link href={`/allBooks/${singleBook?._id}/view-pdf`}>
                Went to read
              </Link>
            </Button>
            <Button className="w-[80%] rounded-xl hover:bg-lime-700 border text-black border-green-600  hover:text-white font-bold px-5 py-2">
              <Link href="#">Price $10.32</Link>
            </Button>
            <Button className="w-[80%] rounded-xl hover:bg-lime-700 bg-green-600 text-white font-bold px-5 py-2">
              <a
                href="/Gitanjali.pdf"
                download="/Gitanjali.pdf"
                to="pdf"
                target="_blank"
              >
                Download
              </a>
            </Button>
          </div>
          <div className="flex-1 md:mt-0 mt-10 space-y-4">
            <div className="text-2xl uppercase font-bold">
              {singleBook?.bookName}
            </div>
            <span>By</span>
            <h4 className="font-bold text-large">{singleBook?.authorName}</h4>
            <p className="text-base">{singleBook?.bookDescription}</p>
            <p className="text-base">
              <span className="font-semibold">Category:</span>
              {singleBook?.category}
            </p>
            <div className="flex gap-2 items-center">
              <Image
                alt="author img"
                className="size-8"
                src={`${singleBook?.authorImage}`}
                width={30}
                height={30}
              />
              <p className="font-semibold">{singleBook?.publisherEmail}</p>
            </div>
            <hr />
            <div>
              <Comment></Comment>
              <h2 className="my-8 text-base font-semibold flex items-center gap-2">
                Your rating & review
                <span>
                  <FaRegHandPointDown />
                </span>
              </h2>
              <div >
                <AllComments allComments={allComments}></AllComments>
              </div>
            </div>
          </div>
        </div>
        <h2 className="my-20 text-2xl font-semibold border-b-3 pb-2">
          Similar Author Related Books
        </h2>
        <SimilarAuthor authorBook={authorBook}></SimilarAuthor>
      </div>
    </main>
  );
};

export default page;
