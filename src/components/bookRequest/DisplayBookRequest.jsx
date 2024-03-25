"use client";
import { acceptBookRequest, rejectRequest } from "@/libs/actions/requestBook.action";
import React from "react";
import toast from "react-hot-toast";

const DisplayBookRequest = ({ requestedBooks }) => {

  // accept the request
  const handleAcceptRequest = async (requestId) => {
    const result = await acceptBookRequest(requestId)
    if (result) {
      toast.success("Request Acceptted")
    }
  };

  const handleRejectRequest = async (requestId) => {
    const result = await rejectRequest(requestId)
    if (result) {
      toast.success("Request Rejected")
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold uppercase text-center py-5 mb-8">Book Request Table of users </h1>
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
                    className={`bg-green-500 text-white py-1 px-2 mr-2 rounded hover:bg-green-600 disabled:bg-gray-900 disabled:text-white`} disabled={request.status == "Accepted"}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleRejectRequest(request._id)} disabled={request.status == "Rejected"}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 disabled:bg-gray-900 disabled:text-white"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default DisplayBookRequest;
