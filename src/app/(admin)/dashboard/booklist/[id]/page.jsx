import React from "react";
import { Button} from "@nextui-org/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { getBook } from "@/libs/actions/book.action";

<<<<<<< HEAD
const BookDetails = ({ params }) => {
=======
const BookDetails = async ({params}) => {
  
>>>>>>> fcfa1fa8971035618e015f8629373706afb068dc
  console.log(params.id);

  const singleBook = await getBook(params.id);
  console.log(singleBook);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center my-5 font-medium text-green-700">
        Details Page
      </h2>
      <div className="w-full  flex flex-col md:flex-row max-w-md mx-auto bg-white shadow-lg rounded-lg hover:border-green-500 hover:border-2">
        <div className="w-1/3 md:w-full p-2">
          <Image
            src="https://i.ibb.co/7KTnVdz/book1.gif"
            alt="Card Image"
            width={270}
            height={270}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full p-2">
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
          <div className="flex my-5">
            <Button
              variant="ghost"
              className="hover:bg-gradient-to-r from-yellow-200 to-green-600  hover:text-white text-black font-bold py-2 px-4 rounded"
              size="lg"
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
