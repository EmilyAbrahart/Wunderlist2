import React from "react";
import FormikRegistrationForm from "./Registration";
import FormikLoginForm from "./Login";

const LoginPage = () => {
  return (
    <div>
      <FormikRegistrationForm />
      <FormikLoginForm />
    </div>
  );
};

export default LoginPage;