import Link from "next/link";
import React from "react";
import { CiHome } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { FaGitAlt, FaGithub, FaPhone } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdHomeRepairService, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#090808] text-gray-400 py-10">
      <div className="justify-center mx-auto grid grid-cols-1 md:grid-cols-4 place-items-center gap-5">
        <div>
          <ul className="text-left text-white space-y-1">
            <li>
              <Link href="/" className="font-medium flex gap-2 items-center">
                {" "}
                <CiHome className="text-xl text-[#ddb425]" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="flex font-medium gap-2 items-center">
                <FaBookReader className="text-xl text-[#ddb425]" /> About
              </Link>
            </li>
            <li>
              <Link href="/" className="flex font-medium gap-2 items-center">
                {" "}
                <FiPhone className="text-xl text-[#ddb425]" /> Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="flex font-medium gap-2 items-center">
                <MdHomeRepairService className="text-xl text-[#ddb425]" />{" "}
                Service
              </Link>
            </li>
          </ul>
        </div>
        {/* <div> */}
          {/* <ul className="">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contack</Link>
            </li>
            <li>
              <Link href="/">Service</Link>
            </li>
          </ul> */}
        {/* </div> */}
        <div>
          <ul className="text-left text-white space-y-1">
            <li>
              <Link className="flex font-medium gap-2 items-center" href="/">
                Privace
              </Link>
            </li>
            <li>
              <Link className="flex font-medium gap-2 items-center" href="/">
                Term & condition
              </Link>
            </li>
            <li>
              <Link className="flex font-medium gap-2 items-center" href="/">
                Requirments
              </Link>
            </li>
            <li>
              <Link className="flex font-medium gap-2 items-center" href="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-left text-white space-y-1">
            <li>
              <Link className="flex font-medium gap-2 items-center" href="/">
                <MdOutlineEmail className="text-xl text-[#ddb425]" />
                teamcodefusion24@gmail.com{" "}
              </Link>
            </li>
            <li>
              <Link className="flex font-medium gap-2 items-center" href="/">
                <FaPhone className="text-xl text-[#ddb425]" /> 013********
              </Link>
            </li>
            <li>
              <Link
                className="flex font-medium gap-2 items-center"
                href="https://github.com/codefusion6"
              >
                {" "}
                <FaGithub className="text-xl text-[#ddb425]" />
                www.github.com/codefusion6
              </Link>
            </li>
            <li>
              <p className="text-base text-[#ddb425]">
                Available- Monday to Friday, 9:00 a.m. to 6:00 p.m. BST
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-4" />
      <div>
        <p className="text-center pt-5 text-lg text-[#ddb425]">All reserved right &copy; CodeFusion</p>
      </div>
    </div>
  );
};

export default Footer;
