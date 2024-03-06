"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

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
          // console.log("SUCCESS!");
          toast.success(
            "Thank You ! We will try to contact with tou very soon ! "
          );
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error("This didn't work.");
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="bg-white max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-6 h-full">
            <div className="bg-blue-900 p-10 col-span-2">
              <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                {" "}
                Contact Info
              </h2>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Location Address
                <span className="font-normal text-xs text-blue-300 block">
                  Dhaka, Bangladesh
                </span>
              </p>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Phone Number
                <span className="font-normal text-xs text-blue-300 block">
                  +880 013072629**
                </span>
              </p>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Email Address
                <span className="font-normal text-xs text-blue-300 block">
                  teamcodefuision24@gmail.com
                </span>
              </p>
              <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                Web Address
                <span className="font-normal text-xs text-blue-300 block">
                  library-service-management-system.vercel.app
                </span>
              </p>
            </div>
            <div className="bg-blue-50 p-14 col-span-4">
              <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                Connect With Us
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid gap-6 mb-6 grid-cols-2">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                      name="user_name"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                      placeholder="Enter Your Number"
                    />
                  </div>
                </div>
                <div className="grid gap-6 mb-6 grid-cols-2">
                  <div className="flex flex-col">
                    <input
                      type="email"
                      className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                      placeholder=" Enter Your Email Address"
                      name="user_email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <textarea
                    className="w-full rounded-2xl placeholder:text-xs px-6 py-4"
                    placeholder="write your message"
                    name="message"
                    rows="8"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all"
                  >
                    Send{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
