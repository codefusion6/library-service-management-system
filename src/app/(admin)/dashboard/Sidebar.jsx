"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/images/bookflow.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SidebarItems from "./SidebarItems";
import Link from "next/link";
import { UserAuth } from "@/app/provider/context/AuthContext";

const Sidebar = ({ }) => {
  const [expanded, setExpanded] = useState(true);
  const { user, loading } = UserAuth();
  // console.log(user)

  return (
    <div
      className={`bg-white fixed top-0 border-r shadow-md lg:static z-50 ${expanded ? "lg:w-[20%] -left-[500%] lg:left-0" : "lg:w-[6%]"
        } duration-200`}
    >
      <aside className="h-screen">
        <nav className="h-screen flex flex-col">
          <div className="p-4 pb-2 flex justify-between items-start">
            <Link href="/">

              <Image
                src={logo}
                alt="Image"
                width={200}
                height={100}
                className={`w-32 ${expanded ? "blcok" : "hidden"}`}
              ></Image>
            </Link>

            <button
              className={`p-2 rotate-180 lg:rotate-0 rounded-lg bg-[#acd0f97b] hover:bg-blue-600 text-[#454dc4] hover:text-white fixed lg:static left-0 top-0 ${!expanded ? "" : ""
                }`}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <FaArrowLeft size={30} />
              ) : (
                <FaArrowRight size={30} />
              )}
            </button>
          </div>
          <ul className="flex-1 px-6 mt-4">
            <SidebarItems expanded={expanded} />
          </ul>
          <div className="border-r flex p-3 text-wrap">
            {
              !loading && <Image src={user?.photoURL !== null ? user?.photoURL : "https://i.ibb.co/gTBx7qs/sumon.png"}
                rel="noreferrer"
                alt="profile image"
                width={50}
                height={50}
                className="rounded-md"
              />
            }
            <div
              className={`flex justify-between items-center text-black px-3 py-2 bg-[#acd0f97b] w-full ml-2 rounded-md ${expanded ? "block" : "hidden"
                }`}
            >
              <div className="leading-4 ">
                <div className="text-wrap">
                  <h2 className="font-semibold pb-1">{user?.displayName}</h2>
                  <p className="w-[50px] text-wrap"><span className="text-sm w-[50px]">{user?.email}</span></p>
                </div>
              </div>
              <BsThreeDotsVertical size={20} className="" />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
