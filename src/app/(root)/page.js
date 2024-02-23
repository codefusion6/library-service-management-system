"use client";
import React from "react";
<<<<<<< HEAD
=======
import booksData from "../../../public/books.json";
>>>>>>> d8e4eaf055d6b23c2c9ffdf91c099dfa5df3059e
import Banner from "@/pages/home/Banner";
import FAQ from "@/pages/home/faq/FAQ";
import Slider from "@/pages/home/Slider/Slider";
import HomeContact from "@/shared/HomeContact";
import RecommendedBooks from "@/pages/home/recomented/RecommendedBooks";
import BookTypes from "@/pages/home/BookTypes/BookTypes";
import Feature from "@/components/feature/Feature";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <RecommendedBooks></RecommendedBooks>
      <BookTypes />
<<<<<<< HEAD
      <Feature></Feature>
=======
      <Feature books={booksData}></Feature>
>>>>>>> d8e4eaf055d6b23c2c9ffdf91c099dfa5df3059e
      <Slider></Slider>
      <FAQ></FAQ>
      <HomeContact></HomeContact>
    </div>
  );
};
export default HomePage;
