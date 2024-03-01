"use server"
import { connectDB } from "../database/MongoConnect";
import EditProfile from "../database/models/userProfileModel/userProfile";
import { revalidatePath } from "next/cache";



export const getUserProfile = async () => {
  try {
    await connectDB();
    const result = await EditProfile.find();
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};


// delete 

export const deleteEditProfile = async (id) => {
  try {
    const result = await EditProfile.findByIdAndDelete(id);
    revalidatePath("/userProfile");
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }

};

