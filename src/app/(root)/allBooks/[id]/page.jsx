import { Avatar, Button, Image } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { getBook } from "@/libs/actions/book.action";
import { FaRegStar } from "react-icons/fa";
// import Image from "next/image";

const page = async ({ params }) => {
<<<<<<< HEAD
    const singleBook = await getBook(params.id);
    return (
        <main className='min-h-screen pt-32'>
            <div className='container mx-auto'>
                <div>
                    <div className="w-full  flex flex-col md:flex-row md:w-2/3 mx-auto bg-white shadow-lg rounded-lg border hover:border-green-500 hover:border-2">
                        <div className="w-full  md:max-w-[300px] p-2">
                            <Image
                                src={singleBook.bookCover}
                                alt="Card Image"
                                width={270}
                                height={270}
                                style={{ opacity: "1" }}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex-1 p-2">
                            <p className="text-lg uppercase font-bold">{singleBook.bookName}</p>
                            <span>By</span>
                            <h4 className="font-bold text-large">{singleBook.authorName}</h4>
                            <p className="text-base font-medium">
                                Price: <span className="font-bold">{singleBook.category}</span>
                            </p>
                            <p className="text-yellow-500 flex">
                                <FaStar></FaStar>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </p>
                            <div className="flex my-5 gap-x-3">
                                <Button
                                    variant="ghost"
                                    className="hover:bg-gradient-to-r border from-yellow-200 to-green-600  hover:text-white text-black font-bold py-2 px-4 rounded"
                                    size="lg"
                                >
                                    Buy
                                </Button>
                                <Link href={`/allBooks/${singleBook._id}/view-pdf`} target="_blank" className="hover:bg-gradient-to-r from-yellow-200 to-green-600  hover:text-white text-black font-bold py-2 px-4 rounded border">
                                    <Button>
                                        View Pdf
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
=======
  const singleBook = await getBook(params.id);
  // console.log(singleBook);

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
>>>>>>> 29b49da3ae6d6d12f9c0e5cde56c5cb4045a134b
            </div>
            <span>By</span>
            <h4 className="font-bold text-large">{singleBook.authorName}</h4>
            <p className="text-base">{singleBook.bookDescription}</p>
            <p className="text-base">
              <span className="font-semibold">Category:</span>
              {singleBook.category}
            </p>

            {/* <Image
              alt="author image"
              src={singleBook.authorImage}
              width={30}
              height={20}
              className="w-70 rounded-full"
            ></Image> */}
            <div className="flex gap-2 items-center">
              <Image
                alt="author img"
                src={singleBook.authorImage}
                width={30}
                height={30}
              />
              <p className="font-semibold">{singleBook.publisherEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

// border border-yellow-400 hover:bg-yellow-400
