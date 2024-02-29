import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { addRequestBook } from "@/libs/actions/requestBook.action";

const BookRequest = () => {
  return (
    <section>
      <div>
        <form
          action={async (formData) => {
            try {
              const response = await addRequestBook(formData);
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
          <Input
            type="text"
            name="bookName"
            variant="bordered"
            className="max-w-xs"
          />
          <Input
            type="text"
            name="authorName"
            variant="bordered"
            className="max-w-xs"
          />
          <Input
            type="text"
            name="requestSMS"
            variant="bordered"
            className="max-w-xs"
          />
          <Button type="submit" color="primary" variant="ghost">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookRequest;
