"use client";
import React from "react";
import booksData from "../../../public/books.json";
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
      <Feature books={booksData}></Feature>
      <Slider></Slider>
      <FAQ></FAQ>
      <HomeContact></HomeContact>
    </div>
  );
};
export default HomePage;
