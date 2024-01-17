import React from 'react';
import Feature from '@/components/home/feature/Feature';
import booksData from '../../public/books.json';
import Banner from '@/components/home/Banner';
import Slider from '@/components/home/Slider/Slider';
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