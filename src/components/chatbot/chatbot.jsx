"use client"
import React from "react";
import { CustomChat, FacebookProvider } from "react-facebook";

const Chatbot = () => {
  return (
    <div>
<<<<<<< HEAD
           <FacebookProvider appId="6568756543229230" chatSupport>
        <CustomChat pageId="211119442090945" minimized={true}/>
      </FacebookProvider>    
      
=======
      <FacebookProvider appId="6568756543229230" chatSupport>
        <CustomChat pageId="211119442090945" minimized="true" />
      </FacebookProvider>

>>>>>>> afdd6ad131e408ed849897f605afd01cdd32d9d8
    </div>
  );
};

export default Chatbot;
