"use server";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import User from "../database/models/userModel/user";
import { connectDB } from "../database/MongoConnect";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {
  try {
    await connectDB();
    const name = formData.get("name");
    const email = formData.get("email");
    const role = "user";
    const photoURL = formData.get("photoURL");

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const newFormData = {
        name,
        email,
        role,
        photoURL,
      };
      const result = await User.create(newFormData);
      return JSON.parse(JSON.stringify({ success: true, data: result }));
    } else {
      return JSON.parse(JSON.stringify({ success: true, data: existingUser }));
    }
  } catch (error) {
    return NextResponse.badRequest({
      error: "An error occurred while adding the user",
      error,
    });
  }
};

export const getAllUser = async () => {
  try {
    await connectDB();
    const result = await User.find();
    revalidatePath('/dashboard/all-user')
    // return JSON.parse(JSON.stringify(result));
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      // Handle Mongoose validation errors
      const validationErrors = {};
      // Extract field names and error messages from the ValidationError object
      Object.keys(error.errors).forEach((field) => {
        validationErrors[field] = error.errors[field].message;
      });
      return {
        error: "Validation failed.",
        validationErrors,
      };
    } else {
      // Handle other types of errors
      return {
        error: "An unexpected error occurred.",
      };
    }
  }
};

export const getUserNumber = async () => {
  try {
    await connectDB();
    const userNum = await User.find().countDocuments();
    console.log("from user collection count document", userNum);
    return JSON.parse(JSON.stringify(userNum))
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};

//get one user

export const getOneUser = async (email) => {
  // console.log(email);
  try {
    await connectDB();
    const query = {
      email: email
    }
    const user = await User.findOne(query)
    revalidatePath("/userProfile");
    return JSON.parse(JSON.stringify(user))
    // console.log(JSON.parse(JSON.stringify(user)));

  }
  catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};

// Add the following function to check if a user already exists by email
export const getUserByEmail = async (email) => {
  try {
    await connectDB();
    const existingUser = await User.findOne({ email });
    return JSON.parse(JSON.stringify(existingUser));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};

export const deleteUser = async (userId) => {
  try {
    const result = await User.findByIdAndDelete(userId);
    revalidatePath("/dashboard/all-user");
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};


// add user profile
export const updateUserProfile = async (formData, useremail) => {
  const userName = formData.get("userName");
  const about = formData.get("about");
  const address = formData.get("address");
// console.log(useremail);
  try {
    await connectDB();

    // defied the field
    const updatedInfo = {
      name: userName,
      about: about,
      address: address,
    };
    // console.log(updatedInfo);
    

    const result = await User.findOneAndUpdate({email: useremail}, updatedInfo,{new: true} );
    revalidatePath("/userProfile");
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return {
      error: "Fill input properly or send the required data",
      errorDetails: JSON.parse(JSON.stringify(error)),
    };
  }
};