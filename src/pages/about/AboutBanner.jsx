import React from 'react';

const AboutBanner = () => {
  return (
    <div className="relative h-60 bg-cover bg-center text-white" style={{ backgroundImage: 'url("https://i.ibb.co/ZccFHWy/1000-F-539022826-M425hy-ABqsgsh-ATOgpl2-C1-DJi-SIl-Kj-Ar.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="flex items-center justify-center h-60 relative z-10">
        <h1 className="mt-12 text-4xl font-bold">About Us</h1>
      </div>
    </div>
  );
};

export default AboutBanner;
