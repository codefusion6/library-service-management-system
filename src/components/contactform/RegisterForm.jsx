"use client";
/* eslint-disable @next/next/no-img-element */
import LottieAnimation from "./LottieAnimation";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import React from "react";
import RegisterAction from "./RegisterAction";

const RegisterForm = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const variants = ["flat", "bordered", "underlined", "faded"];
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
      <div>
        <div>
          <h2 className="lg:text-4xl text-blue-500  text-center lg:font-medium lg:mt-5">Please Sign Up </h2>
          <hr className="w-[46vh] lg:ml-[87vh] mt-3  mb-5 border  items-center " />
        </div>
        <section className=" flex dark:bg-gray-900">
          <div className="flex  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div href="" className="flex items-center mb-6 text-2xl ">
              <div className="flex  mr-18 mb-6 text-2xl ">
                <LottieAnimation></LottieAnimation>
              </div>
            </div>

            <div className="ml-10">
              <div className="relative  py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0  shadow rounded-3xl sm:p-18">

                  <RegisterAction />

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegisterForm;