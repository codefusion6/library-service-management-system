import PublisherRequestButton from "./PublisherRequestButton";


const PublisherRequestPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Publisher Request</h2>
        <p className="text-gray-600 mb-4">
          Want to become a publisher? Click the button below to send a request.
        </p>
        <PublisherRequestButton />
      </div>
    </div>
  );
};

export default PublisherRequestPage;
