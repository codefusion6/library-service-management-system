"use client";
// import BannerSlider from "@/components/Home/Slider/BannerSlider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImg from "@/assest/banner-section.png"
// import { TypeAnimation } from "react-type-animation";


const Banner = () => {


  return (
    <section className="lg:h-[80vh] flex items-center justify-center py-16 lg:py-0 px-1 bg-sky-600">
      <div className="container mx-auto">
        <div className="justify-content-center align-items-center grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col gap-y-8 gap-2 px-5 lg:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-100">
              Library Service Management
            </h2>
            <div className="flex flex-col gap-6 lg:gap-5">
              <p className="sm:text-base text-sm text-white" style={{ lineHeight: "2rem" }}>
                &quot;Explore a world of knowledge with our Library Service
                Management! Borrow, bookmark, and read your favorite books
                effortlessly. Unlock the joy of reading with our user-friendly
                platform. Your gateway to an enriched reading experience
                awaits!&quot;
              </p>
              <div className="flex gap-5 font-medium mt-5">
                <Link href="/allBooks">
                  <button className="text-lg w-28 h-12 before:block before:absolute hover:text-white hover:bg-sky-600 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform bg-transparent bg-white text-sky-600 overflow-hidden border duration-500">
                    Explore
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="text-lg w-28 h-12 border hover:scale-95 text-white duration-300 hover:text-sky-600 hover:bg-white">
                    Subscribe
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={bannerImg} alt="Banner img" className="w-full" width={400} height={300} />
            </div>
            {/* <BannerSlider></BannerSlider> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
