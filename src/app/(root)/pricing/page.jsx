"use client";
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
        <div>
          <div className="bg-white p-6 w-96 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Library Pass
            </h3>
            <p className="text-gray-600 mb-4">
              Unlimited book borrowing + All online services
            </p>
            <p className="text-2xl font-bold text-indigo-600">$29.99/month</p>
            <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
