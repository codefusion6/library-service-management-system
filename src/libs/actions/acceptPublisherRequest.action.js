"use server";
import { connectDB } from "../database/MongoConnect";
import PublisherRequest from "../database/models/publisherRequestModel/publisherRequestSchema";
import BookRequest from "../database/models/requestBookModel/requestBook";
import { updateUserRole } from "./user.actions";

export const acceptPublisherRequest = async (requestId) => {
  try {
    await connectDB();
    const requestToUpdate = await PublisherRequest.findById(requestId);
    if (!requestToUpdate) {
      return JSON.parse(
        JSON.stringify({ success: false, error: "Request not found" })
      );
    }

    requestToUpdate.status = "accepted";

    const updatedRequest = await requestToUpdate.save();

    // Add the publisher role to the user associated with the request
    const result = await updateUserRole(requestToUpdate.email, "publisher");

    if (result.success) {
      return JSON.parse(
        JSON.stringify({ success: true, data: updatedRequest })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          success: false,
          error: "Failed to update user role",
          errorDetails: result.error,
        })
      );
    }
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        success: false,
        error: "Error accepting request",
        errorDetails: error,
      })
    );
  }
};


// book request changing status
export const acceptBookRequest = async (requestId) => {
 
  try {
    await connectDB();

    const requestToUpdate = await BookRequest.findById(requestId);

    if (!requestToUpdate) {
      return JSON.parse(
        JSON.stringify({ success: false, error: "Request not found" })
      );
    }

    requestToUpdate.status = "accepted";

    if (result.success) {
      return JSON.parse(
        JSON.stringify({ success: true, data: updatedRequest })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          success: false,
          error: "Failed to update user role",
          errorDetails: result.error,
        })
      );
    }
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        success: false,
        error: "Error accepting request",
        errorDetails: error,
      })
    );
  }
};
