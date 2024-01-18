"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import faq from "../.../../../../public/images/faq.jpg";

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
  const ans6 =
    "  Every user has a dedicated dashboard that tracks their reading and viewing activity. Any books you read or view will be added to your personal dashboard for easy reference.";
  const ans7 =
    "  Utilize the books filter and search functionality available on the platform to easily find and discover books based on your preferences.";
  const ans8 =
    "  Every user has a dedicated dashboard that tracks their reading and viewing activity. Any books you read or view will be added to your personal dashboard for easy reference.";

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center text-left">
      <div>
        <Image src={faq} alt="faq" className="" />
      </div>
      <div className="text-left border rounded-2xl shadow-lg p-10 ">
        <Accordion className="space-x-5">
          <AccordionItem
            key="1"
            aria-label="How can I request to borrow a book on this platform?"
            title="How can I request to borrow a book on this platform?"
            className="mb-5"
          >
            {ans1}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="How does the approval process for book borrowing requests work?"
            className="mb-5"
          >
            {ans2}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Will I be notified when my book borrowing request is approved?"
            className="mb-5"
          >
            {ans3}
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 3"
            title="Can I add, edit, and manage my own books from the dashboard?"
            className="mb-5"
          >
            {ans4}
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 3"
            title=" Is there a bookmark feature for saving my favorite books?"
            className="mb-5"
          >
            {ans5}
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 3"
            title="  How is my reading activity tracked on the platform?"
            className="mb-5"
          >
            {ans6}
          </AccordionItem>
          <AccordionItem
            key="7"
            aria-label="Accordion 3"
            title=" How can I filter and search for specific books on the platform?"
            className="mb-5"
          >
            {ans7}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
