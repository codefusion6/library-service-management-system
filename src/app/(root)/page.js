"use client"
import React from "react";
import booksData from "../../../public/books.json";
import Banner from "@/pages/home/Banner";
import FAQ from "@/pages/home/faq/FAQ";
import Slider from "@/pages/home/Slider/Slider";
import HomeContact from "@/shared/HomeContact";
import Feature from "@/pages/home/Feature";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import RecommendedBooks from "@/pages/home/recomented/RecommendedBooks";
import BookTypes from "@/pages/home/BookTypes/BookTypes";
import Chatbot from "@/components/chatbot/chatbot";
// import Contact from "@/components/home/Contact";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <RecommendedBooks></RecommendedBooks>
      <Feature books={booksData}></Feature>
      <Slider></Slider>
      <BookTypes />
      <FAQ></FAQ>
      <HomeContact></HomeContact>
      <Chatbot></Chatbot>
    </div>

  );
};
export default HomePage;