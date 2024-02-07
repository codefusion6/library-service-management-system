"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Feedback = () => {
  const variants = ["flat", "bordered", "underlined", "faded"];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p7rqb5s", "template_werqkje", form.current, {
        publicKey: "9_n4lbfdbf8zEwq4N",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-5 bg-gray-200">
      <div className="items-center ">
        <div className="mt-5">
          <label
            className="font-semibold ml-8 lg:ml-5 text-sm text-gray-600 pb-1 block"
            for="name"
          >
            Name
          </label>
          <Input
            isClearable
            type="text"
            placeholder="Your name"
            name="user_name"
            variant="bordered"
            onClear={() => console.log("input cleared")}
            className="max-w-xs text-center rounded-lg px-3 py-2 mt-1 mb-5 w-96 text-sm ml-5 "
          />
        </div>
        <div className="">
          <label
            className="font-semibold ml-5  text-sm text-gray-600 pb-1 block"
            for="email"
          >
            Email
          </label>
          <Input
            isClearable
            type="email"
            placeholder="Your email"
            name="user_email"
            variant="bordered"
            onClear={() => console.log("input cleared")}
            className="max-w-xs  rounded-lg px-3 py-2 mt-1 mb-5 w-96 text-sm ml-5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="">
          <label
            className="font-semibold ml-5  text-sm text-gray-600 pb-1 block"
            for="email"
          >
            Subject
          </label>
          <Input
            isClearable
            type="text"
            placeholder="Subject"
            name="subject"
            variant="bordered"
            onClear={() => console.log("input cleared")}
            className="max-w-xs  rounded-lg px-3 py-2 mt-1 mb-5 w-96 text-sm ml-5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="">
          <label
            className="font-semibold ml-5  text-sm text-gray-600 pb-1 block"
            for="massage"
          >
            Massage
          </label>
          <Textarea
            isClearable
            type="text"
            placeholder="write your message"
            name="message"
            variant="bordered"
            onClear={() => console.log("input cleared")}
            className="max-w-xs  rounded-lg px-3 py-2 mt-1 mb-5 w-96 text-sm ml-5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button radius="md" 
        type="submit"
        >
        Send Message
      </Button>
      </div>
    </form>
  );
};

export default Feedback;
