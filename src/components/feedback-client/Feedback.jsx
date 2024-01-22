"use client";

import { addUser } from "@/libs/actions/user.actions";
import Button from './Button';


const Feedback = () => {
  return (
    <form action={async (formData) => {
      console.log(formData);
      await addUser(formData);
    }}>
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
        className="px-2 py-1 bg-gray-200 rounded-md text-gray-600 font-semibold outline-none"
      />

      <Button></Button>
    </form>
  );
};

export default Feedback;
