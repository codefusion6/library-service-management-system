"use server";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import User from "../database/models/userModel/user";
import { connectDB } from "../database/MongoConnect";

export const addUser = async (formData) => {
  try {
    await connectDB();
    const name = formData.get("name");
    const email = formData.get("email");
    // Add a default role 'user'
    const role = "user";
    const photoUrl = formData.get("photoUrl");
    console.log('PhotoURL:', photoUrl);
    const newFormData = {
      name: name,
      email: email,
      role: role,
      photoUrl: photoUrl,
    };
    const result = await User.create(newFormData);
    console.log("USER DATA:", result);


    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return NextResponse.badRequest({ error: "An error occurred while adding the user", error });
  }
};

export const getAllUser = async () => {
  try {
    await connectDB();
    const result = await User.find();
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
    // revalidatePath("/dashboard")
    return JSON.parse(JSON.stringify(userNum))
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};
