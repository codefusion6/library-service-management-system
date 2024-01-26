import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#111111] text-white">
      <div className="container p-10">
        <h1 className="text-3xl font-bold text-center mb-8">Contact</h1>

        <div className="grid grid-cols-4 items-center justify-center gap-5">
          <a href="" className="border border-[#ddb425] mx-auto justify-center rounded-full h-32  p-5">
            <MdOutlineMail className="w-20 h-20" />
          </a>
          <a href="" className="border justify-center border-[#ddb425] mx-auto rounded-full h-32  p-5">
            <FaFacebookF className=" w-20 h-20 " />
          </a>
          <a href="" className="border justify-center border-[#ddb425] mx-auto rounded-full h-32  p-5">
            <FiGithub className=" w-20 h-20  " />
          </a>
          <a href="" className="border justify-center border-[#ddb425] mx-auto rounded-full h-32  p-5">
            <FaPhoneAlt className="w-20 h-20" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
