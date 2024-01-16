import React from 'react';
import Feature from '@/components/feature/Feature';
import booksData from '../../public/books.json';
const HomePage = () => {
  return (
    <div>
      <Feature books={booksData}></Feature>
    </div>
  );
};

export default HomePage;
