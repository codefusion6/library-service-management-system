"use client";
import React from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import Link from "next/link";
import { addUser } from "@/libs/actions/user.actions";
import toast from "react-hot-toast";
import { UserAuth } from "@/app/provider/context/AuthContext";
import { Input } from "@nextui-org/react";

const RegisterAction = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const variants = ["flat", "bordered", "underlined", "faded"];
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { createUser } = UserAuth();
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Login successful");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto ">
      <form
        action={async (formData) => {
          const name = formData.get("name");
          const email = formData.get("email");
          const password = formData.get("password");
          console.log(email, password);
          try {
            const user = await createUser(email, password);
            if (user.user) {
              toast.success("User created successfully");
              const res = await addUser(formData);
            }
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <div className="mt-5">
          <div>
            <label
              className="font-semibold ml-5 text-sm text-gray-600 pb-1 block"
              for="fullname"
            >
              Full Name
            </label>
            <Input
              isClearable
              type="name"
              placeholder="Your Name"
              name="name"
              variant="bordered"
              onClear={() => console.log("input cleared")}
              className="max-w-xs  rounded-lg px-3 py-2 mt-1 mb-5 w-96 text-sm ml-5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="">
            <label
              className="font-semibold ml-5  text-sm text-gray-600 pb-1 block"
              for="email"
            >
              Email
            </label>
            <Input
              isClearable
              type="email"
              placeholder="Your email"
              name="email"
              variant="bordered"
              onClear={() => console.log("input cleared")}
              className="max-w-xs  rounded-lg px-3 py-2 mt-1 mb-5 w-96 text-sm ml-5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              class="font-semibold ml-5 text-sm text-gray-600 pb-1 block"
              for="password"
            >
              Password
            </label>
            <Input
              placeholder="Your password"
              variant="bordered"
              name="password"
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
              className="max-w-xs  rounded-lg px-3 py-2 mt-1 mb-5 w-96 text-sm ml-5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div class="mt-5">

          <button
            className="flex mb-2 items-center justify-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="text-xl" />
            <span className="ml-2">Sign in with Google</span>
          </button>

          <button
            className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2"
            type="submit"
          >
            Sign In
          </button>

        </div>
      </form>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        <Link
          className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          href="/login"
        >
          have an account?
          <span className="text-blue-500 font-serif"> Log in</span>
        </Link>
        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
      </div>
    </div>
  );
};

export default RegisterAction;
