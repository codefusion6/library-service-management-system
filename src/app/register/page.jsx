
import RegisterForm from '@/components/contactform/RegisterForm';
import RegistrationBanner from '@/pages/registration/RegistrationBanner';
import React from 'react';

const register = () => {
  return (
    <div>
      <RegistrationBanner></RegistrationBanner>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default register;
