

import React from "react";
import { LoginBanner } from '@/pages/login/LoginBanner';
import LoginForm from "@/components/contactform/LoginForm";


const login = () => {
           
  return (
    <div>
      <LoginBanner></LoginBanner>
     <LoginForm></LoginForm>
     
     
    </div>
  );
};

export default login;
