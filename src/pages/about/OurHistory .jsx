// pages/OurHistory.js

import React from 'react';

const OurHistory = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Our History</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-[#68a74b] to-[#dcde4e] text-transparent text-white px-4 py-2 rounded-sm">Inception</span>
            </h2>
            <p className="text-gray-700">
              Library Service Management was founded in 2024 with a vision to create a haven for book enthusiasts and ignite a love for reading.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-[#68a74b] to-[#dcde4e] text-transparent text-white px-4 py-2 rounded-sm">Early Growth</span>
            </h2>
            <p className="text-gray-700">
              In the early years, our focus was on curating a diverse collection of eBooks, encouraging a culture of sharing and exploration.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-[#68a74b] to-[#dcde4e] text-transparent text-white px-4 py-2 rounded-sm">Milestones</span>
            </h2>
            <p className="text-gray-700">
              Library Service Management achieved significant milestones, expanding its digital library and enhancing user experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-[#68a74b] to-[#dcde4e] text-transparent text-white px-4 py-2 rounded-sm">Community Building</span>
            </h2>
            <p className="text-gray-700">
              Emphasis on building a community of book enthusiasts through initiatives like book clubs and collaborative reading projects.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-[#68a74b] to-[#dcde4e] text-transparent text-white px-4 py-2 rounded-sm">Technological Advancements</span>
            </h2>
            <p className="text-gray-700">
              Adapting to technology, Library Service Management embraced cutting-edge solutions for an improved user experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-[#68a74b] to-[#dcde4e] text-transparent text-white px-4 py-2 rounded-sm">Vision Realized</span>
            </h2>
            <p className="text-gray-700">
              Today, Library Service Management stands as a testament to our vision, fostering intellectual curiosity through the transformative power of books.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-[#68a74b] to-[#dcde4e] text-transparent text-white px-4 py-2 rounded-sm">Looking Ahead</span>
            </h2>
          <p className="text-gray-700">
            As we reflect on our history, we remain dedicated to continuous improvement and innovation. Join us in the ongoing journey of discovery at Library Service Management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
