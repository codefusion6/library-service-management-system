"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../../../../src/app/styles/swiper.module.css";
import SliderCard from "./SliderCard";
import Image from "next/image";
// import { Image } from "@nextui-org/react";
const SwiperSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <SliderCard></SliderCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://i.ibb.co/4NnR3WH/author-4.jpg"
            alt="slider image" height={550} width={350}
          ></Image>
        </SwiperSlide>
        <SwiperSlide className=""> <Image
            src="https://i.ibb.co/4NnR3WH/author-4.jpg"
            alt="slider image" height={550} width={350}
          ></Image></SwiperSlide>
        <SwiperSlide> <Image
            src="https://i.ibb.co/4NnR3WH/author-4.jpg"
            alt="slider image" height={550} width={350}
          ></Image></SwiperSlide>
        <SwiperSlide> <Image
            src="https://i.ibb.co/4NnR3WH/author-4.jpg"
            alt="slider image" height={550} width={350}
          ></Image></SwiperSlide>
        <SwiperSlide> <Image
            src="https://i.ibb.co/4NnR3WH/author-4.jpg"
            alt="slider image" height={550} width={350}
          ></Image></SwiperSlide>
        <SwiperSlide> <Image
            src="https://i.ibb.co/4NnR3WH/author-4.jpg"
            alt="slider image" height={550} width={350}
          ></Image></SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
