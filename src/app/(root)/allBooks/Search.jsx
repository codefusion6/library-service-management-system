"use client";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  // const books = await getAllBooks();



  

  return (
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
      
        placeholder="Search for books"
        
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
