import Link from "next/link";
import React, { useContext } from "react";
import { CiBoxList } from "react-icons/ci";
<<<<<<< HEAD:src/app/dashboard/SidebarItems.js
import { SidebarContext } from "../context/SidebarContext";
=======
import { MdFormatListBulletedAdd } from "react-icons/md";

>>>>>>> 989a26f6d62c92a32b48a5206c70a8154f3106fd:src/app/(admin)/dashboard/SidebarItems.js

const SidebarItems = () => {
  const { expanded } = useContext(SidebarContext);
  return (
    <div>
      <ul className="text-black space-y-4">
        <li
          className="flex gap-2 items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group hover:bg-yellow-100"
        >
          <CiBoxList size={20} className="text-xl font-bold" />
<<<<<<< HEAD:src/app/dashboard/SidebarItems.js
          <Link
            href="#"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32 " : "w-0"
            }`}
          >
            <span>Book List</span>
          </Link>
=======
          <Link href="/booklist">Book List</Link>
>>>>>>> 989a26f6d62c92a32b48a5206c70a8154f3106fd:src/app/(admin)/dashboard/SidebarItems.js
        </li>
        <li
          className="flex gap-2 items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group hover:bg-green-100"
        >
<<<<<<< HEAD:src/app/dashboard/SidebarItems.js
          <CiBoxList size={20} className="text-xl font-bold" />
          <Link
            href="#"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32 " : "w-0"
            }`}
          >
            Book List
          </Link>
=======
          <MdFormatListBulletedAdd size={20} className="text-xl font-bold" />
          <Link href="/dashboard/addbook">Add Book </Link>
>>>>>>> 989a26f6d62c92a32b48a5206c70a8154f3106fd:src/app/(admin)/dashboard/SidebarItems.js
        </li>
        <li
          className="flex gap-2 items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group hover:bg-green-100"
        >
          <CiBoxList size={20} className="text-xl font-bold" />
          <Link
            href="#"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32 " : "w-0"
            }`}
          >
            Book List
          </Link>
        </li>
        <li
          className="flex gap-2 items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group hover:bg-green-100"
        >
          <CiBoxList size={20} className="text-xl font-bold" />
          <Link
            href="#"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32 " : "w-0"
            }`}
          >
            Book List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarItems;
