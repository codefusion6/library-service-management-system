"use client";
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
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Contact With Us
        </h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <input
            type="text"
            placeholder="Your name"
            name="user_name"
            className="bg-gray-700 text-gray-200 border-0 
       rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <input
            type="email"
            placeholder="Your email"
            name="user_email"
            className="bg-gray-700 text-gray-200 border-0 
       rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="bg-gray-700 text-gray-200 border-0 
       rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <input
            type="text"
            placeholder="write your message"
            name="message"
            className="bg-gray-700 text-gray-200 border-0 
       rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4
       hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <a className="text-sm text-gray-400 hover:underline" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
