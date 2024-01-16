import React from 'react';
import booksData from '../../public/books.json';
import Banner from '@/components/Home/Banner';
import Feature from '@/components/Home/Feature';
const HomePage = () => {
  return (
    <div>
      <Banner />
      <Feature books={booksData}></Feature>
    </div>
  );
};

export default HomePage;