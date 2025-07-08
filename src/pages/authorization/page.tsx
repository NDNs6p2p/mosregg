import React from "react";
import AuthorizationForm from "../../components/authorizationForm/authorizationForm"
import styles from "./style.module.scss";


const AuthorizationPage = () => {
 
    return (
    <div className={styles.authorizationPage}>
      <AuthorizationForm/>
    </div>
  )}

  export default AuthorizationPage;