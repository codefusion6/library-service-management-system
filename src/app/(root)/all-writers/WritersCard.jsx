import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSkype,
  FaYoutube,
} from "react-icons/fa";

const WritersCard = ({ allWriters }) => {
  const getShortDescription = (description, maxLength = 200) => {
    if (description.length > maxLength) {
      return (
        <span>
          {`${description.substring(0, maxLength)}... `}
          <Link href="#" className="text-blue-500">
            See More
          </Link>
        </span>
      );
    }
    return description;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {allWriters?.writers?.map((writer, index) => (
        <div
          key={index}
          className="p-4 border border-gray-300 rounded-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 relative"
        >
          <div className="aspect-w-4 aspect-h-5">
            <Image
              src={writer.authorImg}
              alt="writer image"
              className="rounded-xl object-cover"
              style={{ height: "310px" }}
              layout="responsive"
              width={250}
              height={384}
            />
          </div>
          <h2 className="text-xl font-bold mb-2 pt-2"> {writer.writerName}</h2>
          <p className="text-tiny mb-2">
            ({writer.dateOfBirth} - {writer.dateOfDeath})
          </p>
          <div className="flex gap-2">
            <Link href="#">
              <FaFacebook className="text-xl text-blue-500"></FaFacebook>
            </Link>
            <Link href="#">
              <FaYoutube className="text-xl text-red-700" />
            </Link>
            <Link href="#">
              <FaSkype className="text-xl text-blue-500"></FaSkype>
            </Link>
            <Link href="#">
              <FaGithub className="text-xl text-black"></FaGithub>
            </Link>
            <Link href="#">
              <FaLinkedin className="text-xl text-blue-800" />
            </Link>
          </div>
          <p className="text-sm mb-2">
            {getShortDescription(writer.description)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WritersCard;
