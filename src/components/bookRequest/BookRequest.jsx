"use client"
import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { addRequestBook } from "@/libs/actions/requestBook.action";
import { FaRegHandPointDown } from "react-icons/fa";
import { UserAuth } from "@/app/provider/context/AuthContext";

const BookRequest = () => {
  const {user} = UserAuth();
  return (
    <section>
      <div className="space-y-1">
        <h1 className="text-base font-semibold text-center ">We are giving you an opportunity to requesting for a book</h1>
        <p className="text-base font-medium text-center flex gap-2 items-center justify-center">By filling up this from you can request for a book <FaRegHandPointDown  className="text-green-400"/></p>
      </div>
      <div className=" mx-auto mt-3">
        <form
          action={async (formData) => {
            try {
              const response = await addRequestBook(formData, user);
              if (response?.success) {
                toast.success("Request send to the LSMS admin successfully");
              }
              // console.log(response);
            } catch (error) {
              // console.log(error);
              toast.success(`${error}`);
            }
          }}
        >
          <p className="text-base font-light mb-1">Enter Book Name:</p>
          <Input
            type="text"
            name="bookName"
            variant="bordered"
            className="w-1/3"
          />
          <p className="text-base font-light mb-1">Enter Author Name:</p>
          <Input
            type="text"
            name="authorName"
            variant="bordered"
            className="w-1/3"
          />
          <p className="text-base font-light mb-1">
            Please Write a request sms:
          </p>
          <Textarea
            type="text"
            name="requestSMS"
            variant="bordered"
            labelPlacement="outside"
            className="w-1/3"
          />
          <Button type="submit" className="mt-2" color="primary" variant="ghost">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookRequest;
