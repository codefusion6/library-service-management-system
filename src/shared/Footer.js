import Link from "next/link";
import React from "react";
import { CiHome } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { FaGithub, FaPhone } from "react-icons/fa6";
// import { FaGithub, FaPhone } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdHomeRepairService, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="purple-dark text-foreground bg-black">
      <div className="container mx-auto">
        <div className=" text-gray-400 py-10">
          <div className="justify-center grid md:grid-cols-3 gap-5">
            <div>
              <ul className="text-left text-white space-y-5">
                <li>
                  <Link href="/" className="font-medium flex gap-2 items-center">
                    <CiHome className="text-xl text-[#ddb425]" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex font-medium gap-2 items-center"
                  >
                    <FaBookReader className="text-xl text-[#ddb425]" /> About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex font-medium gap-2 items-center"
                  >
                    
                    <FiPhone className="text-xl text-[#ddb425]" /> Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex font-medium gap-2 items-center"
                  >
                    <MdHomeRepairService className="text-xl text-[#ddb425]" />
                    Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-left text-white space-y-5">
                <li>
                  <Link
                    className="flex font-medium gap-2 items-center"
                    href="/"
                  >
                    Privace
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex font-medium gap-2 items-center"
                    href="/"
                  >
                    Term & condition
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex font-medium gap-2 items-center"
                    href="/"
                  >
                    Requirments
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex font-medium gap-2 items-center"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-left text-white space-y-5">
                <li>
                  <Link
                    className="flex font-medium gap-2 items-center"
                    href="/"
                  >
                    <MdOutlineEmail
                      size={25}
                      className="text-xl text-[#ddb425]"
                    />
                    teamcodefusion24@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex font-medium gap-2 items-center"
                    href="/"
                  >
                    <FaPhone className="text-xl text-[#ddb425]" /> 013********
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex font-medium gap-2 items-center"
                    href="https://github.com/codefusion6"
                  >
                    <FaGithub size={25} className="text-xl text-[#ddb425]" />
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
        </div>
      </div>
      <hr className="mt-4" />
      <div className="py-8">
        <p className="text-center pt-5 text-lg text-white">
          All reserved right &copy; CodeFusion
        </p>
      </div>
    </section>
  );
};

export default Footer;
