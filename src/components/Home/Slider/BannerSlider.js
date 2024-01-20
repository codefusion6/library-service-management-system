"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../../app/styles/styles.css";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";

import slide1 from "../../../../public/images/slider-1.jpg";
import slide2 from "../../../../public/images/slider-2.jpg";
import slide3 from "../../../../public/images/slider-3.jpg";
import slide4 from "../../../../public/images/slider-4.jpg";
const BannerSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="">
        <Image src={slide1} alt="slider"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide2} alt="slider"></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide3} alt="slider"></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide4} alt="slider"></Image>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
