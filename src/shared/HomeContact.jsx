import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const HomeContact = () => {
    return (
        <section className="bg-[#111111] text-white py-10">
            <div className="container mx-auto">
                <div className="container p-10">
                    <h1 className="text-3xl font-bold text-center mb-8">Contact</h1>

                    <div className="grid grid-cols-4 items-center justify-center gap-5">
                        <Link href="" className="border border-[#ddb425] mx-auto justify-center rounded-full p-5">
                            <MdOutlineMail size={50} color="#ddb425" />
                        </Link>
                        <Link href="" className="border justify-center border-[#ddb425] mx-auto rounded-full p-5">
                            <FaFacebookF size={50} color="#ddb425" />
                        </Link>
                        <Link href="" className="border justify-center border-[#ddb425] mx-auto rounded-full p-5">
                            <FiGithub size={50} color="#ddb425" />
                        </Link>
                        <Link href="" className="border justify-center border-[#ddb425] mx-auto rounded-full p-5">
                            <FaPhoneAlt size={50} color="#ddb425" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;