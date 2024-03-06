"use client";
import BannerSlider from "@/components/Home/Slider/BannerSlider";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 lg:py-0 px-1">
      <div className="container mx-auto ">
        <div className="justify-content-center align-items-center grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-3">
          <div className="flex flex-col justify-around gap-2 px-5 lg:px-0">
            <h2 className="text-3xl md:min-h-20 sm:text-7xl lg:text-5xl xl:text-7xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-600">
              Library Service Management
            </h2>
            <div className="flex flex-col gap-5 lg:gap-12">
              <p className="md:text-xl font-base md:font-normal text-left">
                &quot;Explore a world of knowledge with our Library Service
                Management! Borrow, bookmark, and read your favorite books
                effortlessly. Unlock the joy of reading with our user-friendly
                platform. Your gateway to an enriched reading experience
                awaits!&quot;
              </p>
              <div className="flex gap-5 font-medium">
                <Link href="/allBooks">
                  <button className="text-xl w-28 h-12 before:block before:absolute bg-[#f3f0f0] hover:text-sky-900 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform text-sky-500 bg-transparent border-2 overflow-hidden border-sky-700 duration-500">
                    Button
                  </button>
                </Link>
                <Link href="">
                  <button className="text-xl w-28 h-12 bg-sky-700 hover:scale-95 text-white duration-300">
                    Button
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <BannerSlider></BannerSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
