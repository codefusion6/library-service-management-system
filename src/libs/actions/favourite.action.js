"use server";
import { revalidatePath } from "next/cache";
import { connectDB } from "../database/MongoConnect";
import Favourite from "../database/models/favouriteModel/favourite";

export const addFavourite = async (favouriteInfo) => {
<<<<<<< HEAD
    console.log(favouriteInfo)
    try {
        await connectDB()
        const query = { email: favouriteInfo.email }
        const options = { new: true, upsert: true }
        // { $addToSet: { bookIds: favouriteInfo.bookIds } }
=======
  console.log(favouriteInfo);
  try {
    await connectDB();
    const query = { email: favouriteInfo.email };
    const options = { new: true, upsert: true };
    const bookId = favouriteInfo.bookId;
    console.log(bookId);
>>>>>>> ea75030eee8771f31b49af144620cc58ebc1bcd5

    const result = await Favourite.findOneAndUpdate(
      query,
      { $addToSet: { bookIds: bookId } },
      options
    );

    revalidatePath("/allBooks");
    return JSON.parse(JSON.stringify({ success: true, result }));
  } catch (error) {
    return error.message;
  }
};
