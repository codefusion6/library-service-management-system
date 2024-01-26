"use client";
import React, { useRef, useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../../../../src/app/styles/swiper.module.css";
import Image from "next/image";
const SwiperSlider = () => {
  return (
    <div className="authors-carousel">
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
          <div className="">
            <Card className="py-4 card border shadow-md ">
              <CardHeader className="pb-0 pt-2 px-4 space-y-2 flex-col items-start">
                <h1 className="text-lg uppercase font-bold">
                  Kazi Nazrul Islam
                </h1>
                <small className="text-default-500">
                  (25 May 1899 - 29 August 1976)
                </small>
                <p className="font-base text-sm">
                  Often referred to as the &apos;Rebel Poet&apos; and known for
                  his revolutionary poetry.
                </p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl" style={{ height: "310px" }}
                  src="https://i.ibb.co/BPvwNtk/author1.jpg"
                  width={270}
                  height={50}
                />
              </CardBody>
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Card className="py-4 card border shadow-md ">
              <CardHeader className="pb-0 pt-2 px-4 space-y-2 flex-col items-start">
                <h1 className="text-lg uppercase font-bold">Humayun Ahmed </h1>
                <small className="text-default-500">
                  ( 13 November 1948 - 19 July 2012)
                </small>
                <p className="font-base text-sm">
                  A highly popular and influential author, playwright, and
                  filmmaker in Bangladesh.
                </p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl" style={{ height: "310px" }}
                  src="https://i.ibb.co/4NnR3WH/author-4.jpg"
                  width={270}
                  height={50}
                />
              </CardBody>
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div>
            <Card className="py-4 card border shadow-md ">
              <CardHeader className="pb-0 pt-2 px-4 space-y-2 flex-col items-start">
                <h1 className="text-lg uppercase font-bold">
                  Muhammad Zafar Iqbal{" "}
                </h1>
                <small className="text-default-500">( 23 December 1952)</small>
                <p className="font-base text-sm">
                  A prolific writer of science fiction and children&apos;s
                  literature.
                </p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl" style={{ height: "310px" }}
                  src="https://i.ibb.co/vdBrDTr/author-3.jpg"
                  width={270}
                  height={50}
                />
              </CardBody>
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Card className="py-4 card border shadow-md ">
              <CardHeader className="pb-0 pt-2 px-4 space-y-2 flex-col items-start">
                <h1 className="text-lg uppercase font-bold">
                  Rabindranath Tagore
                </h1>
                <small className="text-default-500">
                  ( 7 May 1861 - 7 August 1941)
                </small>
                <p className="font-base text-sm">
                  Rabindranath Tagore was a polymath from India, a poet,
                  philosopher, musician, writer, and artist.
                </p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl" style={{ height: "310px" }}
                  src="https://i.ibb.co/qJ6QHKn/author-2.jpg"
                  width={270}
                  height={50}
                />
              </CardBody>
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Card className="py-4 card border shadow-md ">
              <CardHeader className="pb-0 pt-2 px-4 space-y-2 flex-col items-start">
                <h1 className="text-lg uppercase font-bold">Tahmima Anam</h1>
                <small className="text-default-500">(8 October 1975)</small>
                <p className="font-base text-sm">
                  Known for works like &quot;A Golden Age&quot; and &quot;The
                  Good Muslim.&quot;
                </p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl" style={{ height: "310px" }}
                  src="https://i.ibb.co/g4Ykb0y/tahmima.jpg"
                  width={270}
                  height={50}
                />
              </CardBody>
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Card className="py-4 card border shadow-md ">
              <CardHeader className="pb-0 pt-2 px-4 space-y-2 flex-col items-start">
                <h1 className="text-lg uppercase font-bold">
                  Abdul Mannan Syed
                </h1>
                <small className="text-default-500">(24 September 1943)</small>
                <p className="font-base text-sm">
                  A prominent Bangladeshi poet and essayist known for his
                  contributions to Bengali literature.
                </p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl" style={{ height: "310px" }}
                  src="https://i.ibb.co/LCmdRDZ/abdul.jpg"
                  width={270}
                  height={50}
                />
              </CardBody>
            </Card>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
