"use server"
import { connectDB } from "../database/MongoConnect";
import PublisherRequest from "../database/models/publisherRequestModel/publisherRequestSchema";

export const acceptPublisherRequest = async (requestId) => {
  try {
    await connectDB();

    const requestToUpdate = await PublisherRequest.findById(requestId);

    if (!requestToUpdate) {
      return JSON.parse(JSON.stringify({ success: false, error: 'Request not found' }));
    }

    requestToUpdate.status = 'accepted';

    const updatedRequest = await requestToUpdate.save();

    return JSON.parse(JSON.stringify({ success: true, data: updatedRequest }));
  } catch (error) {
    return JSON.parse(JSON.stringify({ success: false, error: 'Error accepting request', errorDetails: error }));
  }
};
