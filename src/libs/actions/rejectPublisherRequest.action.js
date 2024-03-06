"use server";
import { connectDB } from "../database/MongoConnect";
import PublisherRequest from "../database/models/publisherRequestModel/publisherRequestSchema";
import BookRequest from "../database/models/requestBookModel/requestBook";
import { updateUserRole } from "./user.actions";

export const rejectPublisherRequest = async (requestId) => {
  try {
    await connectDB();
    const requestToUpdate = await PublisherRequest.findById(requestId);

    if (!requestToUpdate) {
      return JSON.parse(
        JSON.stringify({ success: false, error: "Request not found" })
      );
    }

    // Revert the user's role to the default role (e.g., 'user')
    const result = await updateUserRole(requestToUpdate.email, "user");

    if (!result.success) {
      return JSON.parse(
        JSON.stringify({
          success: false,
          error: "Failed to update user role",
          errorDetails: result.error,
        })
      );
    }

    // Set the status to 'pending' before saving
    requestToUpdate.status = "pending";

    // Save the updated request
    const updatedRequest = await requestToUpdate.save();

    return JSON.parse(JSON.stringify({ success: true, data: updatedRequest }));
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        success: false,
        error: "Error rejecting request",
        errorDetails: error,
      })
    );
  }
};

export const rejectBookRequest = async (requestId) => {
  try {
    await connectDB();
    const requestToUpdate = await BookRequest.findById(requestId);

    if (!requestToUpdate) {
      return JSON.parse(
        JSON.stringify({ success: false, error: "Request not found" })
      );
    }
    const updatedRequest = await requestToUpdate.save();
    return JSON.parse(JSON.stringify({ success: true, data: updatedRequest }));
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        success: false,
        error: "Error rejecting request",
        errorDetails: error,
      })
    );
  }
};
