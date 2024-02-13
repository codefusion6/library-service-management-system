"use client"
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPage}) => {

  return (
    <div className="flex justify-center text-center items-center gap-5 my-5">
      <Link className="" href={`?page=${currentPage > 1 ? currentPage - 1 : currentPage}`}>
        <button disabled={currentPage === 1 ? true : false} className="text-3xl p-1 font-bold bg-primary text-white disabled:bg-gray-500"><IoIosArrowBack className="" /></button>
      </Link>
      {[...Array(totalPage)].map((items, index) => (
        <Link href={`?page=${index + 1}`} key={index}>
          <Button
            // onClick={() => setPage(index + 1)}
            size="sm"
            className={`text-2xl border-pink-500 border px-3 rounded-md ${currentPage === index + 1 && "bg-pink-600 text-white hover:bg-pink-600"}`}>
            {index + 1}
          </Button>
        </Link>
      ))}
      <Link href={`?page=${currentPage === totalPage ? totalPage : currentPage + 1}`} >
        <button disabled={currentPage === totalPage ? true : false} className="text-3xl p-1 font-bold bg-primary text-white disabled:bg-gray-500"><IoIosArrowForward /></button>
      </Link>
    </div>
  );
};
export default Pagination;
