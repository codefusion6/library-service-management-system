"use client";
import Image from "next/image";
import React from "react";

const Pricing = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto mt-32 px-5 lg:px-0">
        <h1 className="text-3xl uppercase font-bold text-center my-10 text-shadow">
        Subscription Pricing Plans
        </h1>
        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* card1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
              <Image
                src="https://i.ibb.co/L6z7Pkc/4735.jpg"
                alt="card image"
                width={350}
                height={50}
                className="h-[350px] w-full mb-3 "
              ></Image>
              <div className="text-2xl font-semibold text-gray-800 mb-4">
                Basic
              </div>
              <p className="text-gray-600 mb-4">
                Our <strong>Basic</strong> package for user. Where user can view
                all the books but can not download the books.
              </p>
              <p className="text-2xl font-bold text-indigo-600">$2.00/month</p>
              <button className="mt-4 border text-black border-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded-full transition-colors duration-300">
                Subscribe
              </button>
            </div>
            {/* card2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
              <Image
                src="https://i.ibb.co/L0qYX95/img2.jpg"
                alt="card image"
                width={350}
                height={50}
                className="h-[350px] w-full mb-3"
              ></Image>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Elite
              </h3>
              <p className="text-gray-600 mb-4">
                Our <strong>Elite</strong> package for user. Where user can view
                all the books also can download the books.
              </p>
              <p className="text-2xl font-bold text-indigo-600">$2.50/month</p>
              <button className="mt-4 bg-indigo-600 hover:border hover:border-indigo-600 hover:bg-white hover:text-black text-white py-2 px-4 rounded-full transition-colors duration-300">
                Subscribe
              </button>
            </div>
            {/* card3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
              <Image
                src="https://i.ibb.co/tZMc11M/img3.jpg"
                alt="card image"
                width={350}
                height={50}
                className="h-[350px] w-full mb-3"
              ></Image>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Pluse
              </h3>
              <p className="text-gray-600 mb-4">
                Our <strong>Pluse</strong> package for user. Where user can view
                all the books,edit and download the books.
              </p>
              <p className="text-2xl font-bold text-indigo-600">$3.00/month</p>
              <button className="mt-4 border text-black border-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded-full transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
