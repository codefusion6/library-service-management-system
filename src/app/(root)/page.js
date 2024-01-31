"use client"
import React from "react";
import booksData from "../../../public/books.json";
import { NextUIProvider } from "@nextui-org/react";
import Banner from "@/pages/home/Banner";
import FAQ from "@/pages/home/faq/FAQ";
import Slider from "@/pages/home/Slider/Slider";
import HomeContact from "@/shared/HomeContact";
import Feature from "@/pages/home/Feature";



const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Feature books={booksData}></Feature>
      <Slider></Slider>
      <FAQ></FAQ>
      <HomeContact></HomeContact>
    </div>

  );
};
export default HomePage;