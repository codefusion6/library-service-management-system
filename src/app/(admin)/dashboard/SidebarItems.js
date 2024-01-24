"use client"
import Link from "next/link";
import React, { useContext } from "react";
import { CiBoxList } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";

const SidebarItems = ({ icon, text, active, alert }) => {
  return (
    <div>
      <ul className="text-black space-y-4">
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
          transition-colors group hover:bg-green-100"
        >
          <MdFormatListBulletedAdd size={20} className="text-xl font-bold" />
          <Link href="/dashboard/addbook">Add Book </Link>
        </li>
        <li
          className="flex gap-2 items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group hover:bg-green-100"
        >
          <CiBoxList size={20} className="text-xl font-bold" />
          <Link href="/dashboard/userList">User List</Link>
        </li>
        <li
          className="flex gap-2 items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group hover:bg-green-100"
        >
          <CiBoxList size={20} className="text-xl font-bold" />
          <Link href="/dashboard/booklist">Book List</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarItems;
