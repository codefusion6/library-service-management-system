"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { addComment } from "@/libs/actions/comment.action";
import toast from "react-hot-toast";

const   Comment = () => {
  const { user } = UserAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // console.log(user);
  return (
    <section>
      <div className="flex gap-3">
        <Image
          alt="User Image"
          src={user?.photoURL}
          width={30}
          height={30}
          className="rounded-full size-10"
        />
        <Button
          onPress={onOpen}
          className="rounded-xl hover:bg-lime-700 border text-black border-green-600  hover:text-white font-bold px-5 py-2"
        >
          Rating & Review
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Rating & Review
                </ModalHeader>
                <ModalBody>
                  <div>
                    <form
                      action={async (formData) => {
                        const text = formData.get("commentDescription");
                        const rating = formData.get("ratingNumber");
                        console.log(text, rating);
                        try {
                          const response = await addComment(formData);
                          if (response?.success) {
                            toast.success("Book added successfully");
                          }
                          // console.log(response);
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      <p className="text-tiny font-semibold mb-1">Write your comment:</p>
                      <textarea
                        name="commentDescription"
                        placeholder="write a comment"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
                      />
                      <div className="flex gap-1 items-center">

                      <FaStar className="text-3xl text-yellow-500"></FaStar>
                      <input
                        name="ratingNumber"
                        placeholder="Give a rate"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
                      ></input>
                      </div>
                      
                      <ModalFooter>
                        <Button type="submit" color="primary" variant="flat">
                          Submit
                        </Button>
                      </ModalFooter>
                    </form>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      
    </section>
  );
};

export default Comment;
