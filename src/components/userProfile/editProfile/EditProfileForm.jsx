"use client";
import { auth } from "@/app/firbase/firebase";
import { UserAuth } from "@/app/provider/context/AuthContext";
import { updateUserProfile } from "@/libs/actions/user.actions";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { updateProfile } from "firebase/auth";
import React from "react";
import toast from "react-hot-toast";

const EditProfileForm = ({ existingUser }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user } = UserAuth();
  // console.log(auth.currentUser);
  return (
    <div>
      <Button
        onPress={onOpen}
        className="rounded-xl bg-blue-400 hover:bg-blue-700 border text-black  hover:text-white font-bold px-5 py-2"
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
                        const response = await updateUserProfile(formData, user?.email);
                        const name = formData.get("userName")
                        // const email = formData.get("email") 
                        // console.log(name);
                        if (response?.success) {

                          await updateProfile(auth.currentUser, {
                            displayName: name
                            // email: email
                          }).then(() => {
                            toast.success(" Updated successfully ! Press ctrl+r  ");
                          })
                        }
                        // console.log(response);
                      } catch (error) {
                        // console.log(error);
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
                    <div className="mb-4">
                      <label
                        htmlFor="Name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Email:
                      </label>
                      <input
                        disabled
                        defaultValue={user?.email}
                        type="email"
                        name="email"
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
                        defaultValue={existingUser?.about}
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
                      <textarea
                        defaultValue={existingUser?.address}
                        name="address"
                        placeholder="write your address"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <ModalFooter>
                      <Button color="danger" variant="light" >
                        Close
                      </Button>
                      <Button color="primary" type="submit" onPress={onClose}>
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
