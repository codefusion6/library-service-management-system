"use client"
import { acceptPublisherRequest } from '@/libs/actions/acceptPublisherRequest.action';
import { getAllPublisherRequests } from '@/libs/actions/publisherRequestActions';
import { rejectPublisherRequest } from '@/libs/actions/rejectPublisherRequest.action';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const PendingRequestsPage = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const result = await getAllPublisherRequests();
        if (result.success) {
          const pendingRequestsData = result.data.filter(request => request.status === 'pending');
          setPendingRequests(pendingRequestsData);
        } else {
          console.error('Failed to fetch pending requests:', result.error);
        }
      } catch (error) {
        console.error('Error fetching pending requests:', error);
      }
    };

    fetchPendingRequests();
  }, []);

  const handleAcceptRequest = async (requestId) => {
    try {
      const result = await acceptPublisherRequest(requestId);

      if (result.success) {
        setPendingRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === requestId ? { ...request, status: 'accepted' } : request
          )
        );

        console.log('Request accepted successfully!', result.data);
        toast.success("Request accepted successfully!");
      } else {
        console.error('Failed to accept request:', result.error);
      }
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      const result = await rejectPublisherRequest(requestId);

      if (result.success) {
        setPendingRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === requestId ? { ...request, status: 'rejected' } : request
          )
        );

        console.log('Request rejected successfully!', result.data);
        toast.success("Request rejected successfully!");
      } else {
        console.error('Failed to reject request:', result.error);
      }
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Pending Requests</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Email</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Actions</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingRequests.map(request => (
              <tr key={request._id}>
                <td className="py-3 px-4 border-b text-center">{request.name}</td>
                <td className="py-3 px-4 border-b text-center">{request.email}</td>
                <td className="py-3 px-4 border-b text-center">{request.status}</td>
                <td className="py-3 px-4 border-b text-center">
                  <button
                    onClick={() => handleAcceptRequest(request._id)}
                    className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
                  >
                    Accept
                  </button>
                </td>
                <td className="py-3 px-4 border-b text-center">
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

export default PendingRequestsPage;
