"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQ = () => {
  const ans1 =
    "LTo request a book, simply navigate to the book details page and click on the Request to Borrow button. Follow the prompts to complete the borrowing request.";
  const ans2 = 
  " Once you've requested to borrow a book, the admin will review and approve the request, turning you into a borrowing member. You'll be notified upon approval." 

  return (
    <div>
    
      <Accordion  variant="splitted">
        <AccordionItem key="1" aria-label="How can I request to borrow a book on this platform?" title="How can I request to borrow a book on this platform?">
          {ans1}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="How does the approval process for book borrowing requests work?">
          {ans2}
        </AccordionItem>
        {/* <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem> */}
      </Accordion>
    </div>
  );
};

export default FAQ;
