"use server";

import { connectDB } from "../database/MongoConnect";
import BookRequest from "../database/models/requestBookModel/requestBook";

export const addRequestBook = async (formData) => {
  
  const bookName = formData.get("bookName");
  const authorName = formData.get("authorName");
  const requestSMS = formData.get("requestSMS");
  const userEmail = formData.get("email");
  const userName = formData.get("userName");
  const status = "pending";

  try {
    await connectDB();

    const requestBook = {
      bookName: bookName,
      authorName: authorName,
      requestSMS: requestSMS,
      status: status,
      userEmail: userEmail,
      userName: userName
    };
   console.log(requestBook);

    const result = await BookRequest.create(requestBook);
    console.log(result)

    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return {
      error: "Fill input properly or send the required data",
      errorDetails: JSON.stringify(error),
    };
  }
};

export const getRequestBook = async () => {
  try {
    await connectDB();
    const query = { status: "pending" };

    const requestBook = await BookRequest.find(query);

    return JSON.parse(JSON.stringify({ requestBook: requestBook }));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};
