"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaEye, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import { Tooltip, Button } from "@nextui-org/react";
import Link from "next/link";

const Cards = () => {
  const data = [
    {
      image_url: "https://i.ibb.co/ZHNxKhm/image1.jpg",
      title: "The Catcher in the Rye",
      price: 19.99,
      rating: 1.5,
    },
    {
      image_url: "https://i.ibb.co/ZxmCxVC/book1.gif",
      title: "To Kill a Mockingbird",
      price: 29.99,
      rating: 3.8,
    },
    {
      image_url: "https://i.ibb.co/6Rr9ggd/book2.jpg",
      title: "1984",
      price: 14.99,
      rating: 4.2,
    },
    {
      image_url: "https://i.ibb.co/PTxG8dD/book3.jpg",
      title: "The Great Gatsby",
      price: 24.99,
      rating: 4.0,
    },
    {
      image_url: "https://i.ibb.co/KNLm4VK/book4.jpg",
      title: "Harry Potter and the Sorcerer's Stone",
      price: 39.99,
      rating: 4.8,
    },
    {
      image_url: "https://i.ibb.co/980s5Mn/book5.jpg",
      title: "The Hobbit",
      price: 49.99,
      rating: 2.0,
    },
    {
      image_url: "https://i.ibb.co/wND8KSD/book6.gif",
      title: "Pride and Prejudice",
      price: 16.99,
      rating: 4.1,
    },
    {
      image_url: "https://i.ibb.co/s3JDK3j/book7.png",
      title: "The Lord of the Rings",
      price: 32.99,
      rating: 4.6,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }
    return stars;
  };

  return (
    <>
      {data.map((items, index) => (
        <Card
          key={index}
          className="py-1 border shadow-md relative transition-transform duration-300 transform hover:scale-95 group"
        >
          <CardBody className="py-2 card-inner overflow-hidden">
            <Image
              alt="Card background"
              className="rounded-xl w-full p-5"
              src={items.image_url}
              width={270}
              height={250}
            />
            <ul className="opacity-80 flex gap-3 items-center justify-center duration-300 left-0 absolute -bottom-full w-full group-hover:bottom-0 overflow-hidden">
              <li className="bg-lime-500 p-2 rounded-2xl w-20 h-10 flex items-center justify-center">
                <Tooltip
                  showArrow={true}
                  content="view book"
                  className="text-white font-bold"
                >
                  <Button>
                    <Link href="">
                      <FaEye className="text-2xl text-black"></FaEye>
                    </Link>
                  </Button>
                </Tooltip>
              </li>
              <li className="bg-lime-500 p-2 rounded-2xl w-20 h-10 flex items-center justify-center">
                <Tooltip
                  showArrow={true}
                  content="add to favorite"
                  className="text-white font-bold"
                >
                  <Button>
                    <FaRegHeart className="text-2xl text-black"></FaRegHeart>
                  </Button>
                </Tooltip>
              </li>
            </ul>
          </CardBody>

          <div className="border-b-1 pb-2 "></div>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center py-5">
            <div>
              <p className="uppercase font-bold text-center flex text-2xl text-yellow-400">
                {renderStars(items.rating)}
              </p>
              <h4 className="font-semibold text-lg">{items.title}</h4>
              <p className=" text-black text-xl font-bold">$ {items.price}</p>
            </div>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default Cards;