
import React from "react";

const BooksSidebar = () => {
  return (
    <section className="w-full">
      <div className="border-b-2 border-gray-100 shadow-md rounded-md mb-10">
        <h1 className="text-2xl font-semibold uppercase bg-gradient-to-r from-yellow-200 to-green-400 text-white p-2 mb-2">
          Category
        </h1>
        <ul className="space-y-1 text-xl py-5 px-3">
          <li>Books Name</li>
          <li>Novels</li>
          <li>References</li>
          <li>Size</li>
        </ul>
      </div>
    </section>
  );
};

export default BooksSidebar;
