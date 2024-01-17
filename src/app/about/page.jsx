import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Our Library</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our library service management system. We are dedicated to providing a wide range of books for sale to cater to your reading needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to promote literacy and knowledge by offering a diverse collection of books that inspire, educate, and entertain our readers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            Feel free to reach out to us for any inquiries or assistance:
            <br />
            Email: info@yourlibrary.com
            <br />
            Phone: (123) 456-7890
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
        <p className="text-gray-700">
          We are located at 123 Library Street, Cityville, State, Zip Code. Come visit our library and explore the world of literature.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
