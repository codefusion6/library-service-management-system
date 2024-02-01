"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./styles.css";

import { EffectCube, Pagination } from "swiper/modules";
import Image from "next/image";

const AllBooksSlider = () => {
  return (
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image width={400} height={400} alt="card" className="w-full" src="https://i.ibb.co/3kbYLkR/allbooks.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={400} height={400} alt="card" className="w-full" src="https://i.ibb.co/3kbYLkR/allbooks.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={400} height={400} alt="card" className="w-full" src="https://i.ibb.co/3kbYLkR/allbooks.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={400} height={400} alt="card" className="w-full"  src="https://i.ibb.co/3kbYLkR/allbooks.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AllBooksSlider;
