"use client"
import React from "react";
import booksData from "../../public/books.json";
import { NextUIProvider } from "@nextui-org/react";
import Banner from "@/pages/home/Banner";
import FAQ from "@/pages/home/faq/FAQ";
import Slider from "@/pages/home/Slider/Slider";
import Feature from "@/pages/home/Feature";

const HomePage = () => {
  return (
    <div>
      <NextUIProvider>
        <Banner />
        <Feature books={booksData}></Feature>
        <Slider></Slider>
        <FAQ></FAQ>
      </NextUIProvider>
    </div>

  );
};
export default HomePage;