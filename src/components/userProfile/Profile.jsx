"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import EditProfileForm from "./editProfile/EditProfileForm";
import { getOneUser } from "@/libs/actions/user.actions";
import BookRequest from "../bookRequest/BookRequest";
import { Progress } from "@nextui-org/react";
import Link from "next/link";

const Profile = () => {
  const { user, loading } = UserAuth();
  const [existingUser, setExistingUser] = useState("");

  useEffect(() => {
    if (!loading) {
      const getUser = async (email) => {
        const userData = await getOneUser(email);
        // console.log(userData);
        setExistingUser(userData);
      };
      getUser(user?.email);
    }
  }, [user, loading, setExistingUser]);
  if (loading) {
    return (
      <h2 className="text-center mt-20 text-2xl">
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md text-center flex justify-center items-center"
        />
      </h2>
    );
  }
  return (
    <section className="container mx-auto">
        <div className="container bg-white  m-10 h-full p-10 ">
         
          <div className="">
            <div className=" bg-white rounded-lg shadow-md p-5">
              <Image
                width={0}
                height={0}
                className="w-32 h-32 rounded-full mx-auto"
                src={user?.photoURL}
                alt="Profile picture"
              />
              
              <div className="text-center text-gray-600 ">
                <p className="text-sm font-semibold">
                  <span className="font-semibold text-base text-red-900">
                    {existingUser?.name}
                  </span>
                </p>
                <h3 className="font-semibold text-xl">Your role: <span className=" font-semibold text-primary text-xl">{existingUser?.role}</span></h3>
                
                <p className="text-gray-600 mt-2">
                  {existingUser?.about ? existingUser?.about : ""}
                </p>
              </div>
              <div className="flex flex-1 justify-center mt-2">
                
                <p className="text-gray-600 mt-2">
                  {existingUser?.address ? existingUser?.address : ""}
                </p>

                
              </div>
              <div className="flex justify-center mt-5">
              <EditProfileForm existingUser={existingUser}></EditProfileForm>
              </div>
              <div className="flex justify-center mt-5">
                <Link
                  href="#"
                  className="text-blue-500 hover:text-blue-700 mx-3"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="text-blue-500 hover:text-blue-700 mx-3"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="text-blue-500 hover:text-blue-700 mx-3"
                >
                  GitHub
                </Link>
              </div>
              <div className="mt-10">
                <BookRequest></BookRequest>
              </div>
            </div>
          </div>
        </div>
        
    </section>
  );
};

export default Profile;