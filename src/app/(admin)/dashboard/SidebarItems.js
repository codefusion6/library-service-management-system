"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import Link from "next/link";
import React from "react";
import { CiBoxList } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";

const SidebarItems = ({ expanded }) => {
  const { getRolebaseUser, loading } = UserAuth();

  return (
    !loading && (
      <>
        {getRolebaseUser?.role === "user" ? (
          <>
            <ul className="text-black space-y-4">
              {/* home */}
              <li className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]">
                <Link href="/" className="flex gap-2 font-bold">
                  <FaHome size={25} className="text-xl font-bold mx-2" />
                  <span className={`${expanded ? "block" : "hidden"}`}>
                    Home
                  </span>
                </Link>
              </li>
              {/* Favorite Books */}
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
              {/* Publisher Request */}
              <li className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]">
                <Link
                  href="/dashboard/publisher-request"
                  className="flex gap-2 font-bold"
                >
                  <CiBoxList size={25} className="text-xl font-bold" />
                  <span className={`${expanded ? "block" : "hidden"}`}>
                    Publisher Request
                  </span>
                </Link>
              </li>
            </ul>
          </>
        ) : getRolebaseUser?.role === "member" ? (
          <>
            <ul className="text-black space-y-4">
              {/* home */}
              <li className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]">
                <Link href="/" className="flex gap-2 font-bold">
                  <FaHome size={25} className="text-xl font-bold mx-2" />
                  <span className={`${expanded ? "block" : "hidden"}`}>
                    Home
                  </span>
                </Link>
              </li>
              {/* Favorite Books */}
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
              {/* Publisher Request */}
              <li className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]">
                <Link
                  href="/dashboard/publisher-request"
                  className="flex gap-2 font-bold"
                >
                  <CiBoxList size={25} className="text-xl font-bold" />
                  <span className={`${expanded ? "block" : "hidden"}`}>
                    Publisher Request
                  </span>
                </Link>
              </li>
            </ul>
          </>
        ) : getRolebaseUser?.role === "admin" ? (
          <ul className="text-black space-y-4">
            {/* Admin Home */}
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
            {/* Book List */}
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
            {/* Add Book */}
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
            {/* Add Writer */}
            <li
              className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer
            transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]"
            >
              <Link
                href="/dashboard/addwriter"
                className="flex gap-2 font-bold"
              >
                <MdFormatListBulletedAdd
                  size={25}
                  className="text-xl font-bold"
                />
                <span className={`${expanded ? "block" : "hidden"}`}>
                  Add Writer
                </span>
              </Link>
            </li>
            {/* All Users */}
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
            {/* Payment History */}
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
            {/* Publisher Pending Request */}
            <li
              className="flex gap-2 items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]"
            >
              <Link
                href="/dashboard/publisher-pending-request"
                className="flex gap-2 font-bold"
              >
                <CiBoxList size={20} className="text-xl font-bold" />
                <span className={`${expanded ? "block" : "hidden"}`}>
                  Publisher Pending Request
                </span>
              </Link>
            </li>
            {/* user Book request */}
            <li className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]">
              <Link
                href="/dashboard/book-request"
                className="flex gap-2 font-bold"
              >
                <CiBoxList size={25} className="text-xl font-bold" />
                <span className={`${expanded ? "block" : "hidden"}`}>
                  Book Request
                </span>
              </Link>
            </li>
          </ul>
        ) : getRolebaseUser?.role === "publisher" ? (
          <>
            <ul className="text-black space-y-4">
              <li
                className="flex gap-2 font-bold items-center py-2 px-3 my-1 rounded-md cursor-pointer
            transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96525] text-[#12a150]"
              >
                <Link
                  href="/dashboard/addbook"
                  className="flex gap-2 font-bold"
                >
                  <MdFormatListBulletedAdd
                    size={25}
                    className="text-xl font-bold"
                  />
                  <span className={`${expanded ? "block" : "hidden"}`}>
                    Add Book
                  </span>
                </Link>
              </li>
            </ul>
          </>
        ) : (
          // Space for other roles
          <div className="text-black space-y-4">
            {/* Add links for other roles here if needed */}
          </div>
        )}
        <div className="text-black space-y-4">
        <ul>
          {/* User Profile */}
          <li
                className="flex gap-2 items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group hover:bg-green-500 hover:text-white bg-[#18c96433] text-[#12a150]"
              >
                <Link
                  href="/dashboard/userProfile"
                  className="flex gap-2 font-bold"
                >
                  <CiBoxList size={25} className="text-xl font-bold" />
                  <span className={`${expanded ? "block" : "hidden"}`}>
                    User Profile
                  </span>
                </Link>
              </li>
        </ul>
        </div>
      </>
    )
  );
};

export default SidebarItems;
