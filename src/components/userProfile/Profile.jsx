"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const { user } = UserAuth();
  console.log(user)
  return (
    <div>
      <div className="container mx-auto ">
        <p className="text-2xl">This is profile route</p>
        <Image
          alt="user image"
          src={user?.photoURL}
          height={30}
          width={30}
        ></Image>
        <p className="font-semibold">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
