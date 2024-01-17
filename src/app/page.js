import React from 'react';
import Feature from '@/components/home/feature/Feature';
import booksData from '../../public/books.json';
import Banner from '@/components/Home/Banner';
import Slider from '@/components/Home/Slider/Slider';
const HomePage = () => {
  return (
    <div>
      <Banner />
      <Feature books={booksData}></Feature>
      <Slider></Slider>
    </div>
  );
};

export default HomePage;