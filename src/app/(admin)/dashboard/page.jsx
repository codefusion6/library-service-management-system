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
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <Card className="max-w-[400px] border bg-green-900 p-5 text-white rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-bold font-semibold">Total User</p>
                <p className="text-xl font-semibold flex gap-3 ">
<<<<<<< HEAD
                  <FaUserFriends className="text-3xl" />6
=======
                  <FaUserFriends className="text-3xl" />5
>>>>>>> ea75030eee8771f31b49af144620cc58ebc1bcd5
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <p>

              </p>
            </CardBody>
          </Card>
          <Card className="max-w-[400px] border bg-green-700 p-5 text-white rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-bold text-xl font-semibold"> Total Books</p>
                <p className="text-xl font-semibold flex gap-3 ">
                  <FaBookOpen className="text-3xl" />
<<<<<<< HEAD
                  12
=======
                  5
>>>>>>> ea75030eee8771f31b49af144620cc58ebc1bcd5
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <p>

              </p>
            </CardBody>
          </Card>
          <Card className="max-w-[400px] border bg-green-500 p-5 text-white rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-bold font-semibold">Total Featured book</p>
                <p className="text-xl font-semibold flex gap-3  ">
                  <FaBookBible className="text-3xl" />
<<<<<<< HEAD
                  8
=======
                  3
>>>>>>> ea75030eee8771f31b49af144620cc58ebc1bcd5
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <p>

              </p>
            </CardBody>
          </Card>
          <Card className="max-w-[400px] border bg-green-700 p-5 text-white rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-bold text-xl font-semibold">Recomandded books</p>
                <p className="text-xl font-semibold flex gap-3 ">
                  <FaBookOpen className="text-3xl" />
                  8
                </p>
              </div>
            </CardHeader>
            <CardBody>
              <p>

              </p>
            </CardBody>
          </Card>
        </div>
        <div className="w-96 container mx-auto mt-20">
          <Chart></Chart>
        </div>
      </div>
    </main>
  );
}
export default Dashboard;
