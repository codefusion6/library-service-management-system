'use client'
import React from "react";
import { FaSearch, FaUserFriends } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaBookOpen, FaBookBible } from "react-icons/fa6";
import Chart from "@/components/dashboardChart/Chart";

function Dashboard() {
  return (
    <main className="h-[100vh]">
      <div className="">
        <div className="flex justify-end items-center gap-3 bg-gradient-to-r from-yellow-200 to-green-600 p-5">
          <input
            type="text"
            placeholder="search a book"
            className="rounded-lg py-2 px-3"
          />
          <FaSearch className="text-2xl"></FaSearch>
          <IoIosNotifications className="text-3xl" />
        </div>
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Card className="max-w-[400px] border bg-green-900 p-5 text-white rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-bold">Total User</p>
                <p className="text-xl font-semibold flex gap-3 ">
                  <FaUserFriends className="text-3xl" />105
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <p>
                This number is static now in next milestone we will show the
                number from Database.
              </p>
            </CardBody>
          </Card>
          <Card className="max-w-[400px] border bg-green-700 p-5 text-white rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-bold flex"> Total Books</p>
                <p className="text-xl font-semibold flex gap-3 ">
                  <FaBookOpen className="text-3xl" />
                  105
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <p>
                This number is static now in next milestone we will show the
                number from Database.
              </p>
            </CardBody>
          </Card>
          <Card className="max-w-[400px] border bg-green-500 p-5 text-white rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-bold">Total Featured book</p>
                <p className="text-xl font-semibold flex gap-3  ">
                  <FaBookBible className="text-3xl" />
                  105
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <p>
                This number is static now in next milestone we will show the
                number from Database.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="w-96 container mx-auto mt-5">
          <Chart></Chart>
        </div>
      </div>
    </main>
  );
}
export default Dashboard;
