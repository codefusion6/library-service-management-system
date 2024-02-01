import React from 'react';

const ContactBanner = () => {
  return (
    <div className="relative h-60 bg-cover bg-center text-white" style={{ backgroundImage: 'url("/images/about/aboutbanner.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="flex items-center justify-center h-60 relative z-10">
        <h1 className="mt-12 text-4xl font-bold">Contact Us</h1>
      </div>
    </div>
  );
};

export default ContactBanner;
