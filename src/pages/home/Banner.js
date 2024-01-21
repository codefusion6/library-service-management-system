import BannerSlider from "@/components/home/Slider/BannerSlider";
import { Button } from "@nextui-org/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="container mx-auto justify-content-center align-items-center grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-600">
          <TypeAnimation
            sequence={[
              "",
              1000,
              "Library Service Management",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
         
        </h2>
        <p className="text-xl font-normal text-left">
          &quot;Explore a world of knowledge with our Library Service
          Management! Borrow, bookmark, and read your favorite books
          effortlessly. Unlock the joy of reading with our user-friendly
          platform. Your gateway to an enriched reading experience awaits!&quot;
        </p>
        <div className="flex gap-5 font-medium ">
          <Button
            color="primary"
            variant="bordered"
            className="font-bold "
            size="lg"
          >
            Explore
          </Button>
          <Button
            color="primary"
            className="bg-gradient-to-tr from-yellow-200 to-[#1ba752] text-white shadow-lg"
            size="lg"
          >
            Buy Now
          </Button>
        </div>
      </div>
      <div>
        <BannerSlider></BannerSlider>
      </div>
    </div>
  );
};

export default Banner;
