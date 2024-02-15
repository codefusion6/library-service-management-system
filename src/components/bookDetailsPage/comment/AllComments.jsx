"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const AllComments = ({ allComments }) => {
  const [showAll, setShowAll] = useState(false);
  const { user } = UserAuth();
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 1; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    return stars;
  };

  return (
    <div>
      {allComments?.data
        ?.slice(0, showAll ? allComments?.data?.length : 1)
        .map((comment, index) => (
          <div key={index} className="my-3">
            <div  className="flex gap-3 items-start justify-start">
            <Image
              alt="user Image"
              src={user?.photoURL}
              width={30}
              height={30}
              className="size-10 rounded-full "
            />
            <div className="border shadow-lg rounded-lg px-3 py-2 lg:w-1/3 w-full">
              <p className="text-lg font-semibold">
                {comment.commentDescription}
              </p>
              <div className="flex">{renderStars(comment.ratingNumber)}</div>
            </div>
          </div>

          </div>

        ))}
      {allComments?.data?.length > 1 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-white cursor-pointer border px-2 py-1 rounded-md hover:bg-lime-700 bg-green-600 "
        >
          {showAll ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default AllComments;
