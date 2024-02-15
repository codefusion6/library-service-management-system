"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import Image from "next/image";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { CldUploadWidget } from "next-cloudinary";

const Profile = () => {
  const { user } = UserAuth();
  console.log(user);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section>
      {/* <div className="container mx-auto m-10 h-full p-10 relative">
        <div className="border-[5px] h-full absolute inset-0 animate-pulse border-green-500"></div>
        <h1 className="text-3xl text-center font-bold mb-10 mt-5">User Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-2">
            <h1 className="text-xl font-bold">About me:</h1>
            <p className="text-base font-medium">
              I am a passionate explorer delving into library service
              management. With a love for organization, she uncovers website
              functionalities, cataloging books, optimizing search, and
              enhancing user experiences. Sarah thrives in the dynamic library
              landscape, streamlining processes for accessibility.
            </p>
          </div>
          <div className="">
            <Image
              alt="user image"
              src={user?.photoURL}
              height={30}
              width={350}
              className="w-[300px] rounded-full"
            ></Image>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">
              Name: <br />
              <span className="font-semibold"> {user?.displayName}</span>
            </p>
            <p className="font-semibold">
              Email: <br />
              <span className="font-semibold"> {user?.email}</span>
            </p>
            <ul className="flex gap-3 mt-5">
              <li className="text-3xl">
                <AiOutlineTwitter />
              </li>
              <li className="text-3xl">
                <FaFacebook />
              </li>
              <li className="text-3xl">
                <FaGithub />
              </li>
            </ul>
            <Button className="bg-indigo-600 mt-10 px-6 py-2 rounded-md ">Edit Profile</Button>
          </div>
        </div>
      </div> */}
      <div>
        <div>
          <div>
            <Image
              style={{ opacity: 100 }}
              width={2000}
              height={100}
              className="relative h-96"
              alt="cover"
              src="https://i.ibb.co/dbfLyRq/pastel-tone-purple-pink-blue-gradient-defocused-abstract-photo-smooth-lines-pantone-color-background.jpg"
            ></Image>
          </div>
        </div>
        <div className="border-green-500 border-[5px]">
          <div>
            <div className="container bg-white mx-auto m-10 h-full p-10 ">
              <div className="  h-full absolute inset-0 animate-pulse "></div>
              <div className="flex bg-green-600 rounded-md w-28">
                <button className="ml-3">Connect</button>
                <FiPlus className="mt-1 ml-2" />
              </div>
              <h1 className="text-3xl text-center font-bold mb-10 mt-5">
                User Profile
              </h1>
              <div></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-2">
                  <h1 className="text-xl font-bold">About me:</h1>
                  <p className="text-base font-medium">

                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center gap-5">
                  <Image
                    alt="user image"
                    src={user?.photoURL}
                    height={30}
                    width={350}
                    className="w-[300px] rounded-full"
                  ></Image>

                  <Button
                    className="bg-green-600  mt-10 px-6 py-2 rounded-md "
                    onPress={onOpen}>Edit Profile</Button>

                  <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">
                            <p>{user?.displayName}</p>
                          </ModalHeader>
                          <ModalBody>
                            <div>
                              <form className="m-8 max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
                                <div className="mb-4">
                                  <label
                                    htmlFor="Name"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    Name:
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                  />
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="bio"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    Bio :
                                  </label>
                                  <input
                                    type="text"
                                    name="bio"
                                    placeholder="bio"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                  />
                                </div>

                                {/* {/ About /} */}
                                <div className="mb-4">
                                  <label
                                    htmlFor="bookDescription"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    About
                                  </label>
                                  <textarea
                                    name="about"
                                    placeholder="write about your-self"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                  />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                  {/* User Image  */}
                                  <div className="mb-4">
                                    <CldUploadWidget
                                      uploadPreset="lms_code_fusion"
                                      autoUpload={false}
                                      onSuccess={(result, { widget }) => {
                                        setAuthorImg(result?.info?.secure_url);
                                        console.log(resource);
                                        widget.close();
                                      }}
                                    >
                                      {({ open }) => {
                                        function handleOnClick() {
                                          // setAuthorImg(null);
                                          open();
                                        }
                                        return (
                                          <button
                                            type="button"
                                            className="px-5 py-3 rounded-md text-white bg-blue-500 hover:bg-blue-700"
                                            onClick={handleOnClick}
                                          >
                                            Upload Image
                                          </button>
                                        );
                                      }}
                                    </CldUploadWidget>
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="category"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                  >
                                    Live
                                  </label>
                                  <select
                                    name="category"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                  >
                                    <option value="Basic">Dhaka</option>
                                    <option value="Plus">Barishal</option>
                                    <option value="Elite">Khulna</option>
                                    <option value="Elite">Jossore</option>
                                    <option value="Elite">Mymangsing</option>
                                    <option value="Elite">Gazipur</option>
                                    <option value="Elite">Sylhet</option>
                                    <option value="Elite">Chittagonj</option>
                                  </select>
                                </div>
                                <button
                                  type="submit"
                                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                                >
                                  Submit
                                </button>
                              </form>
                            </div>
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
                </div>

                <div className="space-y-2">
                  <p className="font-semibold">
                    Name: <br />
                    <span className="font-semibold"> {user?.displayName}</span>
                  </p>
                  <p className="font-semibold">
                    Email: <br />
                    <span className="font-semibold"> {user?.email}</span>
                  </p>
                  <ul className="flex gap-3 mt-5 mb-10">
                    <li className="text-3xl mb-5">
                      <AiOutlineTwitter />
                    </li>
                    <li className="text-3xl">
                      <FaFacebook />
                    </li>
                    <li className="text-3xl">
                      <FaGithub />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
