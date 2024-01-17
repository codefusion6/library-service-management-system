import React from "react";
import Feature from "@/components/home/feature/Feature";
import booksData from "../../public/books.json";
import Banner from "@/components/Home/Banner";
import Slider from "@/components/Home/Slider/Slider";
import { NextUIProvider } from "@nextui-org/react";

const HomePage = () => {
  return (
    <NextUIProvider>
      <div>
        <Banner />
        <Feature books={booksData}></Feature>
        <Slider></Slider>
      </div>
    </NextUIProvider>
  );
};

export default HomePage;
