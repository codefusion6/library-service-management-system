"use client"
import React from 'react';
import lottie from "../../assest/animation.json"
import Lottie from 'lottie-react';

const LottieAnimation = () => {
  return (
    <div>

      <Lottie animationData={lottie}></Lottie>
    </div>
  );
};

export default LottieAnimation;