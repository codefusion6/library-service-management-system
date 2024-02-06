"use server";
import { getAllBooks } from "@/libs/actions/book.action";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "use-debounce";

const Search = async () => {
  const data = await getAllBooks();

  const [text, setText] = useState("");
  const router = useRouter();
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    if (!query) {
      router.push(`/allBooks`);
    } else {
      router.push(`/allBooks?search=${query}`);
    }
  }, [query, router]);
  

  return (
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        value={text}
        placeholder="Search movies..."
        onChange={(e) => setText(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default Search;
