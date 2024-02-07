"use client";
import { getAllBooks } from "@/libs/actions/book.action";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const Search = () => {
  // const books = await getAllBooks();

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) =>
        book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [searchTerm, books]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        value={searchTerm}
        placeholder="Search for books"
        onChange={handleSearch}
        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
      />
      <div>
        {filteredBooks?.map((book) => (
          <div key={book._id}>{book.bookName}</div>
        ))}
        {/* <AllBookCard searchTerm={searchTerm}></AllBookCard> */}
      </div>
    </div>
  );
};

export default Search;
