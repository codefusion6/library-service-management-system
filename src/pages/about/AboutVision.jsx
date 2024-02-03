// AboutVision.jsx

import Image from 'next/image';
import React from 'react';

const AboutVision = () => {
  return (
    <div className=' bg-black text-white'>
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Column 1: Text */}
          <div className="md:order-1">
            <div className="ml-8">
              <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
              <p className="text-white leading-relaxed">
                Empowering individuals through knowledge, our vision is to be a beacon of enlightenment and inspiration.
                We aspire to cultivate a community where the boundless world of literature opens doors to creativity,
                critical thinking, and personal growth. By fostering a dynamic and inclusive space, we envision becoming
                a hub that sparks intellectual curiosity and connects people through the transformative power of books.
              </p>
            </div>
          </div>

          {/* Column 2: Image */}
          <div className="flex-shrink-0 md:order-2 w-full ">
            <Image
              src="/images/about/our-vision.png"
              alt="Vision Image"
              className="w-full h-auto rounded-md mx-auto"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default AboutVision;
