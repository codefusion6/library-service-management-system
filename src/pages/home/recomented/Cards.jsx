"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaEye, FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { Tooltip, Button } from "@nextui-org/react";
import Link from "next/link";
import { UserAuth } from "@/app/provider/context/AuthContext";
import toast from "react-hot-toast";
import { addFavourite } from "@/libs/actions/favourite.action";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";
// import { addFavourite } from "@/libs/actions/favourite.action";

const Cards = ({ books }) => {
  const { user } = UserAuth();
  const router = useRouter()

  const handleFavouriteClick = async (bookId) => {
    const favouritBook = {
      email: user?.email,
      bookId: bookId,
    };

    if (!user) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login")
          // redirect("/login")
        }
      });
    } else {
      try {
        console.log(favouritBook)
        const { result } = await addFavourite(favouritBook);
        // console.log(result)
        if (result) {
          toast.success("Book added to your favourite list");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
  }




  return (
    <>
      {books?.map((items, index) => (
        <Card
          key={index}
          className="py-1 border shadow-md relative transition-transform duration-300 transform hover:scale-95 group">
          <CardBody className="py-1 card-inner overflow-hidden">
            <Image
              alt="Card background"
              className="rounded-xl p-1 w-full"
              src={items?.bookCover}
              width={200}
              height={400}
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
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start py-2">
            <div className="space-y-2">
              <p className="uppercase font-bold text-center flex text-2xl text-yellow-400">
                {/* {renderStars(items.rating)} */}
              </p>
              <h4 className="font-semibold text-lg mt-2">{items?.bookName}</h4>
              <h4 className="text-md mt-2 uppercase sm:text-lg font-medium">{items?.authorName}</h4>
            </div>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default Cards;
