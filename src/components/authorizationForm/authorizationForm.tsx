import React, { useEffect, useState } from "react"
import { loginAndGetToken } from "../../api/api"
import { useNavigate } from "react-router-dom"
import styles from "./style.module.scss"
import { localStore } from "../../stores/localStore"
import { observer } from "mobx-react-lite"

const AuthorizationForm = observer(() => {
  const [login, setLogin] = useState("")
  const [password, setPasswoed] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const handleLoginChange = (e: any) => {
    setLogin(e.target.value)
  }

  const handlePasswordChange = (e: any) => {
    setPasswoed(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault() //насколько нужно

    if (login.length < 5 || password.length < 7) {
      console.log("неверные данные")
    }
    try {
      const userData: any = localStore.getUserData(login, password)
      console.log("userData", userData)
      localStorage.setItem("userData", JSON.stringify(userData.detail))
      setErrorMessage("")
      navigate("/")
    } catch (error) {
      setErrorMessage("Неверный логин или пароль. Попробуйте ещё раз.")
    }
  }

  return (
    <form
      className="flex flex-col justify-center items-center w-[740px] h-[877px]"
      onSubmit={handleSubmit}
    >
      <p className="font-semibold text-3xl text-black">Вход</p>
      <p className="font-medium text-2xl text-black2 mb-7">Служба технической поддержки МО</p>
      <div className="flex flex-col mb-4 w-full">
        <label className="flex text-base text-black2 font-semibold mb-1.5 mx-14">
          <p>Логин</p>
          <div className="text-red2 text-base ml-1 ">*</div>
        </label>
        <input
          type="text"
          value={login}
          onChange={handleLoginChange}
          className="bg-white2 mb-4 rounded-lg h-14 mx-14 p-2"
        />
      </div>
      <div className="flex flex-col mb-4 w-full">
        <label className="flex text-base text-black2 font-semibold mb-1.5 mx-14">
          <p>Пароль</p>
          <div className="text-red2 text-base ml-1">*</div>
        </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="bg-white2 mb-4 rounded-lg h-14 mx-14 p-2"
        />
      </div>
      <button
        className="bg-blue2 text-white rounded-lg px-[132px] font-normal text-2xl h-12 hover:cursor-pointer mt-4"
        type="submit"
      >
        Войти
      </button>

      {errorMessage && <p className="text-red-600 mt-2 text-center">{errorMessage}</p>}
    </form>
  )
})

export default AuthorizationForm
