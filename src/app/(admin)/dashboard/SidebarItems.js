import Link from "next/link";
import React from "react";
import { CiBoxList } from "react-icons/ci";
import { FaHome, FaUserPlus } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";


const SidebarItems = ({ expanded }) => {
  return (
    <ul className="text-black space-y-4">
      <li
        className="flex gap-2 items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group hover:bg-yellow-100"
      >
        <Link href="/dashboard" className="flex gap-2 font-bold">
          <FaHome size={25} className="text-xl font-bold" />
          <sapn className={`${expanded ? "block" : "hidden"}`}>Admin Home</sapn>
        </Link>
      </li>
      <li
        className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer
      transition-colors group hover:bg-yellow-100"
      >
        <Link href="/dashboard/booklist" className="flex gap-2 font-bold">
          <CiBoxList size={25} className="text-xl font-bold" />
          <sapn className={`${expanded ? "block" : "hidden"}`}>Book List</sapn>
        </Link>
      </li>
      <li
        className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer
      transition-colors group hover:bg-yellow-100"
      >
        <Link href="/dashboard/addbook" className="flex gap-2 font-bold">
          <MdFormatListBulletedAdd size={25} className="text-xl font-bold" />
          <sapn className={`${expanded ? "block" : "hidden"}`}>Add Book</sapn>
        </Link>
      </li>
      <li
        className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer
      transition-colors group hover:bg-yellow-100"
      >
        <Link href="/dashboard/addwriter" className="flex gap-2 font-bold">
          <FaUserPlus size={25} className="text-xl font-bold" />
          <sapn className={`${expanded ? "block" : "hidden"}`}>Add Writer</sapn>
        </Link>
      </li>
      <li
          className="flex gap-2 items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group hover:bg-green-100"
        >
          
          <Link href="/dashboard/all-user" className="flex gap-2 font-bold"
          >
            <CiBoxList size={20} className="text-xl font-bold" />
             <sapn className={`${expanded ? "block" : "hidden"}`}> All Users</sapn>
           
          </Link>
        </li>

    </ul>
  );
};

export default SidebarItems;