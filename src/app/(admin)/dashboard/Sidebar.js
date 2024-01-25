'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/images/bookflow.png";
// import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`bg-white fixed top-0 bottom-0 lg:static z-50 ${expanded ? "md:w-[20%] w-fit" : "w-[5%]"} duration-200`}>
      <aside className="h-screen">
        <nav className="h-full flex flex-col border-r shadow-md">
          <div className="p-4 pb-2 flex justify-between items-start">
            <Image src={logo} alt="Image" width={200} height={100} className={`w-32 ${expanded ? "blcok" : "hidden"}`}></Image>
            <button className="p-2 rounded-lg bg-gray-50 hover:bg-slate-100" onClick={() => setExpanded(!expanded)}>
              {expanded ? <FaArrowLeft size={30} className="text-black" /> : <FaArrowRight className="text-black" size={30} />}
            </button>
          </div>
          <ul className="flex-1 px-6">{children}</ul>
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
