"use server";

const { default: Book } = require("../database/models/bookModel/book");

export const addFeature = async () => {
  const books = [
    {
      name: "Fun Adventure",
      type: "Adventure",
      createdBy: "Author A",
      price: "$19.99",
      starMarking: 4.5,
      image: "https://i.ibb.co/ggqDRjp/img-01.jpg",
    },
    {
      name: "Another Adventure",
      type: "Adventure",
      createdBy: "Author B",
      price: "$24.99",
      starMarking: 4.2,
      image: "https://i.ibb.co/c6LYn1H/img-02.jpg",
    },
    {
      name: "The Third Book",
      type: "Mystery",
      createdBy: "Author C",
      price: "$29.99",
      starMarking: 2,
      image: "https://i.ibb.co/PWkCDsv/img-03.jpg",
    },
    {
      name: "React Icon Star",
      type: "Technology",
      createdBy: "Author D",
      price: "$14.99",
      starMarking: 3,
      image: "https://i.ibb.co/jyF3hNx/img-04.jpg",
    },
  ];

  try {
    const result = await Book.insertMany(books);
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};
