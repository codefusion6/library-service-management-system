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
      if (user) {
        getUser(user?.email);
      }
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
      <div className="border-green-500 border-[5px]">
        <div className="container bg-white mx-auto m-10 h-full p-10 ">
          <div className="h-full absolute inset-0 animate-pulse"></div>
          <h1 className="text-3xl text-center font-bold mb-10 mt-5">
            User Profile
          </h1>
          {/* I have implement the grid for the image and other info of user */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="space-y-2">
              <div className="flex bg-green-600 rounded-md w-28">
                <button className="ml-3">Connect</button>
                <FiPlus className="mt-1 ml-2" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-green-600">{existingUser?.about?existingUser?.about:""}</h2>
                <h1 className="text-xl font-bold text-red-900">
                {existingUser?.address?existingUser?.address:""}
                </h1>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center gap-5">
              <Image
                alt="user image"
                src={user?.photoURL}
                height={30}
                width={350}
                className="w-[300px] rounded-full"
              ></Image>

              <EditProfileForm existingUser={existingUser}></EditProfileForm>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold">
                Name: <br />
                <span className="font-semibold text-base text-red-900">
                  {existingUser?.name}
                </span>
              </p>
              <p className="text-sm font-semibold">
                Email: <br />
                <span className="font-serif text-base ">
                  {existingUser?.email}
                </span>
              </p>
              <ul className="flex gap-3 mt-5 mb-10">
                <li className="text-3xl mb-5 ">
                  <AiOutlineTwitter className="text-blue-400" />
                </li>
                <li className="text-3xl">
                  <FaFacebook className="text-blue-600" />
                </li>
                <li className="text-3xl">
                  <FaGithub />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <BookRequest></BookRequest>
      </div>
    </section>
  );
};

export default Profile;
