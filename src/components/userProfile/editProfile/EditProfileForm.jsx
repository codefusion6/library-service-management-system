"use client";
import { CldUploadWidget } from "next-cloudinary";
import React from "react";

const EditProfileForm = () => {
            
  return (
    <div>
      <form className="m-8 max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
        {/* {/ Book Name /} */}
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

        {/* {/ Author Name /} */}
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

        {/* {/ Book Description /} */}
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
          {/* Author Image  */}
          <div className="mb-4">
            <CldUploadWidget
              // signatureEndpoint="/api/sign-cloudinary-params"
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

        {/* {/ Add Book Button /} */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
