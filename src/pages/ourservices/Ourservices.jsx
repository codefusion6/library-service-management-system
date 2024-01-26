"use client";

import { Image } from "@nextui-org/react";
import { BsBook } from "react-icons/bs";
import ServicesSection from "./ServicesSection";
import PricingSection from "./PricingSection";
import LibraryServicesSection from "./LibraryServicesSection";

const Ourservices = () => {
  return (
    <div className="mt-10 mb-[10vh]">
      <ServicesSection></ServicesSection>
      <div>
        <div className="text-3xl flex text-center ml-[90vh] mt-[20vh] w-[39vh] mb-10 font-serif text-black bg-green-300">
          <h2 className=" text-center mt-5 mb-2 ml-2">Our best Featured</h2>
          <BsBook className="mt-5 ml-4"></BsBook>
        </div>
        <div className="mx-auto  ml-[15vh] gap-5">
          <div className="grid grid-cols-3 mb-5">
            <div>
              <div>
                <div className="relative group cursor-pointer overflow-hidden duration-500 w-[40vh] h-[40vh] bg-zinc-800 text-gray-50 p-5 transform hover:scale-105 transition-transform ease-in-out">
                  <div className="group-hover:scale-110 w-full h-60 duration-500">
                    <Image
                      className="ml-3"
                      style={{ opacity: 100 }}
                      width={250}
                      height={200}
                      src="https://i.ibb.co/tQzfq6b/main-qimg-ab9f8f3bc0faca483d9d82bb518da7ca-lq.jpg"
                      alt="pic1"
                    />
                  </div>
                  <div className="absolute w-56 left-3 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-0 w-64 h-60 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                    <span className="text-xl font-bold text-indigo-500">
                      Our Missing Hearts, Celeste Ng
                    </span>
                    <p className="group-hover:opacity-100 w-56 duration-500 opacity-0 text-gray-300">
                      In a disquietingly familiar dystopian world, a son
                      struggles to find his missing mother, a poet. Celeste Ng
                      tackles bigotry and hatred and in the process demonstrates
                      the necessity of art and love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative group cursor-pointer overflow-hidden duration-500 w-[40vh] h-[40vh] bg-zinc-800 text-gray-50 p-5">
                <div className="">
                  <div className="group-hover:scale-110 w-full h-60  duration-500">
                    <div>
                      <Image
                        className="ml-3"
                        style={{ opacity: 100 }}
                        width={250}
                        height={200}
                        src="https://i.ibb.co/ZJ6zkL3/Our-Missi.jpg"
                        alt="pic1"
                      ></Image>
                    </div>
                  </div>
                  <div className="absolute w-56 left-3 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-0 w-64 h-60 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                    <span className="text-xl font-bold">
                      Our Missing Hearts, Celeste Ng
                    </span>
                    <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                      In a disquietingly familiar dystopian world, a son
                      struggles to find his missing mother, a poet. Celeste Ng
                      tackles bigotry and hatred and in the process demonstrates
                      the necessity of art and love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative group cursor-pointer overflow-hidden duration-500 w-[40vh] h-[40vh] bg-zinc-800 text-gray-50 p-5">
                <div className="">
                  <div className="group-hover:scale-110 w-full h-60  duration-500">
                    <div>
                      <Image
                        className="ml-3"
                        style={{ opacity: 100 }}
                        width={250}
                        height={200}
                        src="https://i.ibb.co/DCsQhgF/323d5128-0b87-488d-b0a3-162d947a92e6.jpg"
                        alt="pic1"
                      ></Image>
                    </div>
                  </div>
                  <div className="absolute w-56 left-3 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-3 w-64 h-60 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                    <span className="text-xl font-bold">
                      Our Missing Hearts, Celeste Ng
                    </span>
                    <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                      In a disquietingly familiar dystopian world, a son
                      struggles to find his missing mother, a poet. Celeste Ng
                      tackles bigotry and hatred and in the process demonstrates
                      the necessity of art and love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="relative group cursor-pointer overflow-hidden duration-500 w-[40vh] h-[40vh] bg-zinc-800 text-gray-50 p-5">
                <div className="">
                  <div className="group-hover:scale-110 w-full h-60  duration-500">
                    <div>
                      <Image
                        className="ml-3"
                        style={{ opacity: 100 }}
                        width={250}
                        height={200}
                        src="https://i.ibb.co/DtpkG2k/all-we-have-is-now.jpg"
                        alt="pic1"
                      ></Image>
                    </div>
                  </div>
                  <div className="absolute w-56 left-3 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-0 w-64 h-60 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                    <span className="text-xl font-bold">
                      Our Missing Hearts, Celeste Ng
                    </span>
                    <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                      In a disquietingly familiar dystopian world, a son
                      struggles to find his missing mother, a poet. Celeste Ng
                      tackles bigotry and hatred and in the process demonstrates
                      the necessity of art and love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="relative group cursor-pointer overflow-hidden duration-500 w-[40vh] h-[40vh] bg-zinc-800 text-gray-50 p-5">
                <div className="">
                  <div className="group-hover:scale-110 w-full h-60  duration-500">
                    <div>
                      <Image
                        className="ml-3"
                        style={{ opacity: 100 }}
                        width={250}
                        height={200}
                        src="https://i.ibb.co/Syyy8fP/image-placeholder-title.jpg"
                        alt="pic1"
                      ></Image>
                    </div>
                  </div>
                  <div className="absolute w-56 left-3 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-0 w-64 h-60 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                    <span className="text-xl font-bold">
                      Our Missing Hearts, Celeste Ng
                    </span>
                    <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                      In a disquietingly familiar dystopian world, a son
                      struggles to find his missing mother, a poet. Celeste Ng
                      tackles bigotry and hatred and in the process demonstrates
                      the necessity of art and love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="relative group cursor-pointer overflow-hidden duration-500 w-[40vh] h-[40vh] bg-zinc-800 text-gray-50 p-5">
                <div className="">
                  <div className="group-hover:scale-110 w-full h-60  duration-500">
                    <div>
                      <Image
                        className="ml-3"
                        style={{ opacity: 100 }}
                        width={250}
                        height={200}
                        src="https://i.ibb.co/pZdhZdJ/Aled-Lewis.jpg"
                        alt="pic1"
                      ></Image>
                    </div>
                  </div>
                  <div className="absolute w-56 left-3 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-0 w-64 h-60 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                    <span className="text-xl font-bold">
                      Our Missing Hearts, Celeste Ng
                    </span>
                    <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                      In a disquietingly familiar dystopian world, a son
                      struggles to find his missing mother, a poet. Celeste Ng
                      tackles bigotry and hatred and in the process demonstrates
                      the necessity of art and love.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PricingSection></PricingSection>
        <LibraryServicesSection></LibraryServicesSection>
      </div>
    </div>
  );
};

export default Ourservices;
