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
    const newFormData = {
      name: name,
      email: email,
    };

    const result = await User.create(newFormData);
    // return JSON.parse(JSON.stringify(result));
    return { success: true, data: JSON.parse(JSON.stringify(result)) };
  } catch (error) {
    return NextResponse.badRequest({ error: "Kisu ekta hoise", error });
  }
};

export const getAllUser = async () => {
  try {
    const result = await User.find();
    // return JSON.parse(JSON.stringify(result));
    return { success: true, data: JSON.parse(JSON.stringify(result)) };
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
