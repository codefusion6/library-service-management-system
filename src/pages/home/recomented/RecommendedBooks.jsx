
import React from "react";
import "./card.styles.css";
import Cards from "./Cards";

const RecommendedBooks = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <p className="text-3xl font-bold pb-2 pl-5 lg:pl-0">Recommenced Book&apos;s </p>
      
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-5 lg:p-0">
          <Cards></Cards>
        </div>
      </div>
    </section>
  );
};

export default RecommendedBooks;
