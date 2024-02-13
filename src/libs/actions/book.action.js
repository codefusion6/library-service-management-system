"use server";
// import { fileUpload } from "./fileUpload.action";
import { connectDB } from "../database/MongoConnect";
import Book from "../database/models/bookModel/book";
import { revalidatePath } from "next/cache";
import Favourite from "../database/models/favouriteModel/favourite";
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
  // console.log(bookCover, bookPdf, authorImage);
  try {
    await connectDB();
    // data to be save in db
    const book = {
      bookName: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      bookCover: bookCover,
      bookPdf: bookPdf,
      authorImage: authorImage,
      publisherEmail: publisherEmail,
      category: category,
    };

    const result = await Book.create(book);
    revalidatePath("/dashboard/addbook");

    return JSON.parse(JSON.stringify({ success: true, data: result }));
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
export const getAllBooks = async ({ query, page }) => {
  try {
    await connectDB();
    // get all books from db
    const per_page = 6;
    const pageNumber = page || 1;
    const count = await Book.find().countDocuments();
    const books = await Book.find().limit(per_page).skip((pageNumber - 1) * per_page);
    const totalPage = Math.ceil(count / per_page);
    revalidatePath("/addbook");
    return JSON.parse(JSON.stringify({ books: books, totalPage }));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};

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
// get the books based on author name
export const getBooksByAuthor = async () => {
  try {
    await connectDB();
    const result = await Book.find({ authorName: authorName });
    console.log(result)
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
}
//  get all favourite books
export const getFavouriteBook = async (email) => {
  try {
    await connectDB();
    const query = { email: email };
    const result = await Favourite.findOne(query);
    const favouriteBookids = result ? result.bookIds : [];
    const bookResult = await Book.find({
      _id: {
        $in: favouriteBookids
      }
    });
    revalidatePath("/dashboard/favourite")
    return JSON.parse(JSON.stringify(bookResult));
  } catch (error) {
    return error;
  }
};
// get the books numbers for the dashboard Cart
export const getBooksNumber = async () => {
  try {
    await connectDB();
    const bookNum = await Book.find().countDocuments();
    revalidatePath("/dashboard")
    return JSON.parse(JSON.stringify(bookNum))
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};

// export const deleteFavourite = async (id, email) => {
//   console.log(id)
//   try {
//     const query = { email: email }
//     const favouriteId = await Favourite.find(query)
//     favouriteId.map((items) => {
//       console.log(items.bookIds.length)
//       const removeid = items.bookIds.find(removeFavourite => JSON.parse(JSON.stringify(removeFavourite)) === id)
//     })
//     // const result = await Favourite.findByIdAndDelete(id);
//     revalidatePath("/dashboard/favourite");
//     return JSON.parse(JSON.stringify(result));
//   } catch (error) {
//     return JSON.parse(JSON.stringify(error));
//   }
// };

export const deleteFavourite = async (email, bookid) => {
  try {
    await connectDB();
    const result = await Favourite.findOneAndUpdate({ email: email }, { $pull: { bookIds: bookIdToRemove } }, { new: true });
    const favouriteBookids = result ? result.bookIds : [];
    const bookResult = await Book.find({
      _id: {
        $in: favouriteBookids
      }
    });
    revalidatePath("/dashboard/favourite")
    return JSON.parse(JSON.stringify(bookResult));
  } catch (error) {
    return error;
  }
};