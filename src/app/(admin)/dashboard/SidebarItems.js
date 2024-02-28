'use client'
import { UserAuth } from "@/app/provider/context/AuthContext";
import Link from "next/link";
import React from "react";
import { CiBoxList } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";


const SidebarItems = ({ expanded }) => {
  const { getRolebaseUser, loading } = UserAuth();

  return (
    !loading &&
    <>
      {getRolebaseUser?.role === "user" ? (
        <>
          <ul className="text-black space-y-4">
            <li className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]">
              <Link href="/" className="flex gap-2 font-bold">
                <FaHome size={25} className="text-xl font-bold mx-2" />
                <span className={`${expanded ? "block" : "hidden"}`}>Home</span>
              </Link>
            </li>
            <li className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]">
              <Link
                href="/dashboard/favourite"
                className="flex gap-2 font-bold"
              >
                <CiBoxList size={25} className="text-xl font-bold" />
                <span className={`${expanded ? "block" : "hidden"}`}>
                  Favorite Books
                </span>
              </Link>
            </li>
          </ul>
        </>
      ) : (
        // admin related route
        <ul className="text-black space-y-4">
          <li
            className="flex gap-2 items-center py-2 px-3 my-1
  font-medium rounded-md cursor-pointer
  transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]"
          >
            <Link href="/dashboard" className="flex gap-2 font-bold">
              <FaHome size={25} className="text-xl font-bold" />
              <span className={`${expanded ? "block" : "hidden"}`}>
                Admin Home
              </span>
            </Link>
          </li>
          <li
            className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer
  transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]"
          >
            <Link href="/dashboard/booklist" className="flex gap-2 font-bold">
              <CiBoxList size={25} className="text-xl font-bold" />
              <span className={`${expanded ? "block" : "hidden"}`}>
                Book List
              </span>
            </Link>
          </li>
          <li
            className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer
  transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96525] text-[#12a150]"
          >
            <Link href="/dashboard/addbook" className="flex gap-2 font-bold">
              <MdFormatListBulletedAdd
                size={25}
                className="text-xl font-bold"
              />
              <span className={`${expanded ? "block" : "hidden"}`}>
                Add Book
              </span>
            </Link>
          </li>
          <li
            className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer
  transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]">
            <Link href="/dashboard/addwriter" className="flex gap-2 font-bold">
              <MdFormatListBulletedAdd
                size={25}
                className="text-xl font-bold"
              />
              <span className={`${expanded ? "block" : "hidden"}`}>
                add writer
              </span>
            </Link>
          </li>
          <li
            className="flex gap-2 items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group hover:bg-green-500 hover:text-white  bg-[#18c96433] text-[#12a150]"
          >
            <Link href="/dashboard/all-user" className="flex gap-2 font-bold">
              <CiBoxList size={20} className="text-xl font-bold" />
              <span className={`${expanded ? "block" : "hidden"}`}>
                All Users
              </span>
            </Link>
          </li>
          <li
            className="flex gap-2 items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]"
          >
            <Link
              href="/dashboard/payment-history"
              className="flex gap-2 font-bold"
            >
              <CiBoxList size={20} className="text-xl font-bold" />
              <span className={`${expanded ? "block" : "hidden"}`}>
                Payment History
              </span>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default SidebarItems;
