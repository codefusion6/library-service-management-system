"use client"
import React from "react";
import booksData from "../../../public/books.json";
import Banner from "@/pages/home/Banner";
import FAQ from "@/pages/home/faq/FAQ";
import Slider from "@/pages/home/Slider/Slider";
import HomeContact from "@/shared/HomeContact";
import Feature from "@/pages/home/Feature";
<<<<<<< HEAD
=======
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Chatbot from "@/components/chatbot/chatbot";


>>>>>>> dc9cffae9103359b38bb7444407727df4a4836d6

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Feature books={booksData}></Feature>
      <Slider></Slider>
      <FAQ></FAQ>
      <HomeContact></HomeContact>
      <Chatbot></Chatbot>
    </div>
  );
};
export default HomePage;