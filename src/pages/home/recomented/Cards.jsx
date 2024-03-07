"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaEye, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import { Tooltip, Button } from "@nextui-org/react";
import Link from "next/link";
import { UserAuth } from "@/app/provider/context/AuthContext";
import toast from "react-hot-toast";
import { addFavourite } from "@/libs/actions/favourite.action";

<<<<<<< HEAD
const Cards = ({ books }) => {
  const { user, getRolebaseUser } = UserAuth();
  // console.log(getRolebaseUser)
  const handleFavouriteClick = async (bookId) => {
    const favouritBook = {
      email: user.email,
      bookId: bookId,
    };
=======
const Cards = () => {
  const data = [
    {
      image_url: "https://i.ibb.co/ZHNxKhm/image1.jpg",
      title: "Agnibeena",
      authorName: "Kazi Nazrul Islam",
      rating: 1.5,
    },
    {
      image_url: "https://i.ibb.co/ZxmCxVC/book1.gif",
      title: "Post Master",
      authorName: "Rabindranath Tagore",
      rating: 3.8,
    },
    {
      image_url: "https://i.ibb.co/6Rr9ggd/book2.jpg",
      title: "Bachai Golpo",
      authorName: "Shibram Chakraborty",
      price: 14.99,
      rating: 4.2,
    },
    {
      image_url: "https://i.ibb.co/PTxG8dD/book3.jpg",
      title: "Kuhelika",
      authorName: "Kazi Nazrul Islam",
      price: 24.99,
      rating: 4.0,
    },
    {
      image_url: "https://i.ibb.co/KNLm4VK/book4.jpg",
      title: "Chutoder Nirbachon",
      authorName: "Kazi Nazrul Islam",
      rating: 4.8,
    },
    {
      image_url: "https://i.ibb.co/980s5Mn/book5.jpg",
      title: "Shrestho Golpo",
      authorName: "Taradas Bandyopadhyay",
      rating: 2.0,
    },
    {
      image_url: "https://i.ibb.co/wND8KSD/book6.gif",
      title: "Tuni Mem",
      authorName: "Syed Mujtaba Ali",
      rating: 4.1,
    },
    {
      image_url: "https://i.ibb.co/s3JDK3j/book7.png",
      title: "Golpo Somogra",
      authorName: "Sarat Chandra Chattopadhyay",
      rating: 4.6,
    },
  ];
>>>>>>> cf99e8ec7d93e6e409f9c8b4b7eed3cc6ac78769

    try {
      const response = await addFavourite(favouritBook);
      if (response.success) {
        toast.success("Book added to your favourite list", {
          position: "bottom-right"
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {books?.map((items, index) => (
        <Card
          key={index}
          className="py-1 border shadow-md relative transition-transform duration-300 transform hover:scale-95 group">
          <CardBody className="py-1 card-inner overflow-hidden">
            <Image
              alt="Card background"
<<<<<<< HEAD
              className="rounded-xl p-1 w-full"
              src={items?.bookCover}
              width={200}
              height={400}
=======
              className="rounded-xl w-full mx-auto p-3 h-full"
              src={items.image_url}
              width={270}
              height={250}
>>>>>>> cf99e8ec7d93e6e409f9c8b4b7eed3cc6ac78769
            />
            <ul className="opacity-80 flex gap-3 items-center justify-center duration-300 left-0 absolute -bottom-full w-full group-hover:bottom-0 overflow-hidden">
              <li className="bg-lime-500 p-2 rounded-2xl w-20 h-10 flex items-center justify-center">
                <Tooltip
                  showArrow={true}
                  content="view book"
                  className="text-black font-bold"
                >
                  <Button>
                    <Link href={`/allBooks/${items?._id}`}>
                      <FaEye className="text-2xl text-black"></FaEye>
                    </Link>
                  </Button>
                </Tooltip>
              </li>
              <li className="bg-lime-500 p-2 rounded-2xl w-20 h-10 flex items-center justify-center">
                <Tooltip
                  showArrow={true}
                  content="add to favorite"
                  className="text-black font-bold"
                >
                  <Button onClick={() => handleFavouriteClick(items?._id)}>
                    <FaRegHeart className="text-2xl text-black"></FaRegHeart>
                  </Button>
                </Tooltip>
              </li>
            </ul>
          </CardBody>
          <div className="border-b-1 pb-2 "></div>
<<<<<<< HEAD
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start py-2">
            <div className="space-y-2">
=======
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start  py-2">
            <div>
>>>>>>> cf99e8ec7d93e6e409f9c8b4b7eed3cc6ac78769
              <p className="uppercase font-bold text-center flex text-2xl text-yellow-400">
                {/* {renderStars(items.rating)} */}
              </p>
<<<<<<< HEAD
              <h4 className="font-semibold text-lg mt-2">{items?.bookName}</h4>
              <h4 className="text-md mt-2 uppercase sm:text-lg font-medium">{items?.authorName}</h4>
=======
              <h4 className="font-semibold text-lg">{items.title}</h4>
              <h6 className="font-medium uppercase text-lg">{items.authorName}</h6>
>>>>>>> cf99e8ec7d93e6e409f9c8b4b7eed3cc6ac78769
            </div>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default Cards;
