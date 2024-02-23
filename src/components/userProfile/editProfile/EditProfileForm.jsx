"use client";
import { UserAuth } from "@/app/provider/context/AuthContext";
import { addUserProfile } from "@/libs/actions/userProfile.action";
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user } = UserAuth();
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
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div>
                  <form
                    action={async (formData) => {
                      try {
                        const response = await addUserProfile(formData);
                        if (response?.success) {
                          toast.success(" added successfully");
                        }
                        console.log(response);
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    className="m-8 max-w-xl mx-auto p-6 bg-white rounded-md shadow-md"
                  >
                    <div className="mb-4">
                      <label
                        htmlFor="Name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Name:
                      </label>
                      <input
                      defaultValue={user?.displayName}
                        type="text"
                        name="userName"
                        placeholder="name"
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
                      defaultValue="write about your-self"
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
                        Address
                      </label>
                      <select
                        name="category"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      >
                        <option value="Dhaka">Dhaka</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Jossore">Jossore</option>
                        <option value="Mymangsing">Mymangsing</option>
                        <option value="Gazipur">Gazipur</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Chittagonj">Chittagonj</option>
                      </select>
                    </div>
                    <ModalFooter>
                      <Button color="danger" variant="light" >
                        Close
                      </Button>
                      <Button color="primary" type="submit">
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
