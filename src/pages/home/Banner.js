import BannerSlider from "@/components/home/Slider/BannerSlider";
import { Button } from "@nextui-org/react";
import React from "react";

const Banner = () => {
  return (
    <div className="container h-screen mx-auto justify-content-center align-items-center  grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="space-y-3">
            <h2 className="text-5xl font-bold">Library Service Management</h2>
            <p className="text-xl font-normal text-left">&quot;Explore a world of knowledge with our Library Service Management! Borrow, bookmark, and read your favorite books effortlessly. Unlock the joy of reading with our user-friendly platform. Your gateway to an enriched reading experience awaits!&quot;</p>
            <div className="flex gap-5 font-medium ">
                <Button color="primary" variant="bordered" className="font-bold"  size="lg">Explore</Button>
                <Button color="primary" variant="light" className="font-bold"  size="lg">Buy Now</Button>
            </div>
        </div>
      <div>
        <BannerSlider></BannerSlider>
      </div>
    </div>
  );
};

export default Banner;
