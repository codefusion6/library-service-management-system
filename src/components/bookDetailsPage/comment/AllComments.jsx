"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const AllComments = ({ allComments }) => {
  const { user } = UserAuth();
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
    <div>
      {allComments?.data?.map((comment, index) => (
        <div key={index} className="flex gap-3 items-start">
          <Image
            alt="user Image"
            src={user?.photoURL}
            width={30}
            height={30}
            className="size-10 rounded-full "
          ></Image>
          <div className="space-y-1 border shadow-lg rounded-lg my-3 px-3 py-2 lg:w-1/3 w-full">
            <p className="text-lg font-semibold">
              {comment.commentDescription}
            </p>
            <div className="flex">{renderStars(comment.ratingNumber)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllComments;
