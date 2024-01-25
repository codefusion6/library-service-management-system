"use server";

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
    return { success: true };
  } catch (error) {
    return NextResponse.json("Kisu ekta hoise");
  }
};
