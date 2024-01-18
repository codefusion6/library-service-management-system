import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#181818] text-white">
      <div className="container p-10">
        <h1 className="text-3xl font-bold text-center mb-8">Contact</h1>

        <div className="grid grid-cols-4 items-center justify-center gap-5">
          <a href="" className="border border-[#ddb425] mx-auto rounded-full h-40  p-2">
            <MdOutlineMail className="w-48 h-40" />
          </a>
          <a href="" className="border border-[#ddb425] mx-auto rounded-full h-40  p-2">
            <FaFacebookF className=" w-48 h-36 " />
          </a>
          <a href="" className="border border-[#ddb425] mx-auto rounded-full h-40  p-2">
            <FiGithub className=" w-48 h-36  " />
          </a>
          <a href="" className="border border-[#ddb425] mx-auto rounded-full h-40  p-2">
            <FaPhoneAlt className="w-48 h-32 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
