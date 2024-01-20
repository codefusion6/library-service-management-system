"use client";
import React from "react";
import Swiper from "./Swiper";
const Slider = () => {
  return (
    <section className="container mx-auto mt-16">
      <p className="text-3xl text-center mb-10">Meet Our <strong>Author&apos;s</strong></p>
      {/* <div className="grid grid-clos-1 md:grid-cols-2 gap-10">
        <div>

        </div> */}
        <div>

      <Swiper></Swiper>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Slider;
