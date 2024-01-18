
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useClient } from 'next/client';

const Lottie = dynamic(() => import('lottie-web'), { ssr: false });

const LottieAnimation = () => {
  // Mark this component as a client component
  useClient();

  useEffect(() => {
    // Your Lottie initialization code here
    const animationData = require('../../../../public/animation.json'); // Update the path

    // Use Lottie here
    const animation = Lottie.loadAnimation({
      container: document.getElementById('lottie-container'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return <div id="lottie-container" />;
};

export default LottieAnimation;
