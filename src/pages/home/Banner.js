// import BannerSlider from "@/components/home/Slider/BannerSlider";
<<<<<<< HEAD
import { Button } from "@nextui-org/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import BannerSlider from '../../components/Home/Slider/BannerSlider';

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 lg:py-0 px-1" >
=======
import BannerSlider from "@/components/Home/Slider/BannerSlider";
import { Button } from "@nextui-org/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 lg:py-0 px-1">
>>>>>>> 43c41c7ce737b18f87b2b29540cf1a41e356ebfc
      <div className="container mx-auto ">
        <div className="justify-content-center align-items-center grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-3">
          <div className="flex flex-col justify-around gap-2">
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
                <Button
                  color="primary"
                  variant="bordered"
<<<<<<< HEAD
                  className="font-bold "
=======
                  className="font-bold py-2 px-4 rounded-md border-1 border-[#1ba752] md:px-6"
>>>>>>> 43c41c7ce737b18f87b2b29540cf1a41e356ebfc
                  size="lg"
                >
                  Explore
                </Button>
                <Button
                  color="primary"
<<<<<<< HEAD
                  className="bg-gradient-to-tr from-yellow-200 to-[#1ba752] text-white shadow-lg"
=======
                  className="bg-gradient-to-tr from-yellow-200 to-[#1ba752] text-white shadow-lg py-2 px-4 md:px-6 rounded-md"
>>>>>>> 43c41c7ce737b18f87b2b29540cf1a41e356ebfc
                  size="lg"
                >
                  Buy Now
                </Button>
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
