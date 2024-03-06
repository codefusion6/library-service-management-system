import React from "react";
import "./bookType.module.css";
import Link from "next/link";

const BookTypes = () => {
  return (
    <section className="w-full">
      <div
        style={{ backgroundImage: 'url("https://i.ibb.co/X2HZbX8/bb.jpg")' }}
        className="w-full h-[400px] my-10 bg-fixed"
      >
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center text-white space-y-4">
          <h2 className="text-3xl md:text-5xl mb-4">Best Books</h2>
          <p>Make your mind refresh and friends a book</p>
          <Link href="/pricing">
            <button className=" border-blue-600 border-3 w-[30vh] hover:scale-95 duration-300 h-16  text-white relative overflow-hidden group z-10 rounded-lg">
              <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
              <span className="absolute bg-gradient-to-r from-[#08407f] to-[#096bdc] rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
              <span className="absolute bg-sky-900 rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
              <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">
                Buy Subscription
              </span>
              Become A Member
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookTypes;
