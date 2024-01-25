"use client";

import { addUser } from "@/libs/actions/user.actions";
import Button from './Button';
import toast from "react-hot-toast";


const Feedback = () => {
  return (
    <form action={async (formData) => {
      console.log(formData);
      const response = await addUser(formData);
      console.log(response.success);
      if (response.success) {
        toast.success("Success")
      }
    }}
      className="space-y-5"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full py-1 px-2 bg-gray-200 rounded-md text-gray-600 font-semibold outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="px-2 py-1 bg-gray-200 rounded-md text-gray-600 font-semibold outline-none w-full"
      />

      <textarea placeholder="Message" rows={5} className="px-2 py-1 w-full bg-gray-200 rounded-md text-gray-600 font-semibold"></textarea>

      <Button></Button>
    </form>
  );
};

export default Feedback;
