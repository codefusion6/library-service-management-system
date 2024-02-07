"use client";
import React, { Fragment, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";

const UserTable = ({ allUser }) => {


  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState("");

  // const allUser = [
  //   {
  //     name: "Priyanka Das Dipa",
  //     email: "dipa@gmail.com",
  //     role: "Admin",
  //     status: "Online",
  //   },
  //   {
  //     name: "Arina  Huque Rafa",
  //     email: "rafa@gmail.com",
  //     role: "Admin",
  //     status: "Online",
  //   },
  // ];

  // Filter users based on search query
  const filteredUsers = allUser.data?.filter((user) => user.name.toLowerCase() === searchQuery.toLowerCase());
  console.log(filteredUsers)
  return (
    <div>
      <Fragment>
        <div>
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                <div className="mt-5 ml-5">
                  <button
                    id="dropdownActionButton"
                    data-dropdown-toggle="dropdownAction"
                    className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4
                     focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
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
                <tbody>
                  {allUser.data?.map((user, index) => (
                    <tr key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="col" className="px-6 py-3">{index + 1}</th>
                      {/* ... rest of the rendering logic for each user */}
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Image
                          style={{ opacity: 100 }}
                          width={100}
                          className="w-10 h-10 rounded-full"
                          src="https://i.ibb.co/MDyKKgQ/804953.png"
                          alt="img"
                        />
                        <div className="ps-3">
                          <div className="text-base font-semibold">
                            <h2>{user.name}</h2>
                          </div>
                          <div className="font-normal text-gray-500">
                            <h2>{user.email}</h2>
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4 relative">
                        <div className="cursor-pointer">
                          <span className="text-blue-600 dark:text-blue-500 hover:underline">
                            Admin
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
                              >
                                Admin
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Moderator
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
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full "></div>
                          Online
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <>
                          <Button onPress={onOpen} className="text-blue-700 font-serif">Edit</Button>
                          <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-green-200 border h-52" >
                            <ModalContent>
                              {(onClose) => (
                                <>
                                  <ModalHeader className="flex flex-col gap-1">
                                    Modal Title
                                  </ModalHeader>
                                  <ModalBody>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Nullam pulvinar risus non
                                      risus hendrerit venenatis. Pellentesque sit
                                      amet hendrerit risus, sed porttitor quam.
                                    </p>

                                  </ModalBody>
                                  <ModalFooter>
                                    <Button className="bg-green-700 text-xl font-serif  rounded-md"
                                      color="danger"
                                      variant="light"
                                      onPress={onClose}
                                    >
                                      Close
                                    </Button>

                                  </ModalFooter>
                                </>
                              )}
                            </ModalContent>
                          </Modal>
                        </>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default UserTable;
