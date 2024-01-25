"use client";

import React, { useState, createContext } from "react";
import { Image } from "@nextui-org/react";
import Modal from "@/components/modal/modal";

/* eslint-disable react/no-unescaped-entities */
const AllUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const userData = [
    // Your user data here
    {
      id: 1,
      name: "Priyanka Das Dipa",
      position: "Admin",
      status: "Online",
      email: "priyanka.das@dipa.com",
      imageUrl: "https://i.ibb.co/MDyKKgQ/804953.png",
    },
    {
      id: 2,
      name: "Sumon Pal",
      position: "Admin",
      status: "Online",
      email: "sumon@pal.com",
      imageUrl: "https://i.ibb.co/H2NdnSC/istockphoto-1276565833-612x612.jpg",
    },
    {
      id: 3,
      name: "Ranit Sarker",
      position: "Admin",
      status: "Online",
      email: "ranit@sarker.com",
      imageUrl: "https://i.ibb.co/yP0bv4y/Whats-Appir.jpg",
    },
    {
      id: 4,
      name: "Probesh Dev Nath",
      position: "Librarian",
      status: "Online",
      email: "probesh@nath.com",
      imageUrl: "https://i.ibb.co/yP0bv4y/Whats-Appir.jpg",
    },
    {
      id: 5,
      name: "Arina Huque Rafa",
      position: "User",
      status: "Offline",
      email: "arina@huque.com",
      imageUrl: "https://i.ibb.co/yP0bv4y/Whats-Appir.jpg",
    },
  ];

  console.log("userData", userData);
  console.log("searchTerm", searchTerm);

  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const UserContext = createContext();
  const handlePositionChange = (newPosition) => {
    setSelectedPosition(newPosition);
  };

  return (
    <div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center  justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            <div className="mt-5 ml-5">
              <button
                id="dropdownActionButton"
                data-dropdown-toggle="dropdownAction"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <span className="sr-only">Action button</span>
                Action
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownAction"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownActionButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Admin
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Modarator
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      User
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete User
                  </a>
                </div>
              </div>
            </div>
            {/*search section */}
            <div className="mt-10 mr-5">
              <div className="">
                <label for="table-search" className="sr-only">
                  Search
                </label>
              </div>
              <div className="relative mt-5">
                <div className="absolute mt-0 inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  className="block p-2 ps-10 text-sm text-gray-900 
            border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
              dark:focus:border-blue-500"
                  placeholder="Search for users"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Position
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody></tbody>
            {/* <tbody>
             
                <tr
                 
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                 
                </tr>
             
            </tbody> */}
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  {/* ... rest of the rendering logic for each user */}
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image
                      className="w-10 h-10 rounded-full"
                      src={user.imageUrl}
                      alt={`${user.name}'s image`}
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">{user.name}</div>
                      <div className="font-normal text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 relative">
                    <div className="cursor-pointer">
                      <span className="text-blue-600 dark:text-blue-500 hover:underline">
                        {user.position}
                      </span>
                      <svg
                        className="w-4 h-4 inline-block ml-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {/* Dropdown content */}
                    <div className="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => handlePositionChange("Admin")}
                          >
                            Admin
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => handlePositionChange("Moderator")}
                          >
                            Moderator
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => handlePositionChange("User")}
                          >
                            User
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className={`h-2.5 w-2.5 rounded-full bg-${
                          user.status === "Online" ? "green" : "red"
                        }-500 me-2`}
                      ></div>{" "}
                      {user.status}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {/* <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a> */}
                    <button className="text-white bg-blue-700  hover:bg-blue-800 focus:outline-none 
                    font-medium text-sm rounded-lg px-5 -py-2 text-centermr-5 ">
                      Edit User
                    </button>
                    <Modal></Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
