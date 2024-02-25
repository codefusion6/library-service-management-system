/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import { Input } from "@nextui-org/react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa6";
import LottieAnimation from "./LottieAnimation";
import { UserAuth} from "@/app/provider/context/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter()

  const [isVisible, setIsVisible] = React.useState(false);
  const { googleSignIn, logIn } = UserAuth();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success('Login successful');
      router.push("/")

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
        <hr className="w-1/2 lg:w-[46vh] lg:ml-[87vh] mt-3 mb-5 border mx-auto" />
      </div>
      <section className="flex dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:px-6 lg:py-8 mx-auto md:h-screen">
          <div className="lg:mr-10 mb-6 text-center lg:text-left">
            <div className="flex items-center">
              <LottieAnimation />
            </div>
          </div>

          <div className="lg:ml-10">
            <div className="lg:px-4 lg:py-1 bg-white lg:mx-8 md:mx-0 border shadow-lg rounded-3xl sm:p-18">
              <div className="lg:max-w-md lg:mx-auto p-4">
                <form action={async (formData) => {
                  try {
                    const email = formData.get("email")
                    const password = formData.get("password")
                    // console.log(email, password);
                    const res = await logIn(email, password)
                    // console.log(res);
                    if (res.user) {
                      toast.success("Logged In successfully")
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="font-semibold text-sm text-gray-600 block ml-4"
                        name="email"
                      >
                        Email
                      </label>

                      <Input
                        isClearable
                        type="email"
                        name="email"
                        variant="underlined"
                        placeholder="john.doe@example.com"
                        className="max-w-xs rounded-lg px-3 ml-4 py-2 mt-1 mb-5 text-sm w-96 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="font-semibold text-sm text-gray-600 pb-1 block ml-4"
                        name="password"
                      >
                        Password
                      </label>

                      <Input
                        variant="underlined"
                        name="password"
                        placeholder="Enter your password"
                        endContent={
                          <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                          >
                            {isVisible ? (
                              <FaEye className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                              <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                            )}
                          </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="max-w-xs rounded-lg px-3 py-2 mt-1 mb-5 w-96 text-sm ml-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-3 lg:mt-5">
                    <button
                      className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2"
                      onClick={handleGoogleSignIn}
                    >
                      <FaGoogle className="text-xl" />
                      <span className="ml-2">Sign in with Google</span>
                    </button>

                  </div >
                  <div className="mt-5">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600"></span>
                    <Link
                      className="text-xs text-gray-500 uppercase mb-4 dark:text-gray-400 hover:underline"
                      href="/register"
                    >
                      Do not have an account?
                      <span className="text-blue-500 font-serif">Sign Up</span>
                    </Link>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                  </div>
                </form>
              </div >
            </div >
          </div >
        </div >
      </section >
    </div >
  );
};

export default LoginForm;