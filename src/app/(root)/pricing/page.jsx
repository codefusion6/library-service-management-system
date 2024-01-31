"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Pricing = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="mt-28 relative">
          <Image
            src="https://i.ibb.co/st7Bfw8/Pricing-Banner.jpg"
            alt="Pricing Banner"
            width={900}
            height={250}
            className="w-full h-[350px]"
          ></Image>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center">
            <TypeAnimation
              sequence={[
                "",
                1000,
                "We are have the bestest offer you!! ",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
        </div>
        <h1 className="text-3xl font-bold text-center my-5 text-shadow">
          {" "}
          Our Amazing package&apos;s{" "}
        </h1>
        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white p-6 w-96 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
              <Image
                src="https://i.ibb.co/L6z7Pkc/4735.jpg"
                alt="card image"
                width={350}
                height={50}
                className="h-[250px]"
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
            <div className="bg-white p-6 w-96 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
              <Image
                src="https://i.ibb.co/L0qYX95/img2.jpg"
                alt="card image"
                width={350}
                height={50}
                className="h-[250px]"
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
            <div className="bg-white p-6 w-96 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
              <Image
                src="https://i.ibb.co/tZMc11M/img3.jpg"
                alt="card image"
                width={350}
                height={50}
                className="h-[250px]"
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
