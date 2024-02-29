
"use client"
import { acceptPublisherRequest } from '@/libs/actions/acceptPublisherRequest.action';
import { getAllPublisherRequests } from '@/libs/actions/publisherRequestActions';
import { useEffect, useState } from 'react';


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

  // Function to handle accepting a request
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
      } else {
        console.error('Failed to accept request:', result.error);
      }
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Pending Requests</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingRequests.map(request => (
            <tr key={request._id}>
              <td className="py-2 px-4 border-b">{request.name}</td>
              <td className="py-2 px-4 border-b">{request.email}</td>
              <td className="py-2 px-4 border-b">{request.status}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleAcceptRequest(request._id)}
                  className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
                >
                  Accept
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingRequestsPage;
