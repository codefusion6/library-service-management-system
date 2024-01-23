import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/images/bookflow.png";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { SidebarContext } from "../context/SidebarContext";

// const SidebarContext = createContext();
const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-md">
          <div className="p-4 pb-2 flex justify-between items-start">
            <Image
              src={logo}
              alt="Image"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            ></Image>
            <button
              className="p-3 rounded-lg bg-gray-50 hover:bg-slate-100"
              onClick={() => setExpanded((curr) => !curr)}
            >
              {expanded ? (
                <FaArrowRightArrowLeft className="text-black" />
              ) : (
                <FaArrowAltCircleRight className="text-black" />
              )}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-6">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-r flex p-3">
            <Image
              src="https://i.ibb.co/QNQ491S/tahmima.jpg"
              alt="profile image"
              width={50}
              height={30}
              className="rounded-md"
            />
            <div
              className={`flex justify-between items-center text-black bg-red-50 overflow-hidden transition-all ${
                expanded ? "w-80 ml-3" : "w-0"
              }`}
            >
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
