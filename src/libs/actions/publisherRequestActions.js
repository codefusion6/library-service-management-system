"use server";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectDB } from "../database/MongoConnect";
import { revalidatePath } from "next/cache";
import PublisherRequest from "../database/models/publisherRequestModel/publisherRequestSchema";

export const sendPublisherRequest = async (requestData) => {
  try {
    await connectDB();

    const { name, email, status } = requestData;

    // Validate if the request is already in the system
    const existingRequest = await PublisherRequest.findOne({ email });
    if (existingRequest) {
      return JSON.parse(JSON.stringify({ success: true, data: existingRequest }));
    }

    // Create a new publisher request
    const newRequestData = {
      name,
      email,
      status,
    };
    const result = await PublisherRequest.create(newRequestData);

    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return NextResponse.badRequest({
      error: "An error occurred while sending the publisher request",
      errorDetails: JSON.parse(JSON.stringify(error)),
    });
  }
};

export const getAllPublisherRequests = async () => {
  try {
    await connectDB();
    const result = await PublisherRequest.find();
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const validationErrors = {};
      Object.keys(error.errors).forEach((field) => {
        validationErrors[field] = error.errors[field].message;
      });
      return {
        error: "Validation failed.",
        validationErrors,
      };
    } else {
      return {
        error: "An unexpected error occurred.",
      };
    }
  }
};
