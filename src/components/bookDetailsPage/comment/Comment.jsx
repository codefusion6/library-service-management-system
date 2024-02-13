"use client"
import { UserAuth } from "@/app/provider/context/AuthContext";
import Image from "next/image";
import React from "react";

const Comment = () => {
    const { user } = UserAuth();
    console.log(user);
  return (
    <section>
      <div className="flex gap-3">
        <Image
          alt="User Image"
          src={user?.photoURL}
          width={30}
          height={30}
          className="rounded-full size-10"
        />
        <textarea
          name="bookDescription"
          placeholder="write a comment"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
        />
        
      </div>
    </section>
  );
};

export default Comment;
