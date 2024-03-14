"use client"
import React, { useEffect, useState } from "react";
import "./card.styles.css";
import Cards from "./Cards";
import { getRecommandedBooks } from "@/libs/actions/book.action";

const RecommendedBooks = () => {
  const [recommmededData, setrecommmededData] = useState([])
  const [dataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    const getData = () => {
      try {
        getRecommandedBooks()
          .then(data => {
            setrecommmededData(data)
            setDataLoading(false)
            // console.log(data)
          })
      } catch (error) {
        // console.log(error)
        error && setDataLoading(false)
      }
    }
    getData()
  }, [])
  // console.log(recommmededData)
  if (dataLoading) {
    return <h2>Loading...</h2>
  }
  if (!dataLoading) {
    return (
      <section className="py-20 bg-sky-100">
        <div className="container mx-auto">
          <p className="text-3xl font-bold pb-2 pl-5 lg:pl-0">Recommenced Book&apos;s </p>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-5 lg:p-0">
            <Cards books={recommmededData}></Cards>
          </div>
        </div>
      </section>
    );
  };
}

export default RecommendedBooks;
