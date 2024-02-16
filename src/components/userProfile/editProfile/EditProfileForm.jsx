"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

const EditProfileForm = () => {
  const { user } = UserAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Button
        onPress={onOpen}
        className="rounded-xl hover:bg-lime-700 border text-black border-green-600 hover:text-white font-bold px-5 py-2"
      >
        Edit Profile
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>{user?.displayName}</p>
              </ModalHeader>
              <ModalBody>
                <div>
                  <form className="m-8 max-w-xl mx-auto p-6 bg-white rounded-md shadow-md">
                    <div className="mb-4">
                      <label
                        htmlFor="Name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="bio"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Bio :
                      </label>
                      <input
                        type="text"
                        name="bio"
                        placeholder="bio"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* {/ About /} */}
                    <div className="mb-4">
                      <label
                        htmlFor="bookDescription"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        About
                      </label>
                      <textarea
                        name="about"
                        placeholder="write about your-self"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="category"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Live
                      </label>
                      <textarea
                        name="live"
                        placeholder="live"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Save
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
  );
};

export default EditProfileForm;
