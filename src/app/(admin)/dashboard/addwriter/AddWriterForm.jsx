"use client";
import { addWriter } from "@/libs/actions/writer.action";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
import toast from "react-hot-toast";
import AddWritterBtn from "./AddWritterBtn";

const AddWriterForm = () => {
  const [authorImg, setAuthorImg] = useState("");
  // console.log(authorImg);
  return (
    <form
      action={async (formData) => {
        const addAuthorImg = formData.append("authorImg", authorImg);
        try {
          const response = await addWriter(formData);
          if (response?.success) {
            toast.success("Writer added successfully");
          }
          // console.log(response);
        } catch (error) {
          // console.log(error);
          toast.success(`${error}`);
        }
      }}
      className="py-10"
    >
      <div className="flex md:flex-row flex-col items-start md:items-center justify-start  md:justify-center px-0  md:px-10 py-5">
        <div className="md:w-[200px] font-bold text-xl">
          <h1>Writer Name:</h1>
        </div>
        <div className="relative flex-1 sm:w-auto w-full">
          <input
            className=" peer w-full border-b border-[#1B8EF8]  py-2 text-black focus:outline-none "
            placeholder=""
            name="writerName"
            type="text"
          />
          <label
            className="absolute -top-2 left-0 bg-transparent text-base text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
            htmlFor=""
          >
            Writer Name
          </label>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-start md:items-center justify-start  md:justify-center px-0  md:px-10 py-5">
        <div className="md:w-[200px] font-bold text-xl">
          <h1>Birth of Date:</h1>
        </div>
        <div className="relative flex-1 sm:w-auto w-full">
          <input
            className=" peer w-full border-b border-[#1B8EF8]  py-2 text-black focus:outline-none "
            placeholder=""
            type="date"
            name="dob"
          />
          <label
            className="absolute -top-2 left-0 bg-transparent text-base text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
            htmlFor=""
          ></label>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-start md:items-center justify-start  md:justify-center px-0  md:px-10 py-5">
        <div className="md:w-[200px] font-bold text-xl">
          <h1>Birth of Death:</h1>
        </div>
        <div className="relative flex-1 sm:w-auto w-full">
          <input
            className=" peer w-full border-b border-[#1B8EF8]  py-2 text-black focus:outline-none "
            placeholder=""
            type="date"
            name="dod"
          />
          <label
            className="absolute -top-2 left-0 bg-transparent text-base text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
            htmlFor=""
          ></label>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-start md:items-center justify-start  md:justify-center px-0  md:px-10 py-5">
        <div className="md:w-[200px] font-bold text-xl">
          <h1>Write Address:</h1>
        </div>
        <div className="relative flex-1 sm:w-auto w-full">
          <input
            className=" peer w-full border-b border-[#1B8EF8]  py-2 text-black focus:outline-none "
            placeholder=""
            type="text"
            name="address"
          />
          <label
            className="absolute -top-2 left-0 bg-transparent text-base text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
            htmlFor=""
          >
            Writer Address
          </label>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-start md:items-center justify-start  md:justify-center px-0  md:px-10 py-5">
        <div className="md:w-[200px] font-bold text-xl">
          <h1>Write&apos;s Description:</h1>
        </div>
        <div className="relative flex-1 sm:w-auto w-full">
          <textarea
            className=" peer w-full border-b border-[#1B8EF8]  py-2 text-black focus:outline-none "
            placeholder=""
            type="text"
            name="address"
          />
          <label
            className="absolute -top-2 left-0 bg-transparent text-base text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
            htmlFor=""
          >
            Writer Description
          </label>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-center">
        <div>
          <CldUploadWidget
            // signatureEndpoint="/api/sign-cloudinary-params"
            uploadPreset="lms_code_fusion"
            autoUpload={false}
            onSuccess={(result, { widget }) => {
              setAuthorImg(result?.info?.secure_url);
              widget.close();
            }}
          >
            {({ open }) => {
              function handleOnClick() {
                // setBookCover(null);
                open();
              }
              return (
                <button
                  type="button"
                  className="px-5 py-3 sm:w-auto w-full rounded-md text-blue-600 border border-blue-600 hover:bg-[#4b79a7]"
                  onClick={handleOnClick}
                >
                  Upload Writer Image
                </button>
              );
            }}
          </CldUploadWidget>
        </div>
        <AddWritterBtn></AddWritterBtn>
      </div>
    </form>
  );
};

export default AddWriterForm;
