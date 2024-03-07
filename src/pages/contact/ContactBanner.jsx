/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ContactBanner = () => {
  return (
    <div>
      <section className=" md:py-20 flex justify-center bg-white flex-col lg:mt-8 bg-gradient-to-b from-#52C2FF to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center  text-center text-black">
            {/* Text content */}
            <div className="">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Get in Touch with Us Today!
              </h1>
              <p className="mx-auto max-w-[700px]">
                We're here to assist you. Whether you have questions, feedback,
                or want to discuss a potential collaboration, we welcome your
                inquiries. Reach out to us, and let's start a conversation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactBanner;