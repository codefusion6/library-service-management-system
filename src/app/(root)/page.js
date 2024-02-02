"use client"
import React from "react";
import booksData from "../../../public/books.json";
import Banner from "@/pages/home/Banner";
import FAQ from "@/pages/home/faq/FAQ";
import Slider from "@/pages/home/Slider/Slider";
import HomeContact from "@/shared/HomeContact";
import Feature from "@/pages/home/Feature";
<<<<<<< HEAD
import RecommendedBooks from "@/pages/home/recomented/RecommendedBooks";
import Chatbot from "@/components/chatbot/chatbot";
// import Contact from "@/components/home/Contact";
=======
import Chatbot from "@/components/chatbot/chatbot";
import BookTypes from "@/pages/home/BookTypes/BookTypes";


>>>>>>> 7bd4e1b0f6c16a79ce5aeb9ee87d9158437e60ff

const HomePage = () => {
  return (
    <div className="lg:ml-8 lg:mr-8">
      <Banner />
      <RecommendedBooks></RecommendedBooks>
      <Feature books={booksData}></Feature>
      <Slider></Slider>
      <BookTypes />
      <FAQ></FAQ>
      <HomeContact></HomeContact>
    </div>
  );
};
export default HomePage;