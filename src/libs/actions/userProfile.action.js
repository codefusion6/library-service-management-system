"use server"
import { connectDB } from "../database/MongoConnect";
import EditProfile from "../database/models/userProfileModel/userProfile";
import { revalidatePath } from "next/cache";

// add user profile
export const addUserProfile = async (formData) => {
  const userName = formData.get("userName");
  const bio = formData.get("bio");
  const about = formData.get("about");
  const category = formData.get("category");
  try {
    await connectDB();

    // defied the field
    const userprofile = {
      userName: userName,
      bio: bio,
      about: about,
      userName: userName,
      category: category,
    };
    console.log(userprofile);

    const result = await EditProfile.create(userprofile);
    console.log(result);
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return {
      error: "Fill input properly or send the required data",
      errorDetails: JSON.parse(JSON.stringify(error)),
    };
  }
};

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

