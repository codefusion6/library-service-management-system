"use server";
import { revalidatePath } from "next/cache"
import { connectDB } from "../database/MongoConnect"
import Favourite from "../database/models/favouriteModel/favourite"

export const addFavourite = async (favouriteInfo) => {
    // console.log(Favourite)
    try {
        await connectDB()
        const userfavouriteInfo = favouriteInfo

        const result = await Favourite.create(userfavouriteInfo)
        // console.log("ok")
        revalidatePath("/allBooks")
        return JSON.parse(JSON.stringify({ success: true }))

    } catch (error) {
        return error.message

    }
}