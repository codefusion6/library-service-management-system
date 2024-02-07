"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import Image from "next/image";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Profile = () => {
  const { user } = UserAuth();
  console.log(user);
  return (
    <section>
      <div className="container mx-auto m-10 h-full p-10 relative">
        <div className="border-[5px] h-full absolute inset-0 animate-pulse border-green-500"></div>
        <h1 className="text-3xl text-center font-bold mb-10 mt-5">User Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-2">
            <h1 className="text-xl font-bold">About me:</h1>
            <p className="text-base font-medium">
              I am a passionate explorer delving into library service
              management. With a love for organization, she uncovers website
              functionalities, cataloging books, optimizing search, and
              enhancing user experiences. Sarah thrives in the dynamic library
              landscape, streamlining processes for accessibility.
            </p>
          </div>
          <div className="">
            <Image
              alt="user image"
              src={user?.photoURL}
              height={30}
              width={350}
              className="w-[300px] rounded-full"
            ></Image>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">
              Name: <br />{" "}
              <span className="font-semibold"> {user?.displayName}</span>
            </p>
            <p className="font-semibold">
              Email: <br />{" "}
              <span className="font-semibold"> {user?.email}</span>
            </p>
            <ul className="flex gap-3 mt-5">
              <li className="text-3xl">
                <AiOutlineTwitter />
              </li>
              <li className="text-3xl">
                <FaFacebook />
              </li>
              <li className="text-3xl">
                <FaGithub />
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Profile;
