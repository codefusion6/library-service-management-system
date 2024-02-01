"use server";
import { fileUpload } from "./fileUpload.action";
import { connectDB } from "../database/MongoConnect";
import Book from "../database/models/bookModel/book";
import { revalidatePath } from "next/cache";

// create book
export const addBook = async (formData) => {
  const bookName = formData.get("bookName");
  const authorName = formData.get("authorName");
  const bookDescription = formData.get("bookDescription");
  const bookCover = formData.get("bookCover");
  const bookPdf = formData.get("bookPdf");
  const authorImage = formData.get("authorImage");
  const publisherEmail = formData.get("publisherEmail");
  const category = formData.get("category");
  try {
    // connect db
    await connectDB();

    // save files in public folder and recieve url
    const bookCoverUrl = await fileUpload(bookCover, "bookCover");
    const bookPdfUrl = await fileUpload(bookPdf, "bookPdf");
    const authorImageUrl = await fileUpload(authorImage, "authorImage");

    // data to be save in db
    const book = {
      bookName: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      bookCover: bookCoverUrl.file_url,
      bookPdf: bookPdfUrl.file_url,
      authorImage: authorImageUrl.file_url,
      publisherEmail: publisherEmail,
      category: category,
    };

    const result = await Book.create(book);
    revalidatePath("/dashboard/addbook");

    return { success: true, data: JSON.parse(JSON.stringify(result)) };
  } catch (error) {
    return {
      error: "Fill input properly or send the required data",
      errorDetails: JSON.parse(JSON.stringify(error)),
    };
  }
};

// many book
export const addManyBook = async () => {
  const books = [
    {
      bookName: "Fun Adventure",
      authorName: "Author A",
      bookDescription: "An exciting adventure book.",
      bookCover: "https://i.ibb.co/ggqDRjp/img-01.jpg",
      bookPdf: "https://example.com/fun-adventure-pdf",
      authorImage: "https://example.com/author-a-image",
      publisherEmail: "authorA@example.com",
      category: "Basic",
      price: "$19.99",
      starMarking: 4.5,
      image: "https://i.ibb.co/ggqDRjp/img-01.jpg",
    },
    {
      bookName: "Another Adventure",
      authorName: "Author B",
      bookDescription: "Another thrilling adventure awaits in this book.",
      bookCover: "https://i.ibb.co/c6LYn1H/img-02.jpg",
      bookPdf: "https://example.com/another-adventure-pdf",
      authorImage: "https://example.com/author-b-image",
      publisherEmail: "authorB@example.com",
      category: "Plus",
      price: "$24.99",
      starMarking: 4.2,
      image: "https://i.ibb.co/c6LYn1H/img-02.jpg",
    },
    {
      bookName: "The Third Book",
      authorName: "Author C",
      bookDescription: "A mysterious book that will keep you on the edge.",
      bookCover: "https://i.ibb.co/PWkCDsv/img-03.jpg",
      bookPdf: "https://example.com/third-book-pdf",
      authorImage: "https://example.com/author-c-image",
      publisherEmail: "authorC@example.com",
      category: "Elite",
      price: "$29.99",
      starMarking: 2,
      image: "https://i.ibb.co/PWkCDsv/img-03.jpg",
    },
    {
      bookName: "React Icon Star",
      authorName: "Author D",
      bookDescription: "A technology book with React insights.",
      bookCover: "https://i.ibb.co/jyF3hNx/img-04.jpg",
      bookPdf: "https://example.com/react-icon-star-pdf",
      authorImage: "https://example.com/author-d-image",
      publisherEmail: "authorD@example.com",
      category: "Basic",
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

// get all books
export const getAllBooks = async () => {
  try {
    // db connect
    await connectDB();

    // get all books from db
    const books = await Book.find();
    revalidatePath("/addbook");
    return { books: JSON.parse(JSON.stringify(books)) };
  } catch (error) {
    console.log(error);
  }
};

// single book

export const getBook = async (id) => {
  try {
    await connectDB();
    const result = await Book.findById(id);
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};

export const deleteBook = async (id) => {
  try {
    const result = await Book.findByIdAndDelete(id);
    revalidatePath("/dashboard/booklist");
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};
