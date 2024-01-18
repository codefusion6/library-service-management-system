"use client"
import React from "react";
import Feature from "@/components/home/feature/Feature";
import booksData from "../../public/books.json";
import Banner from "@/components/home/Banner";
import Slider from "@/components/home/Slider/Slider";
import { Accordion, NextUIProvider } from "@nextui-org/react";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";

const HomePage = () => {
  return (
    <div>
      <NextUIProvider>
        <Banner />
        <Feature books={booksData}></Feature>
        <Slider></Slider>
        <FAQ></FAQ>
        <Contact></Contact>
      </NextUIProvider>
    </div>

  );
};
export default HomePage;
