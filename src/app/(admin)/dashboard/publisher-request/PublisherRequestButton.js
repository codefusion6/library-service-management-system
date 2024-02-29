"use client"
import { UserAuth } from '@/app/provider/context/AuthContext';
import { sendPublisherRequest } from '@/libs/actions/publisherRequestActions';
import { useState } from 'react';
import toast from 'react-hot-toast';

const PublisherRequestButton = () => {
    const { user,  } = UserAuth(); 
    const [isLoading, setIsLoading] = useState(false);

    const handlePublisherRequest = async () => {
      try {
        setIsLoading(true);
  
        if (user) {
          const userData = {
            name: user.displayName, 
            email: user.email,
            status: 'pending'

          };
  
          const result = await sendPublisherRequest(userData);
  
          if (result.success) {
            toast.success("Publisher request sent successfully!");
            console.log('Publisher request sent successfully!', result.data);
          } else {
            console.error('Failed to send publisher request:', result.error);
          }
        } else {
          console.error('User is not authenticated.');
        }
      } catch (error) {
        console.error('Error sending publisher request:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <>
      <button
        onClick={handlePublisherRequest}
        disabled={isLoading}
        className={`py-2 px-4 bg-green-500 text-white rounded ${
          isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
        }`}
      >
        {isLoading ? 'Sending...' : 'Send Publisher Request'}
      </button>
      </>
    );
  };
  
  export default PublisherRequestButton;
