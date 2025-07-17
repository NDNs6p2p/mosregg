import React from "react";
import AuthorizationForm from "../../components/authorizationForm/authorizationForm";
import styles from "./style.module.scss";

const AuthorizationPage = () => {
  return (
    <div className="flex justify-center align-center ">
      <AuthorizationForm />
    </div>
  );
};

export default AuthorizationPage;
