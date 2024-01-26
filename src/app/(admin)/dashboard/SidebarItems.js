import Link from "next/link";
import React from "react";
import { CiBoxList } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";

const SidebarItems = ({ icon, text, active, alert }) => {
  return (
    <ul className="text-black space-y-4">
      <li
        className="flex gap-2 items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group hover:bg-yellow-100"
      >
        <FaHome size={20} className="text-xl font-bold" />
        <Link href="/dashboard">Admin Home</Link>
      </li>
      <li
        className="flex gap-2 items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group hover:bg-yellow-100"
      >
        <CiBoxList size={20} className="text-xl font-bold" />
        <Link href="/dashboard/booklist">Book List</Link>
      </li>
      <li
        className="flex gap-2 items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group hover:bg-yellow-100"
      >
        <MdFormatListBulletedAdd size={20} className="text-xl font-bold" />
        <Link href="/dashboard/addbook">Add Book </Link>
      </li>
      <li
        className="flex gap-2 items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group hover:bg-yellow-100"
      >
        <CiBoxList size={20} className="text-xl font-bold" />
        <Link href="/dashboard/userList">User List</Link>
      </li>

    </ul>
  );
};

export default SidebarItems;
