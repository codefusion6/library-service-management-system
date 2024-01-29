"use server";
import { NextResponse } from "next/server";
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
    return { error: "Fill input properly or send the required data" };
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

// export const deleteBook = async() => {

// }
