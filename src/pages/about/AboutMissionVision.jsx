// AboutMissionVision.jsx

import Image from 'next/image';
import React from 'react';

const AboutMissionVision = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Column 1: Image */}
        <div className="md:w-1/3 md:text-center">
          <div className="rounded-md overflow-hidden shadow-md mx-auto">
            <Image
              src="/images/about/mission-info.png"
              alt="Mission Image"
              className="w-full h-auto"
              width={300}
              height={600}
            />
          </div>
        </div>

        {/* Column 2: Text */}
        <div className="md:w-2/3 px-8 my-4">
          <div className="bg-white rounded-md p-6 shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-[#4b79a7] to-[#4ebcde] text-transparent text-white px-4 py-2 rounded-sm">Our Mission</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Library Service Management, our mission is to provide an enriching experience for book enthusiasts.
              We curate a diverse collection of eBooks, fostering a passion for reading and lifelong learning.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              Whether you want to expand your personal library or explore new literary adventures,
              our platform is committed to meeting your reading needs and preferences.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              Join us in the journey of discovery, exploration, and knowledge-sharing in the wonderful world of books.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-md p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-[#4b79a7] to-[#4ebcde] text-transparent text-white px-4 py-2 rounded-sm">Our Vision</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Empowering individuals through knowledge, our vision is to be a beacon of enlightenment and inspiration.
              We aspire to cultivate a community where the boundless world of literature opens doors to creativity,
              critical thinking, and personal growth. By fostering a dynamic and inclusive space, we envision becoming
              a hub that sparks intellectual curiosity and connects people through the transformative power of books.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMissionVision;
