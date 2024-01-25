"use client"
import React, {  Fragment } from "react";
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

const UserPage = () => {
            const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div >
    
    <Fragment>
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
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {/* ... rest of the rendering logic for each user */}
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image width={100}
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/MDyKKgQ/804953.png"
                      alt="img"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        <h2>Priyanka Das Dipa</h2>
                      </div>
                      <div className="font-normal text-gray-500">
                        <h2>dipa@gmail.com</h2>
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
                    {/* <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a> */}
                    {/* <Button onPress={onOpen}>Edit User</Button>
                      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
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
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nullam pulvinar risus non
                                  risus hendrerit venenatis. Pellentesque sit
                                  amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                  Magna exercitation reprehenderit magna aute
                                  tempor cupidatat consequat elit dolor
                                  adipisicing. Mollit dolor eiusmod sunt ex
                                  incididunt cillum quis. Velit duis sit officia
                                  eiusmod Lorem aliqua enim laboris do dolor
                                  eiusmod. Et mollit incididunt nisi consectetur
                                  esse laborum eiusmod pariatur proident Lorem
                                  eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  color="danger"
                                  variant="light"
                                  onPress={onClose}
                                >
                                  Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                  Action
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal> */}

                    <>
                      <Button onPress={onOpen}>Open Modal</Button>
                      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
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
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nullam pulvinar risus non
                                  risus hendrerit venenatis. Pellentesque sit
                                  amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                  Magna exercitation reprehenderit magna aute
                                  tempor cupidatat consequat elit dolor
                                  adipisicing. Mollit dolor eiusmod sunt ex
                                  incididunt cillum quis. Velit duis sit officia
                                  eiusmod Lorem aliqua enim laboris do dolor
                                  eiusmod. Et mollit incididunt nisi consectetur
                                  esse laborum eiusmod pariatur proident Lorem
                                  eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  color="danger"
                                  variant="light"
                                  onPress={onClose}
                                >
                                  Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                  Action
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                    </>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {/* ... rest of the rendering logic for each user */}
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image width={100}
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/H2NdnSC/istockphoto-1276565833-612x612.jpg"
                      alt="img"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        <h2>Sumon Pal</h2>
                      </div>
                      <div className="font-normal text-gray-500">
                        <h2>sumon@gmail.com</h2>
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
                    {/* <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a> */}
                    <Button onPress={onOpen}>Edit User</Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1">
                              Modal Title
                            </ModalHeader>
                            <ModalBody>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                              </p>
                              <p>
                                Magna exercitation reprehenderit magna aute
                                tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex
                                incididunt cillum quis. Velit duis sit officia
                                eiusmod Lorem aliqua enim laboris do dolor
                                eiusmod. Et mollit incididunt nisi consectetur
                                esse laborum eiusmod pariatur proident Lorem
                                eiusmod et. Culpa deserunt nostrud ad veniam.
                              </p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                              <Button color="primary" onPress={onClose}>
                                Action
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {/* ... rest of the rendering logic for each user */}
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image width={100}
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/H2NdnSC/istockphoto-1276565833-612x612.jpg"
                      alt="img"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        <h2>Probesh Deb</h2>
                      </div>
                      <div className="font-normal text-gray-500">
                        <h2>probesh@gmail.com</h2>
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
                    {/* <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a> */}
                    <Button onPress={onOpen}>Edit User</Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1">
                              Modal Title
                            </ModalHeader>
                            <ModalBody>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                              </p>
                              <p>
                                Magna exercitation reprehenderit magna aute
                                tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex
                                incididunt cillum quis. Velit duis sit officia
                                eiusmod Lorem aliqua enim laboris do dolor
                                eiusmod. Et mollit incididunt nisi consectetur
                                esse laborum eiusmod pariatur proident Lorem
                                eiusmod et. Culpa deserunt nostrud ad veniam.
                              </p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                              <Button color="primary" onPress={onClose}>
                                Action
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {/* ... rest of the rendering logic for each user */}
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image width={100} 
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/MDyKKgQ/804953.png"
                      alt="img"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        <h2>Sabbir Vhai</h2>
                      </div>
                      <div className="font-normal text-gray-500">
                        <h2>sabbir@gmail.com</h2>
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
                    {/* <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a> */}
                    <Button onPress={onOpen}>Edit User</Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1">
                              Modal Title
                            </ModalHeader>
                            <ModalBody>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                              </p>
                              <p>
                                Magna exercitation reprehenderit magna aute
                                tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex
                                incididunt cillum quis. Velit duis sit officia
                                eiusmod Lorem aliqua enim laboris do dolor
                                eiusmod. Et mollit incididunt nisi consectetur
                                esse laborum eiusmod pariatur proident Lorem
                                eiusmod et. Culpa deserunt nostrud ad veniam.
                              </p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                              <Button color="primary" onPress={onClose}>
                                Action
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {/* ... rest of the rendering logic for each user */}
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image width={100}
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/H2NdnSC/istockphoto-1276565833-612x612.jpg"
                      alt="img"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        <h2>Ranit Vhaiya</h2>
                      </div>
                      <div className="font-normal text-gray-500">
                        <h2>ranit@gmail.com</h2>
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
                    {/* <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </a> */}
                    <Button onPress={onOpen}>Edit User</Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1">
                              Modal Title
                            </ModalHeader>
                            <ModalBody>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam pulvinar risus non risus
                                hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                              </p>
                              <p>
                                Magna exercitation reprehenderit magna aute
                                tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex
                                incididunt cillum quis. Velit duis sit officia
                                eiusmod Lorem aliqua enim laboris do dolor
                                eiusmod. Et mollit incididunt nisi consectetur
                                esse laborum eiusmod pariatur proident Lorem
                                eiusmod et. Culpa deserunt nostrud ad veniam.
                              </p>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                              <Button color="primary" onPress={onClose}>
                                Action
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
    </div>
  );
};

export default UserPage ;
