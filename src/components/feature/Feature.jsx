"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getFeaturedBooks } from '@/libs/actions/book.action';

const Features = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      try {
        const books = await getFeaturedBooks();
        setFeaturedBooks(books);
      } catch (error) {
        console.error('Error fetching featured books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedBooks();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {featuredBooks.map((book) => (
            <div key={book._id} className="p-4 border border-gray-300 rounded text-center">
              <h3 className="text-lg font-semibold mb-2">{book.bookName}</h3>
              {/* Show Book Cover for desktop and tablet */}
              <div className="hidden sm:block md:block">
                {book?.bookCover !== null && book?.bookCover !== 'null' && (
                  <Image
                    src={book?.bookCover}
                    alt="Book Cover"
                    width={250}
                    height={350}
                    className="mx-auto mt-4 mb-2 rounded"
                  />
                )}
              </div>
              {/* Show Book Cover for mobile */}
              <div className="block sm:hidden md:hidden">
                {book?.bookCover !== null && book?.bookCover !== 'null' && (
                  <Image
                    src={book?.bookCover}
                    alt="Book Cover"
                    width={250} // Adjust the width as needed
                    height={350} // Adjust the height as needed
                    className="mx-auto mt-4 mb-2 rounded"
                  />
                )}
              </div>
              {/* Author Image and Name */}
              <div className="flex items-center justify-center">
                {book?.authorImage && (
                  <Image
                    src={book.authorImage}
                    alt="Author"
                    width={30} // Adjust the width as needed
                    height={30} // Adjust the height as needed
                    className="rounded-full mr-2"
                  />
                )}
                <p className="text-gray-600 text-sm">{book?.authorName}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Features;

