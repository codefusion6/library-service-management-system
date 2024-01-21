"use client"
import React from "react";
import booksData from "../../public/books.json";
import { NextUIProvider } from "@nextui-org/react";
import Banner from "@/pages/home/Banner";
import FAQ from "@/pages/home/faq/FAQ";
import Slider from "@/pages/home/Slider/Slider";
import HomeContact from "@/shared/HomeContact";
import Feature from "@/pages/home/Feature";
// import Contact from "@/components/home/Contact";

const HomePage = () => {
  return (
    <div className="bg-black text-white">
      <NextUIProvider>
        <Banner />
        <Feature books={booksData}></Feature>
        <Slider></Slider>
        <FAQ></FAQ>
        <HomeContact></HomeContact>
      </NextUIProvider>
    </div>

  );
};
export default HomePage;