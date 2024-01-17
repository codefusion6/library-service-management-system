"use client"
import React from "react";
import Feature from "@/components/home/feature/Feature";
import booksData from "../../public/books.json";
import Banner from "@/components/home/Banner";
import Slider from "@/components/home/Slider/Slider";
import { Accordion, NextUIProvider } from "@nextui-org/react";
import MyAccordion from "@/components/home/Accordion";

const HomePage = () => {
  return (
    <div>
      <NextUIProvider>
        <Banner />
        <Feature books={booksData}></Feature>
        <Slider></Slider>
        <MyAccordion />
      </NextUIProvider>
    </div>

  );
};

export default HomePage;
