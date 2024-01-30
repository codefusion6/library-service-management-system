/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import { Input } from "@nextui-org/react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa6";
import LottieAnimation from "./LottieAnimation";
import { UserAuth } from "@/app/provider/context/AuthContext";
import toast from "react-hot-toast";

const LoginForm = () => {

  const [isVisible, setIsVisible] = React.useState(false);
  const { googleSignIn } = UserAuth();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success('Login successful');


    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <div className="mx-auto">
      <div>
        <h2 className="text-2xl lg:text-4xl text-blue-500 text-center lg:font-medium lg:mt-5">
          Please Sign In
        </h2>
        {/* <hr className="w-1/2 lg:w-[46vh] lg:ml-[87vh] mt-3 mb-5 border mx-auto" /> */}
      </div>
      <section className="flex dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-3  max-w-7xl mx-auto md:h-screen">
          <div className="hidden md:block lg:mr-10 mb-6 text-center lg:text-left">
            <div className="flex items-center">
              <LottieAnimation />
            </div>
          </div>

          <div className="px-4 border-2 border-gray-200 mt-20 w-full mx-2 py-5 my-5 rounded-md">
            <h2 className="text-2xl text-center font-bold">Login</h2>
            <div className="grid grid-cols-1 gap-5">
              <div>
                <input
                  isClearable
                  type="email"
                  placeholder="Please Enter Your Email"
                  className=" w-full outline-none bg-gray-200 rounded-lg px-3  py-2 mt-1 text-sm  focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex relative">
                <input
                  variant="underlined"
                  placeholder="Enter your password"

                  type={isVisible ? "text" : "password"}
                  className=" w-full outline-none bg-gray-200 rounded-lg px-3  py-2 mt-1 text-sm  focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="focus:outline-none absolute top-2 right-2"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <FaEye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center mt-3 lg:mt-5">
              <button
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2"
                onClick={handleGoogleSignIn}
              >
                <FaGoogle className="text-xl" />
                <span className="ml-2">Sign in with Google</span>
              </button>

            </div >
            <div className="mt-5">
              <button
                className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div className="flex text-sm items-center text-right justify-between mt-4">
              {/* <span className="w-1/5 border-b dark:border-gray-600"></span> */}
              <Link
                className="text-xs text-gray-500 text-right mb-4 dark:text-gray-400 hover:underline"
                href="/register"
              >
                Do not have an account?
                <span className="text-blue-500 font-serif"> Sign Up</span>
              </Link>
              {/* <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span> */}
            </div>
          </div >
        </div >
      </section >
    </div >
  );
};

export default LoginForm;
