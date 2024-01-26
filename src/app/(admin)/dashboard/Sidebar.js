'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/images/bookflow.png";
// import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SidebarItems from "./SidebarItems";
import Link from "next/link";

const Sidebar = ({ }) => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className={`bg-white fixed top-0 border-r shadow-md lg:static z-50 ${expanded ? "lg:w-[20%] -left-full lg:left-0" : "lg:w-[6%]"} duration-200`}>
      <aside className="h-screen">
        <nav className="h-screen flex flex-col">
          <div className="p-4 pb-2 flex justify-between items-start">
            <Link href="/"> <Image src={logo} alt="Image" width={200} height={100} className={`w-32 ${expanded ? "blcok" : "hidden"}`}></Image></Link>
            <button className={`p-2 rounded-lg bg-gray-50 hover:bg-slate-100 fixed lg:static left-0 top-0 ${!expanded ? "" : ""}`} onClick={() => setExpanded(!expanded)}>
              {expanded ? <FaArrowLeft size={30} className="text-black" /> : <FaArrowRight className="text-black" size={30} />}
            </button>
          </div>
          <ul className="flex-1 px-6">
            <SidebarItems expanded={expanded} />
          </ul>
          <div className="border-r flex p-3">
            <Image
              src="https://i.ibb.co/QNQ491S/tahmima.jpg"
              alt="profile image"
              width={50}
              height={30}
              className="rounded-md" />
            <div className={`flex justify-between items-center text-black px-3 bg-red-50 w-80 ml-3 ${expanded ? "block" : "hidden"}`}>
              <div className="leading-4">
                <h2 className="font-semibold ">Priyanka</h2>
                <span className="text-sm">priyanka@gmail.com</span>
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
