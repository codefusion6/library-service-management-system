"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../database/MongoConnect";
import Favourite from "../database/models/favouriteModel/favourite";

export const addFavourite = async (favouriteInfo) => {
  try {
    await connectDB();
    const query = { email: favouriteInfo.email };
    const options = { new: true, upsert: true };
    const bookId = favouriteInfo.bookId;

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

export const deleteFavourite = async (email, id) => {
  console.log(email, id);
  console.log("Working");
  try {
    await connectDB();
    const queryEmail = { email: email };
    const result = await Favourite.findOneAndUpdate(queryEmail, {
      $pull: { bookIds: id },
    });
    revalidatePath("/dashboard/favourite")
    return JSON.parse(JSON.stringify(result));

  } catch (error) {
    return JSON.stringify(error);
  }
};
