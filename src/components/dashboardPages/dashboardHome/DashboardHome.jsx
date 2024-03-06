"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import {
  FaBook,
  FaBookOpen,
  FaSearch,
  FaUserFriends,
  FaUserTie,
} from "react-icons/fa";

import { IoIosNotifications } from "react-icons/io";

const DashboardHome = ({ bookNum, userNum, writerNum }) => {
  return (
    <div className="">
      <div className="flex justify-end items-center gap-3 bg-gradient-to-r p-5">
        <input
          type="text"
          placeholder="search a book"
          className="rounded-lg py-2 px-3 border "
        />
        <FaSearch className="text-2xl"></FaSearch>
        <IoIosNotifications className="text-3xl" />
      </div>
      <div className="pt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="flex gap-5 justify-between max-w-[400px] shadow shadow-slate-400 border p-5 text-black rounded-lg">
          <div className="">
            <p className="text-bold font-semibold uppercase">Total User</p>
            <p className="text-xl font-bold">{userNum}</p>
          </div>

          <div>
            <p className="bg-blue-600 p-5 rounded-3xl">
              <FaUserFriends className="text-3xl  text-white" />
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-between  max-w-[400px] shadow shadow-slate-400 border p-5 text-black rounded-lg">
          <div className="flex gap-3">
            <div className="">
              <p className="text-bold text-xl font-bold uppercase">
                Total Books
              </p>
              <p className="text-xl font-semibold flex gap-3 ">{bookNum}</p>
            </div>
          </div>
          <div>
            <p className="bg-blue-600 p-5 rounded-3xl">
              <FaBookOpen className="text-3xl text-white" />
            </p>
          </div>
        </div>
        <div className="flex gap-5  justify-between max-w-[400px] shadow shadow-slate-400 border p-5 text-black rounded-lg">
          <div className="">
            <div className="flex flex-col">
              <p className="text-bold font-bold uppercase">Total Writers</p>
              <p className="text-xl font-semibold flex gap-3 ">{writerNum}</p>
            </div>
          </div>
          <div>
            <p className="bg-blue-600 p-5 rounded-3xl">
              <FaUserTie className="text-3xl text-white" />
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-between  max-w-[400px] shadow shadow-slate-400 border p-5 text-black rounded-lg">
          <div className="">
            <div className="">
              <p className="text-bold text-xl font-bold uppercase">
                Recommended books
              </p>
              <p className="text-xl font-semibold flex gap-3 ">8</p>
            </div>
          </div>
          <div>
            <p className="bg-blue-600 p-5 rounded-3xl ">
              <FaBook className="text-3xl text-white" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
