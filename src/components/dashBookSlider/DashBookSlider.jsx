"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const DashBookSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="">
      <div className="container mx-auto">
        <div className="">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper "
          >
            <SwiperSlide>
              <Image
                src="https://i.ibb.co/nC6vF6D/img-1.jpg"
                width={250}
                height={100}
                alt="Picture of the slider"

              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://i.ibb.co/tZYVxkc/img-2.jpg"
                width={500}
                height={500}
                alt="Picture of the slider"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://i.ibb.co/5nXdJQ1/img-3.jpg"
                width={500}
                height={500}
                alt="Picture of the slider"
              ></Image>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DashBookSlider;
