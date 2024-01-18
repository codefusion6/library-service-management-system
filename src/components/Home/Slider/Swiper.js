"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../public/images/author1.jpeg";
import img2 from "../../../../public/images/author-2.jpeg";
import img3 from "../../../../public/images/author-3.jpeg";
import img4 from "../../../../public/images/author-4.jpeg";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Sliding = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="items-center mb-16"
    >
      <SwiperSlide className="text-center">
        <Image
          src={img1}
          alt="profile"
          className="border p-1 rounded-full mx-auto w-[250px]"
        />

        <h1 className="mt-3 text-2xl font-medium">Kazi Nazrul Islam</h1>
        <p className="mt-3 text-center font-normal">
          Revolutionary poet and the &quot;Rebel Poet&quot; of Bangladesh, Kazi
          Nazrul Islam, left an indelible mark on literature with his powerful
          verses that echoed the spirit of freedom and resistance.Kazi Nazrul
          Islam&apos;s revolutionary poetry not only stirred the hearts of his
          contemporaries but also ignited the flames of independence, as he
          fearlessly voiced the aspirations of a nation seeking freedom from
          oppression.
        </p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <Image
          src={img2}
          alt="profile"
          className="border p-1 rounded-full mx-auto w-[250px]"
        />

        <h1 className="mt-3 text-2xl font-medium ">Rabindranath Tagore</h1>
        <p className="mt-3 text-center font-normal">
          Renowned poet, philosopher, and the first non-European Nobel laureate
          in Literature, Rabindranath Tagore&apos;s profound writings continue
          to inspire and transcend cultural boundaries, celebrating the beauty
          of humanity.Beyond his literary genius, Rabindranath Tagore was a
          polymath, contributing to art, music, and education. His timeless
          compositions, including the national anthems of India and Bangladesh,
          reflect a universal vision of humanity.
        </p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <Image
          src={img3}
          alt="profile"
          className="border p-1 rounded-full mx-auto w-[250px]"
        />

        <h1 className="mt-3 text-2xl font-medium">Muhammad Zafar Iqbal</h1>
        <p className="mt-3 text-center font-normal">
          Prolific science fiction writer and eminent academic, Muhammad Zafar
          Iqbal has enriched Bangladeshi literature with his imaginative tales
          and contributions to the field of science and technology
          education.Muhammad Zafar Iqbal&apos;s science fiction narratives not
          only captivate the imagination but also inspire a fascination for the
          wonders of science. His dedication to promoting scientific knowledge
          has left an enduring impact on education in Bangladesh.
        </p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <Image
          src={img4}
          alt="profile"
          className="border p-1 rounded-full mx-auto w-[250px]"
        />
        F<h1 className="mt-3 text-2xl font-medium">Humayun Ahmed</h1>
        <p className="mt-3 text-center font-normal">
          A beloved storyteller and prolific author, Humayun Ahmed&apos;s
          literary works, spanning novels, dramas, and films, have captivated
          generations, making him a cultural icon in Bangladesh.Humayun
          Ahmed&apos;s literary legacy extends beyond his creative storytelling;
          his works explore the complexities of human relationships and societal
          issues, resonating with readers on a profound level. His influence on
          Bangladeshi literature is immeasurable.
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliding;
