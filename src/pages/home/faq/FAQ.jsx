"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import faq from "../.../../../../../public/images/faq.jpg";
import "./faq.css"
const FAQ = () => {
  const ans1 =
    "To request a book, simply navigate to the book details page and click on the Request to Borrow button. Follow the prompts to complete the borrowing request.";
  const ans2 =
    " Once you've requested to borrow a book, the admin will review and approve the request, turning you into a borrowing member. You'll be notified upon approval.";
  const ans3 =
    " Yes, you will receive a notification when your book borrowing request is approved by the admin or a member.";
  const ans4 =
    " Yes, as a member, you have the ability to add, edit, and manage your own books directly from your dashboard.";
  const ans5 =
    "  Absolutely! You can add your favorite books to the bookmark page, allowing you to easily access and manage your preferred reads.";

  return (
    <section className="pb-10 container mx-auto px-1 md:px-0">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-10">

        <TypeAnimation
          sequence={["", 1000, "FAQ", 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center mx-auto">
        <div>
          <Image src={faq} alt="faq" className="w-4/5 mx-auto" />
        </div>
        <div className="border rounded-lg p-3 md:p-7">
          <Accordion>
            <AccordionItem
              className="items-start text-lg"
              key="1"
              aria-label="How can I request to borrow a book on this platform?"
              title="How can I request to borrow a book on this platform?"
            >
              {ans1}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="How does the approval process for book borrowing requests work?"
            >
              {ans2}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Will I be notified when my book borrowing request is approved?"
            >
              {ans3}
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 3"
              title="Can I add, edit, and manage my own books from the dashboard?"
            >
              {ans4}
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 3"
              title=" Is there a bookmark feature for saving my favorite books?"
            >
              {ans5}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
