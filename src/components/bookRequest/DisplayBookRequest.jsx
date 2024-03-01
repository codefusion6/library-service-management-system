"use client";
import { acceptBookRequest } from "@/libs/actions/acceptPublisherRequest.action";
import React from "react";

const DisplayBookRequest = ({ requestedBooks }) => {
  

  // accept the request
  const handleAcceptRequest = async (requestId) => {
    try {
      const result = await acceptBookRequest(requestId);

      if (result.success) {
        setPendingRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === requestId
              ? { ...request, status: "accepted" }
              : request
          )
        );

        console.log("Request accepted successfully!", result.data);
        toast.success("Request accepted successfully!");
      } else {
        console.error("Failed to accept request:", result.error);
      }
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  //   reject the Book request
  const handleRejectRequest = async (requestId) => {
    try {
      const result = await rejectBookRequest(requestId);

      if (result.success) {
        setPendingRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === requestId
              ? { ...request, status: "rejected" }
              : request
          )
        );
        console.log("Request rejected successfully!", result.data);
        toast.success("Request rejected successfully!");
      } else {
        console.error("Failed to reject request:", result.error);
      }
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Book Request Table of users </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b">User Email</th>
              <th className="py-3 px-4 border-b">User Name</th>
              <th className="py-3 px-4 border-b">Book Name</th>
              <th className="py-3 px-4 border-b">Author Name</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {requestedBooks?.requestBook?.map((request) => (
              <tr key={request._id}>
                <td className="py-3 px-4 border-b text-center">
                  {request.userEmail}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {request.userName}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {request.bookName}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {request.authorName}
                </td>

                <td className="py-3 px-4 border-b text-center">
                  {request.status}
                </td>
                <td className="py-3 px-4 border-b text-center ">
                  <button
                    onClick={() => handleAcceptRequest(request._id)}
                    className="bg-green-500 text-white py-1 px-2 mr-2 rounded hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleRejectRequest(request._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayBookRequest;
