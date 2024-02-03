"use client"
import React from "react";
import { CustomChat, FacebookProvider } from "react-facebook";

const Chatbot = () => {
  return (
    <FacebookProvider appId="937135961109989" chatSupport>
      <CustomChat pageId="211119442090945" minimized={true} />
    </FacebookProvider>
  );
};

export default Chatbot;
