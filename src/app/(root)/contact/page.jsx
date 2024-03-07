"use client";
/* eslint-disable @next/next/no-img-element */
import Feedback from "@/components/feedback-client/Feedback";
import ContactBanner from "@/pages/contact/ContactBanner";
import Talk from "@/pages/contact/Talk";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const page = () => {
  return (
    <>
      <section>
      <ContactBanner></ContactBanner>
      <div>
        <div>
          <div className="container flex flex-col mx-auto bg-white">
            <div className=" ">
              <Talk />
            </div>
          </div>
        </div>
        <div className=" mt-4 items-center justify-center place-items-center">
          <div className=" gap-2 justify-center md:w-3/4 mx-auto">
            <Feedback />
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default page;
