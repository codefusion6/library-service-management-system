import React from 'react';
import Feature from '@/components/home/feature/Feature';
import booksData from '../../public/books.json';
import Banner from "@/components/layout/Banner";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <Feature books={booksData}></Feature>
    </div>
  );
};

export default HomePage;