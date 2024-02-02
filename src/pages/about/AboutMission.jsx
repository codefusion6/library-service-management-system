// AboutMission.jsx

import Image from 'next/image';
import React from 'react';

const AboutMission = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Column 1: Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/about/our-mission1.png"
            alt="Mission Image"
            className="w-full h-auto rounded-md mx-auto"
            width={400}
            height={300}
          />
        </div>

        {/* Column 2: Text */}
        <div className="mt-8 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Library service management, our mission is to provide a seamless and enriching experience for book enthusiasts.
            We strive to offer a diverse collection of eBooks for purchase and a convenient borrowing system,
            fostering a love for reading and lifelong learning.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
            Whether you are looking to expand your personal library or explore new literary adventures,
            we are committed to creating a platform that caters to your reading needs and preferences.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
            Join us in the journey of discovery, exploration, and knowledge-sharing as we embark on the wonderful world of books.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
