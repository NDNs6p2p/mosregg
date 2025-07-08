import React, { useState } from "react";
import {loginAndGetToken} from "../../api/api"
import styles from "./style.module.scss";

const AuthorizationForm = () => {
  const [login, setLogin] = useState("")
  const [password, setPasswoed] = useState("")

  const handleLoginChange = (e: any) => {
    setLogin(e.target.value)
  } 

  const handlePasswordChange = (e: any) => {
    setPasswoed(e.target.value)
  } 

  const handleSubmit = async (e: any) => {
    e.preventDefault(); //насколько нужно

    if (login.length < 5 || password.length < 7) {
      console.log('неверные данные')
    }
    try {
      const userData = await loginAndGetToken(login, password);
  } catch (error) {

  }
}
  

  console.log('login', login)
  console.log('password', password)

  return (
    <form className={styles.authorizationForm} onSubmit={handleSubmit}>
    <div className={styles.header}>
    <h1 className={styles.title}>Вход</h1>
    <h2 className={styles.subtitle}>Служба технической поддержки МО</h2>
    </div>
    <div className={styles.inputContainer}>
      
    <div className={styles.inputContainer}>
  <label className={styles.label}>Логин 
  {/* <div className={styles.labelMore}>*</div> */}
  </label>
  <input
    type="text"
    value={login}
    onChange={handleLoginChange}
    className={styles.input}
  />
</div>

  </div>
  <div className={styles.inputContainer}>
  <label className={styles.label}>Пароль 
  {/* <div className={styles.labelMore}>*</div> */}
  </label>
    <input
     type="password"
     value={password}
     onChange={handlePasswordChange}
     className={styles.input}
    />
    </div>
    <button className={styles.button} type="submit">Войти</button>
  </form>
  );
};

export default AuthorizationForm;
