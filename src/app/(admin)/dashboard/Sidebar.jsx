<<<<<<< HEAD
import Image from "next/image";
import logo from "../../../../public/images/bookflow.png";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

const Sidebar = ({ children }) => {
  return (
    <div>
      <aside className="min-h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-md">
          <div className="p-4 pb-2 flex justify-between items-start">
            <Image
              src={logo}
              alt="Image"
              width={200}
              height={100}
              className="w-32"
            ></Image>
            <button className="p-3 rounded-lg bg-gray-50 hover:bg-slate-100">
              <FaArrowRightArrowLeft className="text-black" />
            </button>
          </div>
          <ul className="flex-1 px-6">{children}</ul>
          <div className="border-r flex p-3">
            <Image
              src="https://i.ibb.co/QNQ491S/tahmima.jpg"
              alt="profile image"
              width={50}
              height={30}
              className="rounded-md"
            />
            <div className="flex justify-between items-center text-black px-3 bg-red-50 w-80 ml-3">
              <div className="leading-4">
                <h2 className="font-semibold ">Priyanka</h2>
                <span className="text-sm">priyanka@gmail.com</span>
              </div>
              <BsThreeDotsVertical size={20} className="" />
            </div>
          </div>
=======
'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/images/bookflow.png";
// import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SidebarItems from "./SidebarItems";
import Link from "next/link";
import { UserAuth } from "@/app/provider/context/AuthContext";


const Sidebar = ({ }) => {
  const [expanded, setExpanded] = useState(true)
  const { user, loading } = UserAuth();

  return (
    <div className={`bg-white fixed top-0 border-r shadow-md lg:static z-50 ${expanded ? "lg:w-[20%] -left-[500%] lg:left-0" : "lg:w-[6%]"} duration-200`}>
      <aside className="h-screen">
        <nav className="h-screen flex flex-col">
          <div className="p-4 pb-2 flex justify-between items-start">
            <Link href="/"> <Image src={logo} alt="Image" width={200} height={100} className={`w-32 ${expanded ? "blcok" : "hidden"}`}></Image></Link>
            <button className={`p-2 rotate-180 lg:rotate-0 rounded-lg bg-gray-50 hover:bg-slate-100 fixed lg:static left-0 top-0 ${!expanded ? "" : ""}`} onClick={() => setExpanded(!expanded)}>
              {expanded ? <FaArrowLeft size={30} className="text-black" /> : <FaArrowRight className="text-black" size={30} />}
            </button>
          </div>
          <ul className="flex-1 px-6 mt-4">
            <SidebarItems expanded={expanded} />
          </ul>
          {!loading && user &&
            <div className="border-r flex p-3">
              <Image
                src={user?.photoURL}
                rel="noopener noreferrer"
                alt="profile image"
                width={50}
                height={30}
                className="rounded-md" />
              <div className={`flex justify-between items-center text-black px-3 bg-red-50 w-full ml-3 rounded-md ${expanded ? "block" : "hidden"}`}>
                <div className="leading-4">

                  <div className="">
                    <h2 className="font-semibold pb-1">{user?.displayName}</h2>
                    <span className="text-sm">{user?.email}</span>
                  </div>
                </div>
                <BsThreeDotsVertical size={20} className="" />
              </div>
            </div>
          }
>>>>>>> afdd6ad131e408ed849897f605afd01cdd32d9d8
        </nav>
      </aside>
    </div>
  );
};

<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar;
>>>>>>> afdd6ad131e408ed849897f605afd01cdd32d9d8
