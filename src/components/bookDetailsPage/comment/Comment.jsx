"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import Image from "next/image";
import React from "react";
import { FaRegHandPointDown, FaRegStar } from "react-icons/fa";
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

const Comment = () => {
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
          className="rounded-full size-10" />
        <Button
          onPress={onOpen}
          className="rounded-xl hover:bg-lime-700 border text-black border-green-600 hover:text-white font-bold px-5 py-2">
          Rating & Review
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center">
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
                        const text = formData.get("commentDescription")
                        console.log(text);
                        try {
                          const response = await addComment(formData);
                          if (response?.success) {
                            toast.success("Book added successfully");
                          }
                          console.log(response);
                        } catch (error) {
                          console.log(error);
                        }
                      }}>
                      <textarea
                        name="commentDescription"
                        placeholder="write a comment"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
                      />
                      <p className="flex gap-2 items-center justify-center">
                        <FaRegStar className="text-3xl" />
                        <FaRegStar className="text-3xl" />
                        <FaRegStar className="text-3xl" />
                        <FaRegStar className="text-3xl" />
                        <FaRegStar className="text-3xl" />
                      </p>
                      <Button
                        type="submit"
                        color="primary"
                        variant="flat"
                      // onPress={onClose}
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button type="submit" color="primary" variant="flat" 
                  // onPress={onClose}
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <h2 className="my-8 text-base font-semibold flex items-center gap-2">
        Your rating & review
        <span>
          <FaRegHandPointDown />
        </span>
      </h2>
    </section>
  );
};

export default Comment;
