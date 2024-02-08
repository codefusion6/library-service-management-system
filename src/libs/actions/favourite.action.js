"use server";
import { revalidatePath } from "next/cache"
import { connectDB } from "../database/MongoConnect"
import Favourite from "../database/models/favouriteModel/favourite"

export const addFavourite = async (favouriteInfo) => {
    console.log(favouriteInfo)
    try {
        await connectDB()
        const query = { email: favouriteInfo.email }
        const options = { new: true, upsert: true }
        // { $addToSet: { bookIds: favouriteInfo.bookIds } }

        const result = await Favourite.findOneAndUpdate(query, { $addToSet: { bookIds: favouriteInfo.bookid } }, options)

        revalidatePath("/allBooks")
        return JSON.parse(JSON.stringify({ success: true, result }))

    } catch (error) {
        return error.message
    }
}