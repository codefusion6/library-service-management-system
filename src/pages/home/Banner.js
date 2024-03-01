"use client"
import BannerSlider from "@/components/Home/Slider/BannerSlider";
import { Button } from "@nextui-org/react";
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
              <TypeAnimation
                sequence={["", 1000, "Library Service Management", 1000]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
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
               
               <button className="text-xl w-32 h-12 bg-[#1E293B] text-white relative overflow-hidden group z-10 rounded-lg">
                 <span className="absolute bg-white rotate-12
                -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 
                origin-left transform transition-transform"></span><span className="absolute bg-green-700 
                rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100
                 origin-left transform transition-transform"></span><span className="absolute bg-green-900 
                 rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50
                  origin-left transform transition-transform"></span><span className="absolute opacity-0 
                  group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10
                   text-white">All Books</span> Explore</button>
               </Link>
                {/* <Button
                  color="primary"
                  className="bg-gradient-to-tr from-yellow-200 to-[#1ba752] text-white shadow-lg py-2 px-4 md:px-6 rounded-md"
                  size="lg"
                >
                  Buy Now
                </Button> */}
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
