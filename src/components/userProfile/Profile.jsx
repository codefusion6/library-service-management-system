"use client"
import { UserAuth } from "@/app/provider/context/AuthContext";
import Image from "next/image";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import EditProfileForm from "./editProfile/EditProfileForm";

const Profile = () => {
  const { user } = UserAuth();

  return (
    <section>
      <div>
        <div></div>
        <div className="border-green-500 border-[5px]">
          <div>
            <div className="container bg-white mx-auto m-10 h-full p-10 ">
              <div className="  h-full absolute inset-0 animate-pulse "></div>
              <div className="flex bg-green-600 rounded-md w-28">
                <button className="ml-3">Connect</button>
                <FiPlus className="mt-1 ml-2" />
              </div>
              <h1 className="text-3xl text-center font-bold mb-10 mt-5">
                User Profile
              </h1>
              <div></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-2">
                  <h1 className="text-xl font-bold">
                    About me:
                    
                    </h1>
                  <p className="text-base font-medium"></p>
                </div>
                <div className=" flex flex-col items-center justify-center gap-5">
                  <Image
                    alt="user image"
                    src={user?.photoURL}
                    height={30}
                    width={350}
                    className="w-[300px] rounded-full"
                  ></Image>

                  <EditProfileForm></EditProfileForm>

                </div>

                <div className="space-y-2">
                  <p className="font-semibold">
                    Name: <br />
                    <span className="font-semibold"> {user?.displayName}</span>
                  </p>
                  <p className="font-semibold">
                    Email: <br />
                    <span className="font-semibold"> {user?.email}</span>
                  </p>
                  <ul className="flex gap-3 mt-5 mb-10">
                    <li className="text-3xl mb-5">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
